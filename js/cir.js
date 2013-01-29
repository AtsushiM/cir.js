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
    klass,
    ev,
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    easebackrate = 1.70158,
    Base,
    /* Global = win['C'] = {}; */
    Global = C = {};

function klassExtend(kls, init, properties) {
    return klass({
        'extend': kls,
        'init': init,
        'properties': properties
    });
}
function klassExtendBase(init, properties) {
    return klassExtend(Base, init, properties);
}
/* Test: "../../spec/_src/src/utility/test.js" */
if (!Date['now']) {
    Date['now'] = function now() {
        return +(new Date);
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
    var matchstr = '' + str;

    if (matchstr.match('^{.*}$')) {
        return jsonParse(matchstr);
    }
    else if (matchstr.match('^[0-9\.]+$')) {
        return matchstr * 1;
    }
    else if (matchstr === 'true') {
        return TRUE;
    }
    else if (matchstr === 'false') {
        return FALSE;
    }

    return str;
}
function replaceAll(targettext, needle, replacetext) {
    return targettext.split(needle).join(replacetext);
}
function windowOpen(url, windowname) {
    return win.open(url, windowname);
}
function makeQueryString(vars) {
    var sign = '',
        query = '',
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
        .replace(/^\#/, '')
        .replace(/^\?/, '');

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
function isTouchDevice() {
    return 'ontouchstart' in win;
}
function nullFunction() {
    return NULL;
}
function eventPrevent(e) {
    e.preventDefault();
    return FALSE;
}
function checkUserAgent(pattern, ua) {
    ua = ua ? ua : navigator.userAgent;

    return ua.match(pattern) ? TRUE : FALSE;
}
function jsonParse(json) {
    return win['JSON']['parse'](json);
}
function jsonStringify(text) {
    return win['JSON']['stringify'](text);
}

Global['utility'] = {
    'win': win,
    'doc': doc,
    'pageTop': pageTop,
    'override': override,
    'replaceAll': replaceAll,
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
    'isTouchDevice': isTouchDevice,
    'nullFunction': nullFunction,
    'eventPrevent': eventPrevent,
    'checkUserAgent': checkUserAgent
};
/* Test: "../../spec/_src/src/dom/test.js" */
function $(selector) {
    return $child(selector, doc);
}
function $$(selector) {
    return $$child(selector, doc);
}
function $child(selector, element) {
    return element.querySelector(selector);
}
function $$child(selector, element) {
    var eles = element.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(element, cls) {
    var clsName = element.className,
        addedcls = clsName ? clsName.split(' ') : [],
        i = addedcls.length;

    for (; i--;) {
        if (cls === addedcls[i]) {
            return TRUE;
        }
    }

    return FALSE;
}

function addClass(element, cls) {
    var between = '',
        orgcls = element.className;

    if (hasClass(element, cls)) {
        return FALSE;
    }

    if (orgcls) {
        between = ' ';
    }

    element.className = orgcls + between + cls;

    return TRUE;
}

function removeClass(element, cls) {
    var addedcls,
        bindcls = [],
        i,
        len;

    if (!hasClass(element, cls)) {
        return FALSE;
    }

    addedcls = element.className.split(' ');
    i = addedcls.length;

    for (; i--;) {
        if (cls !== addedcls[i]) {
            bindcls.push(addedcls[i]);
        }
    }

    element.className = bindcls.join(' ');

    return TRUE;
}
function toggleClass(element, cls) {
    if (hasClass(element, cls)) {
        return removeClass(element, cls);
    }

    return addClass(element, cls);
}

function attr(element, vars, value) {
    var i;

    if (isObject(vars)) {
        for (i in vars) {
            element.setAttribute(i, vars[i]);
        }

        return TRUE;
    }

    if (value || value === '') {
        return element.setAttribute(vars, value);
    }

    return element.getAttribute(vars);
}
function removeAttr(element, key) {
    element.removeAttribute(key);
}

function create(tagname, attribute) {
    var element = doc.createElement(tagname);

    if (attribute) {
        attr(element, attribute);
    }

    return element;
}

function on(element, eventname, handler) {
    element.addEventListener(eventname, handler, FALSE);
}
function off(element, eventname, handler) {
    element.removeEventListener(eventname, handler, FALSE);
}
function show(element) {
    element.style.display = 'block';
}
function hide(element) {
    element.style.display = 'none';
}
function opacity(element, value) {
    element.style.opacity = value;
}
function css(element, addstyle) {
    var style = element.style,
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
function computedStyle(element) {
    return doc.defaultView.getComputedStyle(element, NULL);
}
function append(element, addelement) {
    return element['appendChild'](addelement);
}
function parent(element) {
    return element['parentNode'];
}
function remove(element) {
    return parent(element).removeChild(element);
}
function html(element, text) {
    if (!text) {
        return element.innerHTML;
    }

    element.innerHTML = text;
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
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html
};
/* Test: "../../spec/_src/src/klass/test.js" */
klass = Global['klass'] = function(config) {
    'use strict';

    var init = config['init'] || function() {},
        properties = config['properties'],
        extend = config['extend'];

    if (extend) {
        Global['extend'](init, extend);
    }

    override(init.prototype, properties);

    return init;
};
/* Test: "../../spec/_src/src/extend/test.js" */
Global['extend'] = function(child, _super) {
    'use strict';

    function ctor() {
        this['init'] = child;
    }

    ctor.prototype = _super.prototype;
    child.prototype = new ctor();

    var cpt = child.prototype;

    cpt['_superclass'] = _super;
    cpt['_super'] = function() {
        var prev = this._prevctor;

        if (prev) {
            prev = prev.prototype._superclass;
        }
        else {
            prev = this._prevctor = _super;
        }

        prev.apply(this, arguments);
    };
};
/* Test: "../../spec/_src/src/Base/test.js" */
Base = Global['Base'] = klass({
    'init': function(config) {
        config = config || {};
        this._dispose = {};
        this._single = config['single'];
    },
    'properties': {
        _disid: 0,
        singleAct: function(name) {
            if (this._single) {
                if (Global[name].instance) {
                    return Global[name].instance;
                }

                Global[name].instance = this;
            }

            return this;
        },
        'dispose': function() {
            var i;

            if (this._dispose) {
                for (i in this._dispose) {
                    off.apply(NULL, this._dispose[i]);
                }
            }

            for (i in this) {
                delete this[i];
            }

            this.__proto__ = NULL;
            return NULL;
        },
        'contract': function(element, e, handler) {
            on(element, e, handler);
            this._disid++;
            this._dispose[this._disid] = [element, e, handler];

            return this._disid;
        },
        'uncontract': function(id) {
            var arg = this._dispose[id];

            delete this._dispose[id];

            off(arg[0], arg[1], arg[2]);
        },
        _orgdis: function() {
            this.__proto__.__proto__['dispose'].call(this);
        }
    }
});
/* Test: "../../spec/_src/src/Event/test.js" */
var EventName = 'Event';
ev = klassExtendBase(function(config) {
    this['_super'](config);

    // singleton
    return this.singleAct(EventName);
}, {
    'switchclick': isTouch ? 'touchstart' : 'click',
    'switchdown': isTouch ? 'touchstart' : 'mousedown',
    'switchmove': isTouch ? 'touchmove' : 'mousemove',
    'switchup': isTouch ? 'touchend' : 'mouseup',
    'switchover': isTouch ? 'touchstart' : 'mouseover',
    'switchout': isTouch ? 'touchend' : 'mouseout',
    'load': 'load',
    'change': 'change',
    'click': 'click',
    'mousedown': 'mousedown',
    'mousemove': 'mousemove',
    'mouseup': 'mouseup',
    'mouseover': 'mouseover',
    'mouseout': 'mouseout',
    'touchstart': 'touchstart',
    'touchmove': 'touchmove',
    'touchend': 'touchend',
    'resize': 'resize'
});
Global[EventName] = ev;
ev = Global['event'] = new ev();
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

    'inCubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
    'outCubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    'inOutCubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',

    'inQuart': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
    'outQuart': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    'inOutQuart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',

    'inQuint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    'outQuint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    'inOutQuint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',

    'inSine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    'outSine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'inOutSine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

    'inExpo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
    'outExpo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
    'inOutExpo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',

    'inCirc': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
    'outCirc': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    'inOutCirc': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',

    'inQuad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
    'outQuad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    'inOutQuad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',

    'inBack': ['cubic-bezier(0.600, 0, 0.735, 0.045)', 'cubic-bezier(0.600, -0.280, 0.735, 0.045)'],
    'outBack': ['cubic-bezier(0.175, 0.885, 0.320, 1)', 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'],
    'inOutBack': ['cubic-bezier(0.680, 0, 0.265, 1)', 'cubic-bezier(0.680, -0.550, 0.265, 1.550)']
};
/* Test: "../../spec/_src/src/Animation/test.js" */
(function() {
var prop = [
        'animation',
        'webkitAnimation'
    ],
    el = create('p'),
    support = FALSE,
    prefix,
    css_prefix = '',
    event_key = 'animation',
    i = prop.length,
    style,
    sheet,
    Mine;

for (; i--;) {
    if (el.style[prop[i]] !== UNDEFINED) {
        support = TRUE;
        prefix = prop[i].match(/^(.*?)animation$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Animation';
        }

        style = append($('head'),
            create('style', {
                type: 'text/css'
            }));
        sheet = style.sheet;

        break;
    }
}

Mine = Global['Animation'] = klassExtendBase(function(element, property, option) {
    option = option || {};

    this.onComplete = option['onComplete'] || nullFunction;

    this.el = element;

    Mine['id']++;
    this._id = 'ciranim' + Mine['id'];

    var duration = option['duration'] || Mine['duration'],
        ease = option['ease'] || 'ease',
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
        replaceAll(jsonStringify(prop), '"', ''),
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
        off(this.el, event_key + 'End', this.end);
        off(this.el, 'animationend', this.end);
    },
    'dispose': function() {
        this.stop();
        this._orgdis();
    },
    'start': function() {
        var mine = this;

        mine.end = endaction;
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
                        ('' + rule[len].selectorText).split('.')[1];

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
        rule = '';

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
'use strict';

var prop = [
        'webkitTransitionProperty',
        'transitionProperty'
    ],
    el = create('p'),
    support = FALSE,
    prefix,
    css_prefix = '',
    event_key = 'transition',
    i = prop.length,
    style,
    sheet,
    Mine;

for (; i--;) {
    if (el.style[prop[i]] !== UNDEFINED) {
        support = TRUE;
        prefix = prop[i].match(/^(.*?)transitionproperty$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix.toLowerCase() + 'Transition';
        }

        style = append($('head'),
            create('style', {
                type: 'text/css'
            }));
        sheet = style.sheet;

        break;
    }
}

Mine = Global['Transition'] = klassExtendBase(function(element, property, option) {
    option = option || {};
    option['onComplete'] = option['onComplete'] || nullFunction;

    Mine['id']++;
    this._id = 'cirtrans' + Mine['id'];

    var transProp = [],
        animeProp = override({}, property),
        i,
        duration = option['duration'] || Mine['duration'],
        ease = option['ease'] || 'ease';

    if (!isArray(ease)) {
        ease = [ease];
    }

    for (i in property) {
        transProp.push(i);
    }

    addCSSRule(this._id, css_prefix, duration, ease, transProp);

    this.el = element;
    this.property = property;
    this.option = option;

    if (!option['manual']) {
        this['start']();
    }
}, {
    'dispose': function() {
        this['stop']();
        this._orgdis();
    },
    'start': function() {
        var mine = this;

        mine._endfunc = function(e) {
            mine['stop']();
            setTimeout(function() {
                mine.option['onComplete'](e);
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
                ('' + rule[len].selectorText).split('.')[1];

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
        rule = '';

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
(function() {
var Mine = Global['Tweener'] = klassExtendBase(function(target, property, option) {
    var name,
        prop;

    option = option || {};

    this._target = target;
    this.property = [];

    for (name in property) {
        prop = property[name];
        prop['name'] = name;

        prop.distance = prop['to'] - prop['from'];
        prop['prefix'] = prop['prefix'] || '';
        prop['suffix'] = prop['suffix'] || 'px';

        this.property.push(prop);
    }

    this._duration = option['duration'] || Mine['duration'];
    this.ease = option['ease'] || this._ease;
    this.onComplete = option['onComplete'];

    if (!option['manual']) {
        this['start']();
    }
}, {
    'dispose': function() {
        this['stop']();
        this._orgdis();
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
            setTimeout(callback, 1000 / Mine.fps);
        };
    }()),
    loop: function() {
        var mine = this,
            items = Mine.Items,
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

                    Mine._setProp(item._target, prop, item.ease(
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

                    Mine._setProp(item._target, prop, prop['to']);
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

            return TRUE;
        }

        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine.begin = dateNow();

        Mine.Items.push(mine);
        if (!Mine.timerId) {
            Mine.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine.loop();
            });
        }
    },
    'stop': function() {
        Mine.Items = [];
        clearInterval(Mine.timerId);
        Mine.timerId = NULL;
    }
});
Mine._setProp = function(target, prop, point) {
    target[prop['name']] = prop['prefix'] + point + prop['suffix'];
};
/* Mine.timerId = NULL; */
Mine.Items = [];
Mine['fps'] = 30;
Mine['duration'] = 500;
}());
/* Test: "../../spec/_src/src/selector/test.js" */
Global['$'] = function(query, _parent) {
    'use strict';

    var $elements,
        base,
        instance,
        len;

    _parent = _parent || doc;

    if (isString(query)) {
        $elements = _parent.querySelectorAll(query);
    }
    else {
        $elements = [query];
        query = '';
    }
    len = $elements.length;

    base = function() {};
    base.prototype = Global['$'].methods;
    instance = new base();

    instance.length = len;
    /* instance._selector = query; */
    instance._parent = _parent;

    /* for (; i < len; i++) { */
    for (;len--;) {
        instance[len] = $elements[len];
    }

    return instance;
};
/* Test: "../../spec/_src/src/selector.methods/test.js" */
(function() {
var el = Global['element'];

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
    'remove': function() {
        return forExe(this, remove, arguments);
    }
};
}());
/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

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

function animate(element, params, duration, ease, callback) {
    var style = element.style,
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
            element,
            params,
            option
        );
    }
    else {
        anime = new Global['Tweener'](
            element.style,
            convertTweenerParam(element, params),
            option
        );
    }

    this._animate.push(anime);
}

function convertTweenerParam(element, params) {
    var name,
        styled = computedStyle(element),
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
function splitSuffix(value) {
    value = value || '';
    value = '' + value;

    return value.match(/^(.*?)([0-9\.]+)(.*)$/);
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
        return TRUE;
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
Global['Embed'] = function(config) {
    var embed = create(config['type'].toLowerCase());

    embed['controls'] = config['controls'] ? TRUE : FALSE;
    embed['preload'] = config['preload'] || 'auto';
    embed['autoplay'] = config['autoplay'] ? TRUE : FALSE;
    embed['loop'] = config['loop'] ? TRUE : FALSE;
    embed['src'] = config['dir'] + config['name'] + '.' + config['suffix'][0][0];

    return embed;
};
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
Global['Embed']['supportcheck'] = embedSupportCheck;
/* Test: "../../spec/_src/src/Media/test.js" */
Global['Media'] = klassExtendBase(function(config) {
    this['_super']();

    var mine = this,
        autoplay = config['autoplay'],
        loop = config['loop'],
        media,
        ev_canplay = 'canplay',
        _parent = config['element'] || doc.body;

    config['preload'] = 'auto';
    config['autoplay'] =
    config['loop'] = FALSE;

    switch (config['type']) {
        case 'Audio':
            media = Global['Audio'](config);
            break;
        case 'Video':
            media = Global['Video'](config);
            break;
    }
    mine._el = media;

    if (!media) {
        return FALSE;
    }

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
}, {
    'dispose': function() {
        remove(this._el);
        this._orgdis();
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
Global['Media']['supportcheck'] = embedSupportCheck;
/* Test: "../../spec/_src/src/Audio/test.js" */
Global['Audio'] = function(config) {
    config['type'] = 'Audio';

    config['suffix'] = Global['Audio']['support'];

    return Global['Embed'](config);
};
Global['Audio']['support'] = embedSupportCheck({
    'type': 'Audio',
    'suffix': [
        ['mp3', 'mpeg'],
        ['wav', 'wav'],
        ['ogg', 'ogg'],
        ['m4a', 'mp4']
    ]
});
/* Test: "../../spec/_src/src/Sound/test.js" */
Global['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Global['Media'](config);
};
Global['Sound']['support'] = Global['Audio']['support'];
/* Test: "../../spec/_src/src/Video/test.js" */
Global['Video'] = function(config) {
    config['type'] = 'Video';

    config['suffix'] = Global['Video']['support'];

    return new Global['Embed'](config);
};
Global['Video']['support'] = embedSupportCheck({
    'type': 'Video',
    'suffix': [
        ['webm', 'webm'],
        ['mp4', 'mp4'],
        ['ogv', 'ogg']
    ]
});
/* Test: "../../spec/_src/src/Movie/test.js" */
Global['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Global['Media'](config);
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
            query = '',
            xhr;

        xhr = this.xhr = new XMLHttpRequest();

        if (!vars['cash']) {
            if (!vars['query']) {
                vars['query'] = {};
            }

            vars['query']['cirajaxcash' + dateNow()] = '0';
        }
        if (vars['query']) {
            query = vars['query'];

            if (isObject(query)) {
                query = makeQueryString(query);
                query = encodeURI(query);
            }
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return FALSE;
            }

            if (xhr.status == 200) {
                return callback(xhr.responseText, xhr);
            }

            return error(xhr);
        }

        if (type === 'GET') {
            if (url.indexOf('?') !== -1) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = '';
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
/* Test: "../../spec/_src/src/Bind/test.js" */
Global['Bind'] = klassExtendBase(function(config) {
    this.handler = config;
    this['add']();
}, {
    'dispose': function() {
        this['remove']();
        this._orgdis();
    },
    'getHandler': function() {
        return this.handler;
    },
    'add': function() {
        this._e(TRUE);
    },
    'remove': function() {
        this._e(FALSE);
    },
    _e: function(isBind) {
        var onoff = isBind ? on : off,
            i;

        for (i in this.handler['events']) {
            onoff(
                this.handler['element'],
                i,
                this.handler['events'][i]
            );
        }
    }
});
/* Test: "../../spec/_src/src/Brush/test.js" */
Global['Brush'] = klassExtendBase(function(config) {
    this._canvas = config['canvas'];
    this.ctx = this._canvas.getContext('2d');

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

        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        for (; i < len; i++) {
            item = layer[i];
            this.ctx.drawImage(item['image'], item['x'], item['y']);
        }
    }
});
Global['Brush']['support'] = !!win['HTMLCanvasElement'];
/* Test: "../../spec/_src/src/DataStore/test.js" */
var DataStoreName = 'DataStore';
Global[DataStoreName] = klassExtendBase(function(config) {
    this['_super'](config);

    this.data = {};

    return this.singleAct(DataStoreName);
}, {
    'set': function(key, val) {
        this.data[key] = val;
    },
    'get': function(key) {
        var ret = {},
            i;

        if (key) {
            return this.data[key];
        }

        for (i in this.data) {
            ret[i] = this.data[i];
        }

        return ret;
    },
    'remove': function(key) {
        if (!this.data[key]) {
            return FALSE;
        }

        delete this.data[key];
    },
    'reset': function() {
        this.data = {};
    }
});
/* Test: "../../spec/_src/src/WebStorage/test.js" */
var WebStorageName = 'WebStorage';
Global[WebStorageName] = klassExtendBase(function(config) {
    this['_super'](config);

    var key = 'Storage',
        klassname = config['type'] + key;

    this._n = config['namespace'] ? config['namespace'] + '-' : '';
    this._storage = win[config['type'].toLowerCase() + key];

    return this.singleAct(WebStorageName);
}, {
    'set': function(key, val) {
        this._storage.setItem(this._n + key, jsonStringify(val));
        return TRUE;
    },
    'get': function(key) {
        var mine = this,
            ret = {},
            i;

        if (key) {
            return jsonParse(mine._storage.getItem(mine._n + key));
        }

        for (i in mine._storage) {
            if (!this._n) {
                ret[i] = jsonParse(mine._storage[i]);
            }
            else {
                key = i.split(this._n)[1];
                if (key) {
                    ret[key] = jsonParse(mine._storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key) {
        key = this._n + key;

        if (!this._storage.getItem(key)) {
            return FALSE;
        }

        this._storage.removeItem(key);

        return TRUE;
    },
    'reset': function() {
        if (!this._n) {
            this._storage.clear();

            return TRUE;
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

    config['type'] = 'Local';
    return new Global['WebStorage'](config);
};
/* Test: "../../spec/_src/src/SessionStorage/test.js" */
Global['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'Session';
    return new Global['WebStorage'](config);
};
/* Test: "../../spec/_src/src/Deferred/test.js" */
Global['Deferred'] = klassExtendBase(function() {
    this.queue = [];
    /* this.data = NULL; */
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
    this['_super']();

    if (config) {
        this['bind'](config);
    }
}, {
    _t: function(e) {
        var changed = e.changedTouches ? e.changedTouches[0] : e;

        return changed;
    },
    'amount': function(vars) {
        var mine = this,
            startX,
            startY,
            dragflg = FALSE;

        this['contract'](vars['element'], ev['switchdown'], start);
        this['contract'](win, ev['switchup'], end);

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
    'direction': function(vars) {
        this['amount']({
            'element': vars['element'],
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
    'bind': function(vars) {
        var mine = this,
            element = vars['element'],
            el = Global['element'],
            start = vars['start'] || nullFunction,
            move = vars['move'] || nullFunction,
            end = vars['end'] || nullFunction,
            flg = FALSE,
            startX = 0,
            startY = 0;

        if (vars['direction']) {
            mine['direction']({
                'element': element,
                'boundary': vars['boundary'],
                'callback': vars['direction']
            });
        }

        eventProxy(element, ev['switchdown'], function(_e) {
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
        eventProxy(doc, ev['switchmove'], function(_e) {
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
        eventProxy(doc, ev['switchup'], function(_e) {
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

        function eventProxy(element, ev, callback) {
            var handler = function(e) {
                    var changed = mine._t(e);
                    callback(changed);
                };
            mine['contract'](element, ev, handler);
        }
    }
});
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global['ExternalInterface'] = function(config) {
    config = config || {};

    var Mine = Global['ExternalInterface'],
        external;

    if (config['single'] && Mine.instance) {
        return Mine.instance;
    }

    if (config['android']) {
        external = new Mine['Android'](config);
    }
    else {
        external = new Mine['IOS'](config);
    }

    if (config['single']) {
        Mine.instance = external;
    }

    return external;
};
/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
Global['ExternalInterface']['Android'] = klassExtend(Global['HashQuery'], function(config) {
    config = config || {};

    this.android = config['android'];
    this.externalObj = config['externalObj'];
}, {
    'call': function(conf) {
        this.android[conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func) {
        var mine = this;
        mine.externalObj[name] = function(vars) {
            var objs = mine['parseHash'](vars);
            return func(objs['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this.externalObj[name];
    }
});
/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global['ExternalInterface']['IOS'] = klassExtend(Global['HashQuery'], function(config) {
    this.ios = {};
}, {
    'dispose': function() {
        var i;

        for (i in this.ios) {
            this['removeCallback'](i);
        }
        this._orgdis();
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
                return TRUE;
            }
            return FALSE;
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
        var url = 'https://www.facebook.com/dialog/feed?' +
                'app_id=' + vars['app_id'] + '&' +
                'redirect_uri=' + vars['redirect_uri'];

        url += makeQueryString({
            'link': vars['link'],
            'picture': vars['picture'],
            'name': vars['name'],
            'caption': vars['caption'],
            'description': vars['description']
        });

        return url;
    }
});
/* Test: "../../spec/_src/src/FPS/test.js" */
var FPSName = 'FPS';
Global[FPSName] = klassExtendBase(function(config) {
    this['_super'](config);

    this.criterion = config['criterion'] || 20,
    this.surver = this.criterion,
    this.enterframe = config['enterframe'],
    this.msecFrame = this._getFrame(this.criterion),
    this.prevtime =
    this.nowtime =
    this.loopid = 0;

    if (!config['manual']) {
        this['start']();
    }

    return this.singleAct(FPSName);
}, {
    'dispose': function() {
        this['stop']();
        this._orgdis();
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
    this['_super']();

    this.srcs = config['srcs'],
    this.srccount = this.srcs.length,
    this.loadedsrcs = [];
    this.disposeid = [];
    this._onload = config['onload'] || nullFunction,
    this._onprogress = config['onprogress'] || nullFunction,
    this.loadcount = 0;
    this.progress = 0;
    this.started = FALSE;

    if (!config['manual']) {
        this['start']();
    }
}, {
    _c: function() {
        this.loadcount++;

        this.progress = this.loadcount / this.srccount;
        this._onprogress(this.progress);

        if (this.loadcount >= this.srccount) {
            var i = this.disposeid.length;

            for (; i--;) {
                this['uncontract'](this.disposeid[i]);
            }
            this.disposeid = [];

            this._onload(this.loadedsrcs);
        }
    },
    'start': function() {
        if (this.started) {
            return FALSE;
        }

        this.started = TRUE;

        var mine = this,
            img,
            i = mine.srccount;

        for (; i--;) {
            img = create('img');
            img.src = mine.srcs[i];

            mine.disposeid.push(mine['contract'](img, ev['load'], countup));
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
    this['_super']();

    if (config) {
        this.onload(config['onload']);
    }
}, {
    onload: function(func) {
        var mine = this,
            disposeid,
            loaded = function() {
                mine['uncontract'](disposeid);
                func();
            };

        disposeid = this['contract'](win, ev['load'], loaded);
    }
});
/* Test: "../../spec/_src/src/Mobile/test.js" */
Global['Mobile'] = klassExtendBase(function() {
    this['_super']();
}, {
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
        if (this.killscrollid) {
            return FALSE;
        }

        if (!isNoTop) {
            pageTop();
        }
        this.killscrollid = this['contract'](doc, ev['touchmove'], eventPrevent);
    },
    'revivalScroll': function(isNoTop) {
        if (!this.killscrollid) {
            return FALSE;
        }

        if (!isNoTop) {
            pageTop();
        }
        this['uncontract'](this.killscrollid);
        delete this.killscrollid;
    },
    'hideAddress': function() {
        this['contract'](win, ev['load'], hideAddressHandler, FALSE);
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
    'bindOrientation': function(vars) {
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
            disposeid.push(mine['contract'](win, ev['load'], handler));
            disposeid.push(mine['contract'](win, ev_orientationchange, handler));
            disposeid.push(mine['contract'](win, ev['resize'], handler));
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
                vars['portrait']();
                return TRUE;
            }
            vars['landscape']();
        }

        return ret_remove;
    }
});
Global['mobile'] = new Global['Mobile']();
/* Test: "%JASMINE_TEST_PATH%" */
Global.DeviceAction = klassExtendBase(function(config) {
    this['_super']();

    this._e = config['e'];

    if (config['callback']) {
        this['bind'](config['callback']);
    }
}, {
    'bind': function(func) {
        this['unbind']();
        this._bindid = this['contract'](win, this._e, func);
    },
    'unbind': function() {
        if (this._bindid) {
            this['uncontract'](this._bindid);
        }
    }
});
/* Test: "%JASMINE_TEST_PATH%" */
Global['DeviceOrientation'] = function(config) {
    config = config || {};
    config['e'] = 'deviceorientation';
    return new Global.DeviceAction(config);
};
Global['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
/* Test: "%JASMINE_TEST_PATH%" */
Global['DeviceMotion'] = function(config) {
    config = config || {};
    config['e'] = 'devicemotion';
    return new Global.DeviceAction(config);
};
Global['DeviceMotion']['support'] = 'ondevicemotion' in win;
/* Test: "%JASMINE_TEST_PATH%" */
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
    var bindprop;

    this['_super']();
    this._shaker = new Shake();
    this._limit = config['limit'];
    this._waittime = config['waittime'];
    /* this._callback = config['callback']; */

    if (config['callback'] && config['direction']) {
        this['bind'](config['direction'], config['callback']);
    }
}, {
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'dispose': function() {
        this._shaker['dispose']();
        this._orgdis();
    },
    'bind': function(direction, callback) {
        direction = this.convertName[direction];

        var mine = this,
            base_e,
            shaked = FALSE,
            wraphandle = function(e) {
                e = convert(e);

                if (!base_e) {
                    base_e = e;
                }

                if (Math.abs(e[direction] - base_e[direction]) > mine._limit) {
                    shaked = TRUE;
                    base_e = NULL;

                    callback(e);

                    setTimeout(function() {
                        shaked = FALSE;
                    }, mine._waittime);
                }
            };

        return mine._shaker['bind'](wraphandle);
    },
    'unbind': function() {
        this._shaker['unbind']();
    }
});

Global['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
/* Test: "../../spec/_src/src/FontImg/test.js" */
Global['FontImg'] = klassExtendBase(function(config) {
    config = config || {};

    this.type = config['type'] ? config['type'] + '_' : '';
    this.tag = config['tag'] || 'span';
}, {
    'make': function(x) {
        var aryX = ('' + x).split(''),
            tags = '',
            i = aryX.length;

        for (; i--;) {
            tags = '<' + this.tag +
                ' class="font_' + this.type + aryX[i] +
                '">&nbsp;</' + this.tag + '>' + tags;
        }

        return tags;
    }
});
/* Test: "../../spec/_src/src/Observer/test.js" */
var ObserverName = 'Observer';
Global[ObserverName] = klassExtendBase(function(config) {
    this['_super'](config);

    this.observed = {};

    return this.singleAct(ObserverName);
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
            delete observed[key];

            return TRUE;
        }

        var target = observed[key],
            i;

        if (!target) {
            return FALSE;
        }


        for (i = target.length; i--;) {
            if (func === target[i]) {
                target.splice(i, 1);

                if (target.length === 0) {
                    delete observed[key];
                }

                return TRUE;
            }
        }

        return FALSE;
    },
    'fire': function(key, vars) {
        var target = this.observed[key],
            func,
            i;

        if (!target) {
            return FALSE;
        }

        for (i = target.length; i--;) {
            func = target[i];
            if (func) {
                func(vars);
            }
        }

        return TRUE;
    }
});
/* Test: "../../spec/_src/src/PreRender/test.js" */
Global['PreRender'] = klassExtendBase(function(config) {
    config = config || {};

    if (!config['loopblur']) {
        config['loopblur'] = 20;
    }

    this.els = config['elements'] || [];
    this.guesslimit = config['guesslimit'] || 30;
    this.onrendered = config['onrendered'] || nullFunction;
    this.looptime = config['looptime'] || 100;
    this.loopblur = this.looptime + config['loopblur'];
    /* this.loopid = this.prevtime = NULL; */

    if (!config['manual']) {
        this['start']();
    }
}, {
    'dispose': function() {
        clearInterval(this.loopid);
        this._orgdis();
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
var RouteName = 'Route';
Global[RouteName] = klassExtendBase(function(config) {
    this['_super'](config);

    this._target = config['target'] || '';
    this._noregex = config['noregex'];
    this._action = config['action'];

    if (!config['manual']) {
        this['start']();
    }

    return this.singleAct(RouteName);
}, {
    'start': function() {
        this['fire'](this._target);
    },
    'fire': function(action) {
        var i;

        if (this._noregex && this._action[action]) {
            return this._action[action](action);
        }

        for (i in this._action) {
            if (action.match(i)) {
                this._action[i](i);
            }
        }
    }
});
/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global['ScriptLoad'] = klassExtendBase(function() {
    this['_super']();
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
            disposeid = mine['contract'](script, ev['load'], function() {
                mine['uncontract'](disposeid);
                vars['callback'].apply(this, arguments);
            });
        }
    }
});
/* Test: "../../spec/_src/src/ServerMeta/test.js" */
(function() {
'use strict';

var xhr,
    isLoaded = FALSE;

Global['ServerMeta'] = klassExtendBase(function(config) {
    config = config || {};

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
            var time = new Date(xhr.getResponseHeader('Date'));
            callback(time);
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
    'dispose': function() {
        this['clear']();
        this._orgdis();
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
    'dispose': function() {
        this['unlock']();
        this._orgdis();
    },
    'request': function(vars) {
        var mine = this;

        if (mine.locked) {
            mine.waitarg = vars;
            return FALSE;
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
    'use strict';

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
            return TRUE;
        }

        loop();
        return FALSE;
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
        var num = '' + vars.num,
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
        var ret = '';

        num = '' + num;

        while (digit > 0) {
            ret += num;
            digit--;
        }

        return ret;
    }

    function parseNum(num) {
        num = ('' + num).split('.');

        var integer = num[0],
            few = num[1] ? num[1] : '';

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
        var caption = vars['caption'] || '',
            name = vars['name'],
            hash = vars['hash'],
            url = 'https://twitter.com/intent/tweet?';

        name = name ? ' 「' + name + '」' : '';
        hash = hash ? ' ' + hash : '';

        url += makeQueryString({
            'url': vars['redirect_uri'],
            'text': caption + name + hash
        });

        return url;
    }
});
/* Test: "../../spec/_src/src/XML/test.js" */
Global['XML'] = klassExtendBase(function(config) {
    this.el = create('div');
    this._data = {};

    if (config) {
        this['setData'](config['data']);
    }
}, {
    'getData': function() {
        return this._data;
    },
    'setData': function(d) {
        this._data = d;
        html(this.el, d);
    },
    '$': function(selector) {
        return $child(selector, this.el);
    },
    '$$': function(selector) {
        return $$child(selector, this.el);
    }
});
}());
