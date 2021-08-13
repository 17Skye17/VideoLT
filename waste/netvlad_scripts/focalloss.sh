ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/ResNet-101-EXPs'
FEATURE_NAME='ResNet101'

export CUDA_VISIBLE_DEVICES='3'
python base_main.py \
     --resume "/DATACENTER/raid0/skye/ResNet101-checkpoints/ResNet101_bs128_lr0.0001_netvlad_focalloss_gamma1/ckpt.best.pth.tar" \
     --feature_name $FEATURE_NAME \
     --lr 0.0001 \
     --gd 20 --wd 0 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq=5 \
     --root_log=$WORK_SPACE/$FEATURE_NAME-log \
	 --print-freq 20 \
     --lc_list=$ROOT/labels/count-labels.lst \
     --root_model='/DATACENTER/raid0/skye/'$FEATURE_NAME'-checkpoints' \
     --gamma 1 \
     --store_name=$FEATURE_NAME'_bs128_lr0.0001_netvlad_focalloss_gamma2' \
     --num_class=1004 \
	 --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --model_name=NetVLADModel \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=FocalLoss \

