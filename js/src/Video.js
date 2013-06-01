Video = C['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = Video['support'];
    return Embed(config);
};
Video['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
