/* Test: "%JASMINE_TEST_PATH%" */
Global['Video'] = function(config) {
    if (!win['HTMLVideoElement']) {
        return FALSE;
    }

    var video = create('video'),
        suffix = config['suffix'] || [
            ['webm', 'webm'],
            ['mp4', 'mp4'],
            ['ogv', 'ogg']
        ],
        support = [],
        i = 0,
        len = suffix.length;

    for (; i < len; i++) {
        if (video.canPlayType('video/' + suffix[i][1])) {
            support.push([suffix[i][0]]);
        }
    }

    if (support.length === 0) {
        return FALSE;
    }

    video['controls'] = config['controls'] ? TRUE : FALSE;
    video['preload'] = config['preload'] || 'auto';
    video['autoplay'] = config['autoplay'] ? TRUE : FALSE;
    video['loop'] = config['loop'] ? TRUE : FALSE;
    video.src = config['dir'] + config['name'] + '.' + support[0];

    return video;
};
