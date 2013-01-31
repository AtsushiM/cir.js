/* Test: "../../spec/_src/src/Video/test.js" */
Global['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = Global['Video']['support'];
    return Embed(config);
};
Global['Video']['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
