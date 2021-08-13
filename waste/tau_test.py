import os
import copy
import torch
import shutil
import time
import warnings
import numpy as np
import random
from ops import Mixup
import torch.nn.functional as F
from torch.nn.utils import clip_grad_norm_
from tensorboardX import SummaryWriter
from opts import parser
from ops.mapmeter import mAPMeter, LTMeter
from ops.utils import AverageMeter, accuracy

from ops import losses
from tools import utils

from models import models
from models import frame_level_models 
from dataset import dutils
#from dataset.feature_loader import NPY_Dataset, PTH_Dataset, HDF5_Dataset
from dataset.feature_loader import BasicDataset

def setup_seed(seed):
    np.random.seed(seed)
    random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)

def load_data(num_class):
    train_list = open(args.train_list, 'r').readlines()
    val_list = open(args.val_list, 'r').readlines()
    input_dir = dutils.get_feature_path(args.feature_name)
    train_dataset = BasicDataset(train_list, input_dir, args.train_num_frames, cls_num=args.cls_num, train_mode=True)
    val_dataset = BasicDataset(val_list, input_dir, args.val_num_frames, cls_num=args.cls_num, train_mode=False)

    train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=args.batch_size, \
                        shuffle=True, num_workers=args.workers, pin_memory=True)
    val_dataloader = torch.utils.data.DataLoader(val_dataset, batch_size=args.batch_size, \
                        shuffle=False, num_workers=args.workers, pin_memory=True)
    return train_dataloader, val_dataloader

def main():
    global args, criterion

    args = parser.parse_args()
    
    num_class = args.num_class
    
    setup_seed(args.seed)
    
    train_loader, val_loader = load_data(num_class)

    criterion = utils.find_class_by_name(args.loss_func, [losses])(args)
    
    indices = utils.get_indices(args.lc_list, head=500, tail=100)
    
    feature_dim = 2048
    
    model = utils.find_class_by_name(args.model_name, [models, frame_level_models])(feature_dim, num_class) 
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
        for k, v in sd.items():
            if k == 'project.weight':
                print("perform tau-normalization...\n")
                sd[k] = v / torch.pow(torch.norm(v, 2, 1, keepdim=True), 1)
        model.load_state_dict(sd)
    test(val_loader, model, indices)

def test(loader, model, indices):

    batch_time = AverageMeter()
    losses = AverageMeter()
    top1 = AverageMeter()
    top5 = AverageMeter()
    mAP = mAPMeter()
    # switch to evaluate mode
    
    LTmAP =LTMeter(indices)
    model.eval()

    end = time.time()
    with torch.no_grad():
        for i, (vid, feature, target) in enumerate(loader):
            feature = feature.cuda()
            target = target.float().cuda()
            
            output = model(feature)
            
            loss = criterion(output, target)

            prec1, prec5 = accuracy(output.data, target, topk=(1, 5))

            losses.update(loss.item(), feature.size(0))
            top1.update(prec1, feature.size(0))
            top5.update(prec5, feature.size(0))
            # this is important for mAP
            
            mAP.add(output, target)
            LTmAP.add(output, target)
           
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
