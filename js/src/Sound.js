Sound = C['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
Sound['support'] = Audio['support'];
