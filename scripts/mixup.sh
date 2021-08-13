ROOT='./labels'
FEATURE_NAME='ResNet101'

export CUDA_VISIBLE_DEVICES='2'
python base_main.py  \
     --augment "mixup" \
     --feature_name $FEATURE_NAME \
     --lr 0.0001 \
     --gd 20 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq 5 \
	 --print-freq 20 \
     --root_log=$FEATURE_NAME-log \
     --lc_list=$ROOT/count-labels-train.lst \
     --root_model=$FEATURE_NAME'-checkpoints' \
     --store_name=$FEATURE_NAME'_bs128_lr0.0001_lateavg_mixup' \
     --num_class=1004 \
     --train_list=$ROOT/train.lst \
     --val_list=$ROOT/test.lst \
     --model_name=NonlinearClassifier \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
