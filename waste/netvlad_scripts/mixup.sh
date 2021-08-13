ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/EXPs'

export CUDA_VISIBLE_DEVICES='3'
python base_main.py  \
    --feature_name TSM-R50 \
     --lr 0.0001 \
     --gd 20 --wd 0 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq 5 \
	 --print-freq 20 \
     --root_log=$WORK_SPACE/TSM-R50-log \
     --lc_list=$ROOT/labels/count-labels.lst \
     --root_model='/DATACENTER/raid0/skye/TSM-R50-checkpoints' \
     --store_name='resnet101_bs128_lr0.0001_netvlad_mixup' \
     --num_class=1004 \
     --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --model_name=NetVLADModel \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
     --mixup=mixup \