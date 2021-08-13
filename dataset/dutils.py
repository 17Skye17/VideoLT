path_dict = {
        "ResNet101": '/DATACENTER/s/skye/ResNet101-feature',
        "TSM-R50": '/DATACENTER/s/skye/TSM-R50-feature',
        "ResNet50": '/DATACENTER/s/skye/ResNet50-feature'}

dim_dict = {
            "ResNet101": 2048,
            "TSM-R50": 2048,
            "ResNet50": 2048
            }

def get_feature_path(feature_name):
    return path_dict[feature_name]

def get_feature_dim(feature_name):
    return dim_dict[feature_name]
