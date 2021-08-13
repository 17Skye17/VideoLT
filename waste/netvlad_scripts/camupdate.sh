ROOT_DATASET='/DATACENTER/s/jia/new_ResNet101_feature'
ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/EXPs'

export CUDA_VISIBLE_DEVICES='3'
python cam_main.py \
     --feature_name ResNet101 \
     --lr 0.0001 \
     --gd 20 --wd 0 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq 1 \
	 --print-freq 20 \
     --root_log=$WORK_SPACE/log \
     --lc_list=$ROOT/labels/count-labels.lst \
     --root_model=$WORK_SPACE/checkpoints \
     --store_name='resnet101_bs128_adam0.0005_frames16_v2classifier_newfeature_prediction_lr0.0001_lateavg_camupdate' \
     --num_class=1004 \
	 --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --model_name=UnlinearClassifier \
     --train_num_frames=120 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
	 --cam=update \
     --clip_length 60 \
