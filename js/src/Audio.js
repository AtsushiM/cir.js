/* Test: "../../spec/_src/src/Audio/test.js" */
C['Audio'] = function(config) {
    config['type'] = 'audio';
    config['suffix'] = C['Audio']['support'];
    return Embed(config);
};
C['Audio']['support'] = embedSupportCheck('Audio', [
    ['mp3', 'mpeg'],
    ['wav', 'wav'],
    ['ogg', 'ogg'],
    ['m4a', 'mp4']
]);
