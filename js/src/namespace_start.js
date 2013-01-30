// Cool is Right.
(function() {
'use strict';
var win = window,
    doc = document,
    TRUE = true,
    FALSE = false,
    NULL = null,
    UNDEFINED = undefined,
    isTouch = isTouchDevice(),
    ev,
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    easebackrate = 1.70158,
    /* Global = win['C'] = {}; */
    Global = C = {};

function checkCSSAnimTranCheck(propnames, event_key) {
    var prop = propnames,
        el = create('p'),
        support = FALSE,
        prefix,
        css_prefix = '',
        i = prop.length,
        style,
        sheet,
        regex = new RegExp('^(.*?)' + prop[0] + '$', 'i');

    for (; i--;) {
        if (el.style[prop[i]] !== UNDEFINED) {
            support = TRUE;
            prefix = prop[i].match(regex)[1];

            if (prefix) {
                css_prefix = prefix.toLowerCase();
                event_key = css_prefix + event_key;
                css_prefix = '-' + css_prefix + '-';
            }
            else {
                event_key = event_key.toLowerCase();
            }

            style = append($('head'),
                create('style', {
                    type: 'text/css'
                }));
            sheet = style.sheet;

            break;
        }
    }

    return {
        event_key: event_key,
        support: support,
        prefix: prefix,
        css_prefix: css_prefix,
        sheet: sheet
    };
}

function jsonParse(json) {
    return win['JSON']['parse'](json);
}
function jsonStringify(text) {
    return win['JSON']['stringify'](text);
}
