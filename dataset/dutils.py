# PATH_TO_LABELS
ROOT='./labels'

# FEATURE_NAME: PATH_TO_FEATURE

path_dict = {
        "ResNet101": '/DATACENTER/s/skye/ResNet101-feature',
        "TSM-R50": '/DATACENTER/s/skye/TSM-R50-feature',
        "ResNet50": '/DATACENTER/s/skye/ResNet50-feature'}

# FEATURE_DIM
dim_dict = {
            "ResNet101": 2048,
            "TSM-R50": 2048,
            "ResNet50": 2048
            }

def get_feature_path(feature_name):
    return path_dict[feature_name]

def get_feature_dim(feature_name):
    return dim_dict[feature_name]

def get_label_path():
    lc_list = ROOT+'/count-labels-train.lst'
    train_list = ROOT+'/train.lst'
    val_list = ROOT+'/test.lst'
    return lc_list, train_list, val_list
