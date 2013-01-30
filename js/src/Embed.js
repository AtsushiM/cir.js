/* Test: "../../spec/_src/src/Embed/test.js" */
/* Global.Embed = function(config) { */
function Embed(config) {
    var embed = create(config['type'].toLowerCase());

    embed['controls'] = config['controls'] ? TRUE : FALSE;
    embed['preload'] = config['preload'] || 'auto';
    embed['autoplay'] = config['autoplay'] ? TRUE : FALSE;
    embed['loop'] = config['loop'] ? TRUE : FALSE;
    embed['src'] = config['dir'] +
        config['name'] + '.' + config['suffix'][0][0];

    return embed;
}
/* }; */
/* Global['Embed']['supportcheck'] = embedSupportCheck; */
function embedSupportCheck(config) {
    if (!win['HTML' + config['type'] + 'Element']) {
        return FALSE;
    }

    var type = config['type'].toLowerCase(),
        embed = create(type),
        suffix = config['suffix'],
        support = [],
        i = 0,
        len = suffix.length;

    for (; i < len; i++) {
        if (embed.canPlayType(type + '/' + suffix[i][1])) {
            support.push(suffix[i]);
        }
    }

    if (!support.length) {
        return FALSE;
    }

    return support;
}
