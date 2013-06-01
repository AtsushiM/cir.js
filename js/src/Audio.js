Audio = C['Audio'] = function(config) {
    config['type'] = 'audio';
    config['suffix'] = Audio['support'];
    return Embed(config);
};
Audio['support'] = embedSupportCheck('Audio', [
    ['mp3', 'mpeg'],
    ['wav', 'wav'],
    ['ogg', 'ogg'],
    ['m4a', 'mp4']
]);
