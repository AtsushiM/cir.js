/* Test: "../../spec/_src/src/Video/test.js" */
Global['Video'] = function(config) {
    config['type'] = 'Video';

    config['suffix'] = Global['Video']['support'];

    return new Global['Embed'](config);
};
Global['Video']['support'] = embedSupportCheck({
    'type': 'Video',
    'suffix': [
        ['webm', 'webm'],
        ['mp4', 'mp4'],
        ['ogv', 'ogg']
    ]
});
