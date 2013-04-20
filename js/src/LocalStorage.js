C['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'local';
    return new WebStorage(config);
};
