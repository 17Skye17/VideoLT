ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/EXPs'
FEATURE_NAME='ResNet101'

export CUDA_VISIBLE_DEVICES='1'
python cbsample_main.py  \
    --feature_name $FEATURE_NAME \
     --lr 0.0001 \
     --gd 20 --wd 0 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 8 \
     --eval-freq 5 \
	 --print-freq 20 \
     --root_log=$WORK_SPACE/$FEATURE_NAME-log \
     --lc_list=$ROOT/labels/count-labels-train.lst \
     --root_model='/DATACENTER/raid0/skye/'$FEATURE_NAME'-checkpoints' \
     --store_name=$FEATURE_NAME'_bs128_lr0.0001_netvlad_dyclipmix_warm0_ratio0.5_cbsample_Focalloss_gamma1_new' \
     --num_class=1004 \
     --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --model_name=NetVLADModel \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=FocalLoss \
     --clip_length=60 \
     --warm_epoch=0 \
     --ratio=0.5 \
