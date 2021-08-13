import torch
import torch.nn as nn
import torch.nn.functional as F


class NetVLAGD(nn.Module):
    def __init__(self, feature_size, cluster_size, add_batch_norm, add_bias=False, gating=True):
        super(NetVLAGD, self).__init__() 
        self.feature_size = feature_size
        self.add_batch_norm = add_batch_norm 
        self.cluster_size = cluster_size 
        
        self.add_bias = add_bias 
        self.gating = gating

        self.activation_fc = nn.Linear(feature_size, cluster_size, bias=add_bias)
        self.gate_weight = nn.Parameter(torch.zeros(cluster_size, feature_size))
        self.gate_weight = nn.init.xavier_normal_(self.gate_weight)
        
        if add_batch_norm:
            self.bn1 = nn.BatchNorm1d(cluster_size)
        

    def forward(self, x):
        # x shape: [batch_size*max_frames, feature_size]
        batch_size, max_frames, feature_size = x.shape
        
        x = x.view(batch_size* max_frames, feature_size)
        
        activation = self.activation_fc(x)
        
        if self.add_batch_norm:
            activation = self.bn1(activation)
        
        # [batchsize*max_frames, cluster_size]
        activation = F.softmax(activation, 1)
        activation = activation.view(-1, max_frames, self.cluster_size)
        
        activation = activation.permute(0, 2, 1)
        
        # activation : [batch_size, cluster_size, max_frames]
        # reshaped_input : [batch_size, max_frames, feature_size]
        reshaped_input = x.view(-1, max_frames, feature_size)
        
        # vlagd -> [bs, cluster_size ,feature_size]
        vlagd = torch.matmul(activation, reshaped_input)

        if self.gating:
            gate_weight = F.sigmoid(self.gate_weight)
            vlagd = torch.mul(vlagd, gate_weight)
            # vlagd -> [bs, feature_size, cluster_size]
            vlagd = vlagd.permute(0, 2, 1)
        
        vlagd = F.normalize(vlagd, p=2, dim=1)
        
        # permute breaks the contiguous of tensor, must use reshape
        vlagd = vlagd.reshape(batch_size, self.cluster_size * feature_size)
        vlagd = F.normalize(vlagd, p=2, dim=1)
        return vlagd