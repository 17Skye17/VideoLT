# Código de Pytorch para VideoLT 

## [[Sitio Web](https://videolt.github.io/)][[Artículo](https://arxiv.org/abs/2105.02668)]


## Actualizaciones
- [01/14/2022] Videos originales subidos a Google Drive, para acceder por favor envíenos un correo electrónico: [zxwu at fudan.edu.cn](zxwu@fudan.edu.cn)
- [10/29/2021] Características (features) subidas a Google Drive, para acceder por favor envíenos un correo electrónico: [zxwu at fudan.edu.cn](zxwu@fudan.edu.cn)
- [09/28/2021] Características (features) subidas a Aliyun Drive (obsoleto), para acceder por favor envíenos un correo electrónico: [zxwu at fudan.edu.cn](zxwu@fudan.edu.cn)
- [08/23/2021] Enlaces de checkpoints subidos, lamentamos que estamos manejando limitaciones de ancho de banda de la red del campus, el dataset será publicado esta semana.
- [08/15/2021] Código publicado. Los enlaces de descarga del dataset y los enlaces de checkpoints se actualizarán en una semana.
- [07/29/2021] Dataset publicado, visite [https://videolt.github.io/](https://videolt.github.io/) para descargarlo.
- [07/23/2021] VideoLT fue aceptado por ICCV2021.

<img src="https://github.com/17Skye17/VideoLT/blob/master/pics/concept.png" width="400" alt="concept">

## Descripción General

**VideoLT** es un conjunto de datos de reconocimiento de video de cola larga (long-tailed) a gran escala, como un paso hacia el reconocimiento de video en el mundo real. Proporcionamos el dataset **VideoLT** y líneas base (baselines) de cola larga en este repositorio, incluyendo:
- [Class-balanced Sampling](https://arxiv.org/abs/1512.05830)
- [Square-root Sampling](https://arxiv.org/abs/1910.09217)
- [Mixup](https://arxiv.org/abs/1710.09412)
- [Class-balanced Loss](https://arxiv.org/abs/1901.05555)
- [LDAM Loss](https://arxiv.org/abs/1906.07413)
- [EQL](https://arxiv.org/abs/2003.05176)
- FrameStack

## Preparación de Datos

Tenga en cuenta que VideoLT es solo para uso **no comercial**, por favor envíenos un correo electrónico: [zxwu at fudan.edu.cn](zxwu@fudan.edu.cn) y acepte nuestra licencia, luego le enviaremos los enlaces de descarga. Proporcionamos videos originales (~1.7TB) y características extraídas (~900GB en total, ~295GB para cada una).

Para descomprimir los archivos `.tar.gz`, utilice los siguientes comandos:
```
cat TSM-R50-feature.tar.gz.part* | tar zx 
cat ResNet50-feature.tar.gz.part* | tar zx
cat ResNet101-feature.tar.gz.part* | tar zx
```

Para utilizar las características extraídas, modifique `dataset/dutils.py` y establezca la ruta correcta hacia las características.

## Model Zoo

Los scripts de línea base y los checkpoints se proporcionan en [MODELZOO.md](MODELZOO.md).

## FrameStack

FrameStack es un enfoque simple pero efectivo para el reconocimiento de video de cola larga que remuestrea los datos de entrenamiento a nivel de fotograma y adopta una estrategia de muestreo dinámico basada en el conocimiento aprendido por la red. La lógica detrás de FrameStack es muestrear dinámicamente más fotogramas de los videos en clases de cola (tail classes) y usar menos fotogramas para aquellos de clases cabeza (head classes).

<img src="https://github.com/17Skye17/VideoLT/blob/master/pics/framestack.png" width="400" alt="framestack">

## Uso

### Requisitos

```
pip install -r requirements.txt
```

### Preparar Ruta de Datos

1. Modifique `FEATURE_NAME`, `PATH_TO_FEATURE` y `FEATURE_DIM` en `dataset/dutils.py`.

2. Establezca `ROOT` en `dataset/dutils.py` a la carpeta `labels`. La estructura del directorio es:

```
    labels
    |-- count-labels-train.lst
    |-- test.lst
    |-- test_videofolder.txt
    |-- train.lst
    |-- train_videofolder.txt
    |-- val_videofolder.txt
    `-- validate.lst
```

### Entrenamiento

Proporcionamos scripts para el entrenamiento. Por favor, consulte [MODELZOO.md](MODELZOO.md). 


Ejemplos de scripts de entrenamiento:

```
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
     --root_model=$FEATURE_NAME'-checkpoints' \
     --store_name=$FEATURE_NAME'_bs128_lr0.0001_lateavg_mixup' \
     --num_class=1004 \
     --model_name=NonlinearClassifier \
     --train_num_frames=60 \
     --val_num_frames=150 \
     --loss_func=BCELoss \
```

Nota: Configurar `args.resample`, `args.augment` y `args.loss_func` permite aplicar múltiples estrategias de cola larga.

Opciones:
```
    args.resample: ['None', 'CBS','SRS']
    args.augment : ['None', 'mixup', 'FrameStack']
    args.loss_func: ['BCELoss', 'LDAM', 'EQL', 'CBLoss', 'FocalLoss']
```


### Prueba

Proporcionamos scripts para realizar pruebas en `scripts`. Modifique `CKPT` para apuntar a los checkpoints guardados.

Ejemplos de scripts de prueba:

```
FEATURE_NAME='ResNet101'
CKPT='VideoLT_checkpoints/ResNet-101/ResNet101_bs128_lr0.0001_lateavg_mixup/ckpt.best.pth.tar'

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
```

## Citación

Si encuentra que VideoLT es útil para su investigación, por favor considere citar:

```
@InProceedings{Zhang_2021_ICCV,
    author    = {Zhang, Xing and Wu, Zuxuan and Weng, Zejia and Fu, Huazhu and Chen, Jingjing and Jiang, Yu-Gang and Davis, Larry S.},
    title     = {VideoLT: Large-Scale Long-Tailed Video Recognition},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
    month     = {October},
    year      = {2021},
    pages     = {7960-7969}
}
```
