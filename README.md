# Pytorch Code for VideoLT
Website: [https://videolt.github.io/](https://videolt.github.io/)

Code for paper in ICCV2021: [VideoLT: Large-scale Long-tailed Video Recognition](https://arxiv.org/abs/2105.02668)
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
- [$\tau$-normalization](https://arxiv.org/abs/1910.09217)
- [cRT](https://arxiv.org/abs/1910.09217)
- [LWS](https://arxiv.org/abs/1910.09217)
- FrameStack

## Data Preparation

Please visit [https://videolt.github.io/](https://videolt.github.io/) to obtain download links. We provide raw videos and extracted features.

## Model Zoo

The baseline scripts, logs and checkpoints are provided in [MODELZOO.md](MODELZOO.md).

## Usage

### Requirement

```
pip install -r requirements.txt
```


### File Description



### Train



### Test



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
