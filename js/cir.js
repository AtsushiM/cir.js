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
    /* Global = win['C'] = {}, */
    Global = C = {},
    DeviceAction,
    ExternalAndroid,
    ExternalIOS,
    Media,
    Tweener,
    WebStorage,
    mb,
    pc;

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
/* Test: "../../spec/_src/src/util/test.js" */
if (!Date['now']) {
    Date['now'] = function now() {
        return new Date * 1;
    };
}

function dateNow() {
    return Date['now']();
}

function pageTop() {
    win.scrollTo(0, 1);
}
function override(target, vars) {
    var i;

    for (i in vars) {
        target[i] = vars[i];
    }

    return target;
}
function typeCast(str) {
    var matchstr = EMPTY + str;

    if (matchstr.match('^{.*}$')) {
        return jsonParse(matchstr);
    }
    if (matchstr.match('^[0-9\.]+$')) {
        return matchstr * 1;
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
function template(templatetxt, replaceobj) {
    var i;

    for (i in replaceobj) {
        templatetxt = replaceAll(templatetxt, '<%= ' + i + ' %>', replaceobj[i]);
    }

    return templatetxt;
}
function windowOpen(url, windowname, option) {
    var i,
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
function makeQueryString(vars) {
    var sign = EMPTY,
        query = EMPTY,
        i;

    for (i in vars) {
        if (vars[i]) {
            query += sign + i + '=' + encodeURIComponent(vars[i]);
            sign = '&';
        }
    }

    return query;
}
function parseQueryString(query) {
    query = query
        .replace(/^[\#\?]/, EMPTY);

    var params = query.split('&'),
        i = params.length,
        p,
        result = {};

    for (; i--;) {
        p = params[i].split('=');
        result[p[0]] = typeCast(decodeURIComponent(p[1]));
    }
    return result;
}
function is(key, vars) {
    if (Object.prototype.toString.call(vars) === '[object ' + key + ']') {
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
    return !is('Undefind', vars);
}
function isTouchable() {
    return 'ontouchstart' in win;
}
function nullFunction() {
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
function owner(ownerObj, methods, overrideObj) {
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

Global['util'] = {
    'win': win,
    'doc': doc,
    'pageTop': pageTop,
    'override': override,
    'replaceAll': replaceAll,
    'template': template,
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
    'eventPrevent': eventPrevent,
    'eventStop': eventStop,
    'checkUserAgent': checkUserAgent,
    'proxy': proxy,
    'owner': owner
};
/* Test: "../../spec/_src/src/dom/test.js" */
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
    var eles = el.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(el, cls) {
    var clsName = el.className,
        addedcls = clsName ? clsName.split(' ') : [],
        i = addedcls.length;

    for (; i--;) {
        if (cls === addedcls[i]) {
            return TRUE;
        }
    }

    return FALSE;
}

function addClass(el, cls) {
    if (!hasClass(el, cls)) {
        var between = EMPTY,
            orgcls = el.className;

        if (orgcls) {
            between = ' ';
        }

        el.className = orgcls + between + cls;
    }
}

function removeClass(el, cls) {
    if (hasClass(el, cls)) {
        var addedcls,
            attachcls = [],
            i,
            len;

        addedcls = el.className.split(' ');
        i = addedcls.length;

        for (; i--;) {
            if (cls !== addedcls[i]) {
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

function attr(el, vars, value) {
    var i;

    if (isObject(vars)) {
        for (i in vars) {
            el.setAttribute(i, vars[i]);
        }

        return TRUE;
    }

    if (value || value === EMPTY) {
        return el.setAttribute(vars, value);
    }

    return el.getAttribute(vars);
}
function removeAttr(el, key) {
    el.removeAttribute(key);
}

function create(tagname, attribute) {
    var el= doc.createElement(tagname);

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
function show(el) {
    el.style.display = 'block';
}
function hide(el) {
    el.style.display = 'none';
}
function opacity(el, value) {
    el.style.opacity = value;
}
function css(el, addstyle) {
    var style = el.style,
        i,
        key,
        value;

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
function remove(el) {
    return parent(el).removeChild(el);
}
function html(el, text) {
    if (!text) {
        return el.innerHTML;
    }

    el.innerHTML = text;
}

Global['dom'] = {
    '$': $,
    '$$': $$,
    '$child': $child,
    '$$child': $$child,
    '$id': $id,
    'on': on,
    'off': off,
    'create': create,
    'show': show,
    'hide': hide,
    'opacity': opacity,
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
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html
};
/* Test: "../../spec/_src/src/klass/test.js" */
Global['klass'] = function(config) {
    var init = config['init'] || function() {},
        wrap = function() {
            var inits = ancestors(this, '__init__'),
                i = inits.length;

            for (; i--;) {
                inits[i].apply(this, arguments);
            }
        },
        prop = config['prop'],
        extend = config['extend'];

    if (extend) {
        Global['extend'](wrap, extend);
    }
    wrap.prototype['__init__'] = init;

    override(wrap.prototype, prop);

    return wrap;
};
Global['klass']['ancestors'] = ancestors;

function ancestors(obj, propname) {
    var props = [],
        flg = TRUE;

    while (flg) {
        if (obj[propname] && props[props.length - 1] !== obj[propname]) {
            props.push(obj[propname]);
        }
        if (obj['_superclass'] && obj['_superclass'].prototype) {
            obj = obj['_superclass'].prototype;
        }
        else {
            flg = FALSE;
        }
    }

    return props;
}
function klassExtend(kls, init, prop) {
    return Global['klass']({
        'extend': kls,
        'init': init,
        'prop': prop
    });
}
function klassExtendBase(init, prop) {
    return klassExtend(Global['Base'], init, prop);
}
/* Test: "../../spec/_src/src/extend/test.js" */
Global['extend'] = function(child, _super) {
    function ctor() {}

    ctor.prototype = _super.prototype;
    child.prototype = new ctor();

    var cpt = child.prototype;

    cpt['_superclass'] = _super;
    cpt['_super'] = function() {
        var prev = this._prevctor;

        if (prev) {
            prev = prev.prototype['_superclass'];
        }
        else {
            prev = this._prevctor = _super;
        }

        prev.apply(this, arguments);
    };
};
/* Test: "../../spec/_src/src/Base/test.js" */
Global['Base'] = klassExtend(UNDEFINED, function() {
    this._dispose = {};
}, {
    _disid: 0,
    'dispose': function() {
        var internal = ancestors(this, 'disposeInternal'),
            i = 0,
            len = internal.length;

        for (; i < len; i++) {
            internal[i].call(this);
        }

        for (i in this._dispose) {
            off.apply(NULL, this._dispose[i]);
        }

        for (i in this) {
            if (this[i] && isFunction(this[i]['dispose'])) {
                this[i]['dispose']();
            }
        }

        this.__proto__ = NULL;

        for (i in this) {
            this[i] = NULL;
            delete this[i];
        }

        return NULL;
    },
    'contract': function(el, e, handler) {
        on(el, e, handler);
        this._disid++;
        this._dispose[this._disid] = [el, e, handler];

        return this._disid;
    },
    'uncontract': function(id) {
        if (id) {
            var arg = this._dispose[id];

            delete this._dispose[id];

            off(arg[0], arg[1], arg[2]);
        }
    }
});
/* Test: "../../spec/_src/src/Event/test.js" */
ev = klassExtendBase(UNDEFINED, {
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
Global['Event'] = ev;
ev = Global['e'] = new ev();
/* Test: "../../spec/_src/src/ease/test.js" */
Global['ease'] = {
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
/* Test: "../../spec/_src/src/cssease/test.js" */
Global['cssease'] = {
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
/* Test: "../../spec/_src/src/Animation/test.js" */
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
    Mine;

Mine = Global['Animation'] =
    klassExtendBase(function(el, property, option) {

    option = option || NULLOBJ;

    this.onComplete = option['onComplete'] || nullFunction;

    this.el = el;

    Mine['id']++;
    this._id = 'ciranim' + Mine['id'];

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

    this.property = prop;

    prop = replaceAll(
        replaceAll(jsonStringify(prop), '"', EMPTY),
        ',',
        ';'
    );

    sheet.insertRule(
        '@' + css_prefix + 'keyframes ' + this._id + '{to' + prop + '}',
        sheet.cssRules.length);

    if (!isArray(ease)) {
        ease = [ease];
    }

    addCSSRule(this._id, css_prefix, duration, ease);

    if (!option['manual']) {
        this['start']();
    }
}, {
    _off: function() {
        off(this.el, event_key + 'End', this._end);
        off(this.el, 'animationend', this._end);
    },
    'disposeInternal': function() {
        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine._end = endaction;
        on(mine.el, event_key + 'End', endaction);
        on(mine.el, 'animationend', endaction);

        addClass(mine.el, mine._id);

        function endaction(e) {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            mine._off();


            if (prefix === 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name === mine._id) {
                        sheet.deleteRule(len);
                    }
                }
                removeClass(mine.el, mine._id);

                css(mine.el, mine.property);
            }
            mine.onComplete(e);
        }
    },
    'stop': function() {
        var stopobj = {};

        stopobj[css_prefix + 'animation-play-state'] = 'paused';

        css(this.el, stopobj);
        this._off();
    }
});

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
Mine['support'] = support;
}());
/* Test: "../../spec/_src/src/Transition/test.js" */
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

Mine = Global['Transition'] =
    klassExtendBase(function(el, property, option) {

    option = option || NULLOBJ;

    Mine['id']++;
    this._id = 'cirtrans' + Mine['id'];

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

    addCSSRule(this._id, css_prefix, duration, ease, transProp);

    this.el = el;
    this.property = property;
    this.onComplete = option['onComplete'] || nullFunction;

    if (!option['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine._endfunc = function(e) {
            mine['stop']();
            setTimeout(function() {
                mine.onComplete(e);
            }, 1);
        };

        on(mine.el, event_key + 'End', mine._endfunc);
        on(mine.el, 'transitionend', mine._endfunc);
        addClass(mine.el, mine._id);
        css(mine.el, mine.property);
    },
    'stop': function() {
        var rule = sheet.cssRules,
            len = rule.length,
            name;

        off(this.el, event_key + 'End', this._endfunc);
        off(this.el, 'transitionend', this._endfunc);
        removeClass(this.el, this._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name === this._id) {
                sheet.deleteRule(len);
                break;
            }
        }
    }
});

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
Mine['support'] = support;
Mine['duration'] = 500;
}());
/* Test: "../../spec/_src/src/Tweener/test.js" */
Tweener = Global['Tweener'] = klassExtendBase(function(target, property, option) {
    var name,
        prop;

    option = option || {};

    this._target = target;
    this.property = [];

    for (name in property) {
        prop = property[name];
        prop['name'] = name;

        prop.distance = prop['to'] - prop['from'];
        prop['prefix'] = prop['prefix'] || EMPTY;
        prop['suffix'] = prop['suffix'] || 'px';

        this.property.push(prop);
    }

    this._duration = option['duration'] || Tweener['duration'];
    this.ease = option['ease'] || this._ease;
    this.onComplete = option['onComplete'];

    if (!option['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        this['stop']();
    },
    // easeOutExpo
    _ease: function(time, from, dist, duration) {
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
    loop: function() {
        var mine = this,
            items = Tweener.Items,
            item,
            now = dateNow(),
            time,
            n = items.length,
            /* i = 0, */
            len,
            prop;

        while (n--) {
            item = items[n];
            /* len = item.property.length; */
            i = item.property.length;
            time = now - item.begin;

            if (time < item._duration) {
                for (; i--;) {
                    prop = item.property[i];

                    Tweener._setProp(item._target, prop, item.ease(
                        time,
                        prop['from'],
                        prop.distance,
                        item._duration
                    ));
                }
            }
            else {
                for (; i--;) {
                    prop = item.property[i];

                    Tweener._setProp(item._target, prop, prop['to']);
                }
                if (item.onComplete) {
                    item.onComplete();
                }
                items.splice(n, 1);
            }
        }

        if (items.length) {
            mine._requestAnimationFrame(function() {
                mine.loop();
            });

            return;
        }

        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine.begin = dateNow();

        Tweener.Items.push(mine);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine.loop();
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
/* Test: "../../spec/_src/src/selector/test.js" */
Global['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    function base() {
    }
    base.prototype = Global['$'].methods;

    /* _parent = _parent || doc; */

    if (isString(query)) {
        _parent = _parent || doc;
        $el = _parent.querySelectorAll(query);
    }
    else {
        $el = [query];
        query = EMPTY;
    }
    len = $el.length;
    instance = new base();

    instance.length = len;
    /* instance._selector = query; */
    /* instance._parent = _parent; */

    /* for (; i < len; i++) { */
    for (;len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
/* Test: "../../spec/_src/src/selector.methods/test.js" */
(function() {
function forExe(_this, func, arg) {
    var i = _this.length,
        ary = makeAry(arg);

    for (; i--;) {
        ary[0] = _this[i];
        func.apply(_this, ary);
    }

    return _this;
}
function exe(_this, func, arg) {
    var ary = makeAry(arg);

    ary[0] = _this[0];

    return func.apply(NULL, ary);
}

function makeAry(arg) {
    var ary = [NULL];

    ary.push.apply(ary, arg);

    return ary;
}

Global['$'].methods = {
    _forexe: forExe,
    _exe: exe,
    _argary: makeAry,
    'querySelectorAll': function(query) {
        return this[0].querySelectorAll(query);
    },
    'find': function(query) {
        return Global['$'](query, this._parent);
    },
    'parent': function() {
        return Global['$'](parent(this[0]));
    },
    'on': function() {
        return forExe(this, on, arguments);
    },
    'off': function() {
        return forExe(this, off, arguments);
    },
    'show': function() {
        return forExe(this, show);
    },
    'hide': function() {
        return forExe(this, hide);
    },
    'opacity': function() {
        return forExe(this, opacity, arguments);
    },
    'hasClass': function() {
        return exe(this, hasClass, arguments);
    },
    'addClass': function() {
        return forExe(this, addClass, arguments);
    },
    'removeClass': function() {
        return forExe(this, removeClass, arguments);
    },
    'toggleClass': function() {
        return forExe(this, toggleClass, arguments);
    },
    'css': function() {
        return forExe(this, css, arguments);
    },
    'html': function() {
        return exe(this, html, arguments);
    },
    'attr': function() {
        return exe(this, attr, arguments);
    },
    'removeAttr': function() {
        return forExe(this, removeAttr, arguments);
    },
    'append': function() {
        return forExe(this, append, arguments);
    },
    'before': function() {
        return exe(this, before, arguments);
    },
    'after': function() {
        return exe(this, after, arguments);
    },
    'remove': function() {
        return forExe(this, remove, arguments);
    }
};
}());
/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
var methods = Global['$'].methods,
    Animation = Global['Animation'] || {},
    csssupport = Animation['support'],
    EASE = {};

if (csssupport && Global['cssease']) {
    EASE = Global['cssease'];
}
else if (Global['ease']) {
    EASE = Global['ease'];
}

methods['animate'] = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return methods._forexe(this, animate, arguments);
}
methods['stop'] = function() {
    if (this._animate) {
        var i = this._animate.length;

        for (; i--;) {
            this._animate[i]['stop']();
        }

        this._animate = NULL;
    }

    return this;
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
        anime = new Global['Tweener'](
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

        if (!from || from === 'none') {
            from = 0;
        }
        else {
            from = splitSuffix(from)[2] * 1;
        }

        retobj[name] = {
            'from': from,
            'to': tosplit[2] * 1 || 0,
            'prefix': tosplit[1],
            'suffix': tosplit[3]
        };
    }

    return retobj;
}
}());
/* Test: "../../spec/_src/src/HashQuery/test.js" */
Global['HashQuery'] = klassExtendBase(UNDEFINED,
{
    'typeCast': function(str) {
        var caststr = typeCast(str),
            matchstr;

        if (str === caststr) {
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
        var hash,
            mode,
            varsHash,
            vars,
            splitVar,
            i;

        hash = decodeURIComponent(hashvars)
               .split('#')[1];

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
/* Test: "../../spec/_src/src/Embed/test.js" */
/* Global.Embed = function(config) { */
function Embed(config) {
    /* var embed = create(config['type'].toLowerCase()); */
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
/* Global['Embed']['supportcheck'] = embedSupportCheck; */
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
/* Test: "../../spec/_src/src/Media/test.js" */
Media = klassExtendBase(function(config) {
    var mine = this,
        autoplay = config['autoplay'],
        loop = config['loop'],
        media,
        ev_canplay = 'canplay',
        _parent = config['el'] || doc.body;

    config['preload'] = 'auto';
    config['autoplay'] =
    config['loop'] = FALSE;

    switch (config['type']) {
        case 'Audio':
            media = Global['Audio'](config);
            break;
        /* case 'Video': */
        default:
            media = Global['Video'](config);
    }
    mine._el = media;

    if (media) {
        if (autoplay) {
            var autoplayid;
            autoplay = function() {
                mine['uncontract'](autoplayid);
                mine['play']();
            };

            autoplayid = this['contract'](media, ev_canplay, autoplay);
        }
        if (loop) {
            this['loop'](TRUE);
        }

        if (config['oncanplay']) {
            this['contract'](media, ev_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this['contract'](media, ev_ended, config['onended']);
        }

        append(_parent, media);
    }
}, {
    'disposeInternal': function() {
        remove(this._el);
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
    'loop': function(bool) {
        var mine = this;
        if (mine.loopid) {
            mine['uncontract'](mine.loopid);
            delete mine.loopid;
        }

        if (bool) {
            mine.loopid =
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
/* Test: "../../spec/_src/src/Sound/test.js" */
Global['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
Global['Sound']['support'] = Global['Audio']['support'];
/* Test: "../../spec/_src/src/Video/test.js" */
Global['Video'] = function(config) {
    config['type'] = 'video';
    config['suffix'] = Global['Video']['support'];
    return Embed(config);
};
Global['Video']['support'] = embedSupportCheck('Video', [
    ['webm', 'webm'],
    ['mp4', 'mp4'],
    ['ogv', 'ogg']
]);
/* Test: "../../spec/_src/src/Movie/test.js" */
Global['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
Global['Movie']['support'] = Global['Video']['support'];
/* Test: "../../spec/_src/src/Ajax/test.js" */
Global['Ajax'] = klassExtendBase(function(config) {
    if (config) {
        this['request'](config);
    }
}, {
    'request': function(vars) {
        if (vars.dataType === 'json') {
            delete vars.dataType;

            return this.json(vars);
        }

        var url = vars['url'],
            callback = vars['callback'] || nullFunction,
            error = vars['error'] || nullFunction,
            type = vars['type'] || 'GET',
            query = EMPTY,
            xhr = this.xhr = new XMLHttpRequest();

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

        if (type === 'GET') {
            if (url.indexOf('?') !== -1) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = EMPTY;
        }

        xhr.open(type, url);

        if (type === 'POST') {
            xhr.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencoded');
        }
        xhr.send(query);
    },
    'abort': function() {
        if (this.xhr) {
            this.xhr.abort();
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
/* Test: "../../spec/_src/src/Handle/test.js" */
Global['Handle'] = klassExtendBase(function(config) {
    this.config = config;
    this['attach']();
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff) {
        var i;

        for (i in this.config['events']) {
            onoff(
                this.config['el'],
                i,
                this.config['events'][i]
            );
        }
    }
});
/* Test: "../../spec/_src/src/Brush/test.js" */
Global['Brush'] = klassExtendBase(function(config) {
    this._canvas = config['canvas'];
    this._ctx = this._canvas.getContext('2d');

    this['setSize'](config);
}, {
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

                if (count === 0) {
                    onload();
                }
            };

            ret[i] = mine['pigment'](pig);
            count++;
        }
        function onload() {
            callback(ret);
        }

        return ret;
    },
    'draw': function(layer) {
        var i = 0, len = layer.length, item;

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        for (; i < len; i++) {
            item = layer[i];
            this._ctx.drawImage(item['image'], item['x'], item['y']);
        }
    }
});
Global['Brush']['support'] = !!win['HTMLCanvasElement'];
/* Test: "../../spec/_src/src/Datetime/test.js" */
Global['Datetime'] = function(str) {
    if (!str || isNumber(str)) {
        return new Date(str);
    }

    str = str.split(/[T:\-\+\/\s]/);

    if (str.length === 3) {
        str.push(0, 0, 0);
    }

    return new Date(
        str[0] * 1,
        str[1] - 1,
        str[2] * 1,
        str[3] * 1,
        str[4] * 1,
        str[5] * 1
    );
};
/* Test: "../../spec/_src/src/DataStore/test.js" */
Global['DataStore'] = klassExtendBase(function() {
    this._data = {};
}, {
    'set': function(key, val) {
        this._data[key] = val;
    },
    'get': function(key) {
        if (key) {
            return this._data[key];
        }

        var ret = {},
            i;

        for (i in this._data) {
            ret[i] = this._data[i];
        }

        return ret;
    },
    'remove': function(key) {
        if (isDefined(this._data[key])) {
            delete this._data[key];
        }
    },
    'reset': function() {
        this._data = {};
    }
});
/* Test: "../../spec/_src/src/WebStorage/test.js" */
WebStorage = klassExtendBase(function(config) {
    this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
    this._storage = win[config['type'] + 'Storage'];
}, {
    'set': function(key, val) {
        this._storage.setItem(this._n + key, jsonStringify(val));
    },
    'get': function(key) {
        var ret = {},
            i;

        if (key) {
            return jsonParse(this._storage.getItem(this._n + key));
        }

        for (i in this._storage) {
            if (!this._n) {
                ret[i] = jsonParse(this._storage[i]);
            }
            else {
                key = i.split(this._n)[1];
                if (key) {
                    ret[key] = jsonParse(this._storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key) {
        key = this._n + key;

        if (isDefined(this._storage.getItem(key))) {
            this._storage.removeItem(key);
        }
    },
    'reset': function() {
        if (!this._n) {
            return this._storage.clear();
        }

        var i;

        for (i in this._storage) {
            this.remove(i);
        }
    }
});
/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'local';
    return new WebStorage(config);
};
/* Test: "../../spec/_src/src/SessionStorage/test.js" */
Global['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'session';
    return new WebStorage(config);
};
/* Test: "../../spec/_src/src/Deferred/test.js" */
Global['Deferred'] = klassExtendBase(function() {
    this.queue = [];
}, {
    'isResolve': function() {
        return !this.queue;
    },
    'resolve': function(data) {
        if (this['isResolve']()) {
            return this;
        }

        var arr = this.queue,
            len = arr.length,
            i = 0;

        this.queue = NULL;
        this.data = data;
        for (; i < len; ++i) {
            arr[i](data);
        }

        return this;
    },
    'done': function(func) {
        this.queue ? this.queue.push(func) : func(this.data);

        return this;
    }
});
/* Test: "../../spec/_src/src/DragFlick/test.js" */
Global['DragFlick'] = klassExtendBase(function(config) {
    this._contractid = [];
    this.config = config;

    config = config || NULLOBJ;
    if (!config['manual']) {
        this['attach']();
    }
}, {
    _t: function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    },
    _amount: function(vars) {
        var mine = this,
            startX,
            startY,
            dragflg = FALSE;

        this._contractid.push(
            this['contract'](vars['el'], ev['SWITCHDOWN'], start),
            this['contract'](win, ev['SWITCHUP'], end)
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
    'attach': function() {
        var mine = this,
            vars = this.config,
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
            var handler = function(e) {
                    var changed = mine._t(e);
                    callback(changed);
                };

            mine._contractid.push(
                mine['contract'](el, ev, handler)
            );
        }
    },
    'detach': function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    }
});
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    var ext = ExternalIOS;

    if (config['android']) {
        ext = ExternalAndroid;
    }

    return new ext(config);
};
/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
ExternalAndroid = klassExtend(Global['HashQuery'], function(config) {
    this.android = config['android'];
    this.externalObj = config['externalObj'];
}, {
    'call': function(conf) {
        this.android[conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func) {
        var mine = this;

        mine.externalObj[name] = function(vars) {
            func(mine['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this.externalObj[name];
    }
});
/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
ExternalIOS = klassExtend(Global['HashQuery'], function() {
    this.ios = {};
}, {
    'disposeInternal': function() {
        var i;

        for (i in this.ios) {
            this['removeCallback'](i);
        }
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func) {
        var mine = this;
        mine.ios[name] = function(e) {
            var hash = mine['getHash']();

            if (hash['mode'] === name) {
                func(hash['vars']);
            }
        };
        on(win, ev_hashchange, mine.ios[name]);
    },
    'removeCallback': function(name) {
        off(win, ev_hashchange, this.ios[name]);
        delete this.ios[name];
    }
});
/* Test: "../../spec/_src/src/Facebook/test.js" */
Global['Facebook'] = klassExtendBase(UNDEFINED,
{
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
/* Test: "../../spec/_src/src/FPS/test.js" */
Global['FPS'] = klassExtendBase(function(config) {
    this.criterion =
    this.surver = config['criterion'];
    this.msecFrame = this._getFrame(this.criterion);
    this.enterframe = config['enterframe'];
    // this.prevtime =
    // this.nowtime =
    // this.loopid = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    prevtime: 0,
    nowtime: 0,
    loopid: 0,
    'disposeInternal': function() {
        this['stop']();
    },
    'getCriterion': function() {
        return this.criterion;
    },
    'getSurver': function() {
        return this.surver;
    },
    'getFrameTime': function() {
        return this.msecFrame;
    },
    'enter': function() {
        this.enterframe({
            'criterion': this.criterion,
            'surver': this.surver
        });
    },
    'start': function() {
        this.prevtime = dateNow();
        this.loopid = setInterval(this._loop, this.msecFrame, this);
    },
    _loop: function(mine) {
        mine.nowtime = dateNow();
        mine.surver = mine._getFrame(mine.nowtime - mine.prevtime);
        mine.prevtime = mine.nowtime;

        mine['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this.loopid);
    }
});
/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global['ImgLoad'] = klassExtendBase(function(config) {
    this.srcs = config['srcs'];
    this.srccount = this.srcs.length;
    this.loadedsrcs = [];
    this._contractid = [];
    this._onload = config['onload'] || nullFunction;
    this._onprogress = config['onprogress'] || nullFunction;
    // this.loadcount = 0;
    // this.progress = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    loadcount: 0,
    progress: 0,
    _c: function() {
        this.loadcount++;

        this.progress = this.loadcount / this.srccount;
        this._onprogress(this.progress);

        if (this.loadcount >= this.srccount) {
            var i = this._contractid.length;

            for (; i--;) {
                this['uncontract'](this._contractid[i]);
            }
            this._contractid = [];

            this._onload(this.loadedsrcs);
        }
    },
    'start': function() {
        if (this.started) {
            return;
        }

        this.started = TRUE;

        var mine = this,
            img,
            i = mine.srccount;

        for (; i--;) {
            img = create('img');
            img.src = mine.srcs[i];

            mine._contractid.push(mine['contract'](img, ev['LOAD'], countup));
            mine.loadedsrcs.push(img);
        }

        function countup() {
            mine._c();
        }
    },
    'getProgress': function() {
        return this.progress;
    }
});
/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global['WindowLoad'] = klassExtendBase(function(config) {
    if (config) {
        this._onload(config['onload']);
    }
}, {
    _onload: function(func) {
        var mine = this,
            disposeid,
            loaded = function() {
                mine['uncontract'](disposeid);
                func();
            };

        disposeid = mine['contract'](win, ev['LOAD'], loaded);
    }
});
/* Test: "../../spec/_src/src/Mobile/test.js" */
mb = Global['Mobile'] = klassExtendBase(UNDEFINED, {
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
    'isMobile': function() {
        return (
            this['isAndroid']() ||
            this['isIOS']() ||
            this['isWindows']() ||
            this['isFBAPP']()
        );
    },
    'killScroll': function(isNoTop) {
        if (!this.killscrollid) {
            if (!isNoTop) {
                pageTop();
            }
            this.killscrollid = this['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revivalScroll': function(isNoTop) {
        if (this.killscrollid) {
            if (!isNoTop) {
                pageTop();
            }
            this['uncontract'](this.killscrollid);
            delete this.killscrollid;
        }
    },
    'hideAddress': function() {
        this['contract'](win, ev['LOAD'], hideAddressHandler, FALSE);
        this['contract'](win, ev_orientationchange, hideAddressHandler, FALSE);

        function doScroll() {
            if (win.pageYOffset === 0) {
                pageTop();
            }
        }
        function hideAddressHandler() {
            setTimeout(doScroll, 100);
        }
    },
    'getOrientation': function() {
        if (
            Math.abs(win.orientation) !== 90 &&
            win.innerWidth < win.innerHeight
        ) {
            return {
                'portrait': TRUE,
                'landscape': FALSE
            };
        }

        return {
            'portrait': FALSE,
            'landscape': TRUE
        };
    },
    'attachOrientation': function(vars) {
        var mine = this,
            disposeid = [],
            ret_remove;

        if (vars['immediately']) {
            change();
        }

        if (vars['one']) {
            add(onechange);

            return function() {
                remove(onechange);
            };
        }

        add(change);

        ret_remove = function() {
            remove(change);
        };

        function add(handler) {
            disposeid.push(
                mine['contract'](win, ev['LOAD'], handler),
                mine['contract'](win, ev_orientationchange, handler),
                mine['contract'](win, ev['RESIZE'], handler)
            );
        }
        function remove(handler) {
            var i = disposeid.length;

            for (; i--;) {
                mine['uncontract'](disposeid[i]);
            }

            disposeid = [];
        }
        function onechange() {
            change();
            remove(onechange);
        }
        function change() {
            if (
                mine['getOrientation']()['portrait']
            ) {
                return vars['portrait']();
            }
            vars['landscape']();
        }

        return ret_remove;
    }
});
Global['mobile'] = new mb();
/* Test: "../../spec/_src/src/PC/test.js" */
pc = Global['PC'] = klassExtendBase(UNDEFINED, {
    _scroll: function(isNoTop, overflow) {
        if (!isNoTop) {
            pageTop();
        }

        css(doc.body, {
            'overflow': overflow
        });
    },
    'killScroll': function(isNoTop) {
        this._scroll(isNoTop, 'hidden');
    },
    'revivalScroll': function(isNoTop) {
        this._scroll(isNoTop, 'auto');
    }
});
Global['pc'] = new pc();
/* Test: "../../spec/_src/src/Modal/test.js" */
Global['Modal'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    // this._html = config['html'];
    // this._bgClose = config['bgClose'];
    // this._closeSelector = config['closeSelector'];
    this.config = config;

    var commoncss = {
        'display': 'none',
        'position': 'absolute'
    };

    this._scroll = new (isTouch ? mb : pc)();

    this._contractid = [];

    this._bg = create('div', {
        'class': 'cir-modal-bg'
    });
    css(this._bg, override({
        'zIndex': 9998,
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '300%'
    }, commoncss));
    append(doc.body, this._bg);

    this._inner = create('div', {
        'class': 'cir-modal-content'
    });
    css(this._inner, override({
        'zindex': 9999,
        'top': '50%',
        'left': '50%'
    }, commoncss));
    append(doc.body, this._inner);

    if (!config['manual']) {
        this['open']();
    }
}, {
    _closeDetach: function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    },
    'disposeInternal': function() {
        this['close']();
        remove(this._bg);
        remove(this._inner);
    },
    'open': function(text) {
        this._scroll['killScroll'](true);
        css(this._bg, {
            'top': doc.body.scrollTop
        });

        show(this._bg);

        this['inner'](text);
    },
    'close': function() {
        this._closeDetach();

        html(this._inner, '');
        hide(this._inner);
        hide(this._bg);

        this._scroll['revivalScroll'](true);
    },
    'inner': function(text) {
        this._closeDetach();

        text = text || this.config['html'];

        html(this._inner, text);
        show(this._inner);

        var computed = computedStyle(this._inner);

        css(this._inner, {
            'margin-top':
            doc.body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'margin-left': -(splitSuffix(computed.width)[2] / 2)
        });

        if (this.config['bgClose']) {
            this['contract'](this._bg, ev['CLICK'], proxy(this, this['close']));
        }

        if (this.config['closeSelector']) {
            var close = $$child(this.config['closeSelector'], this._inner),
                i = close.length;

            for (; i--;) {
                this._contractid.push(
                    this['contract'](close[i],
                    ev['CLICK'],
                    proxy(this, this['close']))
                );
            }
        }
    }
});
/* Test: "../../spec/_src/src/DeviceAction/test.js" */
DeviceAction = klassExtendBase(function(config) {
    // this._e = config['e'];
    // this._callback = config['callback'];
    this.config = config;

    /* if (config['callback']) { */
        this['attach']();
    /* } */
}, {
    'attach': function() {
        this['detach']();
        this._attachid = this['contract'](win, this.config['e'], this.config['callback']);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
/* Test: "../../spec/_src/src/DeviceOrientation/test.js" */
Global['DeviceOrientation'] = function(config) {
    config['e'] = 'deviceorientation';
    return DeviceAction(config);
};
Global['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
/* Test: "../../spec/_src/src/DeviceMotion/test.js" */
Global['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return DeviceAction(config);
};
Global['DeviceMotion']['support'] = 'ondevicemotion' in win;
/* Test: "../../spec/_src/src/DeviceShake/test.js" */
(function() {
var Shake,
    convert;

/* if (Global['mobile']['isMobile']()) { */
    if (Global['DeviceOrientation']['support']) {
        Shake = Global['DeviceOrientation'];
        convert = function(e) {
            return e;
        };
    }
    else if (Global['DeviceMotion']['support']) {
        Shake = Global['DeviceMotion'];
        convert = function(e) {
            return e['rotationRate'];
        };
    }
/* } */

Global['DeviceShake'] = klassExtendBase(function(config) {
    this._shaker = new Shake();
    // this._limit = config['limit'];
    // this._waittime = config['waittime'];
    // this._direction = config['direction'];
    // this._callback = config['callback'];
    this.config = config;

    /* if (config['callback'] && config['direction']) { */
        this['attach']();
    /* } */
}, {
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'attach': function() {
        var mine = this,
            base_e,
            shaked = FALSE,
            direction = mine.convertName[mine.config['direction']],
            wraphandle = function(e) {
                e = convert(e);

                if (!base_e) {
                    base_e = e;
                }

                if (Math.abs(e[direction] - base_e[direction]) > mine.config['limit']) {
                    shaked = TRUE;
                    base_e = NULL;

                    mine.config['callback'](e);

                    setTimeout(function() {
                        shaked = FALSE;
                    }, mine.config['waittime']);
                }
            };

        mine._shaker['attach'](wraphandle);
    },
    'detach': function() {
        this._shaker['detach']();
    }
});

Global['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
/* Test: "../../spec/_src/src/FontImg/test.js" */
Global['FontImg'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    this._type = config['type'] ? config['type'] + '_' : EMPTY;
    this._tag = config['tag'] || 'span';
}, {
    'make': function(x) {
        var aryX = (EMPTY + x).split(EMPTY),
            tags = EMPTY,
            i = aryX.length;

        for (; i--;) {
            tags = '<' + this._tag +
                ' class="font_' + this._type + aryX[i] +
                '"></' + this._tag + '>' + tags;
        }

        return tags;
    }
});
/* Test: "../../spec/_src/src/Observer/test.js" */
Global['Observer'] = klassExtendBase(function() {
    this.observed = {};
}, {
    'on': function(key, func) {
        var observed = this.observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func) {
        var mine = this,
            wrapfunc = function(vars) {
                func(vars);
                mine['off'](key, wrapfunc);
            };

        mine['on'](key, wrapfunc);
    },
    'off': function(key, func) {
        var observed = this.observed;

        if (!func) {
            return delete observed[key];
        }

        var target = observed[key],
            i;

        if (target) {
            for (i = target.length; i--;) {
                if (func === target[i]) {
                    target.splice(i, 1);

                    if (target.length === 0) {
                        delete observed[key];
                    }

                    return TRUE;
                }
            }
        }

        return FALSE;
    },
    'fire': function(key, vars) {
        var target = this.observed[key],
            func,
            i;

        if (target) {
            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func(vars);
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/PreRender/test.js" */
Global['PreRender'] = klassExtendBase(function(config) {
    this.els = config['els'];
    this.guesslimit = config['guesslimit'] || 30;
    this.onrendered = config['onrendered'];
    this.looptime = config['looptime'] || 100;
    this.loopblur = this.looptime + (config['loopblur'] || 20);
    /* this.loopid = this.prevtime = NULL; */

    if (!config['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        clearInterval(this.loopid);
    },
    'start': function() {
        var i,
            mine = this,
            prevtime = dateNow();

        for (i = mine.els.length; i--;) {
            show(mine.els[i]);
        }
        mine.loopid = setInterval(check, this.looptime, this);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < mine.loopblur) {
                mine.guesslimit--;

                if (mine.guesslimit < 1) {
                    clearInterval(mine.loopid);

                    for (i = mine.els.length; i--;) {
                        hide(mine.els[i]);
                    }

                    mine.onrendered();
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/Route/test.js" */
Global['Route'] = klassExtendBase(function(config) {
    // this._target = config['target'] || EMPTY;
    // this._noregex = config['noregex'];
    // this._action = config['action'];
    this.config = config;

    if (!config['manual']) {
        this['start']();
    }
}, {
    'start': function() {
        this['fire'](this.config['target']);
    },
    'fire': function(action) {
        var i;

        if (this.config['noregex'] && this.config['action'][action]) {
            return this.config['action'][action](action);
        }

        for (i in this.config['action']) {
            if (action.match(i)) {
                this.config['action'][i](i);
            }
        }
    }
});
/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global['ScriptLoad'] = klassExtendBase(function() {
    this.els = [];
}, {
    'requests': function(varary, callback) {
        var mine = this,
            i = 0,
            len = varary.length;

        for (; i < len; i++) {
            request(i);
        }

        function request(i) {
            var callback = varary[i]['callback'],
                check = function(e) {
                    callback(e);
                    countdown();
                };

            varary[i]['callback'] = check;

            mine['request'](varary[i]);
        }
        function countdown() {
            i--;

            if (i === 0) {
                callback(mine.els);
            }
        }
    },
    'request': function(vars) {
        var mine = this,
            script = create('script'),
            disposeid;

        /* script.type = 'text/javascript'; */
        script.src = vars['src'];
        append(doc.body, script);
        mine.els.push(script);

        if (vars['callback']) {
            disposeid = mine['contract'](script, ev['LOAD'], function() {
                mine['uncontract'](disposeid);
                vars['callback'].apply(this, arguments);
            });
        }
    }
});
/* Test: "../../spec/_src/src/ServerMeta/test.js" */
(function() {
var xhr,
    isLoaded = FALSE;

Global['ServerMeta'] = klassExtendBase(function(config) {
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
}, {
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
/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global['Surrogate'] = klassExtendBase(function(config) {
    this.delay = config['delay'];
    this.callback = config['callback'];
    // this.args = NULL;
    // this.waitid = NULL;
}, {
    'disposeInternal': function() {
        this['clear']();
    },
    'request': function(arg) {
        this.args = arg;
        this['clear']();
        this.waitid = setTimeout(this['flush'], this.delay, this);
    },
    'flush': function(mine) {
        mine = mine || this;

        mine.callback(mine.args);
    },
    'clear': function() {
        clearInterval(this.waitid);
    }
});
/* Test: "../../spec/_src/src/Throttle/test.js" */
Global['Throttle'] = klassExtendBase(function(config) {
    this.waittime = config['waittime'];
    this.callback = config['callback'];
    // this.locked = FALSE;
    // this.waitid = NULL;
    // this.waitarg = NULL;
}, {
    'disposeInternal': function() {
        this['unlock']();
    },
    'request': function(vars) {
        var mine = this;

        if (mine.locked) {
            mine.waitarg = vars;
            return;
        }

        mine.callback(vars);
        mine['lock']();
        mine.waitid = setTimeout(function() {
            if (mine.waitarg) {
                mine.callback(mine.waitarg);
                mine.waitarg = NULL;
            }

            mine['unlock']();
        }, mine.waittime, mine);
    },
    'lock': function() {
        this.locked = TRUE;
    },
    'unlock': function(mine) {
        mine = mine || this;

        mine.locked = FALSE;
        clearInterval(mine.waitid);
    }
});
/* Test: "../../spec/_src/src/Timer/test.js" */
Global['Timer'] = function(config) {
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
/* Test: "../../spec/_src/src/Twitter/test.js" */
Global['Twitter'] = klassExtendBase(UNDEFINED,
{
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
/* Test: "../../spec/_src/src/XML/test.js" */
Global['XML'] = klassExtendBase(function(config) {
    this.el = create('div');
    html(this.el, config['data']);
}, {
    '$': function(selector) {
        return $child(selector, this.el);
    },
    '$$': function(selector) {
        return $$child(selector, this.el);
    }
});
/* Test: "../../spec/_src/src/Model/test.js" */
Global['Model'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    var i,
        defaults = config['defaults'] || this['defaults'] || {},
        events = config['events'] || this['events'];

    this._validate = config['validate'] || this['validate'] || {};
    this._store = config['store'] || this['store'] || new C['DataStore']();
    this._observer = new C['Observer']();

    for (i in defaults) {
        this['set'](i, defaults[i]);
    }
    for (i in events) {
        this['on'](i, events[i]);
    }
}, {
    notice: function(eventname, key, val) {
        this._observer['fire'](eventname, this._store['get']());

        if (key) {
            this._observer['fire'](eventname + ':' + key, val);
        }
    },
    'set': function(key, val) {
        if (
            this._validate[key] &&
            !this._validate[key](key, val)
        ) {
            return this.notice('fail', key, val);
        }

        this._prev = this._store['get']();
        this._store['set'](key, val);

        this.notice(ev['CHANGE'], key, val);
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
    'remove': function(key) {
        if (key) {
            var get = this._store['get'](key),
                ret = this._store['remove'](key);

            this.notice('remove', key, get);

            return ret;
        }
    },
    'reset': function() {
        var ret = this._store['reset']();

        this.notice('reset');
    },
    'on': function(key, func) {
        var proxyfunc = proxy(this, func);
        this._observer['on'](key, proxyfunc);

        return proxyfunc;
    },
    'off': function(key, func) {
        this._observer['off'](key, func);
    },
    'fire': function(key, vars) {
        return this._observer['fire'](key, vars);
    }
});
/* Test: "../../spec/_src/src/View/test.js" */
Global['View'] = klassExtendBase(function(config) {
    var i;

    if (!config) {
        config = owner(this, this, {});
    }
    else {
        config = owner(this, config);
    }

    this['el'] = Global['$'](config['el'] || this['el'] || create('div'));

    this['attach']();
    if (config['init']) {
        this['init']();
    }
}, {
    'disposeInternal': function() {
        this._e('off');
    },
    _e: function(methodname) {
        var i,
            j,
            $el,
            events = this['events'];

        for (i in events) {
            if (i === 'me') {
                $el = this['el'];
            }
            else {
                $el = this['el'].find(i);
            }

            for (j in events[i]) {
                $el[methodname](j, this[events[i][j]]);
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
/* Test: "../../spec/_src/src/Validate/test.js" */
Global['Validate'] = klassExtendBase(function(config) {
    config = config || {};

    /* this._level = config['level'] || 'warn'; */
    this._level = config['level'];

    owner(this, this, config);
}, {
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
        if (isObject(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Object');
    },
    'isNumber': function(key, value) {
        if (isNumber(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Number');
    },
    'isString': function(key, value) {
        if (isString(value)) {
            return TRUE;
        }
        this['displayError'](key, 'String');
    },
    'isFunction': function(key, value) {
        if (isFunction(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Function');
    },
    'isBoolean': function(key, value) {
        if (isBoolean(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Boolean');
    },
    'isArray': function(key, value) {
        if (isArray(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Array');
    }
});

Global['validate'] = new Global['Validate']();
}());
