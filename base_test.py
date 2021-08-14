import os
import copy
import torch
import shutil
import time
import warnings
import numpy as np
import random
import torch.nn.functional as F
from torch.nn.utils import clip_grad_norm_
from tensorboardX import SummaryWriter
from opts import parser
from ops.mapmeter import mAPMeter, LTMeter
from ops.utils import AverageMeter, accuracy

from ops import losses
from tools import utils

from models import models
from dataset import dutils
from ops.feature_loader import BasicDataset

def setup_seed(seed):
    np.random.seed(seed)
    random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)

def load_data(num_class, input_dir):
    train_list = open(args.train_list, 'r').readlines()
    val_list = open(args.val_list, 'r').readlines()
    train_dataset = BasicDataset(train_list, input_dir, args.train_num_frames, \
                    cls_num=args.num_class, train_mode=True)
    val_dataset = BasicDataset(val_list, input_dir, args.val_num_frames, \
                    cls_num=args.num_class, train_mode=False)

    train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=args.batch_size, \
                        shuffle=True, num_workers=args.workers, pin_memory=True)
    val_dataloader = torch.utils.data.DataLoader(val_dataset, batch_size=args.batch_size, \
                        shuffle=False, num_workers=args.workers, pin_memory=True)
    return train_dataloader, val_dataloader

def main():
    global args, criterion

    args = parser.parse_args()
    
    num_class = args.num_class
    
    print ("########################################################################\n")
    print ("Feature name: {} \nNumber of class: {} \nTrain frames: {} \nVal frames: {}\n".\
            format(args.feature_name, args.num_class, args.train_num_frames, args.val_num_frames))
    print ("######################################################################## \n") 

    setup_seed(args.seed)
    

    criterion = utils.find_class_by_name(args.loss_func, [losses])(args, logits=True, reduce=args.reduce)
    
    
    input_dir = dutils.get_feature_path(args.feature_name)
    feature_dim = dutils.get_feature_dim(args.feature_name)
    args.lc_list, args.train_list, args.val_list = dutils.get_label_path()

    
    indices = utils.get_indices(args.lc_list, head=args.head, tail=args.tail)
    train_loader, val_loader = load_data(num_class, input_dir)
    model = utils.find_class_by_name(args.model_name, [models])(feature_dim, num_class) 
    model = model.cuda()

    if args.resume != "": 
        print ("=> Loading checkpoint {}".format(args.resume))
        
        ckpt = torch.load(args.resume)
        best_mAP = ckpt['best_mAP']
        start_epoch = ckpt['epoch'] + 1
        acc1 = ckpt['Acc@1']
        acc5 = ckpt['Acc@5']
        sd = ckpt['state_dict']
        
        print ("Loaded checkpoint {} epoch {}: best_mAP {} | Acc@1 {} | Acc@5 {}". \
                format(args.resume, start_epoch, best_mAP, acc1, acc5))
        model.load_state_dict(sd)
    test(val_loader, model, indices)

def test(loader, model, indices):

    batch_time = AverageMeter()
    losses = AverageMeter()
    top1 = AverageMeter()
    top5 = AverageMeter()
    mAP = mAPMeter()
    
    LTmAP =LTMeter(indices)
    model.eval()

    end = time.time()
    with torch.no_grad():
        for i, (vid, feature, target) in enumerate(loader):
            feature = feature.cuda()
            target = target.float().cuda()
            
            prediction, output = model(feature)
            
            loss = criterion(output, target)

            prec1, prec5 = accuracy(output.data, target, topk=(1, 5))

            losses.update(loss.item(), feature.size(0))
            top1.update(prec1, feature.size(0))
            top5.update(prec5, feature.size(0))
            # this is important for mAP
            
            mAP.add(prediction, target)
            LTmAP.add(prediction, target)
           
            batch_time.update(time.time() - end)
            end = time.time()
            
            if i % args.print_freq == 0:
                output = ('Test: [{0}/{1}]\t'
                          'Time {batch_time.val:.3f} ({batch_time.avg:.3f})\t'
                          'Loss {loss.val:.4f} ({loss.avg:.4f})\t'
                          'Prec@1 {top1.val:.3f} ({top1.avg:.3f})\t'
                          'Prec@5 {top5.val:.3f} ({top5.avg:.3f})'
                          .format(
                    i, len(loader), batch_time=batch_time, loss=losses,
                    top1=top1, top5=top5))

                #print ("map {}".format(mAP.avg()))
                print(output)
                
        head_map = LTmAP.value()["head"]
        medium_map = LTmAP.value()["medium"]
        tail_map = LTmAP.value()["tail"]
                
    output = ('Testing Results: Prec@1 {top1.avg:.3f} | Prec@5 {top5.avg:.3f} | Loss {loss.avg:.5f} '
              .format(top1=top1, top5=top5, loss=losses))

    print(output)
    print("Overall mAP = {:.5f} | Head = {:.5f} | Medium = {:.5f} | Tail = {:.5f}".format(mAP.avg(), head_map, medium_map, tail_map))


if __name__=='__main__':
    main()
