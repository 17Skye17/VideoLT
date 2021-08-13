ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/EXPs'
FEATURE_NAME='ResNet101'
CKPT='/DATACENTER/raid0/skye/ResNet101-checkpoints/ResNet101_bs128_lr0.0001_netvlad_LDAM/ckpt.best.pth.tar'

export CUDA_VISIBLE_DEVICES='1'
python base_test.py \
     --resume $CKPT \
     --feature_name $FEATURE_NAME \
     --lr 0.0001 \
     --gd 20 --wd 0 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq=5 \
	 --print-freq 20 \
     --lc_list=$ROOT/labels/count-labels-train.lst \
     --num_class=1004 \
	 --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --model_name=NetVLADModel \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=LDAM \

