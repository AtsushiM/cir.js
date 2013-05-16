// Cool is Right.
(function() {
C = {};

function cssCubicBezierFormat(text) {
    return 'cubic-bezier(' + text + ')';
}
function checkCSSAnimTranCheck(prop, event_key) {
    var el = create('p'),
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

function jsonParse(text) {
    return JSON['parse'](text);
}
function jsonStringify(json) {
    return JSON['stringify'](json);
}

function noIndexOf(str, needle) {
    return str.indexOf(needle) != -1 ? TRUE : FALSE;
}

function splitSuffix(value) {
    return (EMPTY + (value || EMPTY)).match(/^(.*?)(-?[0-9\.]+)(.*)$/);
}

function this_stop__super() {
    this['stop']();
    this['_super']();
}
function this_detach() {
    this['detach']();
}

var win = window,
    doc = document,
    body,
    TRUE = true,
    FALSE = false,
    NULL = null,
    EMPTY = '',
    NULLOBJ = {},
    UNDEFINED = undefined,
    isTouch = isTouchable(),
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    csseaseOutExpo = cssCubicBezierFormat('0.19,1,0.22,1'),
    easebackrate = 1.70158,

ev,
Progress,
WindowAction,
ExternalAndroid,
ExternalIOS,
Media,
Tweener,
WebStorage,
mb,
pc,
$_methods;

