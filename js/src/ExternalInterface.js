C['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    if (config['android']) {
        return new ExternalAndroid(config);
    }

    return new ExternalIOS();
};
