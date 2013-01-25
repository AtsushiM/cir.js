/* Test: "../../spec/_src/src/Video/test.js" */
Global['Video'] = function(config) {
    config['type'] = 'Video';

    config['suffix'] = config['suffix'] || [
        ['webm', 'webm'],
        ['mp4', 'mp4'],
        ['ogv', 'ogg']
    ];

    return new Global['Embed'](config);
};
