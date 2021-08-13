import numpy as np
import torch

def softmax(scores):
    es = np.exp(scores - scores.max(axis=-1)[..., None])
    return es / es.sum(axis=-1)[..., None]


class AverageMeter(object):
    """Computes and stores the average and current value"""

    def __init__(self):
        self.reset()

    def reset(self):
        self.val = 0
        self.avg = 0
        self.sum = 0
        self.count = 0

    def update(self, val, n=1):
        self.val = val
        self.sum += val * n
        self.count += n
        self.avg = self.sum / self.count


def single_accuracy(output, target, topk=(1,)):
    """Computes the precision@k for the specified values of k
       For single class labels
    """
    maxk = max(topk)
    batch_size = target.size(0)

    _, pred = output.topk(maxk, 1, True, True)
    pred = pred.t()
    correct = pred.eq(target.view(1, -1).expand_as(pred))

    res = []
    for k in topk:
        correct_k = correct[:k].view(-1).float().sum(0)
        res.append(correct_k.mul_(100.0 / batch_size))
    return res

def accuracy(output, target,  topk=(1,)):
    """Computes the accuracy over the k top predictions for the specified values of k
       For multi-class labels
    """
    with torch.no_grad():
        res = []
        for k in topk:
            maxk = k
            batch_size = target.size(0)
            _, pred = output.topk(maxk, 1, True, True)
            onehot_pred = torch.zeros(target.size())

            for i in range(batch_size):
                onehot_pred[i][pred[i]] = 1

            correct_map = onehot_pred.float().cuda() * target
            correct = torch.nonzero(correct_map.sum(1)).size(0)
            res.append(correct * 100.0 / batch_size)
        return res

