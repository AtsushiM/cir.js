C['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = C['Video']['support'];
    return Embed(config);
};
C['Video']['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
