# VideoLT Baselines

## ResNet-101

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Script | Checkpoint
-|-|-|-|-|-|-
Baseline | 0.516 | 0.687 | 0.568 | 0.396 | [baseline.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/baseline.sh) | [link](https://drive.google.com/uc?export=download&id=1i87kzcBxr5hLF24LJXv6vwT31BcxAtwH)
LDAM + DRW | 0.518 | 0.687 | 0.572 | 0.397 | [ldamloss.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/ldamloss.sh) | [link](https://drive.google.com/uc?export=download&id=1AKxOWmbTlYx7B-q2bSToSsOYeoRc0foT)
EQL | 0.518 | 0.690 | 0.571 | 0.398 | [EQL.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/EQL.sh) | [link](https://drive.google.com/uc?export=download&id=1ruA5SLdU2RVvZjJgtY8hBNN2nUrl2MUv)
CBS | 0.507 | 0.660 | 0.559 | 0.390 | [CBS.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/CBS.sh) | [link](https://drive.google.com/uc?export=download&id=1dFkbbrU4JZ9F_HqEeiVnJHbvLi27aI7R)
SRS | 0.516 | 0.680 | 0.568 | 0.399 | [SRS.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/SRS.sh) | [link](https://drive.google.com/uc?export=download&id=1xBL7SPcGpZVwOpPEkKEYmKgiiUmkIWsl)
CB Loss | 0.511 | 0.665 | 0.561 | 0.398 | [cbloss.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/cbloss.sh) | [link](https://drive.google.com/uc?export=download&id=1INqFmK6nIaafVqyGGJt3ovf-mpepi7l0)
mixup | 0.495 | 0.660 | 0.546 | 0.381 | [mixup.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/mixup.sh) | [link](https://drive.google.com/uc?export=download&id=1El-x928Mwb9--r_wmKDVINBz5BMEo2OL)
FrameStack | **0.532** |  **0.695** | **0.584** | **0.417** | [framestack.sh](https://github.com/17Skye17/VideoLT/blob/master/scripts/framestack.sh) | [link](https://drive.google.com/uc?export=download&id=1W-SJE0YhQfJVz1dsMAAvXiDUvywCAZjb)


## ResNet-50

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Checkpoint
-|-|-|-|-|-
Baseline | 0.499 | 0.675 | 0.553 | 0.376 | [link](https://drive.google.com/uc?export=download&id=1jaNSZmCW5POmBF8SsamO9ecIvuo2IFds)
LDAM + DRW | 0.502 | 0.680 | 0.557 | 0.378 | [link](https://drive.google.com/uc?export=download&id=1UzSxN_aU_kxp4pa9_mDEIw2WxYhYqrKr)
EQL | 0.502 | 0.679 | 0.557 | 0.378 | [link](https://drive.google.com/uc?export=download&id=1Ntp67U1XHbc9fKfRZ1VJ-j-JViyrmxhV)
CBS | 0.491 | 0.649 | 0.545 | 0.371 | [link](https://drive.google.com/uc?export=download&id=1_qITylMQ8r3S7XF6cqSYx8-thAH7m7BK)
SRS | 0.486 | 0.655 | 0.539 | 0.365 | [link](https://drive.google.com/uc?export=download&id=13nNot-70tCGLDcV1RY-qKFB04mfJc-at)
CB Loss | 0.495 | 0.653 | 0.546 | 0.381 | [link](https://drive.google.com/uc?export=download&id=1_92ujEAPrVMIfsXaDJfiRKRN3uNDeR7p)
mixup | 0.484 | 0.649 | 0.535 | 0.368 | [link](https://drive.google.com/uc?export=download&id=19dAUtgL2Db1dQ3NgCJUzYfInfvJWwTbP)
FrameStack | **0.516** | **0.683** | **0.569** | **0.397** | [link](https://drive.google.com/uc?export=download&id=1k_gVKAX5JPPbhzmd2xInA-NGLfNSpuQa)


## TSM (ResNet-50)

Methods | Overall | Head[500, +INF) | Medium[100, 500) | Tail[0,100) | Checkpoint
-|-|-|-|-|-
Baseline | 0.565 | 0.757 | 0.620 | 0.436 | [link](https://drive.google.com/uc?export=download&id=1yL5BgkbireUWxz30P0vpJYuuuchRRMV3)
LDAM + DRW | 0.565 | 0.750 | 0.620 | 0.439 | [link](https://drive.google.com/uc?export=download&id=1pTdEe_UmRyvZKh96zDH2d-7VBX8Z8WxX)
EQL | 0.567 | 0.757 | 0.623 | 0.439 | [link](https://drive.google.com/uc?export=download&id=1Y9lepJCo6eAwdIptw3ung2C-5itK4Imc)
CBS | 0.558 | 0.733 | 0.612 | 0.435 | [link](https://drive.google.com/uc?export=download&id=1nlw6G5E1R2eoTuY7eJuIxK1pWL9wnGKO)
CB Loss | 0.563 | 0.744 | 0.616 | 0.440 | [link](https://drive.google.com/uc?export=download&id=1jf07pcHOy_JY8ecszuFcKFZonv233beE)
mixup | 0.548 | 0.736 | 0.602 | 0.425 | [link](https://drive.google.com/uc?export=download&id=18hPq8BY99ljfUSbsyw6-KzHNR3i3UBnz)
FrameStack | **0.580** |  **0.759** | **0.632** | **0.459** | [link](https://drive.google.com/uc?export=download&id=1U9M_uvRVBLNx7EyB1swEkt9A1wv7CA-w)
