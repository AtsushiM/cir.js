C['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
C['Movie']['support'] = C['Video']['support'];
