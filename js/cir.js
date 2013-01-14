// Cool is Right.
var C = {};
(function(win, doc) {
'use strict';
var Global = C;
/* Test: "../../spec/_src/src/utility/test.js" */
if (!Date.now) {
    Date.now = function now() {
        return +(new Date);
    };
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
        return JSON.parse(matchstr);
    }
    else if (matchstr.match('^[0-9\.]+$')) {
        return matchstr * 1;
    }
    else if (matchstr === 'true') {
        return true;
    }
    else if (matchstr === 'false') {
        return false;
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
        i,
        p,
        result = {};

    for (i = params.length; i--;) {
        p = params[i].split('=');
        result[p[0]] = typeCast(decodeURIComponent(p[1]));
    }
    return result;
}
function is(key, vars) {
    if (Object.prototype.toString.call(vars) === '[object ' + key + ']') {
        return true;
    }
    return false;
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
function isTouchDevice() {
    return 'ontouchstart' in win;
}
function nullFunction() {
    return null;
}
function preventDefault(e) {
    e.preventDefault();
    return false;
}
function checkUserAgent(pattern, ua) {
    ua = ua ? ua : navigator.userAgent;

    return ua.match(pattern) ? true : false;
}

Global.utility = {
    win: win,
    doc: doc,
    pageTop: pageTop,
    override: override,
    replaceAll: replaceAll,
    windowOpen: windowOpen,
    typeCast: typeCast,
    makeQueryString: makeQueryString,
    parseQueryString: parseQueryString,
    is: is,
    isObject: isObject,
    isNumber: isNumber,
    isString: isString,
    isFunction: isFunction,
    isBoolean: isBoolean,
    isTouchDevice: isTouchDevice,
    nullFunction: nullFunction,
    preventDefault: preventDefault,
    checkUserAgent: checkUserAgent
};
/* Test: "../../spec/_src/src/element/test.js" */
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
        i = 0,
        len = addedcls.length;

    for (; i < len; i++) {
        if (cls && cls === addedcls[i]) {
            return true;
        }
    }

    return false;
}

function addClass(element, cls) {
    var between = '';

    if (hasClass(element, cls)) {
        return false;
    }

    if (element.className) {
        between = ' ';
    }

    element.className = element.className + between + cls;

    return true;
}

function removeClass(element, cls) {
    var addedcls,
        bindcls = [],
        i,
        len;

    if (!hasClass(element, cls)) {
        return false;
    }

    addedcls = element.className.split(' ');
    i = 0,
    len = addedcls.length;

    for (; i < len; i++) {
        if (cls !== addedcls[i]) {
            bindcls.push(addedcls[i]);
        }
    }

    element.className = bindcls.join(' ');

    return true;
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

        return true;
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
    element.addEventListener(eventname, handler);
}
function off(element, eventname, handler) {
    element.removeEventListener(eventname, handler);
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
    return doc.defaultView.getComputedStyle(element, null);
}
function append(element, addelement) {
    element.appendChild(addelement);
}
function parent(element) {
    return element.parentNode;
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

Global.element = {
    $: $,
    $$: $$,
    $child: $child,
    $$child: $$child,
    $id: $id,
    on: on,
    off: off,
    create: create,
    show: show,
    hide: hide,
    opacity: opacity,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    css: css,
    computedStyle: computedStyle,
    append: append,
    parent: parent,
    remove: remove,
    attr: attr,
    removeAttr: removeAttr,
    html: html
};
/* Test: "../../spec/_src/src/klass/test.js" */
var klass = Global.klass = function(config) {
    'use strict';

    var init = config.init || function() {},
        properties = config.properties,
        extend = config.extend;

    if (extend) {
        Global.extend(init, extend);
    }

    override(init.prototype, properties);

    return init;
};
/* Test: "../../spec/_src/src/extend/test.js" */
Global.extend = function(child, _super) {
    'use strict';

    function ctor() {
        this.init = child;
    }

    ctor.prototype = _super.prototype;
    child.prototype = new ctor();

    var cpt = child.prototype;

    cpt._superclass = _super;
    cpt._super = function() {
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
/* Test: "../../spec/_src/src/selector/test.js" */
Global.$ = function(query, _parent) {
    'use strict';

    var $elements,
        base,
        instance,
        i = 0,
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
    base.prototype = Global.$.methods;
    instance = new base();

    instance.length = len;
    instance._selector = query;
    instance._parent = _parent;

    for (; i < len; i++) {
        instance[i] = $elements[i];
    }

    return instance;
};
/* Test: "../../spec/_src/src/selector.methods/test.js" */
(function() {
var el= Global.element;

function forExe(_this, func, arg) {
    var i = 0,
        len = _this.length,
        ary = makeAry(arg);

    for (; i < len; i++) {
        ary[0] = _this[i];
        func.apply(_this, ary);
    }

    return _this;
}
function exe(_this, func, arg) {
    var ary = makeAry(arg);

    ary[0] = _this[0];

    return func.apply(null, ary);
}

function makeAry(arg) {
    var ary = [null];

    ary.push.apply(ary, arg);

    return ary;
}

Global.$.methods = {
    _forexe: forExe,
    _exe: exe,
    _argary: makeAry,
    querySelectorAll: function(query) {
        return this[0].querySelectorAll(query);
    },
    find: function(query) {
        return Global.$(query, this._parent);
    },
    parent: function() {
        return Global.$(parent(this[0]));
    },
    on: function() {
        return forExe(this, on, arguments);
    },
    off: function() {
        return forExe(this, off, arguments);
    },
    show: function() {
        return forExe(this, show);
    },
    hide: function() {
        return forExe(this, hide);
    },
    opacity: function() {
        return forExe(this, opacity, arguments);
    },
    hasClass: function() {
        return exe(this, hasClass, arguments);
    },
    addClass: function() {
        return forExe(this, addClass, arguments);
    },
    removeClass: function() {
        return forExe(this, removeClass, arguments);
    },
    toggleClass: function() {
        return forExe(this, toggleClass, arguments);
    },
    css: function() {
        return forExe(this, css, arguments);
    },
    html: function() {
        return exe(this, html, arguments);
    },
    attr: function() {
        return exe(this, attr, arguments);
    },
    removeAttr: function() {
        return forExe(this, removeAttr, arguments);
    },
    append: function() {
        return forExe(this, append, arguments);
    },
    remove: function() {
        return forExe(this, remove, arguments);
    }
};
}());
/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var methods = Global.$.methods;

methods.animate = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return methods._forexe(this, animate, arguments);
}
methods.stop = function() {
    if (this._animate) {
        var tweeners = this._animate,
            i = 0,
            len = tweeners.length;

        for (; i < len; i++) {
            tweeners[i].stop();
        }

        this._animate = null;
    }

    return this;
}

function animate(element, params, duration, ease, callback) {
    var style = element.style,
        tweener;

    if (isFunction(duration)) {
        callback = duration;
        duration = null;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = null;
    }

    tweener = new Global.Tweener(
        element.style,
        convertTweenerParam(element, params),
        {
            duration: duration,
            ease: ease,
            onComplete: callback
        }
    );

    this._animate.push(tweener);
}

function convertTweenerParam(element, params) {
    var name,
        styled = computedStyle(element),
        tosplit,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);

        retobj[name] = {
            from: splitSuffix(styled.getPropertyValue(name))[1] * 1 || 0,
            to: tosplit[1] * 1 || 0,
            suffix: tosplit[2]
        };
    }

    return retobj;
}
function splitSuffix(value) {
    value = value || '';
    value = '' + value;

    return value.match(/^([0-9\.]+)(.*)/);
}
}());
/* Test: "../../spec/_src/src/ease/test.js" */
Global.ease = {
    inCubic: function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 3) + from;
    },
    outCubic: function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 3) + 1) + from;
    },
    inOutCubic: function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 3) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 3) + 2) + from;
    },
    inQuart: function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 4) + from;
    },
    outQuart: function(time, from, dist, duration) {
        return -dist * (Math.pow(time / duration - 1, 4) - 1) + from;
    },
    inOutQuart: function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 4) + from;
        }
        return -dist / 2 * (Math.pow(time - 2, 4) - 2) + from;
    },
    inQuint: function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 5) + from;
    },
    outQuint: function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 5) + 1) + from;
    },
    inOutQuint: function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 5) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 5) + 2) + from;
    },
    inSine: function(time, from, dist, duration) {
        return dist *
            (1 - Math.cos(time / duration * (Math.PI / 2))) + from;
    },
    outSine: function(time, from, dist, duration) {
        return dist * Math.sin(time / duration * (Math.PI / 2)) + from;
    },
    inOutSine: function(time, from, dist, duration) {
        return dist / 2 * (1 - Math.cos(Math.PI * time / duration)) + from;
    },
    inExpo: function(time, from, dist, duration) {
        return dist * Math.pow(2, 10 * (time / duration - 1)) + from;
    },
    outExpo: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    inOutExpo: function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(2, 10 * (time - 1)) + from;
        }
        return dist / 2 * (-Math.pow(2, -10 * --time) + 2) + from;
    },
    inCirc: function(time, from, dist, duration) {
        return dist * (1 - Math.sqrt(1 - (time /= duration) * time)) + from;
    },
    outCirc: function(time, from, dist, duration) {
        return dist *
            Math.sqrt(1 - (time = time / duration - 1) * time) + from;
    },
    inOutCirc: function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (1 - Math.sqrt(1 - time * time)) + from;
        }
        return dist / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + from;
    },
    inQuad: function(time, from, dist, duration) {
        return dist * (time /= duration) * time + from;
    },
    outQuad: function(time, from, dist, duration) {
        return -dist * (time /= duration) * (time - 2) + from;
    },
    inOutQuad: function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * time * time + from;
        }
        return -dist / 2 * ((--time) * (time - 2) - 1) + from;
    }
};
/* Test: "../../spec/_src/src/Animation/test.js" */
(function() {
var prop = [
        'webkitAnimation',
        // 'MozAnimation',
        // 'mozAnimation',
        // 'msAnimation',
        // 'oAnimation',
        'animation'
    ],
    el = create('p'),
    support = false,
    prefix,
    css_prefix,
    event_key = 'animation',
    i = 0,
    len = prop.length,
    style;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)animation$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Animation';
        }

        style = document.querySelector('head')
            .appendChild(document.createElement('style'));
        style.type = 'text/css';

        break;
    }
}

Global.Animation = klass({
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        option = option || {};

        this.onComplete = option.onComplete || nullFunction;

        this.element = element;

        Global.Animation.id++;
        this.id = 'ciranim' + Global.Animation.id;

        this.style = style;

        var duration = option.duration || Global.Animation.Duration,
            ease = option.ease || 'ease',
            sheet = style.sheet;

        this.sheet = sheet;

        // property
        var i,
            prop = {};

        for (i in property) {
            prop[i] = property[i];
            if (isNumber(prop[i])) {
                prop[i] = prop[i] + 'px';
            }
            if (i === 'transform') {
                prop[css_prefix + i] = prop[i];
                delete prop[i];
            }
        }

        this.property = prop;

        prop = replaceAll(
            replaceAll(JSON.stringify(prop), '"', ''),
            ',',
            ';'
        );

        this.keyframe = '@' + css_prefix + 'keyframes ' + this.id + '{to' + prop + '}';
        sheet.insertRule(
            this.keyframe,
            sheet.cssRules.length);

        this.rule = '.' + this.id +
            '{' +
                css_prefix + 'animation:' +
                this.id + ' ' +
                duration + 'ms ' +
                ease + ' 0s 1 normal forwards}';
        sheet.insertRule(this.rule,
            sheet.cssRules.length);

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
        start: function() {
            var mine = this;

            on(mine.element, event_key + 'End', endaction);
            on(mine.element, 'animationend', endaction);

            addClass(mine.element, mine.id);

            function endaction(e) {
                var i = 0,
                    rule,
                    count = 0,
                    len = mine.sheet.cssRules.length;

                mine.stop();

                css(mine.element, mine.property);
                removeClass(mine.element, mine.id);

                for (; i < len; i++) {
                    rule = mine.sheet.cssRules[i];

                    if (
                        rule === mine.keyframe ||
                        rule === mine.rule
                    ) {
                        count++;
                        mine.sheet.deleteRule(i);

                        if (count === 2) {
                            break;
                        }
                    }
                }

                mine.onComplete(e);
            }
        },
        stop: function() {
            var stopobj = {};

            stopobj[css_prefix + 'animation-play-state'] = 'paused';

            css(this.element, stopobj);
            off(this.element, event_key + 'End');
            off(this.element, 'animationend');
        }
    }
});
Global.Animation.id = 0;
Global.Animation.Duration = 500;
}());
/* Test: "../../spec/_src/src/Event/test.js" */
var isTouch = isTouchDevice(),
    ev;

ev = klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.Event.instance) {
            return Global.Event.instance;
        }

        if (config.single) {
            Global.Event.instance = this;
        }
    },
    properties: {
        switchclick: isTouch ? 'touchstart' : 'click',
        switchdown: isTouch ? 'touchstart' : 'mousedown',
        switchmove: isTouch ? 'touchmove' : 'mousemove',
        switchup: isTouch ? 'touchend' : 'mouseup',
        load: 'load',
        change: 'change',
        hashchange: 'hashchange',
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchend: 'touchend',
        orientationchange: 'orientationchange',
        resize: 'resize'
    }
});
Global.Event = ev;
ev = Global.event = new ev();
/* Test: "../../spec/_src/src/HashController/test.js" */
Global.HashController = klass({
    properties: {
        typeCast: function(str) {
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
        makeHash: function(conf) {
            var hash = '#' + conf.mode,
                vars = conf.vars,
                sign = '?',
                i;

            for (i in vars) {
                hash +=
                    sign +
                    i + '=' +
                    JSON.stringify(vars[i]);
                sign = '&';
            }

            return encodeURI(hash);
        },
        setHash: function(vars) {
            location.hash = this.makeHash(vars);
            return true;
        },
        parseHash: function(hashvars) {
            var hash,
                mode,
                varsHash,
                vars,
                splitVar,
                i;

            hash = decodeURIComponent(hashvars)
                   .split('#')[1];

            if (!hash) {
                return false;
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
                        vars[splitVar[0]] = this.typeCast(splitVar[1]);
                    }
                }
            }

            return {
                mode: mode,
                vars: vars
            };
        },
        getHash: function() {
            return this.parseHash(location.hash);
        }
    }
});
/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = klass({
    init: function() {
        this.xhr = new XMLHttpRequest();
    },
    properties: {
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback || nullFunction,
                error = vars.error || nullFunction,
                type = vars.type || 'GET',
                query = '',
                xhr;

            if (!vars.cash) {
                if (!vars.query) {
                    vars.query = {};
                }

                vars.query['ajaxcash' + Date.now()] = '0';
            }
            if (vars.query) {
                query = vars.query;

                if (isObject(query)) {
                    query = makeQueryString(query);
                    query = encodeURI(query);
                }
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return false;
                }

                if (xhr.status == 200) {
                    return callback(xhr.responseText, xhr);
                }

                return error(xhr);
            }

            xhr.open(type, url);

            if (type === 'POST') {
                xhr.setRequestHeader('Content-Type',
                        'application/x-www-form-urlencoded');
            }
            xhr.send(query);
        },
        abort: function() {
            this.xhr.abort();
        },
        json: function(vars) {
            var callback = vars.callback,
                error = vars.error;

            vars.callback = function(data) {
                callback(JSON.parse(data));
            };
            vars.error = function(data) {
                if (error) {
                    error(data);
                }
            };

            this.request(vars);
        }
    }
});
/* Test: "../../spec/_src/src/Bind/test.js" */
Global.Bind = klass({
    init: function(config) {
        this.handler = config;
        this.add();
    },
    properties: {
        getHandler: function() {
            return this.handler;
        },
        add: function() {
            this._e(true);
        },
        remove: function() {
            this._e(false);
        },
        _e: function(isBind) {
            var onoff = isBind ? on : off,
                i;

            for (i in this.handler.events) {
                onoff(
                    this.handler.element,
                    i,
                    this.handler.events[i]
                );
            }
        }
    }
});
/* Test: "../../spec/_src/src/CanvasImg/test.js" */
Global.CanvasImg = function(config) {
    var canv = create('canvas'),
        img = create('img');

    img.onload = function() {
        canv.width = config.width;
        canv.height = config.height;
        canv.getContext('2d').drawImage(img, 0, 0);

        config.onload(canv, img);
    };
    img.src = config.src;

    return canv;
};
/* Test: "../../spec/_src/src/CanvasRender/test.js" */
Global.CanvasRender = klass({
    init: function(config) {
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext('2d');

        this.setSize(config);
    },
    properties: {
        setSize: function(vars) {
            if (vars.width) {
                this.canvas.width = vars.width;
            }
            if (vars.height) {
                this.canvas.height = vars.height;
            }
        },
        draw: function(layer) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            for (var i = 0, len = layer.length, item; i < len; i++) {
                item = layer[i];
                this.ctx.drawImage(item.image, item.x, item.y);
            }
        }
    }
});
/* Test: "../../spec/_src/src/DataStore/test.js" */
Global.DataStore = klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.DataStore.instance) {
            return Global.DataStore.instance;
        }

        this.data = {};

        if (config.single) {
            Global.DataStore.instance = this;
        }
    },
    properties: {
        set: function(key, val) {
            this.data[key] = val;
        },
        get: function(key) {
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
        remove: function(key) {
            if (!this.data[key]) {
                return false;
            }

            delete this.data[key];
        },
        reset: function() {
            this.data = {};
        }
    }
});
/* Test: "../../spec/_src/src/Deferred/test.js" */
Global.Deferred = klass({
    init: function() {
        this.queue = [];
        this.data = null;
    },
    properties: {
        isResolve: function() {
            return !this.queue;
        },
        resolve: function(data) {
            if (this.isResolve()) {
                return this;
            }

            var arr = this.queue,
                len = arr.length,
                i = 0;

            this.queue = null;
            this.data = data;
            for (; i < len; ++i) {
                arr[i](data);
            }

            return this;
        },
        done: function(func) {
            this.queue ? this.queue.push(func) : func(this.data);

            return this;
        }
    }
});
/* Test: "../../spec/_src/src/DragFlick/test.js" */
Global.DragFlick = klass({
    init: function(config) {
        if (config) {
            this.bind(config);
        }
    },
    properties: {
        _t: function(e) {
            var changed = e.changedTouches ? e.changedTouches[0] : e;

            return changed;
        },
        amount: function(vars) {
            var mine = this,
                startX,
                startY,
                dragflg = false;

            on(vars.element, ev.switchdown, start);
            on(win, ev.switchup, end);

            function start(e) {
                var changed = mine._t(e);

                startX = changed.pageX;
                startY = changed.pageY;

                dragflg = true;

                e.preventDefault();
            }
            function end(e) {
                if (dragflg) {
                    var changed = mine._t(e),
                        amount = {
                            x: changed.pageX - startX,
                            y: changed.pageY - startY
                        };

                    vars.callback(amount);

                    dragflg = false;
                }
            }
        },
        direction: function(vars) {
            this.amount({
                element: vars.element,
                callback: function(amount) {
                    var boundary = vars.boundary || 0,
                        direction = {
                            change: false,
                            top: false,
                            right: false,
                            bottom: false,
                            left: false,
                            amount: amount
                        };

                    if (Math.abs(amount.x) > boundary) {
                        if (amount.x > 0) {
                            direction.right = true;
                        }
                        else if (amount.x < 0) {
                            direction.left = true;
                        }

                        direction.change = true;
                    }

                    if (Math.abs(amount.y) > boundary) {
                        if (amount.y > 0) {
                            direction.bottom = true;
                        }
                        else if (amount.y < 0) {
                            direction.top = true;
                        }

                        direction.change = true;
                    }

                    vars.callback(direction);
                }
            });
        },
        bind: function(vars) {
            var mine = this,
                element = vars.element,
                el = Global.element,
                start = vars.start || nullFunction,
                move = vars.move || nullFunction,
                end = vars.end || nullFunction,
                flg = false,
                startX = 0,
                startY = 0;

            if (vars.direction) {
                mine.direction({
                    element: element,
                    boundary: vars.boundary,
                    callback: vars.direction
                });
            }

            eventProxy(element, ev.switchdown, function(_e) {
                flg = true;

                startX = _e.pageX;
                startY = _e.pageY;

                start({
                    e: _e,
                    move: {
                        x: startX,
                        y: startY
                    }
                });
            });
            eventProxy(doc, ev.switchmove, function(_e) {
                if (flg) {
                    move({
                        e: _e,
                        move: {
                            x: _e.pageX - startX,
                            y: _e.pageY - startY
                        }
                    });
                }
            });
            eventProxy(doc, ev.switchup, function(_e) {
                if (flg) {
                    end({
                        e: _e,
                        move: {
                            x: _e.pageX - startX,
                            y: _e.pageY - startY
                        }
                    });

                    flg = false;
                }
            });

            function eventProxy(element, ev, callback) {
                on(element, ev, function(e) {
                    var changed = mine._t(e);
                    callback(changed);
                });
            }
        }
    }
});
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global.ExternalInterface = function(config) {
    config = config || {};

    var Mine = Global.ExternalInterface,
        external;

    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    if (config.android) {
        external = new Mine.Android(config);
    }
    else {
        external = new Mine.IOS(config);
    }

    if (config.single) {
        Mine.instance = external;
    }

    return external;
};
/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
Global.ExternalInterface.Android = klass({
    extend: Global.HashController,
    init: function(config) {
        config = config || {};

        this.android = config.android;
        this.externalObj = config.externalObj;

        if (!this.externalObj) {
            Global.EXTERNAL_ANDROID = {};
            this.externalObj = Global.EXTERNAL_ANDROID;
        }
    },
    properties: {
        call: function(conf) {
            this.android[conf.mode](this.makeHash(conf));
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.externalObj[name] = function(vars) {
                var objs = mine.parseHash(vars);
                return func(objs.vars);
            };
        },
        removeCallback: function(name) {
            delete this.externalObj[name];
        }
    }
});
/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global.ExternalInterface.IOS = klass({
    extend: Global.HashController,
    init: function(config) {
        this.ios = {};
    },
    properties: {
        call: function(conf) {
            this.setHash(conf);
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.ios[name] = function(e) {
                var hash = mine.getHash();

                if (hash.mode === name) {
                    func(hash.vars);
                    return true;
                }
                return false;
            };
            on(win, ev.hashchange, this.ios[name]);
        },
        removeCallback: function(name) {
            off(win, ev.hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
/* Test: "../../spec/_src/src/Facebook/test.js" */
Global.Facebook = klass({
    properties: {
        _b: 'https://www.facebook.com/dialog/feed?',
        getShareURL: function(vars) {
            var url = this._b +
                    'app_id=' + vars.app_id + '&' +
                    'redirect_uri=' + vars.redirect_uri;

            url += makeQueryString({
                'link': vars.link,
                'picture': vars.picture,
                'name': vars.name,
                'caption': vars.caption,
                'description': vars.description
            });

            return url;
        }
    }
});
/* Test: "../../spec/_src/src/FPS/test.js" */
(function() {
'use strict';

var instance,
    requestAnimationFrame = (function() {
        return win.requestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.oRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            false;
            // function(callback, element){
            //         window.setTimeout(callback, 1000 / 60);
            //       };
    }());

Global.FPS = klass({
    init: function(config) {
        config = config || {};

        if (!config.criterion) {
            config.criterion = 20;
        }

        // singleton
        if (config.single && instance) {
            return instance;
        }

        this.criterion = config.criterion,
        this.surver = this.criterion,
        this.enterframe = config.enterframe,
        this.msecFrame = getFrame(this.criterion),
        this.prevtime =
        this.nowtime =
        this.nexttime =
        this.loopid = 0;

        if (!config.manual) {
            this.start();
        }

        if (config.single) {
            instance = this;
        }
    },
    properties: {
        getCriterion: function() {
            return this.criterion;
        },
        getSurver: function() {
            return this.surver;
        },
        getFrameTime: function() {
            return this.msecFrame;
        },
        enter: function() {
            this.enterframe({
                criterion: this.criterion,
                surver: this.surver
            });
        },
        start: function() {
            this.prevtime = Date.now();
            this.nexttime = this.prevtime + this.msecFrame;
            loop(this);
        },
        stop: function() {
            clearInterval(this.loopid);
            this.loopid = 0;
        }
    }
});
function animationFrame(mine) {
    if (mine.nexttime <= Date.now()) {
        _loop(mine);
        mine.nexttime = mine.nowtime + mine.msecFrame;
    }
    if (mine.loopid === 1) {
        requestAnimationFrame(function() {
            animationFrame(mine);
        });
    }
}
function loop(mine) {
    if (requestAnimationFrame) {
        mine.loopid = 1;
        animationFrame(mine);
    }
    else {
        mine.loopid = setInterval(_loop, mine.msecFrame, mine);
    }
}
function _loop(mine) {
    mine.nowtime = Date.now();
    mine.surver = getFrame(mine.nowtime - mine.prevtime);
    mine.prevtime = mine.nowtime;

    mine.enter();
}

function getFrame(time) {
    return Math.round(1000 / time);
}
}());
/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = klass({
    init: function(config) {
        this.srcs = config.srcs,
        this.srccount = this.srcs.length,
        this.loadedsrcs = [];
        this.onload = config.onload || nullFunction,
        this.onprogress = config.onprogress || nullFunction,
        this.loadcount = 0;
        this.progress = 0;
        this.started = false;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        _c: function() {
            this.loadcount++;

            this.progress = this.loadcount / this.srccount;
            this.onprogress(this.progress);

            if (this.loadcount >= this.srccount) {
                this.onload(this.loadedsrcs);
            }
        },
        start: function() {
            if (this.started) {
                return false;
            }

            this.started = true;

            var mine = this,
                img,
                i = 0,
                len = mine.srccount;

            for (; i < len; i++) {
                img = create('img');
                img.src = mine.srcs[i];

                on(img, ev.load, countup);

                mine.loadedsrcs.push(img);
            }

            function countup() {
                mine._c();
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global.WindowLoad = klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        onload: function(func) {
            on(win, ev.load, func);
        }
    }
});
/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global.LocalStorage = klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.LocalStorage.instance) {
            return Global.LocalStorage.instance;
        }

        this._n = config.namespace ? config.namespace + '-' : '';

        if (config.single) {
            Global.LocalStorage.instance = this;
        }
    },
    properties: {
        _s: win.localStorage,
        set: function(key, val) {
            this._s.setItem(this._n + key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            var mine = this,
                ret = {},
                i;

            if (key) {
                return JSON.parse(mine._s.getItem(mine._n + key));
            }

            for (i in mine._s) {
                if (!this._n) {
                    ret[i] = JSON.parse(mine._s[i]);
                }
                else {
                    key = i.split(this._n)[1];
                    if (key) {
                        ret[key] = JSON.parse(mine._s[i]);
                    }
                }
            }

            return ret;
        },
        remove: function(key) {
            key = this._n + key;

            if (!this._s.getItem(key)) {
                return false;
            }

            this._s.removeItem(key);

            return true;
        },
        reset: function() {
            if (!this._n) {
                this._s.clear();

                return true;
            }

            var i;

            for (i in this._s) {
                this.remove(i);
            }
        }
    }
});
/* Test: "../../spec/_src/src/Mobile/test.js" */
Global.Mobile = klass({
    properties: {
        isAndroid: function(ua) {
            return checkUserAgent(/Android/i, ua);
        },
        isIOS: function(ua) {
            return checkUserAgent(/iPhone|iPad|iPod/i, ua);
        },
        isWindows: function(ua) {
            return checkUserAgent(/IEMobile/i, ua);
        },
        isFBAPP: function(ua) {
            return checkUserAgent(/FBAN/, ua);
        },
        isMobile: function() {
            return (
                this.isAndroid() ||
                this.isIOS() ||
                this.isWindows() ||
                this.isFBAPP()
            );
        },
        killScroll: function(isNoTop) {
            if (!isNoTop) {
                pageTop();
            }
            on(doc, ev.touchmove, preventDefault);
        },
        revivalScroll: function(isNoTop) {
            if (!isNoTop) {
                pageTop();
            }
            off(doc, ev.touchmove, preventDefault);
        },
        hideAddress: function() {
            on(win, ev.load, hideAddressHandler, false);
            on(win, ev.orientationchange, hideAddressHandler, false);

            function doScroll() {
                if (win.pageYOffset === 0) {
                    pageTop();
                }
            }
            function hideAddressHandler() {
                setTimeout(doScroll, 100);
            }
        },
        getOrientation: function() {
            if (
                Math.abs(win.orientation) !== 90 &&
                win.innerWidth < win.innerHeight
            ) {
                return {
                    portrait: true,
                    landscape: false
                };
            }

            return {
                portrait: false,
                landscape: true
            };
        },
        bindOrientation: function(vars) {
            var mine = this;

            if (vars.immediately) {
                change();
            }

            if (vars.one) {
                add(onechange);

                return function() {
                    remove(onechange);
                };
            }

            add(change);

            return function() {
                remove(change);
            };

            function add(func) {
                set(on, func);
            }
            function remove(func) {
                set(off, func);
            }
            function set(setfunc, handler) {
                setfunc(win, ev.load, handler);
                setfunc(win, ev.orientationchange, handler);
                setfunc(win, ev.resize, handler);
            }
            function onechange() {
                change();
                remove(onechange);
            }
            function change() {
                if (
                    mine.getOrientation().portrait
                ) {
                    vars.portrait();
                    return true;
                }
                vars.landscape();
            }
        }
    }
});
/* Test: "../../spec/_src/src/FontImg/test.js" */
Global.FontImg = klass({
    init: function(config) {
        config = config || {type: ''};

        this.type = config.type ? config.type + '_' : '';
    },
    properties: {
        make: function(x) {
            var aryX = ('' + x).split(''),
                tags = '',
                i;

            for (i = aryX.length; i--;) {
                tags = make1Digit(this.type + aryX[i]) + tags;
            }

            function make1Digit(x) {
                return '<span class="font_' + x + '">&nbsp;</span>';
            }

            return tags;
        }
    }
});
/* Test: "../../spec/_src/src/Observer/test.js" */
Global.Observer = klass({
    init: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && Global.Observer.instance) {
            return Global.Observer.instance;
        }

        this.observed = {};

        if (config.single) {
            Global.Observer.instance = this;
        }
    },
    properties: {
        on: function(key, func) {
            var observed = this.observed;

            if (!observed[key]) {
                observed[key] = [];
            }

            observed[key].push(func);
        },
        one: function(key, func) {
            var mine = this,
                wrapfunc = function(vars) {
                    func(vars);
                    mine.off(key, wrapfunc);
                };

            mine.on(key, wrapfunc);
        },
        off: function(key, func) {
            var observed = this.observed;

            if (!func) {
                delete observed[key];

                return true;
            }

            var target = observed[key],
                i;

            if (!target) {
                return false;
            }


            for (i = target.length; i--;) {
                if (func === target[i]) {
                    target.splice(i, 1);

                    if (target.length === 0) {
                        delete observed[key];
                    }

                    return true;
                }
            }

            return false;
        },
        fire: function(key, vars) {
            var target = this.observed[key],
                func,
                i;

            if (!target) {
                return false;
            }

            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func(vars);
                }
            }

            return true;
        }
    }
});
/* Test: "../../spec/_src/src/PreRender/test.js" */
Global.PreRender = klass({
    init: function(config) {
        config = config || {};

        if (!config.loopblur) {
            config.loopblur = 20;
        }

        this.elements = config.elements || [];
        this.guesslimit = config.guesslimit || 30;
        this.onrendered = config.onrendered || nullFunction;
        this.looptime = config.looptime || 100;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = this.prevtime = null;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                show(this.elements[i]);
            }
            this.prevtime = Date.now();
            this.loopid = setInterval(check, this.looptime, this);

            function check(mine) {
                var gettime = Date.now(),
                    difftime = gettime - mine.prevtime;

                mine.prevtime = gettime;

                if (difftime < mine.loopblur) {
                    mine.guesslimit--;

                    if (mine.guesslimit < 1) {
                        clearInterval(mine.loopid);

                        for (var i = mine.elements.length; i--;) {
                            hide(mine.elements[i]);
                        }

                        mine.onrendered();
                    }
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/Route/test.js" */
Global.Route = klass({
    init: function(config) {
        // singleton
        if (config.single && Global.Route.instance) {
            return Global.Route.instance;
        }

        this.target = config.target || '';
        this.noregex = config.noregex;
        this.action = config.action;

        if (!config.manual) {
            this.start();
        }

        if (config.single) {
            Global.Route.instance = this;
        }
    },
    properties: {
        start: function() {
            this.fire(this.target);
        },
        fire: function(action) {
            var i;

            if (this.noregex && this.action[action]) {
                return this.action[action]();
            }

            for (i in this.action) {
                if (action.match(i)) {
                    this.action[i]();
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = klass({
    properties: {
        requests: function(varary) {
            var i = 0,
                len = varary.length;

            for (; i < len; i++) {
                this.request(varary[i]);
            }
        },
        request: function(vars) {
            var script = create('script');

            /* script.type = 'text/javascript'; */
            script.src = vars.src;
            append(doc.body, script);

            if (vars.callback) {
                on(script, ev.load, vars.callback);
            }
        }
    }
});
/* Test: "../../spec/_src/src/ServerMeta/test.js" */
(function() {
'use strict';

var xhr,
    isLoaded = false;

Global.ServerMeta = klass({
    init: function(config) {
        config = config || {};

        var callback = config.callback || nullFunction;

        if (!xhr) {
            xhr = getHeader(function() {
                isLoaded = true;
                callback(xhr);
            });
        }
        else {
            callback(xhr);
        }
    },
    properties: {
        date: function(callback) {
            return getHeader(function(xhr) {
                var time = new Date(xhr.getResponseHeader('Date'));
                callback(time);
            });
        },
        connection: function() {
            return getRes('Connection');
        },
        contentLength: function() {
            return getRes('Content-Length');
        },
        lastModified: function() {
            return getRes('Last-Modified');
        },
        server: function() {
            return getRes('Server');
        },
        contentType: function() {
            return getRes('Content-Type');
        },
        acceptRanges: function() {
            return getRes('Accept-Ranges');
        },
        keepAlive: function() {
            return getRes('Keep-Alive');
        }
    }
});

function getRes(value) {
    if (isLoaded) {
        return xhr.getResponseHeader(value);
    }
    return false;
}

function getHeader(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr);
    };

    xhr.open('HEAD', location.href + '?update' + Date.now() + '=1');
    xhr.send(null);

    return xhr;
}
}());
/* Test: "../../spec/_src/src/SessionStorage/test.js" */
Global.SessionStorage = klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.SessionStorage.instance) {
            return Global.SessionStorage.instance;
        }

        this._n = config.namespace ? config.namespace + '-' : '';

        if (config.single) {
            Global.SessionStorage.instance = this;
        }
    },
    properties: {
        _s: win.sessionStorage,
        set: function(key, val) {
            this._s.setItem(this._n + key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            var mine = this,
                ret = {},
                i;

            if (key) {
                return JSON.parse(mine._s.getItem(mine._n + key));
            }

            for (i in mine._s) {
                if (!this._n) {
                    ret[i] = JSON.parse(mine._s[i]);
                }
                else {
                    key = i.split(this._n)[1];
                    if (key) {
                        ret[key] = JSON.parse(mine._s[i]);
                    }
                }
            }

            return ret;
        },
        remove: function(key) {
            key = this._n + key;

            if (!this._s.getItem(key)) {
                return false;
            }

            this._s.removeItem(key);

            return true;
        },
        reset: function() {
            if (!this._n) {
                this._s.clear();

                return true;
            }

            var i;

            for (i in this._s) {
                this.remove(i);
            }
        }
    }
});
/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global.Surrogate = klass({
    init: function(config) {
        this.delay = config.delay;
        this.callback = config.callback;
        // this.args = null;
        // this.waitid = null;
    },
    properties: {
        request: function(arg) {
            this.args = arg;
            this.clear();
            this.waitid = setTimeout(this.flush, this.delay, this);
        },
        flush: function(mine) {
            mine = mine || this;

            mine.callback(mine.args);
        },
        clear: function() {
            clearInterval(this.waitid);
        }
    }
});
/* Test: "../../spec/_src/src/Throttle/test.js" */
Global.Throttle = klass({
    init: function(config) {
        this.waittime = config.waittime;
        this.callback = config.callback;
        // this.locked = false;
        // this.waitid = null;
        // this.waitarg = null;
    },
    properties: {
        request: function(vars) {
            var mine = this;

            if (mine.locked) {
                mine.waitarg = vars;
                return false;
            }

            mine.callback(vars);
            mine.lock();
            mine.waitid = setTimeout(function() {
                if (mine.waitarg) {
                    mine.callback(mine.waitarg);
                    mine.waitarg = null;
                }

                mine.unlock();
            }, mine.waittime, mine);
        },
        lock: function() {
            this.locked = true;
        },
        unlock: function(mine) {
            mine = mine || this;

            mine.locked = false;
            clearInterval(mine.waitid);
        }
    }
});
/* Test: "../../spec/_src/src/Timer/test.js" */
Global.Timer = function(config) {
    'use strict';

    var limit = config.limit,
        limitx1000 = limit * 1000,
        interval = config.interval * 1000,
        onupdate = config.onupdate,
        ontimeup = config.ontimeup,
        digit = template2digit(config.template),
        starttime = 0,
        nowtime = 0,
        endtime = limitx1000,
        preformedtime = getPreformedNum(limit),
        loopid,
        instance = {
            getLimit: function() {
                return limit;
            },
            getTime: function() {
                return preformedtime;
            },
            getProgress: function() {
                var diff = endtime - nowtime,
                    progress = 1 - diff / limitx1000;

                return progress;
            },
            setUpdate: function(func) {
                onupdate = func;
            },
            setTimeup: function(func) {
                ontimeup = func;
            },
            countDown: function(vars) {
                nowtime = starttime = getTime();
                endtime = starttime + limitx1000;
                _loop();
            },
            stop: function() {
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
            instance.stop();
            ontimeup();
            return true;
        }

        loop();
        return false;
    }

    function getTime() {
        return Date.now();
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
                isFew: true
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
/* Test: "../../spec/_src/src/Transition/test.js" */
(function() {
'use strict';

var prop = [
        'webkitTransitionProperty',
        // 'MozTransitionProperty',
        // 'mozTransitionProperty',
        // 'msTransitionProperty',
        // 'oTransitionProperty',
        'transitionProperty'
    ],
    el = create('p'),
    support = false,
    prefix,
    css_prefix,
    event_key = 'transition',
    i = 0,
    len = prop.length;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)transitionproperty$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Transition';
        }

        break;
    }
}

/* console.log(support, prefix, css_prefix, event_key); */

Global.Transition = klass({
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        var transProp = [],
            animeProp = override({}, property),
            i;

        option = option || {};
        option.onComplete = option.onComplete || nullFunction;

        for (i in property) {
            transProp.push(i);
        }

        if (animeProp.transform) {
            animeProp[css_prefix + 'transform'] = animeProp.transform;
            delete animeProp.transform;
        }

        animeProp[css_prefix + 'transition-property'] = transProp.join(' ');
        animeProp[css_prefix + 'transition-duration'] =
            (option.duration || Global.Transition.Duration) + 'ms';

        this.element = element;
        this.property = animeProp;
        this.option = option;

        this._stopprop = {};
        this._stopprop[css_prefix + 'transition-property'] =
        this._stopprop[css_prefix + 'transition-duration'] = '';

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
        start: function() {
            var mine = this;

            mine._endfunc = function(e) {
                mine.stop();
                setTimeout(function() {
                    mine.option.onComplete(e);
                }, 1);
            };

            on(mine.element, event_key + 'End', mine._endfunc);
            css(mine.element, mine.property);
        },
        stop: function() {
            off(this.element, event_key + 'End', this._endfunc);
            css(this.element, this._stopprop);
        }
    }
});
Global.Transition.Duration = 500;
}());
/* Test: "../../spec/_src/src/Tweener/test.js" */
Global.Tweener = klass({
    init: function(target, property, option) {
        var name,
            prop;

        option = option || {};

        this.target = target;
        this.property = [];

        for (name in property) {
            prop = property[name];
            prop.name = name;

            prop.distance = prop.to - prop.from;
            prop.prefix = prop.prefix || '';
            prop.suffix = prop.suffix || 'px';

            this.property.push(prop);
        }

        this.duration = option.duration || Global.Tweener.Duration;
        this.ease = option.ease || this._ease;
        this.onComplete = option.onComplete;

        this.begin = Date.now();

        Global.Tweener.Items.push(this);
        if (!Global.Tweener.timerId) {
            this.start();
        }
    },
    properties: {
        _ease: function(time, from, dist, duration) {
            return dist * time / duration + from;
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
                setTimeout(callback, 1000 / Global.Tweener.FPS);
            };
        }()),
        loop: function() {
            var mine = this,
                items = Global.Tweener.Items,
                item,
                now = Date.now(),
                time,
                n = items.length,
                i,
                len,
                prop;

            while (n--) {
                item = items[n];
                len = item.property.length;
                time = now - item.begin;

                if (time < item.duration) {
                    for (i = 0; i < len; i++) {
                        prop = item.property[i];

                        Global.Tweener._setProp(item.target, prop, item.ease(
                            time,
                            prop.from,
                            prop.distance,
                            item.duration
                        ));
                    }
                }
                else {
                    for (i = 0; i < len; i++) {
                        prop = item.property[i];

                        Global.Tweener._setProp(item.target, prop, prop.to);
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

                return true;
            }

            this.stop();
        },
        start: function() {
            var mine = this;

            Global.Tweener.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine.loop();
            });
        },
        stop: function() {
            Global.Tweener.Items = [];
            clearInterval(Global.Tweener.timerId);
            Global.Tweener.timerId = null;
        }
    }
});
Global.Tweener._setProp = function(target, prop, point) {
    target[prop.name] = prop.prefix + point + prop.suffix;
};
/* Global.Tweener.timerId = null; */
Global.Tweener.Items = [];
Global.Tweener.FPS = 30;
Global.Tweener.Duration = 500;
/* Test: "../../spec/_src/src/Twitter/test.js" */
Global.Twitter = klass({
    properties: {
        _b: 'https://twitter.com/intent/tweet?',
        getShareURL: function(vars) {
            var caption = vars.caption || '',
                name = vars.name,
                hash = vars.hash,
                url = this._b;

            name = name ? ' 「' + name + '」' : '';
            hash = hash ? ' ' + hash : '';

            url += makeQueryString({
                'url': vars.redirect_uri,
                'text': caption + name + hash
            });

            return url;
        }
    }
});
/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = klass({
    init: function(config) {
        this.element = create('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    properties: {
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return $child(selector, this.element);
        },
        $$: function(selector) {
            return $$child(selector, this.element);
        }
    }
});
}(window, document));
