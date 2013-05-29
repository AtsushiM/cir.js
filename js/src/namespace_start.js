// Cool is Right.
/* (function() { */
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
        if (isDefined(el.style[prop[i]])) {
            support = TRUE;
            prefix = prop[i].match(regex)[1];

            if (prefix) {
                css_prefix = str2LowerCase(prefix);
                event_key = css_prefix + event_key;
                css_prefix = '-' + css_prefix + '-';
            }
            else {
                event_key = str2LowerCase(event_key);
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

function str2LowerCase(a) {
    return a['toLowerCase']();
}

function noIndexOf(str, needle) {
    return str.indexOf(needle) != -1 ? TRUE : FALSE;
}

function splitSuffix(value) {
    return (EMPTY + (value || EMPTY)).match(/^(.*?)(-?[0-9\.]+)(.*)$/);
}

function bindOnProp(that, config) {
    var i,
        temp;

    for (i in config) {
        temp = i.match(/^on(.+)$/);
        if (temp) {
            that['on'](temp[1], proxy(that, config[i]));
        }
    }
}

function sheetAddCSSRule(sheet, id, rule) {
    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

function this_stop__super() {
    this['stop']();
    this['_super']();
}
function this_detach() {
    this['detach']();
}
function this_fire_complete(arg) {
    this['fire']('complete', arg);
}
function this_fire_start() {
    this['fire']('start');
}
function this_fire_progress(arg) {
    this['fire']('progress', arg);
}
function this_uncontract(id) {
    if (id) {
        var temp = this._disposestore,
            arg = temp[id];

        delete temp[id];

        off(arg[0], arg[1], arg[2]);
    }
}
function this_contract(el, e, handler /* varless */, mine, id) {
    mine = this;

    if (!mine._disposestore) {
        mine._disposestore = {};
    }
    /* var id = ++this._disposecountid; */
    id = ++mine._disposecountid;

    on(el, e, handler);
    mine._disposestore[id] = [el, e, handler];

    return id;
}

var win = window,
    doc = document,
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
    class_initializing = FALSE,
    class_fnTest = /0/.test(function() {
        0;
    }) ? /\b_super\b/ : /.*/,
    animeframeobj,

ev,
AbstractTask,
ElementLoad,
Progress,
WindowAction,
ExternalAndroid,
ExternalIOS,
Media,
Tweener,
WebStorage,
mb,
pc,
PC_browser,
$_methods,
animeframe_check,
animeframe_len,
animeframe_animeframe,
animeframe_cancelframe,
/* windowload_loaded = FALSE, */
windowload_loaded,
windowload_winload,
deviceshake_Shake,
deviceshake_convert,
servermeta_xhr,
servermeta_isLoaded;
