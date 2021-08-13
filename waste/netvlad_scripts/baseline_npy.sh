ROOT_DATASET='/DATACENTER/s/jia/new_ResNet101_feature'
ROOT='/DATACENTER/raid0/skye/FCVID-1004-clean'
WORK_SPACE='/home/skye/EXPs'

export CUDA_VISIBLE_DEVICES='0,1,2,3'
python base_main.py \
     --arch resnet101 --num_segments 16 \
     --gd 20 --lr 0.0001 --wd 0 --lr_steps 80 160 --epochs 1000 \
     --batch-size 128 -j 16 --consensus_type=avg --eval-freq=1 \
     --root_log=$WORK_SPACE/log \
	 --print-freq 20 \
     --lc_list=$ROOT/labels/count-labels.lst \
     --root_model=$WORK_SPACE/checkpoints \
     --store_name='resnet101_bs128_adam0.0005_frames16_v2classifier_newfeature_prediction_lr0.0001_multigpu' \
     --num_class=1004 \
     --dataset_type=npy \
     --train_list=$ROOT/data/train.lst \
     --val_list=$ROOT/data/test.lst \
     --dataset_path=$ROOT_DATASET \
     --model_name=UnlinearClassifier \
     --train_num_frames=120 \
     --val_num_frames=150 \
