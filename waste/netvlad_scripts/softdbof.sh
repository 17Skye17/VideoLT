ROOT_DATASET=/DATACENTER/raid0/jia/VideoLT_features
BASE_PATH=/home/jia/workspace/VideoLTExp/baseline

export CUDA_VISIBLE_DEVICES='3'

PYTHONPATH=. python -u $BASE_PATH/base_main.py \
     --arch resnet50 --num_segments 32 \
     --gd 20 --lr 0.0005 --wd 1e-4 --lr_steps 5 10 --epochs 1000 \
     --batch-size 128 -j 16 --consensus_type=avg --eval-freq=1 \
     --root_log='/DATACENTER/raid0/jia/FCVIDLT_LOG' \
	 --print-freq 20 \
     --lc_list=$ROOT_DATASET/labels/count-labels.lst \
     --feat_name=$ROOT_DATASET/ImageNet_R50_120frames_new.hdf5 \
     --root_model='/DATACENTER/raid0/jia/VideoLTcheckpoints/' \
     --store_name='BasicDLoader_cluster2000_softdbof_bs128_adam0.0005_frames32_baseline' \
     \
     --num_class=1004 \
     --dataset_type=hdf5 \
     --train_list=$ROOT_DATASET/hdf5_datalist/train_videofolder.txt \
     --val_list=$ROOT_DATASET/hdf5_datalist/val_videofolder.txt \
     \
     --model_name=SoftDBOF_Model \
