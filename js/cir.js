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
Async,
WindowAction,
ExternalAndroid,
ExternalIOS,
Media,
Tweener,
WebStorage,
mb,
pc,
$_methods;

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
    if (matchstr.match(/^[0-9\.]+$/)) {
        return +matchstr;
    }
    if (matchstr === 'true') {
        return TRUE;
    }
    if (matchstr === 'false') {
        return FALSE;
    }

    return str;
}
function replaceAll(targettext, needle, replacetext) {
    return targettext.split(needle).join(replacetext);
}
function template(templatetxt, replaceobj /* varless */, i, temp) {
    /* var i; */

    for (i in replaceobj) {
        temp = replaceobj[i];

        templatetxt = replaceAll(
            replaceAll(templatetxt, '<%= ' + i + ' %>', escape(temp)),
        '<%- ' + i + ' %>', temp);
    }

    return templatetxt;
}
function escape(html) {
    return replaceAll(
        replaceAll(
            replaceAll(
                replaceAll(
                    replaceAll(html, '&', '&amp;'),
                '"', '&quot;'),
            "'", '&#039;'),
        '<', '&lt;'),
    '>', '&gt;');
}
function unescape(html) {
    return replaceAll(
        replaceAll(
            replaceAll(
                replaceAll(
                    replaceAll(html, '&gt;', '>'),
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
    if (Object.prototype.toString.call(vars) == '[object ' + key + ']') {
        return TRUE;
    }
    return FALSE;
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
    if (vars === UNDEFINED) {
        return FALSE;
    }
    return TRUE;
}
function isTouchable() {
    return 'ontouchstart' in win;
}
function nullFunction() {
}
function abstraceFunction() {
    throw new Error('abstract-function was executed without being implemented.');
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
    ua = ua || navigator.userAgent;

    return !!ua.match(pattern);
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
function _binarySearch(low, high, compare, end) {
    var middle;

    while (TRUE) {
        middle = Math.floor((low + high) / 2);

        if (low == middle) {
            return end(middle);
        }

        if (compare(middle)) {
            low = middle;
        }
        else {
            high = middle;
        }
    }
}

C['util'] = {
    'win': win,
    'doc': doc,
    'pageTop': pageTop,
    'override': override,
    'replaceAll': replaceAll,
    'template': template,
    'escape': escape,
    'unescape': unescape,
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
    'binarySearch': binarySearch
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
function $$child(selector, el /* varless */, eles, ary) {
    // var eles = el.querySelectorAll(selector),
    //     ary = [];
    eles = el.querySelectorAll(selector),
    ary = [];

    ary.push.apply(ary, eles);

    return ary;
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
        return removeClass(el, cls);
    }

    addClass(el, cls);
}

function attr(el, vars, value /* varless */, i) {
    /* var i; */

    if (isObject(vars)) {
        for (i in vars) {
            if (vars[i]) {
                el.setAttribute(i, vars[i]);
            }
        }

        return TRUE;
    }

    if (value || value == EMPTY) {
        return el.setAttribute(vars, value);
    }

    return el.getAttribute(vars);
}
function removeAttr(el, key) {
    el.removeAttribute(key);
}

function create(tagname, attribute /* varless */, el) {
    /* var el= doc.createElement(tagname); */
    el= doc.createElement(tagname);

    if (attribute) {
        attr(el, attribute);
    }

    return el;
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
    return parent(el).insertBefore(addel, target);
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
    el = el || body;
    el.offsetTop;
}

on(doc, 'DOMContentLoaded', function() {
    body = doc.body;
});

C['dom'] = {
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
    'reflow': reflow
};
(function() {
    C['lass'] = function() {};

    var initializing = FALSE,
        fnTest = /xyz/.test(function() {
            xyz;
        }) ? /\b_super\b/ : /.*/;

    C['lass']['extend'] = function(props) {
        var SuperClass = this,
            i;

        function Class() {
            if (!initializing && this['init']) {
                this['init'].apply(this, arguments);
            }
        }

        initializing = TRUE;
        Class.prototype = new SuperClass();
        initializing = FALSE;

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
                    // typeof prop === 'function' &&
                    // typeof _super === 'function' &&
                    isFunction(prop) &&
                    isFunction(_super) &&
                    fnTest.test(prop)
                );

            if (isMethodOverride) {
                Class.prototype[key] = function() {
                    var ret,
                        tmp = this['_super'];

                    this['_super'] = _super;

                    ret = prop.apply(this, arguments);

                    this['_super'] = tmp;

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
}());

function classExtend(cls, prop, support) {
    cls = cls || C['lass'];

    var klass = cls['extend'](prop);

    if (isDefined(support)) {
        klass['support'] = support;
    }

    return klass;
}
function classExtendBase(prop, support) {
    return classExtend(C['Base'], prop, support);
}
C['Base'] = classExtend(UNDEFINED, {
    _disposecountid: 0,
    'dispose': function(/* varless */ mine) {
        mine = this;

        var i = 0,
            temp = mine._disposestore;

        for (i in temp) {
            off.apply(NULL, temp[i]);
        }

        for (i in mine) {
            temp = mine[i];

            if (temp && isFunction(temp['dispose'])) {
                temp['dispose']();
            }
        }

        mine.__proto__ = NULL;

        for (i in mine) {
            mine[i] = NULL;
            delete mine[i];
        }

        return NULL;
    },
    'contract': function(el, e, handler /* varless */, mine, id) {
        mine = this;

        if (!mine._disposestore) {
            mine._disposestore = {};
        }
        /* var id = ++this._disposecountid; */
        id = ++mine._disposecountid;

        on(el, e, handler);
        mine._disposestore[id] = [el, e, handler];

        return id;
    },
    'uncontract': function(id) {
        if (id) {
            var temp = this._disposestore,
                arg = temp[id];

            delete temp[id];

            off(arg[0], arg[1], arg[2]);
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
(function() {
var ret = checkCSSAnimTranCheck([
        'animation',
        'webkitAnimation'
    ], 'Animation'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
Mine = C['SSAnime'] =
classExtendBase({
    _off: function() {
        var el = this._el,
            end = this._end;

        off(el, event_key + 'End', end);
        off(el, 'animationend', end);
    },
    'init': function(el, property, option /* varless */, mine) {
        mine = this;

        option = option || NULLOBJ;

        mine._onComplete = option['onComplete'] || nullFunction;

        mine._el = el;

        Mine['id']++;
        mine._id = 'ciranim' + Mine['id'];

        var duration = option['duration'] || Mine['duration'],
            // easeOutExpo
            ease = option['ease'] || csseaseOutExpo,
            i,
            prop = {};

        for (i in property) {
            prop[i] = property[i];
            if (isNumber(prop[i])) {
                prop[i] = prop[i] + 'px';
            }
        }

        mine.property = prop;

        prop = replaceAll(
            replaceAll(jsonStringify(prop), '"', EMPTY),
            ',',
            ';'
        );

        sheet.insertRule(
            '@' + css_prefix + 'keyframes ' + mine._id + '{to' + prop + '}',
            sheet.cssRules.length);

        if (!isArray(ease)) {
            ease = [ease];
        }

        addCSSRule(mine._id, css_prefix, duration, ease);

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    'start': function(/* varless */ mine, el) {
        // var mine = this,
        //     el = mine._el;
        mine = this,
        el = mine._el;

        mine._end = endaction;
        on(el, event_key + 'End', endaction);
        on(el, 'animationend', endaction);

        addClass(el, mine._id);

        function endaction(e) {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            mine._off();


            if (prefix == 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name == mine._id) {
                        sheet.deleteRule(len);
                    }
                }
                removeClass(el, mine._id);

                css(el, mine.property);
            }
            mine._onComplete(e);
        }
    },
    'stop': function() {
        var stopobj = {};

        stopobj[css_prefix + 'animation-play-state'] = 'paused';

        css(this._el, stopobj);
        this._off();
    }
}, support);

function addCSSRule(id, css_prefix, duration, eases) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

    for (; i < len; i++) {
        rule += css_prefix + 'animation:' +
                id + ' ' +
                duration + 'ms ' +
                eases[i] + ' 0s 1 normal both;';
    }

    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

Mine['id'] = 0;
Mine['duration'] = 500;
}());
(function() {
var ret = checkCSSAnimTranCheck([
        'transitionProperty',
        'webkitTransitionProperty'
    ], 'Transition'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
    Mine;

Mine = C['SSTrans'] =
    classExtendBase({
    'init': function(el, property, option /* varless */, mine) {
        mine = this;

        option = option || NULLOBJ;

        Mine['id']++;
        mine._id = 'cirtrans' + Mine['id'];

        var transProp = [],
            animeProp = override({}, property),
            i,
            duration = option['duration'] || Mine['duration'],
            // easeOutExpo
            ease = option['ease'] || csseaseOutExpo;

        if (!isArray(ease)) {
            ease = [ease];
        }

        for (i in property) {
            transProp.push(i);
        }

        addCSSRule(mine._id, css_prefix, duration, ease, transProp);

        mine._el = el;
        mine._property = property;
        mine._onComplete = option['onComplete'] || nullFunction;

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    'start': function(/* varless */ mine) {
        /* var mine = this; */
        mine = this;

        mine._endfunc = function(e) {
            mine['stop']();
            setTimeout(function() {
                mine._onComplete(e);
            }, 1);
        };

        on(mine._el, event_key + 'End', mine._endfunc);
        on(mine._el, 'transitionend', mine._endfunc);
        addClass(mine._el, mine._id);
        css(mine._el, mine._property);
    },
    'stop': function(/* varless */ mine) {
        mine = this;

        var rule = sheet.cssRules,
            len = rule.length,
            name;

        off(mine._el, event_key + 'End', mine._endfunc);
        off(mine._el, 'transitionend', mine._endfunc);
        removeClass(mine._el, mine._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name == mine._id) {
                sheet.deleteRule(len);
                break;
            }
        }
    }
}, support);

function addCSSRule(id, css_prefix, duration, eases, transProp) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

    rule +=
        css_prefix + 'transition-property:' + transProp.join(' ') + ';' +
        css_prefix + 'transition-duration:' + duration + 'ms;';

    for (; i < len; i++) {
        rule += css_prefix + 'transition-timing-function:' + eases[i] + ';';
    }

    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

Mine['id'] = 0;
Mine['duration'] = 500;
}());
Tweener = C['Tweener'] = classExtendBase({
    'init': function(target, property, option /* varless */, name, prop, mine) {
        // var name,
        //     prop;

        mine = this;

        option = option || NULLOBJ;

        mine._target = target;
        mine._property = [];

        for (name in property) {
            prop = property[name];
            prop['name'] = name;

            prop.distance = prop['to'] - prop['from'];
            prop['prefix'] = prop['prefix'] || EMPTY;
            prop['suffix'] = prop['suffix'] || 'px';

            mine._property.push(prop);
        }

        mine._duration = option['duration'] || Tweener['duration'];
        mine._ease = option['ease'] || mine.__ease;
        mine._onComplete = option['onComplete'];

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    // easeOutExpo
    __ease: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    _requestAnimationFrame: (function() {
        if (win.requestAnimationFrame) {
            return function(callback) {
                requestAnimationFrame(callback);
            };
        }
        if (win.webkitRequestAnimationFrame) {
            return function(callback) {
                webkitRequestAnimationFrame(callback);
            };
        }
        if (win.mozRequestAnimationFrame) {
            return function(callback) {
                mozRequestAnimationFrame(callback);
            };
        }
        if (win.oRequestAnimationFrame) {
            return function(callback) {
                oRequestAnimationFrame(callback);
            };
        }
        if (win.msRequestAnimationFrame) {
            return function(callback) {
                msRequestAnimationFrame(callback);
            };
        }

        return function(callback) {
            setTimeout(callback, 1000 / Tweener.fps);
        };
    }()),
    _loop: function() {
        var mine = this,
            items = Tweener.Items,
            item,
            now = dateNow(),
            time,
            n = items.length,
            i,
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
                if (item._onComplete) {
                    item._onComplete();
                }
                items.splice(n, 1);
            }
        }

        if (items.length) {
            mine._requestAnimationFrame(function() {
                mine._loop();
            });

            return;
        }

        mine['stop']();
    },
    'start': function(/* varless */ mine) {
        /* var mine = this; */
        mine = this;

        mine.begin = dateNow();

        Tweener.Items.push(mine);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine._loop();
            });
        }
    },
    'stop': function() {
        Tweener.Items = [];
        clearInterval(Tweener.timerId);
        Tweener.timerId = NULL;
    }
});
Tweener._setProp = function(target, prop, point) {
    target[prop['name']] = prop['prefix'] + point + prop['suffix'];
};
/* Tweener.timerId = NULL; */
Tweener.Items = [];
Tweener['fps'] = 30;
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
    'delegate': function(clsname, eventname, handler) {
        var temp;

        if (!this._delegated) {
            this._delegated = {};
        }
        temp = this._delegated;

        if (!temp[eventname]) {
            temp[eventname] = {};
        }
        temp = temp[eventname];

        if (!temp[clsname]) {
            temp[clsname] = [];
        }
        temp = temp[clsname];

        return selectorForExe(this, function() {
            var wraphandle = delegate.apply(NULL, arguments);

            temp.push([handler, wraphandle]);
        }, arguments);
    },
    'undelegate': function(clsname, eventname, handler) {
        var temp = this._delegated,
            i;

        if (!temp) {
            return FALSE;
        }
        temp = temp[eventname];
        if (!temp) {
            return FALSE;
        }
        temp = temp[clsname];
        if (!temp) {
            return FALSE;
        }

        i = temp.length;

        if (handler) {
            for (; i--; ) {
                if (temp[i][0] === handler) {
                    this['off'](eventname, temp[i][1]);

                    temp.splice(i, 1);

                    return TRUE;
                }
            }

            return FALSE;
        }
        else {
            for (; i--; ) {
                this['off'](eventname, temp[i][1]);
                temp.splice(i, 1);
            }

            return TRUE;
        }
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
(function() {
var methods = $_methods,
    Animation = C['SSAnime'] || {},
    csssupport = Animation['support'],
    EASE = {};

if (csssupport && C['cssease']) {
    EASE = C['cssease'];
}
else if (C['ease']) {
    EASE = C['ease'];
}

methods['animate'] = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return selectorForExe(this, animate, arguments);
}
methods['stop'] = function(/* varless */ mine, i) {
    mine = this;

    if (mine._animate) {
        /* var i = mine._animate.length; */
        i = mine._animate.length;

        for (; i--;) {
            mine._animate[i]['stop']();
        }

        mine._animate = NULL;
    }

    return mine;
}

function animate(el, params, duration, ease, callback) {
    var style = el.style,
        anime,
        option;

    if (isFunction(duration)) {
        callback = duration;
        duration = NULL;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = NULL;
    }

    if (ease) {
        ease = EASE[ease];
    }

    option = {
        'duration': duration,
        'ease': ease,
        'onComplete': callback
    };

    if (csssupport) {
        anime = new Animation(
            el,
            params,
            option
        );
    }
    else {
        anime = new C['Tweener'](
            el.style,
            convertTweenerParam(el, params),
            option
        );
    }

    this._animate.push(anime);
}

function convertTweenerParam(el, params) {
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
}());
C['HashQuery'] = classExtendBase({
    'typeCast': function(str) {
        var caststr = typeCast(str),
            matchstr;

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

        if (!hash) {
            return FALSE;
        }

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
    if (!win['HTML' + type + 'Element']) {
        return FALSE;
    }

    var type = type.toLowerCase(),
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
    return FALSE;
}
Media = classExtendBase({
    'init': function(config) {
        var mine = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            media,
            ev_canplay = 'canplay',
            _parent = config['el'] || body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        switch (config['type']) {
            case 'Audio':
                media = C['Audio'](config);
                break;
            /* case 'Video': */
            default:
                media = C['Video'](config);
        }
        mine._el = media;

        if (media) {
            if (autoplay) {
                var autoplayid;
                autoplay = function() {
                    mine['uncontract'](autoplayid);
                    mine['play']();
                };

                autoplayid = mine['contract'](media, ev_canplay, autoplay);
            }
            if (loop) {
                mine['loop'](TRUE);
            }

            if (config['oncanplay']) {
                mine['contract'](media, ev_canplay, config['oncanplay']);
            }
            if (config['onended']) {
                mine['contract'](media, ev_ended, config['onended']);
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
    'loop': function(bool /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        if (mine._loopid) {
            mine['uncontract'](mine._loopid);
            delete mine._loopid;
        }

        if (bool) {
            mine._loopid =
            mine['contract'](mine._el, ev_ended, function() {
                mine['stop']();
                mine['play']();
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
C['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
C['Sound']['support'] = C['Audio']['support'];
C['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = C['Video']['support'];
    return Embed(config);
};
C['Video']['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
C['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
C['Movie']['support'] = C['Video']['support'];
C['Ajax'] = classExtendBase({
    'init': function(config) {
        if (config) {
            this['request'](config);
        }
    },
    'request': function(vars) {
        var url = vars['url'],
            callback = vars['callback'] || nullFunction,
            error = vars['error'] || nullFunction,
            type = vars['type'] || 'GET',
            query = EMPTY,
            xhr = this._xhr = new XMLHttpRequest();

        if (vars.dataType == 'json') {
            delete vars.dataType;

            return this['json'](vars);
        }

        if (!vars['cash']) {
            if (!vars['query']) {
                vars['query'] = {};
            }

            vars['query']['cir' + dateNow()] = '0';
        }
        if (vars['query']) {
            query = vars['query'];

            if (isObject(query)) {
                query = encodeURI(makeQueryString(query));
            }
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status == 200) {
                return callback(xhr.responseText, xhr);
            }

            error(xhr);
        }

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

        xhr.open(type, url);

        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencoded');
        }
        xhr.send(query);
    },
    'abort': function() {
        if (this._xhr) {
            this._xhr.abort();
        }
    },
    'json': function(vars) {
        var callback = vars['callback'],
            error = vars['error'];

        vars['callback'] = function(data) {
            callback(jsonParse(data));
        };
        vars['error'] = function(data) {
            if (error) {
                error(data);
            }
        };

        this['request'](vars);
    }
});
Async = C['Async'] = classExtendBase({
    _success: 0,
    _miss: 0,
    _progress: 0,
    _check: function(vars /* varless */, mine, state) {
        // var mine = this,
        //     state = NULL;
        mine = this;
        /* state = NULL; */

        if (isDefined(vars)) {
            mine._args.push(vars);
        }

        mine._progress = mine._success / mine._waits;
        if (mine._progress > 1) {
            mine._progress = 1;
        }
        mine._onprogress(mine._progress);

        if (mine._miss) {
            state = new Error('miss');
        }

        if (mine._success == mine._waits || mine._miss) {
            mine._callback(state, mine._args);
            mine._callback =
            mine._onprogress = nullFunction;
        }
    },
    'init': function(config /* varless */, mine, waits) {
        // var mine = this,
        //     waits = config['waits'];
        mine = this;
        waits = config['waits'];

        if (isArray(waits)) {
            waits = waits.length;
        }

        mine._waits = waits;
        mine._callback = config['callback'];
        mine._onprogress = config['onprogress'] || nullFunction;

        mine._args = [];
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
    'exit': function(vars /* varless */, mine) {
        mine = this;

        mine._success = mine._waits;

        mine._check(vars);
    }
});
C['Handle'] = classExtendBase({
    'init': function(config) {
        this._config = config;
        this['attach']();
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
    _e: function(onoff) {
        var i,
            config = this._config,
            events = config['events'];

        for (i in events) {
            onoff(
                config['el'],
                i,
                events[i]
            );
        }
    }
});
C['Anvas'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._canvas = config['canvas'];
        mine._ctx = mine._canvas.getContext('2d');

        mine['setSize'](config);
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
        var canv = create('canvas'),
            img = create('img');

        img.onload = function() {
            canv.width = vars['width'];
            canv.height = vars['height'];
            canv.getContext('2d').drawImage(img, 0, 0);

            vars.onload(canv, img);
        };
        img.src = vars['src'];

        return {'image': canv, 'x': vars.x || 0, 'y': vars.y || 0};
    },
    'pigments': function(vars, callback) {
        var mine = this,
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
                    callback(ret);
                }
            };

            ret[i] = mine['pigment'](pig);
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
            temp = layer[i];
            ctx.drawImage(temp['image'], temp['x'], temp['y']);
        }
    }
}, !!win['HTMLCanvasElement']);
C['Datetime'] = function(str) {
    if (str && !isNumber(str)) {
        str = str.split(/[T:\-\+\/\s]/);

        if (str.length == 3) {
            str.push(0, 0, 0);
        }

        return new Date(
            +str[0],
            str[1] - 1,
            +str[2],
            +str[3],
            +str[4],
            +str[5]
        );
    }

    return new Date(str);
};
C['Rollover'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        var cls = config['toggleClass'] || EMPTY,
            over = config['over'] || nullFunction,
            out = config['out'] || nullFunction;

        mine._els = config['els'];

        mine._switchover = function() {
            addClass(mine, cls);
            over();
        }
        mine._switchout = function() {
            removeClass(mine, cls);
            out();
        }
        if (!config['manual']) {
            mine['attach']();
        }
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
    _e: function(onoff /* varless */, mine, i) {
        mine = this;

        /* var i = mine._els.length; */
        i = mine._els.length;

        for (; i--;) {
            onoff(mine._els[i], ev['SWITCHOVER'], mine._switchover);
            onoff(mine._els[i], ev['SWITCHOUT'], mine._switchout);
            onoff(mine._els[i], ev['MOUSEOUT'], mine._switchout);
        }
    }
});
C['DataStore'] = classExtendBase({
    _createStore: function() {
        if (!this._array) {
            return {};
        }

        return [];
    },
    'init': function(config) {
        config = config || NULLOBJ;

        this._array = config['array'] || FALSE,

        this['reset']();
    },
    'set': function(key, val) {
        var i;

        if (typeof key !== 'object') {
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
    'remove': function(key) {
        if (isDefined(this._data[key])) {
            if (!this._array) {
                delete this._data[key];
            }
            else {
                this.data.splice(key, 1);
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
    'set': function(key, val) {
        var i;

        if (typeof key !== 'object') {
            i = {};
            i[key] = val;
            key = i;
        }

        for (i in key) {
            this._storage.setItem(this._n + i, jsonStringify(key[i]));
        }
    },
    'get': function(key /* varless */, mine) {
        mine = this;

        var ret = this._createStore(),
            i,
            storage = mine._storage;

        if (key) {
            return jsonParse(storage.getItem(mine._n + key));
        }

        for (i in storage) {
            if (!mine._n) {
                ret[i] = jsonParse(storage[i]);
            }
            else {
                key = i.split(mine._n)[1];
                if (key) {
                    ret[key] = jsonParse(storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key /* varless */, mine) {
        mine = this;

        key = mine._n + key;

        if (isDefined(mine._storage.getItem(key))) {
            mine._storage.removeItem(key);
        }
    },
    'reset': function(/* varless */ mine, i) {
        mine = this;

        if (!mine._n) {
            return mine._storage.clear();
        }

        /* var i; */

        for (i in mine._storage) {
            mine.remove(i);
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
C['Deferred'] = classExtendBase({
    'init': function() {
        this._queue = [];
    },
    'isResolve': function() {
        return !this._queue;
    },
    'resolve': function(data /* varless */, mine) {
        mine = this;

        if (mine['isResolve']()) {
            return mine;
        }

        var arr = mine._queue,
            len = arr.length,
            i = 0;

        mine._queue = NULL;
        mine._data = data;
        for (; i < len; ++i) {
            arr[i](data);
        }

        return mine;
    },
    'done': function(func /* varless */, mine) {
        mine = this;
        mine._queue ? mine._queue.push(func) : func(mine._data);

        return mine;
    }
});
C['DragFlick'] = classExtendBase({
    _t: function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    },
    _amount: function(vars) {
        var mine = this,
            startX,
            startY,
            dragflg = FALSE;

        mine._contractid.push(
            mine['contract'](vars['el'], ev['SWITCHDOWN'], start),
            mine['contract'](win, ev['SWITCHUP'], end)
        );

        function start(e) {
            var changed = mine._t(e);

            startX = changed.pageX;
            startY = changed.pageY;

            dragflg = TRUE;

            eventPrevent(e);
        }
        function end(e) {
            if (dragflg) {
                var changed = mine._t(e),
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
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._contractid = [];
        mine._config = config;

        config = config || NULLOBJ;
        if (!config['manual']) {
            mine['attach']();
        }
    },
    'attach': function() {
        var mine = this,
            vars = this._config,
            el = vars['el'],
            start = vars['start'] || nullFunction,
            move = vars['move'] || nullFunction,
            end = vars['end'] || nullFunction,
            flg = FALSE,
            startX = 0,
            startY = 0;

        if (vars['direction']) {
            mine._direction({
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
            mine._contractid.push(
                mine['contract'](el, ev, handler)
            );

            function handler(e) {
                callback(mine._t(e));
            }
        }
    },
    'detach': function(/* varless */ mine) {
        mine = this;

        var ary = mine._contractid,
            i = ary.length;

        for (; i--;) {
            mine['uncontract'](ary[i]);
        }

        mine._contractid = [];
    }
});
C['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    if (config['android']) {
        return new ExternalAndroid(config);
    }

    return new ExternalIOS();
};
ExternalAndroid = classExtend(C['HashQuery'], {
    'init': function(config) {
        // this._android = config['android'];
        // this._externalObj = config['externalObj'];
        this._config = config;
    },
    'call': function(conf) {
        this._config['android'][conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        mine._config['externalObj'][name] = function(vars) {
            func(mine['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this._config['externalObj'][name];
    }
});
ExternalIOS = classExtend(C['HashQuery'], {
    'init': function() {
        this._ios = {};
    },
    'dispose': function(/* varless */ i) {
        /* var i; */

        for (i in this._ios) {
            this['removeCallback'](i);
        }

        this['_super']();
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        mine._ios[name] = function(/* varless */ hash) {
            /* var hash = mine['getHash'](); */
            hash = mine['getHash']();

            if (hash['mode'] == name) {
                func(hash['vars']);
            }
        };
        on(win, ev_hashchange, mine._ios[name]);
    },
    'removeCallback': function(name) {
        off(win, ev_hashchange, this._ios[name]);
        delete this._ios[name];
    }
});
C['Facebook'] = classExtendBase({
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
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._criterion =
        mine._surver = config['criterion'];
        mine._msecFrame = mine._getFrame(mine._criterion);
        mine._enterframe = config['enterframe'];
        // mine._prevtime =
        // mine._nowtime =
        // mine._loopid = 0;

        if (!config['manual']) {
            mine['start']();
        }
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
    'enter': function(/* varless */ mine) {
        mine = this;

        mine._enterframe({
            'criterion': mine._criterion,
            'surver': mine._surver
        });
    },
    'start': function(/* varless */ mine) {
        mine = this;

        mine._prevtime = dateNow();
        mine._loopid = setInterval(mine._loop, mine._msecFrame, mine);
    },
    _loop: function(mine /* varless */, nowtime) {
        nowtime = mine._nowtime = dateNow();
        mine._surver = mine._getFrame(nowtime - mine._prevtime);
        mine._prevtime = nowtime;

        mine['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this._loopid);
    }
});
C['ImgLoad'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._srcs = config['srcs'];
        mine._loadedsrcs = [];
        mine._contractid = [];
        mine._async = new Async({
            'waits': mine._srcs,
            'onprogress': config['onprogress'],
            'callback': function() {
                var i = mine._contractid.length;

                for (; i--;) {
                    mine['uncontract'](mine._contractid[i]);
                }
                mine._contractid = [];

                (config['onload'] || nullFunction)(mine._loadedsrcs);
            }
        });

        if (!config['manual']) {
            mine['start']();
        }
    },
    'start': function() {
        var mine = this,
            img,
            i = mine._srcs.length;

        if (mine._started) {
            return;
        }

        mine._started = TRUE;

        for (; i--;) {
            img = create('img');
            img.src = mine._srcs[i];

            mine._contractid.push(mine['contract'](img, ev['LOAD'], countup));
            mine._loadedsrcs.push(img);
        }

        function countup() {
            mine._async['pass']();
        }
    }
});
C['WindowLoad'] = classExtendBase({
    _onload: function(func /* varless */, mine, disposeid, loaded) {
        // var mine = this,
        //     disposeid,
        //     loaded = function() {
        //         mine['uncontract'](disposeid);
        //         func();
        //     };
        mine = this;

        disposeid = mine['contract'](win, ev['LOAD'], function() {
            mine['uncontract'](disposeid);
            func();
        });
    },
    'init': function(config) {
        if (config) {
            this._onload(config['onload']);
        }
    }
});
mb = C['Mobile'] = classExtendBase({
    'getZoom': function() {
        return body.clientWidth / win.innerWidth;
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
    'isMobile': function(/* varless */ mine) {
        mine = this;

        return (
            mine['isAndroid']() ||
            mine['isIOS']() ||
            mine['isWindows']() ||
            mine['isFBAPP']()
        );
    },
    'hideAddress': function() {
        this['contract'](win, ev['LOAD'], hideAddressHandler, FALSE);
        this['contract'](win, ev_orientationchange, hideAddressHandler, FALSE);

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
C['mobile'] = new mb();
(function() {
var userAgent = win.navigator.userAgent.toLowerCase(),
    /* appVersion = win.navigator.appVersion.toLowerCase(), */
    browser;

if (noIndexOf(userAgent, 'opera')) {
    browser = 'opera';
}
else if (noIndexOf(userAgent, 'msie')) {
    browser = 'ie';
}
else if (noIndexOf(userAgent, 'chrome')) {
    browser = 'chrome';
}
else if (noIndexOf(userAgent, 'safari')) {
    browser = 'safari';
}
else if (noIndexOf(userAgent, 'gecko')) {
    browser = 'gecko';
}
else {
    browser = 'ather';
}

pc = C['PC'] = classExtendBase({
    'isChrome': function(ua) {
        return browser == 'chrome';
    },
    'isSafari': function(ua) {
        return browser == 'safari';
    },
    'isGecko': function(ua) {
        return browser == 'gecko';
    },
    'isOpera': function(ua) {
        return browser == 'opera';
    },
    'isIE': function(ua) {
        return browser == 'ie';
    }
});
C['pc'] = new pc();
}());
C['Orientation'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._config = config;

        mine._contractid = [];

        mine._portrait = {
            'portrait': TRUE,
            'landscape': FALSE
        };
        mine._landscape = {
            'portrait': FALSE,
            'landscape': TRUE
        };

        mine['attach']();
    },
    'get': function(/* varless */ mine) {
        mine = this;

        if (isNumber(win.orientation)) {
            if (Math.abs(win.orientation) != 90) {
                return mine._portrait;
            }

            return mine._landscape;
        }

        if (
            win.innerWidth < win.innerHeight
        ) {
            return mine._portrait;
        }

        return mine._landscape;
    },
    'fire': function(/* varless */ mine) {
        mine = this;

        if (
            mine['get']()['portrait']
        ) {
            return mine._config['portrait']();
        }
        mine._config['landscape']();
    },
    'attach': function(vars /* varless */, mine) {
        mine = this;

        var proxyed = proxy(mine, mine['fire']);
        mine._contractid.push(
            mine['contract'](win, ev['LOAD'], proxyed),
            mine['contract'](win, ev_orientationchange, proxyed),
            mine['contract'](win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function(/* varless */ mine) {
        mine = this;

        var i = mine._contractid.length;

        for (; i--;) {
            mine['uncontract'](mine._contractid[i]);
        }

        mine._contractid = [];
    }
}, 'onorientationchange' in win);
C['Modal'] = classExtendBase({
    _closeDetach: function(/* varless */ mine) {
        mine = this;

        var i = mine._contractid.length;

        for (; i--;) {
            mine['uncontract'](mine._contractid[i]);
        }

        mine._contractid = [];
    },
    'init': function(config /* varless */, mine, commoncss) {
        mine = this;
        config = config || NULLOBJ;

        // mine._html = config['html'];
        // mine._bgClose = config['bgClose'];
        // mine._closeSelector = config['closeSelector'];
        mine._config = config;

        /* var commoncss = { */
        commoncss = {
            'display': 'none',
            'position': 'absolute'
        };

        mine._scroll = new C['Scroll']();

        mine._contractid = [];

        mine._bg = create('div', {
            'class': 'cir-modal-bg'
        });
        css(mine._bg, override({
            'z-ndex': 9998,
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '300%'
        }, commoncss));
        append(body, mine._bg);

        mine._inner = create('div', {
            'class': 'cir-modal-content'
        });
        css(mine._inner, override({
            'z-index': 9999,
            'top': '50%',
            'left': '50%'
        }, commoncss));
        append(body, mine._inner);

        if (!config['manual']) {
            mine['open']();
        }
    },
    'dispose': function(/* varless */ mine) {
        mine = this;

        mine['close']();
        remove(mine._bg);
        remove(mine._inner);

        this['_super']();
    },
    'open': function(text /* varless */, mine) {
        mine = this;

        mine._scroll['kill']();
        css(mine._bg, {
            'top': body.scrollTop
        });

        show(mine._bg);

        mine['inner'](text);
    },
    'close': function(/* varless */ mine) {
        mine = this;

        mine._closeDetach();

        html(mine._inner, EMPTY);
        hide(mine._inner);
        hide(mine._bg);

        mine._scroll['revival']();
    },
    'inner': function(text /* varless */, mine, computed, close, i) {
        mine = this;

        // var computed,
        //     close;

        mine._closeDetach();

        text = text || mine._config['html'];

        html(mine._inner, text);
        show(mine._inner);

        computed = computedStyle(mine._inner);

        css(mine._inner, {
            'margin-top':
            body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'margin-left': -(splitSuffix(computed.width)[2] / 2)
        });

        if (mine._config['bgClose']) {
            mine['contract'](mine._bg, ev['CLICK'], proxy(mine, mine['close']));
        }

        if (mine._config['closeSelector']) {
            close = $$child(mine._config['closeSelector'], mine._inner),
                i = close.length;

            for (; i--;) {
                mine._contractid.push(
                    mine['contract'](close[i],
                    ev['CLICK'],
                    proxy(mine, mine['close']))
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
    'attach': function(/* varless */ mine) {
        mine = this;

        mine['detach']();
        mine._attachid = mine['contract'](win, mine._config['e'], mine._config['callback']);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
C['DeviceOrientation'] = function(config) {
    config['e'] = 'deviceorientation';
    return WindowAction(config);
};
C['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
C['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return WindowAction(config);
};
C['DeviceMotion']['support'] = 'ondevicemotion' in win;
(function() {
var Shake,
    convert;

/* if (C['mobile']['isMobile']()) { */
    if (C['DeviceOrientation']['support']) {
        Shake = C['DeviceOrientation'];
        convert = function(e) {
            return e;
        };
    }
    else if (C['DeviceMotion']['support']) {
        Shake = C['DeviceMotion'];
        convert = function(e) {
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
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._shaker = new Shake();
        // mine._limit = config['limit'];
        // mine._waittime = config['waittime'];
        // mine._direction = config['direction'];
        // mine._callback = config['callback'];
        mine._config = config;

        /* if (config['callback'] && config['direction']) { */
        mine['attach']();
        /* } */
    },
    'attach': function() {
        var mine = this,
            base_e,
            shaked = FALSE,
            config = mine._config,
            direction = mine.convertName[config['direction']];

        mine._shaker['attach'](wraphandle);

        function wraphandle(e) {
            e = convert(e);

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
}, Shake ? TRUE : FALSE);

}());
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
C['Observer'] = classExtendBase({
    'init': function() {
        this._observed = {};
    },
    'on': function(key, func /* varless */, mine, observed) {
        mine = this;
        observed = mine._observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        mine['on'](key, wrapfunc);

        function wrapfunc(vars) {
            func(vars);
            mine['off'](key, wrapfunc);
        }
    },
    'off': function(key, func /* varless */, mine) {
        mine = this;

        var observed = mine._observed,
            target = observed[key],
            i;

        if (!func) {
            return delete observed[key];
        }

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
    },
    'fire': function(key, args___) {
        var target = this._observed[key],
            args = [],
            func,
            i;

        if (target) {
            args.push.apply(args, arguments);
            args = args.slice(1);

            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func.apply(null, args);
                }
            }
        }
    }
});
C['PreRender'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._els = config['els'];
        mine._guesslimit = config['guesslimit'] || 30;
        mine._onrendered = config['onrendered'];
        mine._looptime = config['looptime'] || 100;
        mine._loopblur = mine._looptime + (config['loopblur'] || 20);
        /* mine._loopid = mine.prevtime = NULL; */

        if (!config['manual']) {
            mine['start']();
        }
    },
    'dispose': function() {
        clearInterval(this._loopid);
        this['_super']();
    },
    'start': function() {
        var i,
            mine = this,
            prevtime = dateNow();

        for (i = mine._els.length; i--;) {
            show(mine._els[i]);
        }
        mine._loopid = setInterval(check, mine._looptime, mine);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < mine._loopblur) {
                mine._guesslimit--;

                if (mine._guesslimit < 1) {
                    clearInterval(mine._loopid);

                    for (i = mine._els.length; i--;) {
                        hide(mine._els[i]);
                    }

                    mine._onrendered();
                }
            }
        }
    }
});
C['Route'] = classExtendBase({
    'init': function(config) {
        // this._target = config['target'] || EMPTY;
        // this._noregex = config['noregex'];
        // this._action = config['action'];
        this._config = config;

        if (!config['manual']) {
            this['start']();
        }
    },
    'start': function() {
        this['fire'](this._config['target']);
    },
    'fire': function(action /* varless */, mine) {
        mine = this;

        var i,
            config = mine._config,
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
C['ScriptLoad'] = classExtendBase({
    'init': function(config) {
        this._els = [];

        if (config) {
            this['requests'](config);
        }
    },
    'requests': function(varary, callback) {
        var mine = this,
            i = 0,
            len = varary.length,
            async = new Async({
                'waits': varary,
                'callback': function() {
                    callback(mine._els);
                }
            }),
            wrapback;

        for (; i < len; i++) {
            wrapback = varary[i]['callback'];

            varary[i]['callback'] = function(e) {
                wrapback(e);
                async['pass']();
            };

            mine['request'](varary[i]);
        }
    },
    'request': function(vars) {
        var mine = this,
            script = create('script'),
            disposeid;

        /* script.type = 'text/javascript'; */
        script.src = vars['src'];
        append(body, script);
        mine._els.push(script);

        if (vars['callback']) {
            disposeid = mine['contract'](script, ev['LOAD'], function() {
                mine['uncontract'](disposeid);
                vars['callback'].apply(this, arguments);
            });
        }
    }
});
(function() {
var xhr,
    isLoaded = FALSE;

C['ServerMeta'] = classExtendBase({
    'init': function(config) {
        config = config || NULLOBJ;

        var callback = config['callback'] || nullFunction;

        if (!xhr) {
            xhr = getHeader(function() {
                isLoaded = TRUE;
                callback(xhr);
            });
        }
        else {
            callback(xhr);
        }
    },
    'date': function(callback) {
        return getHeader(function(xhr) {
            callback(xhr.getResponseHeader('Date'));
        });
    },
    'connection': function() {
        return getRes('Connection');
    },
    'contentLength': function() {
        return getRes('Content-Length');
    },
    'lastModified': function() {
        return getRes('Last-Modified');
    },
    'server': function() {
        return getRes('Server');
    },
    'contentType': function() {
        return getRes('Content-Type');
    },
    'acceptRanges': function() {
        return getRes('Accept-Ranges');
    },
    'keepAlive': function() {
        return getRes('Keep-Alive');
    }
});

function getRes(value) {
    if (isLoaded) {
        return xhr.getResponseHeader(value);
    }
    return FALSE;
}

function getHeader(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr);
    };

    xhr.open('HEAD', location.href + '?update' + dateNow() + '=1');
    xhr.send(NULL);

    return xhr;
}
}());
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
    'request': function(arg /* varless */, mine) {
        mine = this;

        mine._args = arg;
        mine['clear']();
        mine._waitid = setTimeout(mine['flush'], mine._delay, mine);
    },
    'flush': function(mine) {
        mine = mine || this;

        mine._callback(mine._args);
    },
    'clear': function() {
        clearInterval(this._waitid);
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
    'request': function(vars /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        if (mine._locked) {
            mine._args = vars;
            return;
        }

        mine._callback(vars);
        mine['lock']();
        mine._waitid = setTimeout(function() {
            if (mine._args) {
                mine._callback(mine._args);
                mine._args = NULL;
            }

            mine['unlock']();
        }, mine._waittime, mine);
    },
    'lock': function() {
        this._locked = TRUE;
    },
    'unlock': function(mine) {
        mine = mine || this;

        mine._locked = FALSE;
        clearInterval(mine._waitid);
    }
});
C['Timer'] = function(config) {
    var limit = config['limit'],
        limitx1000 = limit * 1000,
        interval = config['interval'] * 1000,
        onupdate = config['onupdate'],
        ontimeup = config['ontimeup'],
        digit = template2digit(config['template']),
        starttime = 0,
        nowtime = 0,
        endtime = limitx1000,
        preformedtime = getPreformedNum(limit),
        loopid,
        instance = {
            'getLimit': function() {
                return limit;
            },
            'getTime': function() {
                return preformedtime;
            },
            'getProgress': function() {
                var diff = endtime - nowtime,
                    progress = 1 - diff / limitx1000;

                return progress;
            },
            'setUpdate': function(func) {
                onupdate = func;
            },
            'setTimeup': function(func) {
                ontimeup = func;
            },
            'countDown': function(vars) {
                nowtime = starttime = getTime();
                endtime = starttime + limitx1000;
                _loop();
            },
            'stop': function() {
                clearInterval(loopid);
            }
        };

    function loop() {
        loopid = setTimeout(_loop, interval);
    }
    function _loop() {
        nowtime = getTime();

        var diff = limit - (nowtime - starttime) / 1000;

        if (diff < 0) {
            diff = 0;
        }

        preformedtime = getPreformedNum(diff);

        onupdate(preformedtime);

        if (nowtime > endtime) {
            instance['stop']();
            ontimeup();
            return;
        }

        loop();
    }

    function getTime() {
        return dateNow();
    }

    function getPreformedNum(num) {
        var parsed = parseNum(num),
            integer = adaptDigit({
                num: parsed.integer,
                digit: digit.integer
            }),
            few = adaptDigit({
                num: parsed.few,
                digit: digit.few,
                isFew: TRUE
            });

        return (integer + '.' + few);
    }

    function adaptDigit(vars) {
        var num = EMPTY + vars.num,
            digit = vars.digit,
            isFew = vars.isFew,
            deff = digit - num.length;

        if (!isFew) {
            if (deff > -1) {
                return makeFill(deff, 0) + num;
            }

            return makeFill(digit, 9);
        }

        if (deff > 0) {
            return num + makeFill(deff, 0);
        }

        return num.slice(0, digit);
    }

    function makeFill(digit, num) {
        var ret = EMPTY;

        num = EMPTY + num;

        while (digit > 0) {
            ret += num;
            digit--;
        }

        return ret;
    }

    function parseNum(num) {
        num = (EMPTY + num).split('.');

        var integer = num[0],
            few = num[1] ? num[1] : EMPTY;

        return {
            integer: integer,
            few: few
        };
    }

    function template2digit(template) {
        var tempary = template.split('.');
        return {
            integer: tempary[0].length,
            few: tempary[1].length
        };
    }

    return instance;
};
C['Twitter'] = classExtendBase({
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
        this._el = create('div');
        html(this._el, config['data']);
    },
    '$': function(selector) {
        return $child(selector, this._el);
    },
    '$$': function(selector) {
        return $$child(selector, this._el);
    }
});
C['Model'] = classExtendBase({
    _notice: function(eventname, key, val /* varless */, mine) {
        mine = this;

        mine._observer['fire'](eventname, mine._store['get']());

        if (key) {
            mine._observer['fire'](eventname + ':' + key, val);
        }
    },
    'init': function(config /* varless */, mine) {
        mine = this;

        config = config || NULLOBJ;

        var i,
            defaults = config['defaults'] || mine['defaults'] || {},
            events = config['events'] || mine['events'];

        mine._validate = config['validate'] || mine['validate'] || {};
        mine._store = config['store'] || mine['store'] || new C['DataStore']();
        mine._observer = new C['Observer']();

        for (i in defaults) {
            mine['set'](i, defaults[i]);
        }
        for (i in events) {
            mine['on'](i, events[i]);
        }
    },
    'set': function(key, val /* varless */, mine) {
        mine = this;

        var i;

        if (typeof key !== 'object') {
            i = {};
            i[key] = val;
            key = i;
        }

        mine._prev = mine._store['get']();

        for (i in key) {
            val = key[i];

            if (
                mine._validate[i] &&
                !mine._validate[i](i, val)
            ) {
                return mine._notice('fail', i, val);
            }

            mine._store['set'](i, val);
            mine._observer['fire'](ev['CHANGE'] + ':' + i, val);
        }

        mine._observer['fire'](ev['CHANGE'], mine._store['get']());
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
    'remove': function(key /* varless */, mine) {
        mine = this;

        if (key) {
            var get = mine._store['get'](key),
                ret = mine._store['remove'](key);

            mine._notice('remove', key, get);

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
    'init': function(config /* varless */, mine, i) {
        mine = this;

        /* var i; */

        if (!config) {
            config = owner(mine, mine, {});
        }
        else {
            config = owner(mine, config);
        }

        mine['el'] = C['$'](config['el'] || mine['el'] || create('div'));

        mine['attach']();
        if (config['init']) {
            mine['init']();
        }
    },
    'dispose': function() {
        this['detach']();
        this['_super']();
    },
    _e: function(methodname /* varless */, mine, i, j, $el, events) {
        mine = this;

        // var i,
        //     j,
        //     $el,
            events = mine['events'];

        for (i in events) {
            if (i == 'me') {
                $el = mine['el'];
            }
            else {
                $el = mine['el'].find(i);
            }

            for (j in events[i]) {
                $el[methodname](j, mine[events[i][j]]);
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
    'init': function(config /* varless */, mine) {
        mine = this;

        config = config || NULLOBJ;

        var i,
            defaults = config['defaults'] || mine['defaults'] || [],
            events = config['events'] || mine['events'];

        /* mine._validate = config['validate'] || mine['validate'] || {}; */
        mine._store =
            config['store'] ||
            mine['store'] ||
            new C['DataStore']({
                'array': TRUE
            });
        mine._observer = new C['Observer']();

        for (i in defaults) {
            mine['set'](i, defaults[i]);
        }
        for (i in events) {
            mine['on'](i, events[i]);
        }
    },
    'set': function(key, val /* varless */, mine) {
        mine = this;

        var i;

        if (typeof key !== 'object') {
            i = {};
            i[key] = val;
            key = i;
        }

        mine._prev = mine._store['get']();

        for (i in key) {
            val = key[i];

            if (!isNumber(+i)) {
                return mine._notice('fail', key, val);
            }

            mine._store['set'](key, val);
            mine._observer['fire'](ev['CHANGE'], val, +i, mine._store['get']());
        }
    },
    'add': function(val) {
        var collectid = this._store['get']().length;

        this['set'](collectid, val);

        return collectid;
    },
    'each': function(callback) {
        var i,
            collection = this['get']();

        for (i in collection) {
            callback.apply(this, [collection[i], i, collection]);
        }
    },
    'map': function(callback) {
        var i,
            collection = this['get']();

        for (i in collection) {
            this['set'](i, callback.apply(this, [collection[i], i, collection]));
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
    'init': function(config /* varless */, mine) {
        mine = this;

        config = config || {};

        /* mine._level = config['level'] || 'warn'; */
        mine._level = config['level'];

        owner(mine, mine, config);
    },
    'displayError': function(key, text) {
        text = 'Validate Error:' + key + ' is ' + text + '.';

        switch (this.level) {
            case 'log':
                console.log(text);
                return FALSE;
            case 'error':
                throw new Error(text);
            case 'off':
                return FALSE;
            /* case 'warn': */
            default:
                console.warn(text);
                return FALSE;
        }
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
C['validate'] = new C['Validate']();
C['Scroll'] = classExtendBase({
    'dispose': function() {
        this['revival']();
        clearInterval(this._smoothid);

        this['_super']();
    },
    'to': scrollTo,
    'toTop': pageTop,
    'toBottom': function() {
        scrollTo(doc.height);
    },
    'scrollY': function(/* varless */ pageYOffset) {
        pageYOffset = win.pageYOffset;

        return (pageYOffset !== UNDEFINED) ? pageYOffset : (doc.documentElement || body.parentNode || body).scrollTop;
    },
    'smooth': function(target, callback /* varless */, mine, max) {
        // var mine = this,
        //     max;
        mine = this;

        callback = callback || nullFunction;

        if (!mine._smoothmove) {
            mine._smoothmove = TRUE;

            if (!isNumber(target)) {
                target = target.offsetTop;
            }

            max = doc.height - win.innerHeight;
            if (target > max) {
                target = max;
            }

            mine._before = mine.scrollY();
            mine._smoothid = setInterval(function(/* varless */ position) {
                /* var position = mine.scrollY(); */
                position = mine.scrollY();

                position = (target - position) * 0.3 + position;

                if (Math.abs(target - position) < 1 || mine._before == position) {
                    scrollTo(target);
                    clearInterval(mine._smoothid);
                    callback(target);
                    return delete mine._smoothmove;
                }

                mine._before = position;
                scrollTo(position);
            }, 50);
        }
    },
    'kill': function(/* varless */ mine) {
        mine = this;

        if (!mine._killscrollid) {
            css(body, {
                'overflow': 'hidden'
            });
            mine._killscrollid = mine['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function(/* varless */ mine) {
        mine = this;

        if (mine._killscrollid) {
            css(body, {
                'overflow': 'auto'
            });
            mine['uncontract'](mine._killscrollid);
            delete mine._killscrollid;
        }
    }
});
C['LimitText'] = classExtendBase({
    _minfontsize: 8,
    _copyAppend: function(text) {
        html(this._copyel, text);
        append(parent(this._el), this._copyel);
    },
    _copyRemove: function() {
        html(this._copyel, EMPTY);
        remove(this._copyel);
    },
    'init': function(config) {
        var el = this._el = config['el'],
            copyel = this._copyel = create(el.tagName, {
                'class': attr(el, 'class'),
                'id': attr(el, 'id'),
                'style': attr(el, 'style')
            }),
            computed = this._computed = computedStyle(copyel);

        this._width = config['width'];
        this._height = config['height'];

        css(copyel, {
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'visibility': 'hidden'
        });

        this._copyAppend(0);
        this._fontsize = +splitSuffix(computed['fontSize'])[2];
        this._copyRemove();
    },
    _limitCheck: function() {
        if (
            +splitSuffix(this._computed['width'])[2] <= this._width &&
            +splitSuffix(this._computed['height'])[2] <= this._height
        ) {
            return TRUE;
        }

        return FALSE;
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
if ($_methods) {
    $base.prototype = $_methods;
}
}());
