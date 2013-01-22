/* Test: "../../spec/_src/src/Audio/test.js" */
Global['Audio'] = function(config) {
    if (!win['HTMLAudioElement']) {
        return false;
    }

    var audio = new Audio(''),
        suffix = config['suffix'] || [
            ['mp3', 'mpeg'],
            ['wav', 'wav'],
            ['ogg', 'ogg'],
            ['m4a', 'mp4']
        ],
        support = [],
        i = 0,
        len = suffix.length;

    for (; i < len; i++) {
        if (audio.canPlayType('audio/' + suffix[i][1])) {
            support.push([suffix[i][0]]);
        }
    }

    if (support.length === 0) {
        return false;
    }

    audio['controls'] = config['controls'] ? true : false;
    audio['preload'] = config['preload'] || 'auto';
    audio['autoplay'] = config['autoplay'] ? true : false;
    audio['loop'] = config['loop'] ? true : false;
    audio.src = config['dir'] + config['name'] + '.' + support[0];

    return audio;
};
