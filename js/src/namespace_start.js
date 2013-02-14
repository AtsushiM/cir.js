// Cool is Right.
(function() {
var win = window,
    doc = document,
    TRUE = true,
    FALSE = false,
    NULL = null,
    EMPTY = '',
    NULLOBJ = {},
    UNDEFINED = undefined,
    isTouch = isTouchable(),
    ev,
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    csseaseOutExpo = cssCubicBezierFormat('0.19,1,0.22,1'),
    easebackrate = 1.70158,
    WindowAction,
    ExternalAndroid,
    ExternalIOS,
    Media,
    Tweener,
    WebStorage,
    mb,
    pc;
    /* C = win['C'] = {}, */
    C = {};

function cssCubicBezierFormat(text) {
    return 'cubic-bezier(' + text + ')';
}
function checkCSSAnimTranCheck(propnames, event_key) {
    var prop = propnames,
        el = create('p'),
        support = FALSE,
        prefix,
        css_prefix = EMPTY,
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

function splitSuffix(value) {
    value = value || EMPTY;
    value = EMPTY + value;

    return value.match(/^(.*?)([0-9\.]+)(.*)$/);
}
