import torch
import torch.nn as nn
import numpy as np
import torch.nn.functional as F
from torch.autograd import Variable

class BCELoss(nn.Module):
    '''
    Function: BCELoss

    Params: 
        predictions: input->(batch_size, 1004)
        targets: target->(batch_size, 1004)

    Return:
        bceloss
    '''
    
    def __init__(self, args, logits=True, reduce="mean"):
        super(BCELoss, self).__init__()
        self.logits = logits
        self.reduce = reduce

    def forward(self, inputs, targets):
        if self.logits:
            BCE_loss = F.binary_cross_entropy_with_logits(inputs, targets, reduction=self.reduce)
        else:
            BCE_loss = F.binary_cross_entropy(inputs, targets, reduction=self.reduce)
        
        return BCE_loss

class FocalLoss(nn.Module):
    '''
    Function: FocalLoss

    Params:
        alpha: scale factor, default = 1
        gamma: exponential factor, default = 0

    Return:
        focalloss
    '''
    def __init__(self, args, logits=True, reduce="mean"):
        super(FocalLoss, self).__init__()
        self.alpha = args.alpha
        self.gamma = args.gamma
        self.logits = logits
        self.reduce = reduce

    def forward(self, inputs, targets):
        if self.logits:
            BCE_loss = F.binary_cross_entropy_with_logits(inputs, targets, reduction="none")
        else:
            BCE_loss = F.binary_cross_entropy(inputs, targets, reduction="none")
        pt = torch.exp(-BCE_loss)
        F_loss = self.alpha * (1-pt)**self.gamma * BCE_loss
        
        if self.reduce == "mean":
            return torch.mean(F_loss)
        elif self.reduce == "sum":
            return torch.sum(F_loss)
        else:
            return F_loss

class CBLoss(nn.Module):
    '''
    Function: CB_BCE (class-balanced binary cross-entropy)
    
    Params:
        lc_list: training list of class frequency for all classes 
        beta: default = 0.9999
    
    Return:
        cb_bce loss
    '''

    def __init__(self, args, logits=True, reduce='mean', beta=0.9999):
        super(CBLoss, self).__init__()
        self.class_list = args.lc_list
        self.reduce = reduce
        self.logits = logits

        with open(self.class_list,'r') as f:
            num_class_list = [float(line.strip().split(' ')[2]) for line in f.readlines()]
        
        effective_num = 1.0 - np.power(beta, num_class_list)
        per_cls_weights = (1.0 - beta) / np.array(effective_num)
        per_cls_weights = per_cls_weights / np.sum(per_cls_weights) * len(num_class_list)
        self.per_cls_weights = torch.FloatTensor(per_cls_weights).cuda()

    def forward(self, inputs, targets):
        if self.logits:
            loss = F.binary_cross_entropy_with_logits(inputs, targets, reduction=self.reduce, weight=self.per_cls_weights)
        else:
            loss = F.binary_cross_entropy(inputs, targets, reduction=self.reduce, weight=self.per_cls_weights)
        return loss

class LDAM(nn.Module):
    '''
    Function: LDAM Loss

    Params:
        lc_list: training list of class frequency for all classes 
        s: an empirical factor to obtain larger loss, \
            we refer to official implementation at https://github.com/kaidic/LDAM-DRW.git
        max_m: largest enforced margin, default = 0.5
        step_epoch: step epoch for DRW training
    
    Return:
        ldamloss
    '''
    def __init__(self, args, logits=True, reduce='mean', max_m=0.5, s=30, step_epoch=50):
        super(LDAM, self).__init__()
        self.class_list = args.lc_list
        self.reduce = reduce
        self.logits = logits

        with open(self.class_list,'r') as f:
            self.num_class_list = [float(line.strip().split(' ')[2]) for line in f.readlines()]
        
        m_list = 1.0 / np.sqrt(np.sqrt(self.num_class_list))
        m_list = m_list * (max_m / np.max(m_list))
        m_list = torch.FloatTensor(m_list).cuda()
        self.m_list = m_list
        self.s = s
        self.step_epoch = step_epoch
        self.weight = None

    def reset_epoch(self, epoch):
        idx = epoch // self.step_epoch
        betas = [0, 0.9999]
        effective_num = 1.0 - np.power(betas[idx], self.num_class_list)
        per_cls_weights = (1.0 - betas[idx]) / np.array(effective_num)
        per_cls_weights = per_cls_weights / np.sum(per_cls_weights) * len(self.num_class_list)
        self.weight = torch.FloatTensor(per_cls_weights).cuda()

    def forward(self, inputs, targets):
        batch_m = torch.matmul(self.m_list[None, :], targets.transpose(0, 1))
        batch_m = batch_m.view((-1, 1))
        inputs_m = inputs - batch_m

        output = torch.where(targets.type(torch.uint8), inputs_m, inputs)
        if self.logits:
            loss = F.binary_cross_entropy_with_logits(self.s * output, targets, reduction=self.reduce, weight=self.weight)
        else:
            loss = F.binary_cross_entropy(self.s * output, targets, reduction=self.reduce, weight=self.weight)
        return loss

class EQL(nn.Module):
    '''
    Function: EQL (Equalization Loss)

    Params:
        lc_list: training list of class frequency for all classes 
        max_tail_num: the maximum number of samples for defined tail classes, for VideoLT is 100
        gamma: probability for set random variable beta, which has a probability of gamma to be 1 and 1 - gamma to be 0
    Return:
        eql
    '''
    def __init__(self, args, logits=True, reduce='mean', max_tail_num=100, gamma=1.76 * 1e-3):
        super(EQL, self).__init__()
        self.class_list = args.lc_list
        self.reduce = reduce
        self.logits = logits

        with open(self.class_list,'r') as f:
            num_class_list = [float(line.strip().split(' ')[2]) for line in f.readlines()]
        
        max_tail_num = max_tail_num
        self.gamma = gamma

        self.tail_flag = [False] * len(num_class_list)
        for i in range(len(self.tail_flag)):
            if num_class_list[i] <= max_tail_num:
                self.tail_flag[i] = True

    def threshold_func(self):
        weight = self.inputs.new_zeros(self.n_c)
        weight[self.tail_flag] = 1
        weight = weight.view(1, self.n_c).expand(self.n_i, self.n_c)
        return weight
    
    def beta_func(self):
        rand = torch.rand((self.n_i, self.n_c)).cuda()
        rand[rand<1-self.gamma] = 0
        rand[rand>=1-self.gamma] = 1
        return rand

    def forward(self, inputs, targets):
        self.inputs = inputs
        self.n_i, self.n_c = self.inputs.size()
        
        eql_w = 1 - self.beta_func() * self.threshold_func() * (1 - targets)
        if self.logits:
            loss = F.binary_cross_entropy_with_logits(self.inputs, targets, reduction=self.reduce, weight=eql_w)
        else:
            loss = F.binary_cross_entropy(self.inputs, targets, reduction=self.reduce, weight=eql_w)
        return loss