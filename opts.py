import argparse

parser = argparse.ArgumentParser(description="PyTorch implementation of VideoLT")

# ========================== Dataset Configs ==========================

parser.add_argument('--feature_name', type=str)
parser.add_argument('--num_class', type=int, default=1004)
parser.add_argument('--train_list', type=str, default="")
parser.add_argument('--val_list', type=str, default="")
parser.add_argument('--train_num_frames', type=int, default=60)
parser.add_argument('--val_num_frames', type=int, default=150)
parser.add_argument('--head', type=int, default=500, help="minimum number of samples for head classes.")
parser.add_argument('--tail', type=int, default=100, help="maximum number of samples for tail classes.")

# ========================== Model Configs ============================
parser.add_argument('--model_name', type=str, default='NonlinearClassifier')
parser.add_argument('--root_path', type=str, default="")
parser.add_argument('--store_name', type=str, default="")

# ========================= Learning Configs ==========================
parser.add_argument('--epochs', default=120, type=int, metavar='N',
                    help='number of total epochs to run')
parser.add_argument('--warm_epoch', default=0, type=int, help="warmup epochs for FrameStack")
parser.add_argument('-b', '--batch-size', default=128, type=int,
                    metavar='N', help='mini-batch size (default: 256)')
parser.add_argument('--lr', '--learning-rate', default=0.001, type=float,
                    metavar='LR', help='initial learning rate')
parser.add_argument('--lr_type', default='step', type=str,
                    metavar='LRtype', help='learning rate type')
parser.add_argument('--lr_steps', default=[50, 100], type=float, nargs="+",
                    metavar='LRSteps', help='epochs to decay learning rate by 10')
parser.add_argument('--momentum', default=0.9, type=float, metavar='M',
                    help='momentum')
parser.add_argument('--clip-gradient', '--gd', default=None, type=float,
                    metavar='W', help='gradient norm clipping (default: disabled)')
parser.add_argument('--reduce', type=str, default="mean", help="reduction type of loss function")

# ========================= Monitor Configs =============================
parser.add_argument('--print-freq', '-p', default=20, type=int,
                    metavar='N', help='print frequency (default: 10)')
parser.add_argument('--eval-freq', '-ef', default=5, type=int,
                    metavar='N', help='evaluation frequency (default: 5)')

# ========================= Runtime Configs =============================
parser.add_argument('--seed', type=int, default=2021)
parser.add_argument('-j', '--workers', default=8, type=int, metavar='N',
                    help='number of data loading workers (default: 8)')
parser.add_argument('-e', '--evaluate', action='store_true')
parser.add_argument('--resume', default='', type=str, metavar='PATH',
                    help='path to latest checkpoint (default: none)')
parser.add_argument('--start-epoch', default=0, type=int, metavar='N',
                    help='manual epoch number (useful on restarts)')
parser.add_argument('--gpus', nargs='+', type=int, default=None)
parser.add_argument('--root_log',type=str, default='log')
parser.add_argument('--root_model', type=str, default='checkpoint')

# ======================== Long-tailed Strategy Configs ==================
parser.add_argument('--augment', type=str, default="None", help="Augmentation strategy: ['None', 'mixup', 'FrameStack']")
parser.add_argument('--loss_func', type=str, default='BCELoss', help="Re-weighting strategy: ['CBLoss', 'EQL' ,'LDAM']")
parser.add_argument('--resample', type=str, default="None", help="Re-sampling strategy: ['None', 'CBS' ,'SRS']")
parser.add_argument('-m', '--mixup', action='store_true')
parser.add_argument('--clip_length', type=int, default=16)
parser.add_argument('--lc_list', type=str, default='', help='label count list')
parser.add_argument('--ratio', type=float, default=0.5, help="ratio to do dynamic clipmix")

# ======================== Focal Loss Configs =============================
parser.add_argument('--gamma', type=float, default=0, help='gamma for focal loss')
parser.add_argument('--alpha', type=float, default=1, help='alpha for focal loss')



