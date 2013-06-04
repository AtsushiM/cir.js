system_temp = C['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
system_temp['support'] = Video['support'];
