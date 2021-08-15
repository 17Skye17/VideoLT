FEATURE_NAME='ResNet101'
CKPT='/DATACENTER/raid0/skye/VideoLT_checkpoints/ResNet-101/ResNet101_bs128_lr0.0001_lateavg_baseline/ckpt.best.pth.tar'

export CUDA_VISIBLE_DEVICES='1'
python base_test.py \
     --resume $CKPT \
     --feature_name $FEATURE_NAME \
     --batch-size 128 -j 16 \
	 --print-freq 20 \
     --num_class=1004 \
     --model_name=NonlinearClassifier \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
