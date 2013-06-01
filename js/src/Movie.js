Movie = C['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
Movie['support'] = Video['support'];
