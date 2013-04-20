C['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
C['Sound']['support'] = C['Audio']['support'];
