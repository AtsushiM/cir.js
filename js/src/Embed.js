/* C.Embed = function(config) { */
function Embed(config) {
    var embed = create(config['type']);

    embed['controls'] = config['controls'] ? TRUE : FALSE;
    embed['preload'] = config['preload'] || 'auto';
    embed['autoplay'] = config['autoplay'] ? TRUE : FALSE;
    embed['loop'] = config['loop'] ? TRUE : FALSE;
    embed['src'] = config['dir'] +
        config['name'] + '.' + config['suffix'][0][0];

    return embed;
}
/* }; */
/* C['Embed']['supportcheck'] = embedSupportCheck; */
function embedSupportCheck(type, suffix) {
    if (win['HTML' + type + 'Element']) {
        var type = str2LowerCase(type),
            embed = create(type),
            support = [],
            i = 0,
            len = suffix.length;

        for (; i < len; i++) {
            if (embed.canPlayType(type + '/' + suffix[i][1])) {
                support.push(suffix[i]);
            }
        }

        if (support.length) {
            return support;
        }
    }
}
