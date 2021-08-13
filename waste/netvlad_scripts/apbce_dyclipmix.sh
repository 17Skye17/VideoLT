ROOT_DATASET='/DATACENTER/s/jia/new_ResNet101_feature'
ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/EXPs'

export CUDA_VISIBLE_DEVICES='2'
python dy_main.py  \
    --feature_name ResNet101 \
     --lr 0.0001 \
     --gd 20 --wd 0 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq 5 \
	 --print-freq 20 \
     --root_log=$WORK_SPACE/log \
     --lc_list=$ROOT/labels/count-labels.lst \
     --root_model=$WORK_SPACE/checkpoints \
     --store_name='resnet101_bs128_lr0.0001_netvlad_dyclipmix_warm0_ratio0.5_APBCE' \
     --num_class=1004 \
     --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --model_name=NetVLADModel \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=APBCE \
     --clip_length=60 \
     --warm_epoch=0 \
     --ratio=0.5 \
