# VideoLT Baselines

## ResNet-101

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Script | Checkpoint
-|-|-|-|-|-|-
Baseline | 0.516 | 0.687 | 0.568 | 0.396 | [baseline.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/baseline.sh) | link
LDAM + DRW | 0.518 | 0.687 | 0.572 | 0.397 | [ldamloss.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/ldamloss.sh) | link
EQL | 0.518 | 0.690 | 0.571 | 0.398 | [EQL.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/EQL.sh) | link
CBS | 0.507 | 0.660 | 0.559 | 0.390 | [CBS.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/CBS.sh) | link
SRS | 0.516 | 0.680 | 0.568 | 0.399 | [SRS.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/SRS.sh) | link
CB Loss | 0.511 | 0.665 | 0.561 | 0.398 | [cbloss.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/cbloss.sh) | link
mixup | 0.495 | 0.660 | 0.546 | 0.381 | [mixup.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/mixup.sh) | link
FrameStack | **0.532** |  **0.695** | **0.584** | **0.417** | [framestack.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/framestack.sh) | link


## ResNet-50

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Checkpoint
-|-|-|-|-|-
Baseline | 0.499 | 0.675 | 0.553 | 0.376 | link
LDAM + DRW | 0.502 | 0.680 | 0.557 | 0.378 | link
EQL | 0.502 | 0.679 | 0.557 | 0.378 | link
CBS | 0.491 | 0.649 | 0.545 | 0.371 | link
SRS | 0.486 | 0.655 | 0.539 | 0.365 | link
CB Loss | 0.495 | 0.653 | 0.546 | 0.381 | link
mixup | 0.484 | 0.649 | 0.535 | 0.368 | link
FrameStack | **0.516** | **0.683** | **0.569** | **0.397** | link


## TSM (ResNet-50)

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Checkpoint
-|-|-|-|-|-
Baseline | 0.565 | 0.757 | 0.620 | 0.436 | link
LDAM + DRW | 0.565 | 0.750 | 0.620 | 0.439 | link
EQL | 0.567 | 0.757 | 0.623 | 0.439 | link
CBS | 0.558 | 0.733 | 0.612 | 0.435 | link
CB Loss | 0.563 | 0.744 | 0.616 | 0.440 | link
mixup | 0.548 | 0.736 | 0.602 | 0.425 | [checkpoint](https://drive.google.com/file/d/1qIdX88KbsVrdfQh1yzZziDUaTHSOLotc/view?usp=sharing)
FrameStack | **0.580** |  **0.759** | **0.632** | **0.459** | link
