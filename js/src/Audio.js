/* Test: "../../spec/_src/src/Audio/test.js" */
Global['Audio'] = function(config) {
    config['type'] = 'audio';
    config['suffix'] = Global['Audio']['support'];
    return Embed(config);
};
Global['Audio']['support'] = embedSupportCheck('Audio', [
    ['mp3', 'mpeg'],
    ['wav', 'wav'],
    ['ogg', 'ogg'],
    ['m4a', 'mp4']
]);
