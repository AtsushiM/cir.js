C['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'session';
    return new WebStorage(config);
};
