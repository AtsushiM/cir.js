system_temp = C['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
system_temp['support'] = Audio['support'];
