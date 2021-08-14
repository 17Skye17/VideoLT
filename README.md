# Pytorch Code for VideoLT
Website: [https://videolt.github.io/](https://videolt.github.io/)

Code for paper in ICCV2021: [VideoLT: Large-scale Long-tailed Video Recognition](https://arxiv.org/abs/2105.02668)
<img src="https://github.com/17Skye17/tree/master/concept.png", alt="concept">

## Updates
- [07/29/2021] Dataset released, visit [https://videolt.github.io/](https://videolt.github.io/) for downloading.
- [07/23/2021] VideoLT is accepted by ICCV2021.

## Overview

**VideoLT** is a large-scale long-tailed video recognition dataset, as a step toward real-world video recognition. We provide **VideoLT** dataset and long-tailed baselines in this repo including:
- [Class-balanced Sampling](https://arxiv.org/abs/1512.05830)
- [Square-root Sampling](https://arxiv.org/abs/1910.09217)
- [Mixup](https://arxiv.org/abs/1710.09412)
- [Class-balanced Loss](https://arxiv.org/abs/1901.05555)
- [LDAM Loss](https://arxiv.org/abs/1906.07413)
- [EQL](https://arxiv.org/abs/2003.05176)
- FrameStack

## Data Preparation

Please visit [https://videolt.github.io/](https://videolt.github.io/) to obtain download links. We provide raw videos and extracted features.

For using extracted features, please modify dataset/dutils.py and set the correct path to features.

## Model Zoo

The baseline scripts, logs and checkpoints are provided in [MODELZOO.md](MODELZOO.md).

## FrameStack

TODO: add picture

## Usage

### Requirement

```
pip install -r requirements.txt
```

### Prepare Data Path

1. Modify `FEATURE_NAME`, `PATH_TO_FEATURE` and `FEATURE_DIM` in `dataset/dutils.py`.

2. Set `ROOT` in `dataset/dutils.py` to `labels` folder. The directory structure is:

```
    labels
    |-- count-labels-train.lst
    |-- test.lst
    |-- test_videofolder.txt
    |-- train.lst
    |-- train_videofolder.txt
    |-- val_videofolder.txt
    `-- validate.lst
```

### Train

We provide scripts for training. Please refer to [MODELZOO.md](MODELZOO.md). 


Example training scripts:

```
FEATURE_NAME='ResNet101'

export CUDA_VISIBLE_DEVICES='2'
python base_main.py  \
     --augment "mixup" \
     --feature_name $FEATURE_NAME \
     --lr 0.0001 \
     --gd 20 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq 5 \
     --print-freq 20 \
     --root_log=$FEATURE_NAME-log \
     --root_model=$FEATURE_NAME'-checkpoints' \
     --store_name=$FEATURE_NAME'_bs128_lr0.0001_lateavg_mixup' \
     --num_class=1004 \
     --model_name=NonlinearClassifier \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
```

Note: Set `args.resample`, `args.augment` and `args.loss_func` can apply multiple long-tailed stratigies.

Options:
```
    args.resample: ['None', 'CBS','SRS']
    args.augment : ['None', 'mixup', 'FrameStack']
    args.loss_func: ['BCELoss', 'LDAM', 'EQL', 'CBLoss', 'FocalLoss']
```


### Test

We provide scripts for testing in `scripts`. Modify `CKPT` to saved checkpoints.

Example testing scripts:

```
FEATURE_NAME='ResNet101'
CKPT='VideoLT_checkpoints/ResNet-101/ResNet101_bs128_lr0.0001_lateavg_mixup/ckpt.best.pth.tar'

export CUDA_VISIBLE_DEVICES='1'
python base_test.py \
     --resume $CKPT \
     --feature_name $FEATURE_NAME \
     --batch-size 128 -j 16 \
     --print-freq 20 \
     --num_class=1004 \
     --model_name=NonlinearClassifier \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
```

## Citing

If you find VideoLT helpful for your research, please consider citing:

```
@misc{zhang2021videolt,
title={VideoLT: Large-scale Long-tailed Video Recognition}, 
author={Xing Zhang and Zuxuan Wu and Zejia Weng and Huazhu Fu and Jingjing Chen and Yu-Gang Jiang and Larry Davis},
year={2021},
eprint={2105.02668},
archivePrefix={arXiv},
primaryClass={cs.CV}
}
```


