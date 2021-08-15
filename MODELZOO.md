# VideoLT Baselines

## ResNet-101

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Script | Checkpoint
-|-|-|-|-|-|-
Baseline | 0.516 | 0.687 | 0.568 | 0.396 | [baseline.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/baseline.sh) | link
-|-|-|-|-|-|-
LDAM + DRW | 0.518 | 0.687 | 0.572 | 0.397 | [ldamloss.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/ldamloss.sh) | link
-|-|-|-|-|-|-
EQL | 0.518 | 0.690 | 0.571 | 0.398 | [EQL.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/EQL.sh) | link
-|-|-|-|-|-|-
CBS | 0.507 | 0.660 | 0.559 | 0.390 | [CBS.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/CBS.sh) | link
-|-|-|-|-|-|-
SRS | 0.516 | 0.680 | 0.568 | 0.399 | [SRS.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/SRS.sh) | link
-|-|-|-|-|-|-
CB Loss | 0.511 | 0.665 | 0.561 | [cbloss.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/cbloss.sh) | link
-|-|-|-|-|-|-
mixup | 0.495 | 0.660 | 0.546 | 0.381 | [mixup.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/mixup.sh) | link
-|-|-|-|-|-|-
FrameStack | 0.532 |  0.695 | 0.584 | 0.417 | [framestack.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/framestack.sh) | link
