import numpy as np

def find_class_by_name(name, modules):
    modules = [getattr(module, name, None) for module in modules]
    return next(a for a in modules if a)

def get_indices(_list, head=500, tail=100):
    f = open(_list, 'r')
    lines = [line.strip() for line in f.readlines()]
    _list = np.zeros([len(lines)])
    head_indices = []
    tail_indices = []
    medium_indices = []
    for i in range(len(lines)):
        nums = float(lines[i].split(' ')[2])
        if nums <= tail:
            tail_indices.append(i)
        elif nums > tail and nums <= head:
            medium_indices.append(i)
        else:
            head_indices.append(i)
    return [tail_indices, medium_indices, head_indices]


