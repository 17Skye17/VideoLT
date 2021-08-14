FEATURE_NAME='ResNet101'

export CUDA_VISIBLE_DEVICES='2'
python dy_main.py  \
     --feature_name $FEATURE_NAME \
     --lr 0.0001 \
     --gd 20 --lr_steps 30 60 --epochs 100 \
     --batch-size 128 -j 16 \
     --eval-freq 5 \
	 --print-freq 20 \
     --root_log=$FEATURE_NAME-log \
     --root_model=$FEATURE_NAME'-checkpoints' \
     --store_name=$FEATURE_NAME'_bs128_lr0.0001_lateavg_framestack_warm0_ratio0.5_Focalloss_gamma1' \
     --gamma 1 \
     --num_class=1004 \
     --model_name=NonlinearClassifier \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=FocalLoss \
     --clip_length=60 \
     --warm_epoch=0 \
     --ratio=0.5 \
