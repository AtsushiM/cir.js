/* Test: "../../spec/_src/src/Audio/test.js" */
Global['Audio'] = function(config) {
    config['type'] = 'Audio';

    config['suffix'] = config['suffix'] || [
        ['mp3', 'mpeg'],
        ['wav', 'wav'],
        ['ogg', 'ogg'],
        ['m4a', 'mp4']
    ];

    return new Global['Embed'](config);
};
