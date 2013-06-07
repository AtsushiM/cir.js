// cir.js v1.2.6 (c) 2013 Atsushi Mizoue.
(function(){
// Cool is Right.
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

function bindOnProp(that, config /* varless */, i, temp) {
    // var i,
    //     temp;

    for (i in config) {
        temp = i.match(/^on(.+)$/);
        if (temp) {
            that['on'](temp[1], proxy(that, config[i]));
        }
    }
}

function ifManualStart(that, config, method) {
    if (!config['manual']) {
        that[method || 'start']();
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

function apifirstload(id, src) {
    if (!$id(id)) {
        before(create('script', {
            'id': id,
            'src': src
        }), $('script'));
    }
}

var system_temp,
    win = window,
    doc = document,
    doc_head = doc.head || $('head'),
    TRUE = true,
    FALSE = false,
    NULL = null,
    EMPTY = '',
    NULLOBJ = {},
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
    required_obj = {},

Class,
Base,
Observer,
Audio,
Video,
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
HashQuery,
ScriptLoad,
DeviceOrientation,
DeviceMotion,
SSAnime,
Calc,
PC_browser,
$_methods,
animeframe_check,
animeframe_len,
animeframe_animeframe,
animeframe_cancelframe,
selector_Animation,
selector_csssupport,
selector_EASE,
/* windowload_loaded = FALSE, */
windowload_loaded,
windowload_winload,
deviceshake_Shake,
deviceshake_convert,
servermeta_xhr,
servermeta_isLoaded;
if (!Date['now']) {
    Date['now'] = function() {
        return +new Date;
    };
}

function dateNow() {
    return Date['now']();
}

function scrollTo(num) {
    win.scrollTo(0, num);
}
function pageTop() {
    scrollTo(1);
}

function override(target, vars /* varless */, i) {
    /* var i; */

    for (i in vars) {
        target[i] = vars[i];
    }

    return target;
}
function typeCast(str /* varless */, matchstr) {
    /* var matchstr = EMPTY + str; */
    matchstr = EMPTY + str;

    if (matchstr.match(/^{.*}$/)) {
        return jsonParse(matchstr);
    }
    else if (matchstr.match(/^[0-9\.]+$/)) {
        return +matchstr;
    }
    else if (matchstr == 'true') {
        return TRUE;
    }
    else if (matchstr == 'false') {
        return FALSE;
    }

    return str;
}
function toArray(obj/* varless */, ary) {
    /* var ary = []; */
    ary = [];

    ary.push.apply(ary, obj);

    return ary;
}

function replaceAll(targettext, needle, replacetext) {
    return targettext.split(needle).join(replacetext);
}
function _escape(html) {
    return replaceAll(
        replaceAll(
            replaceAll(
                replaceAll(
                    replaceAll(EMPTY + html, '&', '&amp;'),
                '"', '&quot;'),
            "'", '&#039;'),
        '<', '&lt;'),
    '>', '&gt;');
}
function _unescape(html) {
    return replaceAll(
        replaceAll(
            replaceAll(
                replaceAll(
                    replaceAll(EMPTY + html, '&gt;', '>'),
                '&lt;', '<'),
            '&#039;', "'"),
        '&quot;', '"'),
    '&amp;', '&');
}
function windowOpen(url, windowname, option /* varless */, i, option_ary) {
    // var i,
    //     option_ary = [];
    option_ary = [];

    for (i in option) {
        if (isBoolean(option[i])) {
            if (option[i] === TRUE) {
                option[i] = 'yes';
            }
            else if (option[i] === FALSE) {
                option[i] = 'no';
            }
        }
        option_ary.push(i + '=' + option[i]);
    }

    return win.open(url, windowname, option_ary.join(','));
}
function makeQueryString(vars /* varless */, sign, query, i) {
    // var sign = EMPTY,
    //     query = EMPTY,
    //     i;
    sign = query = EMPTY;

    for (i in vars) {
        if (vars[i]) {
            query += sign + i + '=' + encodeURIComponent(vars[i]);
            sign = '&';
        }
    }

    return query;
}
function parseQueryString(query /* varless */, params, i, p, result) {
    query = query
        .replace(/^[\#\?]/, EMPTY);

    // var params = query.split('&'),
    //     i = params.length,
    //     p,
    //     result = {};
    params = query.split('&'),
    i = params.length,
    result = {};

    for (; i--;) {
        p = params[i].split('=');
        result[p[0]] = typeCast(decodeURIComponent(p[1]));
    }
    return result;
}
function is(key, vars) {
    return Object.prototype.toString.call(vars) == '[object ' + key + ']' ?
               TRUE : FALSE;
}
function isObject(vars) {
    return is('Object', vars);
}
function isNumber(vars) {
    return is('Number', vars);
}
function isString(vars) {
    return is('String', vars);
}
function isFunction(vars) {
    return is('Function', vars);
}
function isBoolean(vars) {
    return is('Boolean', vars);
}
function isArray(vars) {
    return is('Array', vars);
}
function isDefined(vars) {
    return vars === void 0 ? FALSE : TRUE;
}
function isTouchable() {
    return 'ontouchstart' in win;
}
function nullFunction() {
}
function abstraceFunction() {
    throw new Error('call abstract-function.');
}
function eventPrevent(e) {
    e.preventDefault();
    return FALSE;
}
function eventStop(e) {
    e.stopPropagation();
    return FALSE;
}
function checkUserAgent(pattern, ua) {
    return !!(ua || navigator.userAgent).match(pattern);
}
function proxy(target, func) {
    return function() {
        return func.apply(target, arguments);
    };
}
function owner(ownerObj, methods, overrideObj /* varless */, i) {
    /* var i; */
    methods = methods || ownerObj;
    overrideObj = overrideObj || methods;

    for (i in methods) {
        if (isFunction(methods[i])) {
            overrideObj[i] = proxy(ownerObj, methods[i]);
        }
    }

    override(ownerObj, overrideObj);

    return overrideObj;
}

function binarySearch(arg) {
    arg = arg || NULLOBJ;

    return _binarySearch(
        arg['low'] || 0,
        arg['high'] || 0,
        arg['compare'] || nullFunction,
        arg['end'] || nullFunction
    );
}
function _binarySearch(low, high, compare, end /* varless */, middle) {
    /* var middle; */

    while (TRUE) {
        middle = ~~((low + high) / 2);

        if (low == middle) {
            return end(middle);
        }
        else if (compare(middle)) {
            low = middle;
        }
        else {
            high = middle;
        }
    }
}
function hasDeclaredArgument(func) {
    return func.toString().match(/^function.*\((.+)\)/);
}
function copyArray(ary) {
    return isArray(ary) ? ary.slice(0) : ary;
}
function copyObject(obj) {
    return isObject(obj) ? override({}, obj) : obj;
}

C['util'] = {
    'pageTop': pageTop,
    'override': override,
    'replaceAll': replaceAll,
    'escape': _escape,
    'unescape': _unescape,
    'windowOpen': windowOpen,
    'typeCast': typeCast,
    'makeQueryString': makeQueryString,
    'parseQueryString': parseQueryString,
    'is': is,
    'isObject': isObject,
    'isNumber': isNumber,
    'isString': isString,
    'isFunction': isFunction,
    'isBoolean': isBoolean,
    'isArray': isArray,
    'isDefined': isDefined,
    'isTouchable': isTouchable,
    'nullFunction': nullFunction,
    'abstraceFunction': abstraceFunction,
    'eventPrevent': eventPrevent,
    'eventStop': eventStop,
    'checkUserAgent': checkUserAgent,
    'proxy': proxy,
    'owner': owner,
    'binarySearch': binarySearch,
    'toArray': toArray,
    'copyArray': copyArray,
    'copyObject': copyObject //,
    /* 'hasDeclaredArgument': hasDeclaredArgument */
};
function $(selector) {
    return $child(selector, doc);
}
function $$(selector) {
    return $$child(selector, doc);
}
function $child(selector, el) {
    return el.querySelector(selector);
}
function $$child(selector, el) {
    return toArray(el.querySelectorAll(selector));
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(el, cls) {
    if (el.className.indexOf(cls) >= 0) {
        return TRUE;
    }
    return FALSE;
}

function addClass(el, cls /* varless */, between, orgcls) {
    if (!hasClass(el, cls)) {
        // var between = EMPTY,
        //     orgcls = el.className;
        between = EMPTY,
        orgcls = el.className;

        if (orgcls) {
            between = ' ';
        }

        el.className = orgcls + between + cls;
    }
}

function removeClass(el, cls /* varless */, addedcls, attachcls, i) {
    if (hasClass(el, cls)) {
        // var addedcls,
        //     attachcls = [],
        //     i;
        attachcls = [];

        addedcls = el.className.split(' ');
        i = addedcls.length;

        for (; i--;) {
            if (cls != addedcls[i]) {
                attachcls.push(addedcls[i]);
            }
        }

        el.className = attachcls.join(' ');
    }
}
function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        removeClass(el, cls);
    }
    else {
        addClass(el, cls);
    }
}

function attr(el, vars, value /* varless */, i) {
    /* var i; */

    if (isObject(vars)) {
        for (i in vars) {
            if (isDefined(vars[i])) {
                el.setAttribute(i, vars[i]);
            }
        }

        return TRUE;
    }
    else if (!isDefined(value)) {
        return el.getAttribute(vars);
    }

    el.setAttribute(vars, value);
}
function removeAttr(el, key) {
    el.removeAttribute(key);
}

function create(tagname, attribute /* varless */, el) {
    /* var el= doc.createElement(tagname); */
    el = doc.createElement(tagname);

    if (attribute) {
        attr(el, attribute);
    }

    return el;
}
function toElements(txt) {
    var div = create('div');

    html(div, txt);

    return toArray(div.children);
}
function toElement(txt) {
    return toElements(txt)[0];
}

function on(el, eventname, handler) {
    el.addEventListener(eventname, handler, FALSE);
}
function off(el, eventname, handler) {
    el.removeEventListener(eventname, handler, FALSE);
}

function delegate(el, clsname, eventname, handler) {
    on(el, eventname, wraphandle);

    function wraphandle(e) {
        var el = e.target;

        if (hasClass(el, clsname)) {
            handler.apply(el, arguments);
        }
    }

    return wraphandle;
}

function show(el) {
    el.style.display = 'block';
}
function hide(el) {
    el.style.display = 'none';
}
function css(el, addstyle /* varless */, style, i, key, value) {
    // var style = el.style,
    //     i,
    //     key,
    //     value;
    style = el.style;

    for (i in addstyle) {
        key = i;
        value = addstyle[i];

        if (isNumber(value)) {
            value += 'px';
        }

        style[key] = value;
    }
}
function computedStyle(el) {
    return doc.defaultView.getComputedStyle(el, NULL);
}
function parent(el) {
    return el['parentNode'];
}
function append(el, addel) {
    return el['appendChild'](addel);
}
function beforeafter(el, addel, target) {
    return parent(el)['insertBefore'](addel, target);
}
function before(el, addel) {
    return beforeafter(el, addel, el);
}
function after(el, addel) {
    return beforeafter(el, addel, el.nextSibling);
}
function insertBefore(el, addel) {
    return el.insertBefore(addel, el.firstChild);
}
function remove(el) {
    return parent(el).removeChild(el);
}
function html(el, text) {
    if (!isDefined(text)) {
        return el.innerHTML;
    }

    el.innerHTML = text;
}
function val(el, value) {
    if (!isDefined(value)) {
        return el.value;
    }

    el.value = value;
}

function reflow(el) {
    el = el || doc.body;
    el.offsetTop;
}

C['dom'] = {
    'win': win,
    'doc': doc,
    '$': $,
    '$$': $$,
    '$child': $child,
    '$$child': $$child,
    '$id': $id,
    'on': on,
    'off': off,
    'delegate': delegate,
    'create': create,
    'show': show,
    'hide': hide,
    'hasClass': hasClass,
    'addClass': addClass,
    'removeClass': removeClass,
    'toggleClass': toggleClass,
    'css': css,
    'computedStyle': computedStyle,
    'append': append,
    'parent': parent,
    'before': before,
    'after': after,
    'insertBefore': insertBefore,
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html,
    'val': val,
    'reflow': reflow,
    'toElement': toElement,
    'toElements': toElements
};
Class = C['lass'] = function() {};

/* (function() { */
    Class['extend'] = function(props/* varless */, SuperClass, i) {
        // var SuperClass = this,
        //     i;
        SuperClass = this;

        function Class() {
            if (!class_initializing && this['init']) {
                this['init'].apply(this, arguments);
            }
        }

        class_initializing = TRUE;
        Class.prototype = new SuperClass();
        class_initializing = FALSE;

        Class.prototype['constructor'] = Class;

        for (i in props) {
            if (props.hasOwnProperty(i)) {
                addMethod(i);
            }
        }

        function addMethod(key) {
            var prop = props[key],
                _super = SuperClass.prototype[key],
                isMethodOverride = (
                    isFunction(prop) &&
                    isFunction(_super) &&
                    class_fnTest.test(prop)
                );

            if (isMethodOverride) {
                Class.prototype[key] = function() {
                    var that = this,
                        ret,
                        tmp = that['_super'];

                    that['_super'] = _super;

                    ret = prop.apply(that, arguments);

                    that['_super'] = tmp;

                    return ret;
                };
            }
            else {
                Class.prototype[key] = prop;
            }
        }

        Class['extend'] = SuperClass['extend'];

        return Class;
    };
/* }()); */

function classExtend(cls, prop, support /* varless */, klass) {
    cls = cls || Class;

    /* var klass = cls['extend'](prop); */
    klass = cls['extend'](prop);

    if (isDefined(support)) {
        klass['support'] = support;
    }

    return klass;
}
function classExtendBase(prop, support) {
    return classExtend(Base, prop, support);
}
function classExtendObserver(prop, support) {
    return classExtend(Observer, prop, support);
}
Base = C['Base'] = classExtend(NULL, {
    _disposecountid: 0,
    'dispose': function(/* varless */ that, i, temp) {
        that = this;

        /* var temp = that._disposestore; */
        temp = that._disposestore;

        for (i in temp) {
            off.apply(NULL, temp[i]);
        }

        for (i in that) {
            temp = that[i];

            if (temp && temp['dispose']) {
                temp['dispose']();
            }
        }

        that.__proto__ = NULL;

        for (i in that) {
            that[i] = NULL;
            delete that[i];
        }
    },
    _contract: this_contract,
    'contract': this_contract,
    _uncontract: this_uncontract,
    'uncontract': this_uncontract
});
Observer = C['Observer'] = classExtendBase({
    'init': function() {
        this._observed = {};
    },
    'on': function(key, func /* varless */, that, observed) {
        that = this;
        observed = that._observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func /* varless */, that) {
        /* var that = this; */
        that = this;

        that['on'](key, wrapfunc);

        function wrapfunc(vars) {
            func(vars);
            that['off'](key, wrapfunc);
        }
    },
    'off': function(key, func /* varless */, that, observed, target, i) {
        // var observed = that._observed,
        //     target = observed[key],
        //     i;
        that = this;
        observed = that._observed;

        if (func) {
            target = observed[key];

            if (target) {
                for (i = target.length; i--;) {
                    if (func == target[i]) {
                        target.splice(i, 1);

                        if (target.length == 0) {
                            delete observed[key];
                        }

                        return TRUE;
                    }
                }
            }

            return FALSE;
        }

        return delete observed[key];
    },
    'fire': function(key) {
        var target = this._observed[key],
            args,
            func,
            i,
            len;

        if (target) {
            args = toArray(arguments).slice(1);

            for (i = 0, len = target.length; i < len; i++) {
                func = target[i];
                if (func) {
                    func.apply(NULL, args);
                }
            }
        }
    }
});
ev = C['Event'] = classExtendBase({
    'SWITCHCLICK': isTouch ? 'touchstart' : 'click',
    'SWITCHDOWN': isTouch ? 'touchstart' : 'mousedown',
    'SWITCHMOVE': isTouch ? 'touchmove' : 'mousemove',
    'SWITCHUP': isTouch ? 'touchend' : 'mouseup',
    'SWITCHOVER': isTouch ? 'touchstart' : 'mouseover',
    'SWITCHOUT': isTouch ? 'touchend' : 'mouseout',
    'LOAD': 'load',
    'CHANGE': 'change',
    'CLICK': 'click',
    'MOUSEDOWN': 'mousedown',
    'MOUSEMOVE': 'mousemove',
    'MOUSEUP': 'mouseup',
    'MOUSEOVER': 'mouseover',
    'MOUSEOUT': 'mouseout',
    'TOUCHSTART': 'touchstart',
    'TOUCHMOVE': 'touchmove',
    'TOUCHEND': 'touchend',
    'RESIZE': 'resize'
});
ev = C['e'] = new ev();
C['ease'] = {
    'linear': function(time, from, dist, duration) {
        return dist * time / duration + from;
    },
    'inCubic': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 3) + from;
    },
    'outCubic': function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 3) + 1) + from;
    },
    'inOutCubic': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 3) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 3) + 2) + from;
    },
    'inQuart': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 4) + from;
    },
    'outQuart': function(time, from, dist, duration) {
        return -dist * (Math.pow(time / duration - 1, 4) - 1) + from;
    },
    'inOutQuart': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 4) + from;
        }
        return -dist / 2 * (Math.pow(time - 2, 4) - 2) + from;
    },
    'inQuint': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 5) + from;
    },
    'outQuint': function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 5) + 1) + from;
    },
    'inOutQuint': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 5) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 5) + 2) + from;
    },
    'inSine': function(time, from, dist, duration) {
        return dist *
            (1 - Math.cos(time / duration * (Math.PI / 2))) + from;
    },
    'outSine': function(time, from, dist, duration) {
        return dist * Math.sin(time / duration * (Math.PI / 2)) + from;
    },
    'inOutSine': function(time, from, dist, duration) {
        return dist / 2 * (1 - Math.cos(Math.PI * time / duration)) + from;
    },
    'inExpo': function(time, from, dist, duration) {
        return dist * Math.pow(2, 10 * (time / duration - 1)) + from;
    },
    'outExpo': function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    'inOutExpo': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(2, 10 * (time - 1)) + from;
        }
        return dist / 2 * (-Math.pow(2, -10 * --time) + 2) + from;
    },
    'inCirc': function(time, from, dist, duration) {
        return dist * (1 - Math.sqrt(1 - (time /= duration) * time)) + from;
    },
    'outCirc': function(time, from, dist, duration) {
        return dist *
            Math.sqrt(1 - (time = time / duration - 1) * time) + from;
    },
    'inOutCirc': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (1 - Math.sqrt(1 - time * time)) + from;
        }
        return dist / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + from;
    },
    'inQuad': function(time, from, dist, duration) {
        return dist * (time /= duration) * time + from;
    },
    'outQuad': function(time, from, dist, duration) {
        return -dist * (time /= duration) * (time - 2) + from;
    },
    'inOutQuad': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * time * time + from;
        }
        return -dist / 2 * ((--time) * (time - 2) - 1) + from;
    },
    'inBack': function(time, from, dist, duration) {
        return dist * (time /= duration) * time * ((easebackrate + 1) * time - easebackrate) + from;
    },
    'outBack': function(time, from, dist, duration) {
        return dist * ((time = time / duration - 1) * time *
                ((easebackrate + 1) * time + easebackrate) + 1) + from;
    },
    'inOutBack': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (time * time *
                    (((easebackrate *= (1.525)) + 1) * time - easebackrate)) + from;
        }
        return dist / 2 * ((time -= 2) * time *
                (((easebackrate *= (1.525)) + 1) * time + easebackrate) + 2) + from;
    }
};
C['ssease'] = {
    'linear': 'linear',

    'inCubic': cssCubicBezierFormat('0.55,0.055,0.675,0.19'),
    'outCubic': cssCubicBezierFormat('0.215,0.61,0.355,1'),
    'inOutCubic': cssCubicBezierFormat('0.645,0.045,0.355,1'),

    'inQuart': cssCubicBezierFormat('0.895,0.03,0.685,0.22'),
    'outQuart': cssCubicBezierFormat('0.165,0.84,0.44,1'),
    'inOutQuart': cssCubicBezierFormat('0.77,0,0.175,1'),

    'inQuint': cssCubicBezierFormat('0.755,0.05,0.855,0.06'),
    'outQuint': cssCubicBezierFormat('0.23,1,0.32,1'),
    'inOutQuint': cssCubicBezierFormat('0.86,0,0.07,1'),

    'inSine': cssCubicBezierFormat('0.47,0,0.745,0.715'),
    'outSine': cssCubicBezierFormat('0.39,0.575,0.565,1'),
    'inOutSine': cssCubicBezierFormat('0.445,0.05,0.55,0.95'),

    'inExpo': cssCubicBezierFormat('0.95,0.05,0.795,0.035'),
    'outExpo': cssCubicBezierFormat('0.19,1,0.22,1'),
    'inOutExpo': cssCubicBezierFormat('1,0,0,1'),

    'inCirc': cssCubicBezierFormat('0.6,0.04,0.98,0.335'),
    'outCirc': cssCubicBezierFormat('0.075,0.82,0.165,1'),
    'inOutCirc': cssCubicBezierFormat('0.785,0.135,0.15,0.86'),

    'inQuad': cssCubicBezierFormat('0.55,0.085,0.68,0.53'),
    'outQuad': cssCubicBezierFormat('0.25,0.46,0.45,0.94'),
    'inOutQuad': cssCubicBezierFormat('0.455,0.03,0.515,0.955'),

    'inBack': [cssCubicBezierFormat('0.6,0,0.735,0.045'),cssCubicBezierFormat('0.6,-0.28,0.735,0.045')],
    'outBack': [cssCubicBezierFormat('0.175,0.885,0.32,1'),cssCubicBezierFormat('0.175,0.885,0.32,1.275')],
    'inOutBack': [cssCubicBezierFormat('0.68,0,0.265,1'),cssCubicBezierFormat('0.68,-0.55,0.265,1.55')]
};
/* (function() { */
system_temp = checkCSSAnimTranCheck([
    'animation',
    'webkitAnimation'
], 'Animation');

var ssanime_prefix = system_temp.prefix,
    ssanime_css_prefix = system_temp.css_prefix,
    ssanime_event_key = system_temp.event_key,
    ssanime_sheet = system_temp.sheet;

SSAnime = C['SSAnime'] =
classExtendObserver({
    _off: function(/* varless */el, end) {
        // var el = this._el,
        //     end = this._end;
        el = this._el,
        end = this._end;

        off(el, ssanime_event_key + 'End', end);
        off(el, 'animationend', end);
    },
    'init': function(el, property, option /* varless */, that, duration, ease, i, prop) {
        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        that._oncomplete = option['oncomplete'] || nullFunction;

        that._el = el;

        SSAnime['id']++;
        that._id = 'ciranim' + SSAnime['id'];

        // var duration = option['duration'] || SSAnime['duration'],
        //     // easeOutExpo
        //     ease = option['ease'] || csseaseOutExpo,
        //     i,
        //     prop = {};
        duration = option['duration'] || SSAnime['duration'],
        // easeOutExpo
        ease = option['ease'] || csseaseOutExpo,
        prop = {};

        for (i in property) {
            prop[i] = property[i];
            if (isNumber(prop[i])) {
                prop[i] = prop[i] + 'px';
            }
        }

        that.property = prop;

        prop = replaceAll(
            replaceAll(jsonStringify(prop), '"', EMPTY),
            ',',
            ';'
        );

        ssanime_sheet.insertRule(
            '@' + ssanime_css_prefix + 'keyframes ' + that._id + '{to' + prop + '}',
            ssanime_sheet.cssRules.length);

        if (!isArray(ease)) {
            ease = [ease];
        }

        SSAnime_addCSSRule(that._id, ssanime_css_prefix, duration, ease);

        ifManualStart(that, option);
    },
    'dispose': this_stop__super,
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */ that, el) {
        // var that = this,
        //     el = that._el;
        that = this,
        el = that._el;

        that._fire_start();

        that._end = endaction;
        on(el, ssanime_event_key + 'End', endaction);
        on(el, 'animationend', endaction);

        addClass(el, that._id);

        function endaction(e) {
            var rule = ssanime_sheet.cssRules,
                len = rule.length,
                name;

            that._off();


            if (ssanime_prefix == 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name == that._id) {
                        ssanime_sheet.deleteRule(len);
                    }
                }
                removeClass(el, that._id);

                css(el, that.property);
            }
            that._fire_complete(e);
        }
    },
    'stop': function(/* varless */stopobj) {
        /* var stopobj = {}; */
        stopobj = {};

        this['fire']('stop');

        stopobj[ssanime_css_prefix + 'animation-play-state'] = 'paused';

        css(this._el, stopobj);
        this._off();
    }
}, system_temp.support);

function SSAnime_addCSSRule(id, css_prefix, duration, eases/* varless */, i, len, rule) {
    // var i = 0,
    //     len = eases.length,
    //     rule = EMPTY;
    i = 0,
    len = eases.length,
    rule = EMPTY;

    for (; i < len; i++) {
        rule += css_prefix + 'animation:' +
                id + ' ' +
                duration + 'ms ' +
                eases[i] + ' 0s 1 normal both;';
    }

    sheetAddCSSRule(ssanime_sheet, id, rule);
}

SSAnime['id'] = 0;
SSAnime['duration'] = 500;
/* }()); */
system_temp = {
    'request': function(callback) {
        return this._animeframe.call(win, callback);
    },
    'cancel': function(id) {
        this._cancelframe.call(win, id);
    }
};

/* (function() { */
    // var animeframe_check = ['webkit', 'moz', 'o', 'ms'],
    //     animeframe_len,
    //     animeframe_animeframe,
    //     animeframe_cancelframe;

    animeframe_check = ['webkit', 'moz', 'o', 'ms'];

    if (win['requestAnimationFrame']) {
        animeframe_animeframe = win['requestAnimationFrame'];
        animeframe_cancelframe = win['cancelAnimationFrame'];
    }
    else {
        for (animeframe_len = animeframe_check.length; animeframe_len--; ) {
            if (win[animeframe_check[animeframe_len] + 'RequestAnimationFrame']) {
                animeframe_animeframe = win[animeframe_check[animeframe_len] + 'RequestAnimationFrame'];
                animeframe_cancelframe = win[animeframe_check[animeframe_len] + 'CancelAnimationFrame'];
                break;
            }
        }

        if (!animeframe_animeframe) {
            animeframe_animeframe = function(callback) {
                return setTimeout(callback, 1000 / C['AnimeFrame']['fps']);
            };
            animeframe_cancelframe = function(id) {
                clearTimeout(id);
            };
        }
    }

    system_temp._animeframe = animeframe_animeframe;
    system_temp._cancelframe = animeframe_cancelframe;
/* }()); */

system_temp = C['AnimeFrame'] = classExtendBase(system_temp);
system_temp['fps'] = 30;

C['animeframe'] = new system_temp();
Tweener = C['Tweener'] = classExtendObserver({
    'init': function(target, property, option /* varless */, name, prop, that) {
        // var name,
        //     prop;

        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        that._target = target;
        that._property = [];

        for (name in property) {
            prop = property[name];
            prop['name'] = name;

            prop.distance = prop['to'] - prop['from'];
            prop['prefix'] = prop['prefix'] || EMPTY;
            prop['suffix'] = prop['suffix'] ||
                (prop['suffix'] === EMPTY ? EMPTY : 'px');

            that._property.push(prop);
        }

        that._duration = option['duration'] || Tweener['duration'];
        that._ease = option['ease'] || that.__ease;
        /* that._oncomplete = option['oncomplete']; */

        ifManualStart(that, option);
    },
    'dispose': this_stop__super,
    // easeOutExpo
    __ease: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    _fire_complete: this_fire_complete,
    _loop: function(/* varless */i) {
        var that = this,
            items = Tweener.Items,
            item,
            now = dateNow(),
            time,
            n = items.length,
            /* i, */
            len,
            prop;

        while (n--) {
            item = items[n];
            /* len = item.property.length; */
            i = item._property.length;
            time = now - item.begin;

            if (time < item._duration) {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener._setProp(item._target, prop, item._ease(
                        time,
                        prop['from'],
                        prop.distance,
                        item._duration
                    ));
                }
            }
            else {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener._setProp(item._target, prop, prop['to']);
                }

                item._fire_complete();
                items.splice(n, 1);
            }
        }

        if (items.length) {
            C['animeframe']['request'](function() {
                if (that._loop) {
                    that._loop();
                }
            });

            return;
        }

        that._stop();
    },
    _fire_start: this_fire_start,
    'start': function(/* varless */ that) {
        /* var that = this; */
        that = this;

        that._fire_start();

        that.begin = dateNow();

        Tweener.Items.push(that);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            C['animeframe']['request'](function() {
                if (that._loop) {
                    that._loop();
                }
            });
        }
    },
    _stop: function() {
        Tweener.Items = [];
        C['animeframe']['cancel'](Tweener.timerId);
        Tweener.timerId = NULL;
    },
    'stop': function() {
        this['fire']('stop');
        this._stop();
    }
});
Tweener._setProp = function(target, prop, point) {
    if (prop['prefix'] || prop['suffix']) {
        target[prop['name']] = prop['prefix'] + point + prop['suffix'];
    }
    else {
        target[prop['name']] = point;
    }
};
/* Tweener.timerId = NULL; */
Tweener.Items = [];
Tweener['duration'] = 500;
// var $base = function(){},
//     checkQuerySelector = /^(.+[\#\.\s\[>:,]|[\[:])/;
function $base() {}

C['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    // if (typeof query == 'string') {
    //     if (!_parent) {
    //         if (
    //             checkQuerySelector.test(query)
    //         ) {
    //             $el = doc.querySelectorAll(query);
    //         }
    //         else if (query[0] == '#') {
    //             $el = [doc.getElementById(query.substring(1, query.length))];
    //         }
    //         else if (query[0] == '.') {
    //             $el =
    //                 doc
    //                 .getElementsByClassName(query.substring(1, query.length));
    //         }
    //         else {
    //             $el = doc.getElementsByTagName(query);
    //         }
    //     }
    //     else {
    //         $el = _parent.querySelectorAll(query);
    //     }
    // }
    // else {
    //     $el = [query];
    // }
    if (typeof query == 'string') {
        $el = (_parent || doc).querySelectorAll(query);
    }
    else {
        $el = [query];
    }

    instance = new $base();
    len = instance.length = $el.length;

    for (; len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
function selectorForExe(_this, func, arg) {
    var i = _this.length;

    arg = selectorMakeAry(arg);

    for (; i--;) {
        arg[0] = _this[i];
        func.apply(_this, arg);
    }

    return _this;
}
function selectorExe(_this, func, arg) {
    var ary = selectorMakeAry(arg);

    ary[0] = _this[0];

    return func.apply(NULL, ary);
}

function selectorMakeAry(arg) {
    var ary = [NULL];

    ary.push.apply(ary, arg);

    return ary;
}

$_methods = C['$'].methods = {
    'querySelectorAll': function(query) {
        return this[0].querySelectorAll(query);
    },
    'find': function(query) {
        return C['$'](query, this);
    },
    'parent': function() {
        return C['$'](parent(this[0]));
    },
    'on': function() {
        return selectorForExe(this, on, arguments);
    },
    'off': function() {
        return selectorForExe(this, off, arguments);
    },
    'delegate': function(clsname, eventname, handler/* varless */, that, temp) {
        that = this;
        /* var temp; */

        if (!that._delegated) {
            that._delegated = {};
        }
        temp = that._delegated;

        if (!temp[eventname]) {
            temp[eventname] = {};
        }
        temp = temp[eventname];

        if (!temp[clsname]) {
            temp[clsname] = [];
        }
        temp = temp[clsname];

        return selectorForExe(that, function() {
            temp.push([handler, delegate.apply(NULL, arguments)]);
        }, arguments);
    },
    'undelegate': function(clsname, eventname, handler) {
        var temp = this._delegated,
            i;

        if (temp && (temp = temp[eventname]) && (temp = temp[clsname])) {
            i = temp.length;

            if (!handler) {
                for (; i--; ) {
                    this['off'](eventname, temp[i][1]);
                    temp.splice(i, 1);
                }

                return TRUE;
            }

            for (; i--; ) {
                if (temp[i][0] === handler) {
                    this['off'](eventname, temp[i][1]);

                    temp.splice(i, 1);

                    return TRUE;
                }
            }
        }

        return FALSE;
    },
    'show': function() {
        return selectorForExe(this, show);
    },
    'hide': function() {
        return selectorForExe(this, hide);
    },
    'hasClass': function() {
        return selectorExe(this, hasClass, arguments);
    },
    'addClass': function() {
        return selectorForExe(this, addClass, arguments);
    },
    'removeClass': function() {
        return selectorForExe(this, removeClass, arguments);
    },
    'toggleClass': function() {
        return selectorForExe(this, toggleClass, arguments);
    },
    'css': function() {
        return selectorForExe(this, css, arguments);
    },
    'html': function() {
        return selectorExe(this, html, arguments);
    },
    'val': function() {
        return selectorExe(this, val, arguments);
    },
    'attr': function() {
        return selectorExe(this, attr, arguments);
    },
    'removeAttr': function() {
        return selectorForExe(this, removeAttr, arguments);
    },
    'append': function() {
        return selectorForExe(this, append, arguments);
    },
    'before': function() {
        return selectorExe(this, before, arguments);
    },
    'after': function() {
        return selectorExe(this, after, arguments);
    },
    'insertBefore': function() {
        return selectorExe(this, insertBefore, arguments);
    },
    'remove': function() {
        return selectorForExe(this, remove, arguments);
    }
};
/* (function() { */
// var selector_Animation = SSAnime || NULLOBJ,
//     selector_csssupport = selector_Animation['support'],
//     selector_EASE = NULLOBJ;
selector_Animation = SSAnime || NULLOBJ,
selector_csssupport = selector_Animation['support'],
selector_EASE = NULLOBJ;

if (selector_csssupport && C['ssease']) {
    selector_EASE = C['ssease'];
}
else if (C['ease']) {
    selector_EASE = C['ease'];
}

$_methods['animate'] = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return selectorForExe(this, selector_animate, arguments);
};
$_methods['stop'] = function(/* varless */ that, i) {
    that = this;

    if (that._animate) {
        /* var i = that._animate.length; */
        i = that._animate.length;

        for (; i--;) {
            that._animate[i]['stop']();
        }

        that._animate = NULL;
    }

    return that;
};

function selector_animate(el, params, duration, ease, callback/* varless */, style, anime, option) {
    // var style = el.style,
    //     anime,
    //     option;
    style = el.style;

    if (isFunction(duration)) {
        callback = duration;
        duration = NULL;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = NULL;
    }

    if (ease) {
        ease = selector_EASE[ease];
    }

    option = {
        'duration': duration,
        'ease': ease,
        'oncomplete': callback
    };

    if (selector_csssupport) {
        anime = new selector_Animation(
            el,
            params,
            option
        );
    }
    else {
        anime = new Tweener(
            el.style,
            selector_convertTweenerParam(el, params),
            option
        );
    }

    this._animate.push(anime);
}

function selector_convertTweenerParam(el, params) {
    var name,
        styled = computedStyle(el),
        tosplit,
        from,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);
        from = styled.getPropertyValue(name);

        if (!from || from == 'none') {
            from = 0;
        }
        else {
            from = +splitSuffix(from)[2];
        }

        retobj[name] = {
            'from': from,
            'to': +tosplit[2] || 0,
            'prefix': tosplit[1],
            'suffix': tosplit[3]
        };
    }

    return retobj;
}
/* }()); */
HashQuery = C['HashQuery'] = classExtendBase({
    'typeCast': function(str/* varless */, caststr, matchstr) {
        // var caststr = typeCast(str),
        //     matchstr;
        caststr = typeCast(str);

        if (str == caststr) {
            matchstr = str.match('^["\'](.*)["\']$');

            if (matchstr) {
                return matchstr[1];
            }
        }

        return caststr;
    },
    'makeHash': function(conf) {
        var hash = '#' + conf['mode'],
            vars = conf['vars'],
            sign = '?',
            i;

        for (i in vars) {
            hash +=
                sign +
                i + '=' +
                jsonStringify(vars[i]);
            sign = '&';
        }

        return encodeURI(hash);
    },
    'setHash': function(vars) {
        location.hash = this['makeHash'](vars);
        /* return TRUE; */
    },
    'parseHash': function(hashvars) {
        var hash = decodeURIComponent(hashvars)
               .split('#')[1],
            mode,
            varsHash,
            vars,
            splitVar,
            i;

        if (hash) {
            hash = hash.split('?');

            mode = hash[0];

            if (hash[1]) {
                vars = {};
                varsHash = hash[1].split('&');

                // hashをオブジェクトに整形
                for (i = varsHash.length; i--;) {
                    if (varsHash[i]) {
                        splitVar = varsHash[i].split('=');
                        vars[splitVar[0]] = this['typeCast'](splitVar[1]);
                    }
                }
            }

            return {
                'mode': mode,
                'vars': vars
            };
        }
    },
    'getHash': function() {
        return this['parseHash'](location.hash);
    }
});
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
Media = classExtendBase({
    'init': function(config) {
        var that = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            media = Audio,
            ev_canplay = 'canplay',
            autoplayid,
            _parent = config['el'] || doc.body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        if (config['type'] == 'Video') {
            media = Video;
        }

        media = media(config);

        that._el = media;

        if (media) {
            if (autoplay) {
                autoplay = function() {
                    that._uncontract(autoplayid);
                    that['play']();
                };

                autoplayid = that._contract(media, ev_canplay, autoplay);
            }
            if (loop) {
                that['loop'](TRUE);
            }

            if (config['oncanplay']) {
                that._contract(media, ev_canplay, config['oncanplay']);
            }
            if (config['onended']) {
                that._contract(media, ev_ended, config['onended']);
            }

            append(_parent, media);
        }
    },
    'dispose': function() {
        remove(this._el);
        this['_super']();
    },
    'getElement': function() {
        return this._el;
    },
    'getCurrent': function() {
        return this._el.currentTime;
    },
    'getDuration': function() {
        return this._el.duration;
    },
    'setCurrent': function(num) {
        this._el.currentTime = num;
    },
    'loop': function(bool /* varless */, that) {
        /* var that = this; */
        that = this;

        if (that._loopid) {
            that._uncontract(that._loopid);
            delete that._loopid;
        }

        if (bool) {
            that._loopid =
            that._contract(that._el, ev_ended, function() {
                that['stop']();
                that['play']();
            });
        }
    },
    'play': function() {
        this._el.play();
    },
    'pause': function() {
        this._el.pause();
    },
    'stop': function() {
        this['setCurrent'](0);
        this['pause']();
    }
});
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
system_temp = C['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
system_temp['support'] = Audio['support'];
Video = C['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = Video['support'];
    return Embed(config);
};
Video['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
system_temp = C['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
system_temp['support'] = Video['support'];
// Ajax
C['Ajax'] = classExtendObserver({
    'dispose': function() {
        this['stop']();
        this['_super']();
    },
    'init': function(config) {
        config = copyObject(config);

        var that = this,
            url = config['url'],
            type = config['type'] || 'GET',
            query = EMPTY,
            xhr = that._xhr = new XMLHttpRequest(),
            openargs;

        that['_super']();

        if (config.dataType == 'json') {
            that._json(config);
        }

        bindOnProp(that, config);

        if (!config['cache']) {
            that._cache(config);
        }
        if (config['query']) {
            query = that._query(config);
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    that['fire']('complete', xhr.responseText, xhr);
                }
                else {
                    that['fire']('error', xhr);
                }
            }
        };

        if (type == 'GET') {
            if (noIndexOf(url, '?')) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = EMPTY;
        }

        that._query = query;

        openargs = [type, url];

        if (config['sync']) {
            openargs.push(FALSE);
        }

        xhr.open.apply(xhr, openargs);

        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencoded');
        }

        ifManualStart(that, config);
    },
    _fire_start: this_fire_start,
    'start': function(/* varless */that) {
        that = this;

        that._fire_start();
        that._xhr.send(that._query);
    },
    'stop': function(/* varless */that) {
        that = this;

        that._xhr.abort();
        that['fire']('stop', that._xhr);
    },
    _query: function(config) {
        var query = config['query'];

        if (isObject(query)) {
            query = encodeURI(makeQueryString(query));
        }

        return query;
    },
    _cache: function(config) {
        if (!config['query']) {
            config['query'] = {};
        }

        config['query']['cir' + dateNow()] = '0';
    },
    _json: function(config) {
        var oncomplete = config['oncomplete'],
            onerror = config['onerror'];

        if (oncomplete) {
            config['oncomplete'] = function(data) {
                oncomplete(jsonParse(data));
            };
        }
        if (onerror) {
            config['onerror'] = function(data) {
                onerror(data);
            };
        }
    }
});
Progress = C['Progress'] = classExtendBase({
    _success: 0,
    _miss: 0,
    _progress: 0,
    _check: function(vars /* varless */, that, state) {
        // var that = this,
        //     state = NULL;
        that = this;
        /* state = NULL; */

        if (isDefined(vars)) {
            that._args.push(vars);
        }

        that._progress = that._success / that._waits;
        if (that._progress > 1) {
            that._progress = 1;
        }
        that._onprogress(that._progress);

        if (that._miss) {
            state = new Error('miss');
        }

        if (that._success == that._waits || that._miss) {
            that._oncomplete(state, that._args);
            that._oncomplete =
            that._onprogress = nullFunction;
        }
    },
    'init': function(config /* varless */, that, waits) {
        // var that = this,
        //     waits = config['waits'];
        that = this;
        waits = config['waits'];

        if (isArray(waits)) {
            waits = waits.length;
        }

        that._waits = waits;
        that._oncomplete = config['oncomplete'];
        that._onprogress = config['onprogress'] || nullFunction;

        that._args = [];
    },
    'getProgress': function() {
        return this._progress;
    },
    'pass': function(vars) {
        this._success++;

        this._check(vars);
    },
    'miss': function(vars) {
        this._miss++;

        this._check(vars);
    },
    'exit': function(vars /* varless */, that) {
        that = this;

        that._success = that._waits;

        that._check(vars);
    }
});
AbstractTask = classExtendObserver({
    'init': function(config/* varless */, that, queue) {
        that = this;

        that['_super']();

        config = config || NULLOBJ;

        /* var queue = copyArray(config['queue']) || []; */
        queue = copyArray(config['queue']) || [];

        bindOnProp(that, config);

        that['resetQueue'](queue);
        that._done = proxy(that, that._done);
    },
    _fire_start: this_fire_start,
    'start': function(/* varless */that) {
        that = this;

        that._fire_start();
        that._paused = FALSE;
        that._exeQueue();
    },
    'restart': function(queue) {
        this['resetQueue'](queue);
        this['start']();
    },
    'stop': function() {
        this._queue = NULL;
        this['fire']('stop');
    },
    'pause': function() {
        this._paused = TRUE;
        this['fire']('pause');
    },
    'resume': function(/* varles */that) {
        that = this;

        if (that._paused) {
            that['fire']('resume');
            that._paused = FALSE;
            that._exeQueue();
        }
    },
    'resetQueue': function(queue/* varless */, that, i) {
        that = this;

        if (queue) {
            that._orgqueue = copyArray(queue);
        }

        var _queue = that._queue = copyArray(that._orgqueue);

        for (i in _queue) {
            if (_queue[i]['resetQueue']) {
                _queue[i]['resetQueue']();
            }
        }

        that['fire']('reset');
    },
    _noticeChange: function() {
        this['fire']('change', this['getQueue']());
    },
    'setQueue': function(queue) {
        this._queue = copyArray(queue);
        this._noticeChange();
    },
    'getQueue': function() {
        return copyArray(this._queue);
    },
    'addTask': function(task, priority/* varless */, that) {
        that = this;

        if (
            !isNumber(priority) ||
            priority > that._queue.length
        ) {
            priority = that._queue.length;
        }

        that._queue.splice(priority, 0, task);

        that._noticeChange();
    },
    'removeTask': function(task/* varless */, that, i, len) {
        that = this;

        // var i = 0,
        //     len = that._queue.length;
        i = 0,
        len = that._queue.length;

        for (; i < len; i++ ) {
            if (that._queue[i] === task) {
                that._queue.splice(i, 1);
                that._noticeChange();

                break;
            }
        }
    },
    /* _exe: abstraceFunction, */
    _exeQueue: function() {
        if (!this._paused) {
            this._exe();
        }
    },
    _asyncAction: function(task /* varless */, that) {
        that = this;

        if (task['one'] && task['start']) {
            task['one']('complete', proxy(that, that._done));
            return proxy(task, task['start']);
        }

        if (hasDeclaredArgument(task)) {
            return proxy(that, task);
        }

        return function(done) {
            task.call(that);
            done();
        };
    } //,
    /* _done: abstraceFunction */
});
C['Parallel'] = C['Async'] = classExtend(AbstractTask, {
    _fire_complete: this_fire_complete,
    _exe: function(/* varless */that) {
        that = this;

        if (that._queue) {
            if (!that._queue.length) {
                return that._fire_complete();
            }

            that._processcount = that._queue.length;

            while (!that._paused && that._queue && that._queue[0]) {
                that._asyncAction(that._queue.shift())((that._done));
            }
        }
    },
    _fire_progress: this_fire_progress,
    _done: function(/* varless */that) {
        that = this;

        that._fire_progress();
        that._processcount--;

        if (!that._processcount) {
            that._fire_complete();
        }
    }
});
C['Serial'] = C['Sync'] = classExtend(AbstractTask, {
    _fire_complete: this_fire_complete,
    _exe: function(/* varless */that) {
        that = this;

        if (that._queue && !that._paused) {
            if (that._queue[0]) {
                return that._asyncAction(that._queue.shift())((that._done));
            }

            /* this['fire']('complete'); */
            that._fire_complete();
        }
    },
    _fire_progress: this_fire_progress,
    _done: function() {
        this._fire_progress();
        this._exe();
    }
});
C['Anvas'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        that._canvas = config['canvas'];
        that._ctx = that._canvas.getContext('2d');

        that['setSize'](config);
    },
    'setSize': function(vars) {
        if (vars['width']) {
            this._canvas.width = vars['width'];
        }
        if (vars['height']) {
            this._canvas.height = vars['height'];
        }
    },
    'pigment': function(vars) {
        var that = this,
            canv = create('canvas'),
            img = create('img');

        img.onload = function() {
            canv.width = vars['width'];
            canv.height = vars['height'];
            canv.getContext('2d').drawImage(img, 0, 0);

            vars.onload.apply(that, [canv, img]);
        };
        img.src = vars['src'];

        return {'image': canv, 'x': vars.x || 0, 'y': vars.y || 0};
    },
    'pigments': function(vars, callback) {
        var that = this,
            i,
            count = 0,
            ret = {};

        callback = callback || nullFunction;

        for (i in vars) {
            pigment(vars[i]);
        }

        function pigment(pig) {
            var pigload = pig['onload'] || nullFunction;

            pig.onload = function(canvas, img) {
                pigload(canvas, img);
                count--;

                if (count == 0) {
                    callback.call(that, ret);
                }
            };

            ret[i] = that['pigment'](pig);
            count++;
        }

        return ret;
    },
    'draw': function(layer) {
        var i = 0,
            len = layer.length,
            ctx = this._ctx,
            temp = this._canvas;

        ctx.clearRect(0, 0, temp.width, temp.height);

        for (; i < len; i++) {
            if (temp = layer[i]) {
                ctx['globalAlpha'] = (typeof temp['alpha'] == 'number' ? temp['alpha'] : 1);

                ctx.drawImage(temp['image'], temp['x'], temp['y']);
            }
        }
    }
}, !!win['HTMLCanvasElement']);
/* (function() { */
    var datefactory_convert_D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datefactory_convert_l = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datefactory_convert_F = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datefactory_convert_M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datefactory_convert = {
            // d = 01 ~ 31
            'd': function(date) {
                return datefactory_digit2(datefactory_convert['j'](date));
            },
            // j = 1 ~ 31
            'j': function(date) {
                return date.getDate();
            },
            // D = Mon ~ Sun
            'D': function(date) {
                return datefactory_convert_D[date.getDay()];
            },
            // l = Monday ~ Sunday
            'l': function(date) {
                return datefactory_convert_l[date.getDay()];
            },
            // F = Full Month
            'F': function(date) {
                return datefactory_convert_F[date.getMonth()];
            },
            // M = Short Month
            'M': function(date) {
                return datefactory_convert_M[date.getMonth()];
            },
            // m = 01 ~ 12
            'm': function(date) {
                return datefactory_digit2(datefactory_convert['n'](date));
            },
            // n = 1 ~ 12
            'n': function(date) {
                return date.getMonth() + 1;
            },
            // Y = 2013
            'Y': function(date) {
                return date.getFullYear();
            },
            // y = 13
            'y': function(date) {
                return datefactory_lower2(datefactory_convert['Y'](date));
            },
            // a = am || pm
            'a': function(date) {
                return str2LowerCase(datefactory_convert['A'](date));
            },
            // A = AM || PM
            'A': function(date) {
                return datefactory_convert['G'](date) < 12 ? 'AM' : 'PM';
            },
            // g = 1 ~ 12
            'g': function(date) {
                var hour = datefactory_convert['G'](date);

                if (hour == 12 || hour == 0 || hour == 24) {
                    hour = 12;
                }
                else {
                    hour %= 12;
                }

                return hour;
            },
            // G = 0 ~ 24
            'G': function(date) {
                return date.getHours();
            },
            // h = 01 ~ 12
            'h': function(date) {
                return datefactory_digit2(datefactory_convert['g'](date));
            },
            // H = 00 ~ 24
            'H': function(date) {
                return datefactory_digit2(datefactory_convert['G'](date));
            },
            // i = 00 ~ 59
            'i': function(date) {
                return datefactory_digit2(datefactory_convert['I'](date));
            },
            // s = 00 ~ 59
            's': function(date) {
                return datefactory_digit2(datefactory_convert['S'](date));
            },
            // I = 0 ~ 59
            'I': function(date) {
                return date.getMinutes();
            },
            // S = 0 ~ 59
            'S': function(date) {
                return date.getSeconds();
            }
        },
        datefactory_regFormat = /%([djDlFMmnYyaAgGhHisIS])/g;

function datefactory_formatReplace(hit, date) {
    return datefactory_convert[hit](date);
};

function datefactory_digit2(num) {
    num = +num;

    if (num < 10) {
        num = '0' + num;
    }

    return EMPTY + num;
}
function datefactory_lower2(num) {
    num = EMPTY + num;

    return num.slice(num.length - 2);
}

C['DateFactory'] = classExtendBase({
    'make': function(anydate) {
        if (isString(anydate)) {
            anydate = anydate.split(/[T:\-\+\/\s]/);

            // if (anydate.length == 3) {
            //     anydate.push(0, 0, 0);
            // }

            return new Date(
                +anydate[0],
                anydate[1] - 1,
                +anydate[2],
                +anydate[3] || 0,
                +anydate[4] || 0,
                +anydate[5] || 0
            );
        }
        if (is('Date', anydate)) {
            return anydate;
        }
        // if (isNumber(anydate)) {
        //     return new Date(anydate);
        // }

        return new Date(anydate || NULL);
    },
    'format': function(format, anydate) {
        anydate = this['make'](anydate);

        return format.replace(datefactory_regFormat, function(hit, $1) {
            return datefactory_formatReplace($1, anydate);
        });
    }
});
/* }()); */
C['Rollover'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        var cls = config['toggleClass'] || EMPTY,
            over = config['over'] || nullFunction,
            out = config['out'] || nullFunction;

        that._els = config['els'];

        that._switchover = function() {
            addClass(that, cls);
            over();
        }
        that._switchout = function() {
            removeClass(that, cls);
            out();
        }
        ifManualStart(that, config, 'attach');
    },
    'dispose': function() {
        this['detach']();
        this['_super']();
    },
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff /* varless */, that, i) {
        that = this;

        /* var i = that._els.length; */
        i = that._els.length;

        for (; i--;) {
            onoff(that._els[i], ev['SWITCHOVER'], that._switchover);
            onoff(that._els[i], ev['SWITCHOUT'], that._switchout);
            onoff(that._els[i], ev['MOUSEOUT'], that._switchout);
        }
    }
});
C['DataStore'] = classExtendBase({
    _createStore: function() {
        if (this._array) {
            return [];
        }

        return {};
    },
    'init': function(config) {
        this._array = (config || NULLOBJ)['array'] || FALSE,

        this['reset']();
    },
    'set': function(key, val/* varless */, i) {
        /* var i; */

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        for (i in key) {
            this._data[i] = key[i];
        }
    },
    'get': function(key) {
        var ret = this._createStore(),
            data = this._data,
            i;

        if (key) {
            return data[key];
        }

        for (i in data) {
            ret[i] = data[i];
        }

        return ret;
    },
    'remove': function(key/* varless */, that) {
        that = this;

        if (isDefined(that._data[key])) {
            if (that._array) {
                that.data.splice(key, 1);
            }
            else {
                delete that._data[key];
            }
        }
    },
    'reset': function() {
        this._data = this._createStore();
    }
});
WebStorage = classExtendBase({
    _createStore: function() {
        if (!this._array) {
            return {};
        }

        return [];
    },
    'init': function(config) {
        this._array = config['array'] || FALSE;
        this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
        this._storage = win[config['type'] + 'Storage'];
    },
    'set': function(key, val/* varless */, i) {
        /* var i; */

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        for (i in key) {
            this._storage.setItem(this._n + i, jsonStringify(key[i]));
        }
    },
    'get': function(key /* varless */, that) {
        that = this;

        var ret = this._createStore(),
            i,
            storage = that._storage;

        if (key) {
            return jsonParse(storage.getItem(that._n + key));
        }

        for (i in storage) {
            if (!that._n) {
                ret[i] = jsonParse(storage[i]);
            }
            else {
                key = i.split(that._n)[1];
                if (key) {
                    ret[key] = jsonParse(storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key /* varless */, that) {
        that = this;

        key = that._n + key;

        if (isDefined(that._storage.getItem(key))) {
            that._storage.removeItem(key);
        }
    },
    'reset': function(/* varless */ that, i) {
        that = this;

        if (!that._n) {
            return that._storage.clear();
        }

        /* var i; */

        for (i in that._storage) {
            that.remove(i);
        }
    }
});
C['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'local';
    return new WebStorage(config);
};
C['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'session';
    return new WebStorage(config);
};
C['DragFlick'] = classExtendBase({
    _t: function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    },
    _amount: function(vars/* varless */, that, startX, startY, dragflg) {
        // var that = this,
        //     startX,
        //     startY,
        //     dragflg = FALSE;
        that = this;

        that._contractid.push(
            that._contract(vars['el'], ev['SWITCHDOWN'], start),
            that._contract(win, ev['SWITCHUP'], end)
        );

        function start(e) {
            var changed = that._t(e);

            startX = changed.pageX;
            startY = changed.pageY;

            dragflg = TRUE;

            eventPrevent(e);
        }
        function end(e) {
            if (dragflg) {
                var changed = that._t(e),
                    amount = {
                        'x': changed.pageX - startX,
                        'y': changed.pageY - startY
                    };

                vars['callback'](amount);

                dragflg = FALSE;
            }
        }
    },
    _direction: function(vars) {
        this._amount({
            'el': vars['el'],
            'callback': function(amount) {
                var boundary = vars['boundary'] || 0,
                    direction = {
                        'change': FALSE,
                        'top': FALSE,
                        'right': FALSE,
                        'bottom': FALSE,
                        'left': FALSE,
                        'amount': amount
                    };

                if (Math.abs(amount['x']) > boundary) {
                    if (amount['x'] > 0) {
                        direction['right'] = TRUE;
                    }
                    else if (amount['x'] < 0) {
                        direction['left'] = TRUE;
                    }

                    direction['change'] = TRUE;
                }

                if (Math.abs(amount['y']) > boundary) {
                    if (amount['y'] > 0) {
                        direction['bottom'] = TRUE;
                    }
                    else if (amount['y'] < 0) {
                        direction['top'] = TRUE;
                    }

                    direction['change'] = TRUE;
                }

                vars['callback'](direction);
            }
        });
    },
    'init': function(config /* varless */, that) {
        that = this;

        that._contractid = [];
        that._config = config;

        config = config || NULLOBJ;
        ifManualStart(that, config, 'attach');
    },
    'attach': function(/* varless */that, flg) {
        that = this;

        var vars = this._config,
            el = vars['el'],
            start = vars['start'] || nullFunction,
            move = vars['move'] || nullFunction,
            end = vars['end'] || nullFunction,
            /* flg = FALSE, */
            startX = 0,
            startY = 0;

        if (vars['direction']) {
            that._direction({
                'el': el,
                'boundary': vars['boundary'],
                'callback': vars['direction']
            });
        }

        eventProxy(el, ev['SWITCHDOWN'], function(_e) {
            flg = TRUE;

            startX = _e.pageX;
            startY = _e.pageY;

            start({
                'e': _e,
                'move': {
                    'x': startX,
                    'y': startY
                }
            });
        });
        eventProxy(doc, ev['SWITCHMOVE'], function(_e) {
            if (flg) {
                move({
                    'e': _e,
                    'move': {
                        'x': _e.pageX - startX,
                        'y': _e.pageY - startY
                    }
                });
            }
        });
        eventProxy(doc, ev['SWITCHUP'], function(_e) {
            if (flg) {
                end({
                    'e': _e,
                    'move': {
                        'x': _e.pageX - startX,
                        'y': _e.pageY - startY
                    }
                });

                flg = FALSE;
            }
        });

        function eventProxy(el, ev, callback) {
            that._contractid.push(
                that._contract(el, ev, handler)
            );

            function handler(e) {
                callback(that._t(e));
            }
        }
    },
    'detach': function(/* varless */ that) {
        that = this;

        var ary = that._contractid,
            i = ary.length;

        for (; i--;) {
            that._uncontract(ary[i]);
        }

        that._contractid = [];
    }
});
C['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    if (config['android']) {
        return new ExternalAndroid(config);
    }

    return new ExternalIOS();
};
ExternalAndroid = classExtend(HashQuery, {
    'init': function(config) {
        // this._android = config['android'];
        // this._externalObj = config['externalObj'];
        this._config = config;
    },
    'call': function(conf) {
        this._config['android'][conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func /* varless */, that) {
        /* var that = this; */
        that = this;

        that._config['externalObj'][name] = function(vars) {
            func(that['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this._config['externalObj'][name];
    }
});
ExternalIOS = classExtend(HashQuery, {
    'init': function() {
        this._ios = {};
    },
    'dispose': function(/* varless */ that, i) {
        that = this;
        /* var i; */

        for (i in that._ios) {
            that['removeCallback'](i);
        }

        that['_super']();
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func /* varless */, that) {
        /* var that = this; */
        that = this;

        that._ios[name] = function(/* varless */ hash) {
            /* var hash = that['getHash'](); */
            hash = that['getHash']();

            if (hash['mode'] == name) {
                func(hash['vars']);
            }
        };
        on(win, ev_hashchange, that._ios[name]);
    },
    'removeCallback': function(name) {
        off(win, ev_hashchange, this._ios[name]);
        delete this._ios[name];
    }
});
C['Facebook'] = classExtendBase({
    _firstload: apifirstload,
    'includeAPI': function() {
        if ($id('fb-root')) {
            append(doc.body, create('div', {
                id: 'fb-root'
            }));
        }

        this._firstload('facebook-jssdk', '//connect.facebook.net/ja_JP/all.js#xfbml=1');
    },
    'shareURL': function(vars) {
        return 'https://www.facebook.com/dialog/feed?' +
        'app_id=' + vars['app_id'] + '&' +
        'redirect_uri=' + vars['redirect_uri'] +
        makeQueryString({
            'link': vars['link'],
            'picture': vars['picture'],
            'name': vars['name'],
            'caption': vars['caption'],
            'description': vars['description']
        });
    }
});
C['FPS'] = classExtendBase({
    _prevtime: 0,
    _nowtime: 0,
    _loopid: 0,
    'init': function(config /* varless */, that) {
        that = this;

        that._criterion =
        that._surver = config['criterion'];
        that._msecFrame = that._getFrame(that._criterion);
        that._enterframe = config['enterframe'];
        // that._prevtime =
        // that._nowtime =
        // that._loopid = 0;

        ifManualStart(that, config);
    },
    'dispose': this_stop__super,
    'getCriterion': function() {
        return this._criterion;
    },
    'getSurver': function() {
        return this._surver;
    },
    'getFrameTime': function() {
        return this._msecFrame;
    },
    'enter': function(/* varless */ that) {
        that = this;

        that._enterframe({
            'criterion': that._criterion,
            'surver': that._surver
        });
    },
    'start': function(/* varless */ that) {
        that = this;

        that._prevtime = dateNow();
        that._loopid = setInterval(that._loop, that._msecFrame, that);
    },
    _loop: function(that /* varless */, nowtime) {
        nowtime = that._nowtime = dateNow();
        that._surver = that._getFrame(nowtime - that._prevtime);
        that._prevtime = nowtime;

        that['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this._loopid);
    }
});
// ElementLoad
ElementLoad = classExtendObserver({
    _tagname: EMPTY,
    _fire_complete: this_fire_complete,
    _fire_progress: this_fire_progress,
    'init': function(config /* varless */, that) {
        that = this;

        that['_super']();

        that._srcs = config['srcs'];
        that._loadedsrcs = [];
        that._contractid = [];
        that._progress = new Progress({
            'waits': that._srcs,
            'onprogress': function(progress) {
                that._fire_progress(progress);
            },
            'oncomplete': function() {
                var i = that._contractid.length;

                for (; i--;) {
                    that._uncontract(that._contractid[i]);
                }
                that._contractid = [];

                that._fire_complete(that._loadedsrcs);
            }
        });

        bindOnProp(that, config);

        ifManualStart(that, config);
    },
    _fire_start: this_fire_start,
    'start': function(/* varless */el) {
        var that = this,
            i = 0,
            /* el, */
            len = that._srcs.length;

        that._fire_start();

        if (!that._started) {
            that._started = TRUE;

            for (; i < len; i++) {
                el = create(that._tagname);
                el.src = that._srcs[i];

                that._contractid.push(that._contract(el, ev['LOAD'], countup));
                that._loadedsrcs.push(el);
                that._loadloop(el);
            }
        }

        function countup() {
            that._progress['pass']();
        }
    },
    _loadloop: nullFunction
});

C['ImgLoad'] = classExtend(ElementLoad, {
    _tagname: 'img'
});
ScriptLoad = C['ScriptLoad'] = classExtend(ElementLoad, {
    _tagname: 'script',
    _loadloop: function(el) {
        append(doc_head, el);
    }
});
/* (function() { */
// var windowload_loaded = FALSE,
//     windowload_winload = function() {
//         windowload_loaded = TRUE;
//         off(win, ev['LOAD'], windowload_winload);
//     };

windowload_winload = function() {
    windowload_loaded = TRUE;
    off(win, ev['LOAD'], windowload_winload);
};

on(win, ev['LOAD'], windowload_winload);

C['WindowLoad'] = classExtendObserver({
    'init': function(config) {
        this['_super']();

        bindOnProp(this, config);

        ifManualStart(this, config);
    },
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */that, disposeid) {
        // var that = this,
        //     disposeid;
        that = this;

        that._fire_start();

        if (!that._started) {
            that._started = TRUE;

            if (windowload_loaded) {
                that._fire_complete();
            }
            else {
                disposeid = that._contract(win, ev['LOAD'], function() {
                    that._uncontract(disposeid);
                    that._fire_complete();
                });
            }
        }
    }
});
/* }()); */
C['Mobile'] = classExtendBase({
    'getZoom': function() {
        return doc.body.clientWidth / win.innerWidth;
    },
    'isAndroid': function(ua) {
        return checkUserAgent(/Android/i, ua);
    },
    'isIOS': function(ua) {
        return checkUserAgent(/iPhone|iPad|iPod/i, ua);
    },
    'isWindows': function(ua) {
        return checkUserAgent(/IEMobile/i, ua);
    },
    'isFBAPP': function(ua) {
        return checkUserAgent(/FBAN/, ua);
    },
    'isMobile': function(/* varless */ that) {
        that = this;

        return (
            that['isAndroid']() ||
            that['isIOS']() ||
            that['isWindows']() ||
            that['isFBAPP']()
        );
    },
    'hideAddress': function() {
        this._contract(win, ev['LOAD'], hideAddressHandler, FALSE);
        this._contract(win, ev_orientationchange, hideAddressHandler, FALSE);

        function doScroll() {
            if (win.pageYOffset == 0) {
                pageTop();
            }
        }
        function hideAddressHandler() {
            setTimeout(doScroll, 100);
        }
    }
});
/* var PC_browser; */

if (checkUserAgent(/opera/i)) {
    PC_browser = 'opera';
}
else if (checkUserAgent(/msie/i)) {
    PC_browser = 'ie';
}
else if (checkUserAgent(/chrome/i)) {
    PC_browser = 'chrome';
}
else if (checkUserAgent(/safari/i)) {
    PC_browser = 'safari';
}
else if (checkUserAgent(/gecko/i)) {
    PC_browser = 'gecko';
}
else {
    PC_browser = 'ather';
}

C['PC'] = classExtendBase({
    'isChrome': function() {
        return PC_browser == 'chrome';
    },
    'isSafari': function() {
        return PC_browser == 'safari';
    },
    'isGecko': function() {
        return PC_browser == 'gecko';
    },
    'isOpera': function() {
        return PC_browser == 'opera';
    },
    'isIE': function() {
        return PC_browser == 'ie';
    }
});
C['Orientation'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        that._config = config;

        that._contractid = [];

        that._portrait = {
            'portrait': TRUE,
            'landscape': FALSE
        };
        that._landscape = {
            'portrait': FALSE,
            'landscape': TRUE
        };

        that['attach']();
    },
    'get': function(/* varless */ that) {
        that = this;

        if (isNumber(win.orientation)) {
            if (Math.abs(win.orientation) != 90) {
                return that._portrait;
            }

            return that._landscape;
        }

        if (
            win.innerWidth < win.innerHeight
        ) {
            return that._portrait;
        }

        return that._landscape;
    },
    'fire': function(/* varless */ that) {
        that = this;

        if (
            that['get']()['portrait']
        ) {
            return that._config['portrait']();
        }
        that._config['landscape']();
    },
    'attach': function(vars /* varless */, that, proxyed) {
        that = this;

        /* var proxyed = proxy(that, that['fire']); */
        proxyed = proxy(that, that['fire']);
        that._contractid.push(
            that._contract(win, ev['LOAD'], proxyed),
            that._contract(win, ev_orientationchange, proxyed),
            that._contract(win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function(/* varless */ that, i) {
        that = this;

        /* var i = that._contractid.length; */
        i = that._contractid.length;

        for (; i--;) {
            that._uncontract(that._contractid[i]);
        }

        that._contractid = [];
    }
}, 'onorientationchange' in win);
C['Modal'] = classExtendBase({
    _closeDetach: function(/* varless */ that) {
        that = this;

        var i = that._contractid.length;

        for (; i--;) {
            that._uncontract(that._contractid[i]);
        }

        that._contractid = [];
    },
    'init': function(config /* varless */, that, commoncss) {
        that = this;
        config = config || NULLOBJ;

        // that._html = config['html'];
        // that._bgClose = config['bgClose'];
        // that._closeSelector = config['closeSelector'];
        that._config = config;

        /* var commoncss = { */
        commoncss = {
            'display': 'none',
            'position': 'absolute'
        };

        that._scroll = new C['Scroll']();

        that._contractid = [];

        that._bg = create('div', {
            'class': 'cir-modal-bg'
        });
        css(that._bg, override({
            'z-index': '9998',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '200%'
        }, commoncss));
        append(doc.body, that._bg);

        that._inner = create('div', {
            'class': 'cir-modal-content'
        });
        css(that._inner, override({
            'z-index': '9999',
            'top': '50%',
            'left': '50%'
        }, commoncss));
        append(doc.body, that._inner);

        ifManualStart(that, config, 'open');
    },
    'dispose': function(/* varless */ that) {
        that = this;

        that['close']();
        remove(that._bg);
        remove(that._inner);

        that['_super']();
    },
    'open': function(text /* varless */, that) {
        that = this;

        that._scroll['kill']();
        css(that._bg, {
            'top': doc.body.scrollTop
        });

        show(that._bg);

        that['inner'](text);
    },
    'close': function(/* varless */ that) {
        that = this;

        that._closeDetach();

        html(that._inner, EMPTY);
        hide(that._inner);
        hide(that._bg);

        that._scroll['revival']();
    },
    'inner': function(text /* varless */, that, computed, close, i) {
        that = this;

        // var computed,
        //     close;

        that._closeDetach();

        text = text || that._config['html'];

        html(that._inner, text);
        show(that._inner);

        computed = computedStyle(that._inner);

        css(that._inner, {
            'margin-top':
            doc.body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'margin-left': -(splitSuffix(computed.width)[2] / 2)
        });

        if (that._config['bgClose']) {
            that._contract(that._bg, ev['CLICK'], proxy(that, that['close']));
        }

        if (that._config['closeSelector']) {
            close = $$child(that._config['closeSelector'], that._inner),
                i = close.length;

            for (; i--;) {
                that._contractid.push(
                    that._contract(close[i],
                    ev['CLICK'],
                    proxy(that, that['close']))
                );
            }
        }
    }
});
WindowAction = classExtendBase({
    'init': function(config) {
        // this._e = config['e'];
        // this._callback = config['callback'];
        this._config = config;

        /* if (config['callback']) { */
        this['attach']();
        /* } */
    },
    'attach': function(/* varless */ that) {
        that = this;

        that['detach']();
        that._attachid = that._contract(win, that._config['e'], that._config['callback']);
    },
    'detach': function() {
        this._uncontract(this._attachid);
    }
});
DeviceOrientation = C['DeviceOrientation'] = function(config) {
    config['e'] = 'deviceorientation';
    return WindowAction(config);
};
DeviceOrientation['support'] = 'ondeviceorientation' in win;
DeviceMotion = C['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return WindowAction(config);
};
DeviceMotion['support'] = 'ondevicemotion' in win;
/* (function() { */
// var deviceshake_Shake,
//     deviceshake_convert;

/* if (C['mobile']['isMobile']()) { */
    if (DeviceOrientation['support']) {
        deviceshake_Shake = DeviceOrientation;
        deviceshake_convert = function(e) {
            return e;
        };
    }
    else if (DeviceMotion['support']) {
        deviceshake_Shake = DeviceMotion;
        deviceshake_convert = function(e) {
            return e['rotationRate'];
        };
    }
/* } */

C['DeviceShake'] = classExtendBase({
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'init': function(config /* varless */, that) {
        that = this;

        that._shaker = new deviceshake_Shake();
        // that._limit = config['limit'];
        // that._waittime = config['waittime'];
        // that._direction = config['direction'];
        // that._callback = config['callback'];
        that._config = config;

        /* if (config['callback'] && config['direction']) { */
        that['attach']();
        /* } */
    },
    'attach': function(/* varless */that, base_e) {
        that = this;

        var shaked = FALSE,
            config = that._config,
            direction = that.convertName[config['direction']];

        that._shaker['attach'](wraphandle);

        function wraphandle(e) {
            e = deviceshake_convert(e);

            if (!base_e) {
                base_e = e;
            }

            if (Math.abs(e[direction] - base_e[direction]) > config['limit']) {
                shaked = TRUE;
                base_e = NULL;

                config['callback'](e);

                setTimeout(function() {
                    shaked = FALSE;
                }, config['waittime']);
            }
        }
    },
    'detach': function() {
        this._shaker['detach']();
    }
}, deviceshake_Shake ? TRUE : FALSE);

/* }()); */
C['FontImg'] = classExtendBase({
    'init': function(config /* varless */, type) {
        config = config || NULLOBJ;
        type = config['type'];

        this._type = type ? type + '_' : EMPTY;
        this._tag = config['tag'] || 'span';
    },
    'make': function(x) {
        var aryX = (EMPTY + x).split(EMPTY),
            tagtemp = this._tag,
            tags = EMPTY,
            i = aryX.length;

        for (; i--;) {
            tags = '<' + tagtemp +
                ' class="font_' + this._type + aryX[i] +
                '"></' + tagtemp + '>' + tags;
        }

        return tags;
    }
});
C['PreRender'] = classExtendObserver({
    'init': function(config /* varless */, that) {
        that = this;

        that['_super']();

        that._els = config['els'];
        that._guesslimit = config['guesslimit'] || 30;
        that._looptime = config['looptime'] || 100;
        that._loopblur = that._looptime + (config['loopblur'] || 20);
        /* that._loopid = that.prevtime = NULL; */

        bindOnProp(that, config);

        ifManualStart(that, config);
    },
    'dispose': function() {
        clearInterval(this._loopid);
        this['_super']();
    },
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */that, i, prevtime, gettime, difftime) {
        that = this,
        // var i,
        //     that = this,
        //     prevtime = dateNow();
        prevtime = dateNow();

        that._fire_start();

        for (i = that._els.length; i--;) {
            show(that._els[i]);
        }
        that._loopid = setInterval(check, that._looptime, that);

        function check(/* varless */) {
            // var gettime = dateNow(),
            //     difftime = gettime - prevtime,
            //     i;
            gettime = dateNow(),
            difftime = gettime - prevtime;

            prevtime = gettime;

            if (difftime < that._loopblur) {
                that._guesslimit--;

                if (that._guesslimit < 1) {
                    clearInterval(that._loopid);

                    for (i = that._els.length; i--;) {
                        hide(that._els[i]);
                    }

                    that._fire_complete();
                }
            }
        }
    }
});
C['Router'] = classExtendBase({
    'init': function(config/* varless */, that, temp) {
        // var that = this,
        //     temp;
        that = this;

        that._config = config;

        if (config['hashchange']) {
            on(win, ev_hashchange, function() {
                that['fire'](location.hash);
            });

            if (!config['target']) {
                config['target'] = location.hash;
            }
        }

        ifManualStart(that, config);
    },
    'start': function() {
        this['fire'](this._config['target']);
    },
    'fire': function(action /* varless */, that) {
        that = this;

        var i,
            config = that._config,
            config_action = config['action'];

        if (config['noregex'] && config_action[action]) {
            return config_action[action](action);
        }

        for (i in config_action) {
            if (action.match(i)) {
                config_action[i](i);
            }
        }
    }
});
/* (function() { */
// var servermeta_xhr,
//     servermeta_isLoaded = FALSE;

C['ServerMeta'] = classExtendBase({
    'init': function(config/* varless */, callback) {
        config = config || NULLOBJ;

        /* var callback = config['callback'] || nullFunction; */
        callback = config['callback'] || nullFunction;

        if (servermeta_xhr) {
            callback(servermeta_xhr);
        }
        else {
            servermeta_xhr = servermeta_getHeader(function() {
                servermeta_isLoaded = TRUE;
                callback(servermeta_xhr);
            });
        }
    },
    'date': function(callback) {
        return servermeta_getHeader(function(xhr) {
            callback(xhr.getResponseHeader('Date'));
        });
    },
    'connection': function() {
        return servermeta_getRes('Connection');
    },
    'contentLength': function() {
        return servermeta_getRes('Content-Length');
    },
    'lastModified': function() {
        return servermeta_getRes('Last-Modified');
    },
    'server': function() {
        return servermeta_getRes('Server');
    },
    'contentType': function() {
        return servermeta_getRes('Content-Type');
    },
    'acceptRanges': function() {
        return servermeta_getRes('Accept-Ranges');
    },
    'keepAlive': function() {
        return servermeta_getRes('Keep-Alive');
    }
});

function servermeta_getRes(value) {
    if (servermeta_isLoaded) {
        return servermeta_xhr.getResponseHeader(value);
    }
    return FALSE;
}

function servermeta_getHeader(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr);
    };

    xhr.open('HEAD', location.href + '?update' + dateNow() + '=1');
    xhr.send(NULL);

    return xhr;
}
/* }()); */
C['Surrogate'] = classExtendBase({
    'init': function(config) {
        this._delay = config['delay'];
        this._callback = config['callback'];
        // this._args = NULL;
        // this._waitid = NULL;
    },
    'dispose': function() {
        this['clear']();
        this['_super']();
    },
    'request': function(arg /* varless */, that) {
        that = this;

        that._args = arg;
        that['clear']();
        that._waitid = setTimeout(that['flush'], that._delay, that);
    },
    'flush': function(that) {
        that = that || this;

        that._callback(that._args);
    },
    'clear': function() {
        clearTimeout(this._waitid);
    }
});
C['Throttle'] = classExtendBase({
    'init': function(config) {
        this._waittime = config['waittime'];
        this._callback = config['callback'];
        // this._locked = FALSE;
        // this._waitid = NULL;
        // this._args = NULL;
    },
    'dispose': function() {
        this['unlock']();
        this['_super']();
    },
    'request': function(vars /* varless */, that) {
        /* var that = this; */
        that = this;

        if (that._locked) {
            that._args = vars;
            return;
        }

        that._callback(vars);
        that['lock']();
        that._waitid = setTimeout(function() {
            if (that._args) {
                that._callback(that._args);
                that._args = NULL;
            }

            that['unlock']();
        }, that._waittime, that);
    },
    'lock': function() {
        this._locked = TRUE;
    },
    'unlock': function(that) {
        that = that || this;

        that._locked = FALSE;
        clearTimeout(that._waitid);
    }
});
C['Twitter'] = classExtendBase({
    _firstload: apifirstload,
    'includeAPI': function() {
        this._firstload('twitter-wjs', '//platform.twitter.com/widgets.js');
    },
    'shareURL': function(vars) {
        var name = vars['name'],
            hash = vars['hash'];

        name = name ? ' 「' + name + '」' : EMPTY;
        hash = hash ? ' ' + hash : EMPTY;

        return 'https://twitter.com/intent/tweet?' + makeQueryString({
            'url': vars['redirect_uri'],
            'text': (vars['caption'] || EMPTY) + name + hash
        });
    }
});
C['XML'] = classExtendBase({
    'init': function(config) {
        html(this._el = create('div'), config['data']);
    },
    '$': function(selector) {
        return $child(selector, this._el);
    },
    '$$': function(selector) {
        return $$child(selector, this._el);
    }
});
C['Model'] = classExtendBase({
    _notice: function(eventname, key, val /* varless */, that) {
        that = this;

        that._observer['fire'](eventname, that._store['get']());

        if (key) {
            that._observer['fire'](eventname + ':' + key, val);
        }
    },
    'init': function(config /* varless */, that) {
        that = this;

        config = config || NULLOBJ;

        var i,
            defaults = config['defaults'] || that['defaults'] || NULLOBJ,
            events = config['events'] || that['events'];

        that._validate = config['validate'] || that['validate'] || {};
        that._store = config['store'] || that['store'] || new C['DataStore']();
        that._observer = new Observer();

        for (i in defaults) {
            that['set'](i, defaults[i]);
        }
        for (i in events) {
            that['on'](i, events[i]);
        }
    },
    'set': function(key, val /* varless */, that, i) {
        that = this;

        /* var i; */

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        that._prev = that._store['get']();

        for (i in key) {
            val = key[i];

            if (
                that._validate[i] &&
                !that._validate[i](i, val)
            ) {
                return that._notice('fail', i, val);
            }

            that._store['set'](i, val);
            that._observer['fire'](ev['CHANGE'] + ':' + i, val);
        }

        that._observer['fire'](ev['CHANGE'], that._store['get']());
    },
    'prev': function(key) {
        if (!key) {
            return this._prev;
        }
        return this._prev[key];
    },
    'get': function(key) {
        return this._store['get'](key);
    },
    'remove': function(key /* varless */, that) {
        that = this;

        if (key) {
            var get = that._store['get'](key),
                ret = that._store['remove'](key);

            that._notice('remove', key, get);

            return ret;
        }
    },
    'reset': function(/* varless */ ret) {
        ret = this._store['reset']();

        this._notice('reset');
    },
    'on': function(key, func /* varless */, proxyfunc) {
        /* var proxyfunc = proxy(this, func); */
        proxyfunc = proxy(this, func);
        this._observer['on'](key, proxyfunc);

        return proxyfunc;
    },
    'off': function(key, func) {
        this._observer['off'](key, func);
    },
    'fire': function(key, vars) {
        return this._observer['fire'].apply(this._observer, arguments);
    }
});
C['View'] = classExtendBase({
    'init': function(config /* varless */, that, i) {
        that = this;

        /* var i; */

        config = config ? owner(that, config) : owner(that, that, {});

        that['el'] = C['$'](config['el'] || that['el'] || create('div'));

        that['attach']();
        if (config['init']) {
            that['init']();
        }
    },
    'dispose': function() {
        this['detach']();
        this['_super']();
    },
    _e: function(methodname /* varless */, that, i, j, $el, events) {
        that = this;

        // var i,
        //     j,
        //     $el,
            events = that['events'];

        for (i in events) {
            if (i == 'me') {
                $el = that['el'];
            }
            else {
                $el = that['el'].find(i);
            }

            for (j in events[i]) {
                $el[methodname](j, that[events[i][j]]);
            }
        }
    },
    'attach': function() {
        this._e('on');
    },
    'detach': function() {
        this._e('off');
    }
});
C['Ollection'] = classExtend(C['Model'], {
    'init': function(config /* varless */, that, i, defaults, events) {
        that = this;

        config = config || NULLOBJ;

        // var i,
        //     defaults = config['defaults'] || that['defaults'] || [],
        //     events = config['events'] || that['events'];
        defaults = config['defaults'] || that['defaults'] || [],
        events = config['events'] || that['events'];

        /* that._validate = config['validate'] || that['validate'] || {}; */
        that._store =
            config['store'] ||
            that['store'] ||
            new C['DataStore']({
                'array': TRUE
            });
        that._observer = new Observer();

        for (i in defaults) {
            that['set'](i, defaults[i]);
        }
        for (i in events) {
            that['on'](i, events[i]);
        }
    },
    'set': function(key, val /* varless */, that, i) {
        that = this;

        /* var i; */

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        that._prev = that._store['get']();

        for (i in key) {
            val = key[i];

            if (isNumber(+i)) {
                that._store['set'](key, val);
                that._observer['fire'](ev['CHANGE'], val, +i, that._store['get']());
            }
            return that._notice('fail', key, val);
        }
    },
    'add': function(val/* varless */, collectid) {
        /* var collectid = this._store['get']().length; */
        collectid = this._store['get']().length;

        this['set'](collectid, val);

        return collectid;
    },
    'each': function(callback/* varless */, i, collection) {
        // var i,
        //     collection = this['get']();
        collection = this['get']();

        for (i in collection) {
            callback.apply(this, [collection[i], i, collection]);
        }
    },
    'map': function(callback/* varless */, that, i, collection) {
        that = this;
        // var i,
        //     collection = this['get']();
        collection = that['get']();

        for (i in collection) {
            that['set'](i, callback.apply(that, [collection[i], i, collection]));
        }
    }
});
C['Validate'] = classExtendBase({
    _check: function(is, key, value, txt) {
        if (is(value)) {
            return TRUE;
        }
        this['displayError'](key, txt);
    },
    'init': function(config /* varless */, that) {
        that = this;

        config = config || {};

        /* that._level = config['level'] || 'warn'; */
        that._level = config['level'];

        owner(that, that, config);
    },
    'displayError': function(key, text) {
        text = 'Validate Error:' + key + ' is ' + text + '.';

        switch (this.level) {
            case 'log':
                console.log(text);
            case 'off':
                return FALSE;
            case 'error':
                throw new Error(text);
            /* case 'warn': */
            /* default: */
        }
                console.warn(text);
                return FALSE;
    },
    'isObject': function(key, value) {
        return this._check(isObject, key, value, 'Object');
    },
    'isNumber': function(key, value) {
        return this._check(isNumber, key, value, 'Number');
    },
    'isString': function(key, value) {
        return this._check(isString, key, value, 'String');
    },
    'isFunction': function(key, value) {
        return this._check(isFunction, key, value, 'Function');
    },
    'isBoolean': function(key, value) {
        return this._check(isBoolean, key, value, 'Boolean');
    },
    'isArray': function(key, value) {
        return this._check(isArray, key, value, 'Array');
    }
});
C['Scroll'] = classExtendBase({
    'dispose': function(/* varless */that) {
        that = this;

        that['revival']();
        clearInterval(that._smoothid);

        that['_super']();
    },
    'to': scrollTo,
    'toTop': pageTop,
    'toBottom': function() {
        scrollTo(doc.height);
    },
    'checkBottom': function(offset) {
        offset = offset || 0;

        var remain = doc.body.scrollHeight -
                win.innerHeight - doc.body.scrollTop;

        if (remain <= offset) {
            return TRUE;
        }

        return FALSE;
    },
    'scrollY': function(/* varless */ pageYOffset) {
        pageYOffset = win.pageYOffset;

        return isDefined(pageYOffset) ? pageYOffset : (doc.documentElement || doc.body.parentNode || doc.body).scrollTop;
    },
    'smooth': function(target, callback /* varless */, that, max) {
        // var that = this,
        //     max;
        that = this;

        callback = callback || nullFunction;

        if (!that._smoothmove) {
            that._smoothmove = TRUE;

            if (!isNumber(target)) {
                target = target.offsetTop;
            }

            max = doc.height - win.innerHeight;
            if (target > max) {
                target = max;
            }

            that._before = that['scrollY']();
            that._smoothid = setInterval(function(/* varless */ position) {
                /* var position = that.scrollY(); */
                position = that['scrollY']();

                position = (target - position) * 0.3 + position;

                if (Math.abs(target - position) < 1 || that._before == position) {
                    scrollTo(target);
                    clearInterval(that._smoothid);
                    callback(target);
                    return delete that._smoothmove;
                }

                that._before = position;
                scrollTo(position);
            }, 50);
        }
    },
    'kill': function(/* varless */ that) {
        that = this;

        if (!that._killscrollid) {
            css(doc.body, {
                'overflow': 'hidden'
            });
            that._killscrollid = that._contract(doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function(/* varless */ that) {
        that = this;

        if (that._killscrollid) {
            css(doc.body, {
                'overflow': 'auto'
            });
            that._uncontract(that._killscrollid);
            delete that._killscrollid;
        }
    }
});
C['LimitText'] = classExtendBase({
    _minfontsize: 8,
    _copyAppend: function(text/* varless */, that) {
        that = this;
        html(that._copyel, text);
        append(parent(that._el), that._copyel);
    },
    _copyRemove: function() {
        html(this._copyel, EMPTY);
        remove(this._copyel);
    },
    'init': function(config/* varless */, that) {
        that = this;

        var el = that._el = config['el'],
            orgcomputed = computedStyle(el),
            copyel = that._copyel = create(el.tagName, {
                'class': attr(el, 'class'),
                'style': attr(el, 'style')
            }),
            computed = that._computed = computedStyle(copyel);

        that._width = config['width'];
        that._height = config['height'];

        that._copyAppend(0);

        if (!isDefined(config['width'])) {
            that._width = +splitSuffix(computed['width'])[2];
        }
        if (!isDefined(config['height'])) {
            that._height = +splitSuffix(computed['height'])[2];
        }

        css(copyel, {
            'height': 'auto'
        });

        that._fontsize = +splitSuffix(computed['fontSize'])[2];
        that._copyRemove();
    },
    _limitCheck: function(/* varless */that) {
        that = this;

        if (
            +splitSuffix(that._computed['width'])[2] <= that._width &&
            +splitSuffix(that._computed['height'])[2] <= that._height
        ) {
            return TRUE;
        }

        /* return FALSE; */
    },
    'getLimitFontSize': function(text) {
        text = EMPTY + text;

        var that = this,
            high = that._fontsize,
            answer;

        css(that._copyel, {
            'fontSize': high
        });

        that._copyAppend(text);

        if (that._limitCheck()) {
            answer = high;
        }
        else {
            _binarySearch(
                that._minfontsize - 1,
                high,
                function(point) {
                    css(that._copyel, {
                        'fontSize': point
                    });
                    return that._limitCheck();
                },
                function(point) {
                    answer = point;
                }
            );
        }

        that._copyRemove();

        if (answer < that._minfontsize) {
            answer = 0;
        }

        return answer;
    },
    'getLimitTextLength': function(text) {
        text = EMPTY + text;

        var that = this,
            len = text.length,
            answer;

        that._copyAppend(text);

        if (that._limitCheck()) {
            answer = len;
        }
        else {
            _binarySearch(
                0,
                len,
                function(point) {
                    html(that._copyel, text.slice(0, point));
                    return that._limitCheck();
                },
                function(point) {
                    answer = point;
                }
            );
        }

        that._copyRemove();

        return answer;
    }
});
// require
/* required_obj = {}; */

C['require'] = function(required, srcpath, callback) {
    var cls = C_require(required),
        method = callback ? C_require_async : C_require_sync;

    if (!cls && (!srcpath || required_obj[srcpath])) {
        throw new Error('not found ' + required);
    }

    if (srcpath) {
        required_obj[srcpath] = TRUE;
    }

    return method(cls, required, srcpath, callback);
};

function C_require_async(cls, required, srcpath, callback) {
    if (cls) {
        return callback(cls);
    }

    new ScriptLoad({
        'srcs': [
            srcpath
        ],
        'oncomplete': function() {
            cls = C_require(required);

            if (!cls) {
                throw new Error('not found ' + required);
            }

            callback(cls);
        }
    });
}

function C_require_sync(cls, required, srcpath) {
    if (cls) {
        return cls;
    }

    new C['Ajax']({
        'url': srcpath,
        'sync': TRUE,
        'oncomplete': function(ret) {
            /* new Function(ret)(); */

            var script = create('script');

            append(doc_head, script);
            script.text = ret;
        }
    });

    cls = C_require(required);

    if (cls) {
        return cls;
    }

    throw new Error('not found ' + required);
}

function C_require(required) {
    var required_ary = required.split('.'),
        i = 0,
        len = required_ary.length,
        temp = win;

    for (; i < len; i++) {
        if (!temp[required_ary[i]]) {
            return;
        }

        temp = temp[required_ary[i]];
    }

    return temp;
}
// namespace
C['namespace'] = function(keyword, swap) {
    var keyword_ary = keyword.split('.'),
        i = 0,
        len = keyword_ary.length,
        temp = win,
        par;

    for (; i < len; i++) {
        if (!temp[keyword_ary[i]]) {
            break;
        }

        par = temp;
        temp = temp[keyword_ary[i]];
    }
    for (; i < len; i++) {
        par = temp;
        temp = temp[keyword_ary[i]] = {};
    }

    if (swap) {
        for (i in temp) {
            if (!isDefined(swap[i])) {
                swap[i] = temp[i];
            }
        }

        par[keyword_ary[(len - 1)]] = swap;

        temp = swap;
    }

    return temp;
}
Calc = C['Calc'] = classExtendBase({
    'init': function(config) {
        config = config || NULLOBJ;

        var fewdigit = config['fewdigit'] || 8,
            digit = '1';

        for (; fewdigit--; ) {
            digit += '0';
        }

        this._fewdigit = +digit;
    },
    _removefew: function(num) {
        return num * this._fewdigit;
    },
    _addfew: function(num) {
        return num / this._fewdigit;
    },
    /* add:  */
    'addition': function(num1, num2) {
        return this._addfew(this._removefew(num1) + this._removefew(num2));
    },
    /* sub:  */
    'subtraction': function(num1, num2) {
        return this._addfew(this._removefew(num1) - this._removefew(num2));
    },
    /* mul:  */
    'multiplication': function(num1, num2, that) {
        that = this;

        return that._addfew(that._addfew(that._removefew(num1) * that._removefew(num2)));
    },
    /* div:  */
    'division': function(num1, num2) {
        return this._removefew(num1) / this._removefew(num2);
    }
});
C['LowPassFilter'] = classExtend(Calc, {
    'init': function(config) {
        config = config || NULLOBJ;

        this['_super'](config);

        this['setBefore'](config['before'] || 0);
        this['setRate'](config['rate']);
    },
    'setBefore': function(before) {
        this._before = before;
    },
    'getBefore': function() {
        return this._before;
    },
    'setRate': function(rate) {
        rate = rate || 0.1;

        if (rate >= 1) {
            throw new Error('rate < 1.');
        }

        this._rate_now = rate;
        this._rate_before = this['subtraction'](1, rate);
    },
    'getRate': function() {
        return this._rate_now;
    },
    'forecast': function(num/* varless */, that) {
        that = this;

        that._before = that._before * that._rate_before + num * that._rate_now;
        return that._before;
    }
});
var template_matcher = /<%-(.+?)%>|<%=(.+?)%>|<%(.+?)%>|$/g,
    template_replacereg = /\\|'|\r|\n|\t/g,
    template_escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\t': 't'
    };

system_temp = C['template'] = function(templatetxt, replaceobj /* varless */, i, func) {
    /* var func = "__r+="; */
    func = "__r+=";

    templatetxt.replace(template_matcher, function(match, escaper, interpolate, evaluate, offset) {
        func += "'" + templatetxt.slice(i, offset)
        .replace(template_replacereg, function(match) { return '\\' + template_escapes[match]; }) + "'+";

        if (escaper) {
            func += "((__t=" + escaper + ")==null?'':C.util.escape(__t))+";
        }
        else if (interpolate) {
            func += "((__t=" + interpolate + ")==null?'':__t)+";
        }
        else if (evaluate) {
            func += "'';" + evaluate + ";__r+=";
        }
        i= offset + match.length;
        return match;
    });

    // console.log("var __t,__r='';" +
    //     'with(a){' + func + "''" + '}' + "return __r");

    return new Function('a', "var __t,__r='';" +
        'with(a){' + func + "''" + '}' + "return __r")(replaceobj || {});
};
system_temp['fetch'] = function(id, replaceobj) {
    return template(html($id(id)), replaceobj);
};
if ($_methods) {
    $base.prototype = $_methods;
}
})();
