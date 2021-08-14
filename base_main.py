import os
import copy
import torch
import shutil
import time
import warnings
import numpy as np
import random
from ops import Augment
import torch.nn.functional as F
from torch.nn.utils import clip_grad_norm_
from tensorboardX import SummaryWriter
from opts import parser
from ops.mapmeter import mAPMeter, LTMeter
from ops.utils import AverageMeter, accuracy

from ops import losses
from tools import utils

from dataset import dutils
from models import models
from ops.feature_loader import BasicDataset, ResamplingDataset_Mask

def setup_seed(seed):
    np.random.seed(seed)
    random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)

def adjust_learning_rate(optimizer, epoch, lr_type, lr_steps):
    if lr_type == 'step':
        decay = 0.1 ** (sum(epoch >= np.array(lr_steps)))
        lr = args.lr * decay

    elif lr_type == 'cos':
        import math
        lr = 0.5 * args.lr * (1 + math.cos(math.pi * epoch / args.epochs))

    else:
        raise NotImplementedError

    for param_group in optimizer.param_groups:
        param_group['lr'] = lr

def check_rootfolders():
    """Create log and model folder"""
    folders_util = [args.root_log, args.root_model,
                    os.path.join(args.root_log, args.store_name),
                    os.path.join(args.root_model, args.store_name)]
    for folder in folders_util:
        if not os.path.exists(folder):
            print('creating folder ' + folder)
            os.mkdir(folder)

def save_checkpoint(state, is_best):
    filename = '%s/%s/ckpt.pth.tar' % (args.root_model, args.store_name)
    torch.save(state, filename)
    if is_best:
        shutil.copyfile(filename, filename.replace('pth.tar', 'best.pth.tar'))

def load_data(num_class, input_dir):
    train_list = open(args.train_list, 'r').readlines()
    val_list = open(args.val_list, 'r').readlines()
    if args.resample == 'None':
        train_dataset = BasicDataset(train_list, input_dir, args.train_num_frames,\
                     cls_num=num_class, train_mode=True)
    else:
        train_dataset = ResamplingDataset_Mask(train_list, input_dir, args.train_num_frames, \
                     rstype=args.resample, cls_num=args.num_class, train_mode=True)
    val_dataset = BasicDataset(val_list, input_dir, args.val_num_frames, \
                     cls_num=num_class, train_mode=False)

    train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=args.batch_size, \
                        shuffle=True, num_workers=args.workers, pin_memory=True)
    val_dataloader = torch.utils.data.DataLoader(val_dataset, batch_size=args.batch_size, \
                        shuffle=False, num_workers=args.workers, pin_memory=True)
    return train_dataloader, val_dataloader

def main():
   
    global args, best_mAP, criterion, optimizer, tf_writer, log_training

    
    best_mAP = 0

    args = parser.parse_args()
    start_epoch = args.start_epoch     
    num_class = args.num_class
    if args.resample != 'None':
        args.reduce = "none"
    print ("########################################################################\n")
    print ("Feature name: {} \nNumber of class: {} \nTrain frames: {} \nVal frames: {}\nReduction: {}".\
            format(args.feature_name, args.num_class, args.train_num_frames, args.val_num_frames, args.reduce))
    print ("Applied long-tailed strategies: \n")
    print ("\tAugmentation: {} \t Re-weighting: {} \t Re-sampling: {} \n". \
            format(args.augment, args.loss_func, args.resample))
    print ("######################################################################## \n") 
    check_rootfolders()
    setup_seed(args.seed)

    input_dir =  dutils.get_feature_path(args.feature_name)
    feature_dim = dutils.get_feature_dim(args.feature_name)
    args.lc_list, args.train_list, args.val_list = dutils.get_label_path()

    train_loader, val_loader = load_data(num_class, input_dir)

    criterion = utils.find_class_by_name(args.loss_func, [losses])(args, logits=True, reduce=args.reduce)
    
    indices = utils.get_indices(args.lc_list, head=args.head, tail=args.tail)
    
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

    print ("Params to learn:")
    params_to_update = []
    for name, param in model.named_parameters():
        if param.requires_grad == True:
            params_to_update.append(param)
            print ('\t', name)

    optimizer = torch.optim.Adam(params_to_update, lr=args.lr)
    
    log_training = open(os.path.join(args.root_log, args.store_name, 'log.csv'),'w')
    tf_writer = SummaryWriter(log_dir=os.path.join(args.root_log, args.store_name))

    for epoch in range(start_epoch, args.epochs):
        adjust_learning_rate(optimizer, epoch, args.lr_type, args.lr_steps)
        print ("Training for Epoch {}".format(epoch))
        if args.resample != "None":
            rs_train(train_loader, model, epoch, log_training)
        else:
            train(train_loader, model, epoch, log_training)
        if (epoch + 1) % args.eval_freq == 0 or epoch == args.epochs - 1:
            acc1, acc5, mAP = validate(val_loader, model, epoch, log_training, indices)
            is_best = mAP > best_mAP
            best_mAP = max(mAP, best_mAP)
            tf_writer.add_scalar('best_mAP/test_best', best_mAP, epoch)
            
            print ('Test Epoch {}: Acc@1: {} | Acc@5: {} | mAP: {} | best_mAP: {}'.\
                    format(epoch, acc1, acc5, mAP, best_mAP))

            save_checkpoint({
            'epoch': epoch + 1,
            'feature': args.feature_name,
            'state_dict': model.state_dict(),
            'optimizer': optimizer.state_dict(),
            'best_mAP': best_mAP,
            'Acc@1': acc1,
            'Acc@5': acc5},
            is_best)

def train(loader, model, epoch, log):
    batch_time = AverageMeter()
    data_time = AverageMeter()
    losses = AverageMeter()
    top1 = AverageMeter()
    top5 = AverageMeter()
    mAP = mAPMeter()

    model.train() 
    end = time.time()
    
    if args.loss_func == 'LDAM':
        # apply DRW to LDAM
        criterion.reset_epoch(epoch)
    for i, (vid, feature, target) in enumerate(loader):
        feature = feature.cuda()
        target = target.float().cuda(non_blocking=True)
        
        if args.augment == "mixup":
            gamma = np.random.beta(1.0, 1.0)
            mixed_input, mixed_target = Augment.mixup(feature, target, gamma)
            prediction, output = model(mixed_input)
            loss = criterion(output, mixed_target)
        elif args.augment == "None":
            prediction, output = model(feature)
            loss = criterion(output, target)
        else:
            print ("{} not implemented. Please choose ['mixup', 'FrameStack', 'None'].".\
                    format(args.augment))
            raise NotImplementedError
        
        losses.update(loss.item(), output.size(0))

        with torch.no_grad():
            prec1, prec5 = accuracy(output.data, target, topk=(1, 5))
            top1.update(prec1, output.size(0))
            top5.update(prec5, output.size(0))
        
        # accumulate gradient for each parameter
        loss.backward()

        if args.clip_gradient is not None:
            total_norm = clip_grad_norm_(model.parameters(), args.clip_gradient)
        
        # update parameters based on current gradients
        optimizer.step()
        optimizer.zero_grad()

        # measure elapsed time
        batch_time.update(time.time() - end)
        end = time.time()

        if i % args.print_freq == 0:
            output = ('Epoch: [{0}][{1}/{2}], lr: {lr:.5f}\t'
                      'Time {batch_time.val:.3f} ({batch_time.avg:.3f})\t'
                      'Loss {loss.val:.4f} ({loss.avg:.4f})\t'
                      'Prec@1 {top1.val:.3f} ({top1.avg:.3f})\t'
                      'Prec@5 {top5.val:.3f} ({top5.avg:.3f})\n'
                      .format(
                epoch, i, len(loader), batch_time=batch_time,
                data_time=data_time, loss=losses, top1=top1, top5=top5, \
                lr=optimizer.param_groups[-1]['lr']))  
            print(output)
            
            log.write(output)
            log.flush()
    
    tf_writer.add_scalar('loss/train_epoch', losses.avg, epoch)
    tf_writer.add_scalar('acc/train_top1', top1.avg, epoch)
    tf_writer.add_scalar('acc/train_top5', top5.avg, epoch)
    tf_writer.add_scalar('lr', optimizer.param_groups[-1]['lr'], epoch)

def validate(loader, model, epoch, log, indices):
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

            mAP.add(prediction, target)
            LTmAP.add(prediction, target)
           
     
            batch_time.update(time.time() - end)
            end = time.time()

        head_map = LTmAP.value()["head"]
        medium_map = LTmAP.value()["medium"]
        tail_map = LTmAP.value()["tail"]
                
    output = ('Testing Results: Prec@1 {top1.avg:.5f} | Prec@5 {top5.avg:.5f} | Loss {loss.avg:.5f} '
              .format(top1=top1, top5=top5, loss=losses))

    print(output)
    lt_output = ("Overall mAP = {:.3f} | Head = {:.5f} | Medium = {:.5f} | Tail = {:.5f}".\
            format(mAP.avg(), head_map, medium_map, tail_map))
    print (lt_output)
    
    if log is not None:
        log.write(output + '  mAP {}\n'.format(mAP.avg()))
        log.write(lt_output+'\n')
        log.flush()

    if tf_writer is not None:
        tf_writer.add_scalar('loss/test', losses.avg, epoch)
        tf_writer.add_scalar('acc/test_top1', top1.avg, epoch)
        tf_writer.add_scalar('acc/test_top5', top5.avg, epoch)
        tf_writer.add_scalar('mAP/test', mAP.avg(), epoch)
    return top1.avg, top5.avg, mAP.avg()    

def rs_train(loader, model, epoch, log):
    batch_time = AverageMeter()
    data_time = AverageMeter()
    losses = AverageMeter()
    top1 = AverageMeter()
    top5 = AverageMeter()
    mAP = mAPMeter()

    model.train() 
    end = time.time()
    
    if args.loss_func == 'LDAM':
        # apply DRW to LDAM
        criterion.reset_epoch(epoch)
    for i, (vid, feature, target, mask) in enumerate(loader):
        feature = feature.cuda()
        target = target.float().cuda(non_blocking=True)
        mask = mask.float().cuda()

        if args.augment == "mixup":
            gamma = np.random.beta(1.0, 1.0)
            mixed_input, mixed_target = Augment.mixup(feature, target, gamma)
            prediction, output = model(mixed_input)
            loss = criterion(output, mixed_target)
        elif args.augment == "None":
            prediction, output = model(feature)
            loss = criterion(output, target)
        else:
            print ("{} not implemented. Please choose ['mixup', 'FrameStack', 'None'].".\
                    format(args.augment))
            raise NotImplementedError

        loss = loss * mask
        loss = torch.mean(torch.sum(loss, 1))
        losses.update(loss.item(), output.size(0))

        with torch.no_grad():
            prec1, prec5 = accuracy(output.data, target, topk=(1, 5))
            top1.update(prec1, output.size(0))
            top5.update(prec5, output.size(0))
        
        # accumulate gradient for each parameter
        loss.backward()

        if args.clip_gradient is not None:
            total_norm = clip_grad_norm_(model.parameters(), args.clip_gradient)
        
        # update parameters based on current gradients
        optimizer.step()
        optimizer.zero_grad()

        # measure elapsed time
        batch_time.update(time.time() - end)
        end = time.time()

        if i % args.print_freq == 0:
            output = ('Epoch: [{0}][{1}/{2}], lr: {lr:.5f}\t'
                      'Time {batch_time.val:.3f} ({batch_time.avg:.3f})\t'
                      'Loss {loss.val:.4f} ({loss.avg:.4f})\t'
                      'Prec@1 {top1.val:.3f} ({top1.avg:.3f})\t'
                      'Prec@5 {top5.val:.3f} ({top5.avg:.3f})\n'
                      .format(
                epoch, i, len(loader), batch_time=batch_time,
                data_time=data_time, loss=losses, top1=top1, top5=top5, \
                lr=optimizer.param_groups[-1]['lr']))  
            print(output)
            
            log.write(output)
            log.flush()
    
    tf_writer.add_scalar('loss/train_epoch', losses.avg, epoch)
    tf_writer.add_scalar('acc/train_top1', top1.avg, epoch)
    tf_writer.add_scalar('acc/train_top5', top5.avg, epoch)
    tf_writer.add_scalar('lr', optimizer.param_groups[-1]['lr'], epoch)


if __name__=='__main__':
    main()
