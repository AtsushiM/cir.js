// Cool is Right.
var C = {};
(function() {
    'use strict';
    var Global = C;
/* Test: "../../spec/_src/src/utility/test.js" */
(function(win, doc) {
'use strict';

if (!Date.now) {
    Date.now = function now() {
        return +(new Date);
    };
}

Global.utility = {
    win: win,
    doc: doc,

    pageTop: function() {
        win.scrollTo(0, 1);
    },
    override: override,
    replaceAll: function(targettext, needle, replacetext) {
        return targettext.split(needle).join(replacetext);
    },
    windowOpen: function(url, windowname) {
        return win.open(url, windowname);
    },
    typeCast: typeCast,
    makeQueryString: function(vars) {
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
    },
    parseQueryString: function(query) {
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
    },
    is: is,
    isObject: isObject,
    isNumber: isNumber,
    isString: isString,
    isFunction: isFunction,
    isBoolean: isBoolean,
    isTouchDevice: function() {
        return 'ontouchstart' in win;
    },
    nullFunction: function() {
        return null;
    }
};

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

}(window, document));
/* Test: "../../spec/_src/src/element/test.js" */
(function() {
'use strict';

var util = Global.utility,
    win = util.win,
    doc = util.doc;

Global.element = {
    $: function(selector) {
        return $(selector, doc);
    },
    $$: function(selector) {
        return $$(selector, doc);
    },
    $child: $,
    $$child: $$,
    $id: function(id) {
        return doc.getElementById(id);
    },
    on: function(element, eventname, handler) {
        element.addEventListener(eventname, handler);
    },
    off: function(element, eventname, handler) {
        element.removeEventListener(eventname, handler);
    },
    create: function(tagname, attr) {
        var element = doc.createElement(tagname);

        if (attr) {
            attrElement(element, attr);
        }

        return element;
    },
    show: function(element) {
        element.style.display = 'block';
    },
    hide: function(element) {
        element.style.display = 'none';
    },
    opacity: function(element, value) {
        element.style.opacity = value;
    },
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: function(element, cls) {
        if (hasClass(element, cls)) {
            return removeClass(element, cls);
        }

        return addClass(element, cls);
    },
    css: function(element, addstyle) {
        var style = element.style,
            i,
            key,
            value;

        for (i in addstyle) {
            key = i;
            value = addstyle[i];

            if (util.isNumber(value)) {
                value += 'px';
            }

            style[key] = value;
        }
    },
    computedStyle: function(element) {
        return doc.defaultView.getComputedStyle(element, null);
    },
    append: function(element, addelement) {
        element.appendChild(addelement);
    },
    attr: attrElement,
    html: function(element, text) {
        if (text) {
            element.innerHTML = text;
        }
        else {
            return element.innerHTML;
        }
    }
};

function $(selector, element) {
    return element.querySelector(selector);
}
function $$(selector, element) {
    var eles = element.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
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

function attrElement(element, vars, value) {
    var i;

    if (util.isObject(vars)) {
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
}());
/* Test: "../../spec/_src/src/klass/test.js" */
Global.klass = function(config) {
    'use strict';

    var util = Global.utility,
        override = util.override,
        init = config.init || function() {},
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

    var Mine = Global.$,
        util = Global.utility,
        _par = _parent || document,
        $elements,
        base,
        instance,
        i = 0,
        len;

    if (util.isString(query)) {
        $elements = _par.querySelectorAll(query);
    }
    else {
        $elements = [query];
    }
    len = $elements.length;

    base = function() {};
    base.prototype = Mine.methods;
    instance = new base();

    instance.length = len;
    instance.selector = query;

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

    ary.push.apply(ary, arg)

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
        return Global.$(query, this);
    },
    parent: function() {
        return Global.$(this[0].parentNode);
    },
    on: function() {
        return forExe(this, el.on, arguments);
    },
    off: function() {
        return forExe(this, el.off, arguments);
    },
    show: function() {
        return forExe(this, el.show);
    },
    hide: function() {
        return forExe(this, el.hide);
    },
    opacity: function() {
        return forExe(this, el.opacity, arguments);
    },
    hasClass: function() {
        return exe(this, el.hasClass, arguments);
    },
    addClass: function() {
        return forExe(this, el.addClass, arguments);
    },
    removeClass: function() {
        return forExe(this, el.removeClass, arguments);
    },
    toggleClass: function() {
        return forExe(this, el.toggleClass, arguments);
    },
    css: function() {
        return forExe(this, el.css, arguments);
    },
    html: function() {
        return exe(this, el.html, arguments);
    },
    attr: function() {
        return exe(this, el.attr, arguments);
    },
    append: function() {
        return forExe(this, el.append, arguments);
    }
};
}());
/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var util = Global.utility,
    el = Global.element,
    methods = Global.$.methods;

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

    if (util.isFunction(duration)) {
        callback = duration;
        duration = null;
    }
    if (util.isFunction(ease) && !callback) {
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
        computedStyle = el.computedStyle(element),
        tosplit,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);

        retobj[name] = {
            from: splitSuffix(computedStyle.getPropertyValue(name))[1] * 1 || 0,
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
/* Test: "../../spec/_src/src/Event/test.js" */
(function() {
'use strict';

var isTouch = Global.utility.isTouchDevice();

Global.Event = Global.klass({
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
Global.Event.instance = null;
Global.event = new Global.Event();
}());
/* Test: "../../spec/_src/src/HashController/test.js" */
Global.HashController = Global.klass({
    properties: {
        utility: Global.utility,
        typeCast: function(str) {
            var caststr = this.utility.typeCast(str),
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
Global.Ajax = Global.klass({
    init: function() {
        this.xhr = new XMLHttpRequest();
    },
    properties: {
        _u: Global.utility,
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback || this._u.nullFunction,
                error = vars.error || this._u.nullFunction,
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
                query = this._u.makeQueryString(vars.query);
                query = encodeURI(query);
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return false;
                }

                if (xhr.status == 200) {
                    return callback(xhr.responseText);
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
        getJSON: function(vars) {
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
Global.Bind = Global.klass({
    init: function(config) {
        this.handler = config;
        this.add();
    },
    properties: {
        _el: Global.element,
        getHandler: function() {
            return this.handler;
        },
        add: function() {
            return this._exe(true);
        },
        remove: function() {
            return this._exe(false);
        },
        _exe: function(isBind) {
            var el = this._el,
                onoff = isBind ? el.on : el.off,
                i;

            for (i in this.handler.events) {
                onoff(
                    this.handler.element,
                    i,
                    this.handler.events[i]
                );
            }

            return this.handler;
        }
    }
});
/* Test: "../../spec/_src/src/CanvasImage/test.js" */
(function() {
'use strict';

var el= Global.element,
    create = el.create;

Global.CanvasImage = function(config) {
    var canv = create('canvas'),
        img = create('img'),
        src = config.src,
        width = config.width,
        height = config.height,
        onload = config.onload;

    img.onload = function() {
        canv.width = width;
        canv.height = height;
        canv.getContext('2d').drawImage(img, 0, 0);

        onload(canv, img);
    };
    img.src = src;

    return canv;
};
}());
/* Test: "../../spec/_src/src/CanvasRender/test.js" */
Global.CanvasRender = Global.klass({
    init: function(config) {
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;

        this.setSize(config);
    },
    properties: {
        setSize: function(vars) {
            if (vars.width) {
                this.canvas.width = this.canvasWidth = vars.width;
            }
            if (vars.height) {
                this.canvas.height = this.canvasHeight = vars.height;
            }
        },
        draw: function(layer) {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            for (var i = 0, len = layer.length, item; i < len; i++) {
                item = layer[i];
                this.ctx.drawImage(item.image, item.x, item.y);
            }
        }
    }
});
/* Test: "../../spec/_src/src/DataStore/test.js" */
Global.DataStore = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.DataStore.instance) {
            return Global.DataStore.instance;
        }

        this.d = {};

        if (config.single) {
            Global.DataStore.instance = this;
        }
    },
    properties: {
        set: function(key, val) {
            this.d[key] = val;
            return true;
        },
        get: function(key) {
            var data = this.d;

            if (key) {
                return data[key];
            }

            var ret = {},
                i;

            for (i in data) {
                ret[i] = data[i];
            }

            return ret;
        },
        remove: function(key) {
            var data = this.d;

            if (!data[key]) {
                return false;
            }

            delete data[key];

            return true;
        },
        reset: function() {
            this.d = {};
            return true;
        }
    }
});
Global.DataStore.instance = null;
/* Test: "../../spec/_src/src/Deferred/test.js" */
Global.Deferred = Global.klass({
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
Global.DragFlick = Global.klass({
    init: function(config) {
        if (config) {
            this.bind(config);
        }
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        _getEventTarget: function(e) {
            var changed = e.changedTouches ? e.changedTouches[0] : e;

            return changed;
        },
        amount: function(vars) {
            var mine = this,
                startX,
                startY,
                dragflg = false;

            mine._el.on(vars.element, mine._ev.switchdown, start);
            mine._el.on(mine._u.win, mine._ev.switchup, end);

            function start(e) {
                var changed = mine._getEventTarget(e);

                startX = changed.pageX;
                startY = changed.pageY;

                dragflg = true;

                e.preventDefault();
            }
            function end(e) {
                if (dragflg) {
                    var changed = mine._getEventTarget(e),
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
                e = this._ev,
                el = this._el,
                util = this._u,
                start = vars.start || util.nullFunction,
                move = vars.move || util.nullFunction,
                end = vars.end || util.nullFunction,
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

            eventProxy(element, e.switchdown, function(_e) {
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
            eventProxy(util.doc, e.switchmove, function(_e) {
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
            eventProxy(util.doc, e.switchup, function(_e) {
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
                el.on(
                    element, ev, function(e) {
                        var changed = mine._getEventTarget(e);
                        callback(changed);
                    });
            }
        }
    }
});
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global.ExternalInterface = function(config) {
    config = config || {};

    var external;

    if (config.single && Global.ExternalInterface.instance) {
        return Global.ExternalInterface.instance;
    }

    if (config.android) {
        external = new Global.ExternalInterface.Android(config);
    }
    else {
        external = new Global.ExternalInterface.IOS(config);
    }

    if (config.single) {
        Global.ExternalInterface.instance = external;
    }

    return external;
};
Global.ExternalInterface.instance = null;
/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
Global.ExternalInterface.Android = Global.klass({
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
        _h: new Global.HashController(),
        'call': function(conf) {
            this.android[conf.mode](this._h.makeHash(conf));
        },
        'addCallback': function(name, func) {
            var mine = this;
            mine.externalObj[name] = function(vars) {
                var objs = mine._h.parseHash(vars);
                return func(objs.vars);
            };
        },
        'removeCallback': function(name) {
            delete this.externalObj[name];
        }
    }
});
/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global.ExternalInterface.IOS = Global.klass({
    init: function(config) {
        this.ios = {};
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        _h: new Global.HashController(),
        call: function(conf) {
            this._h.setHash(conf);
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.ios[name] = function(e) {
                var hash = mine._h.getHash();

                if (hash.mode === name) {
                    func(hash.vars);
                    return true;
                }
                return false;
            };
            this._el.on(
                this._u.win, this._ev.hashchange, this.ios[name]);
        },
        removeCallback: function(name) {
            this._el.off(
                this._u.win, this._ev.hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
/* Test: "../../spec/_src/src/Facebook/test.js" */
Global.Facebook = Global.klass({
    properties: {
        _u: Global.utility,
        shareURLBase: 'https://www.facebook.com/dialog/feed?',
        getShareURL: function(vars) {
            var app_id = vars.app_id,
                redirect_uri = vars.redirect_uri,
                link = vars.link,
                picture = vars.picture,
                name = vars.name,
                caption = vars.caption,
                description = vars.description,
                url = this.shareURLBase +
                    'app_id=' + app_id + '&' +
                    'redirect_uri=' + redirect_uri;

            url += this._u.makeQueryString({
                'link': link,
                'picture': picture,
                'name': name,
                'caption': caption,
                'description': description
            });

            return url;
        }
    }
});
/* Test: "../../spec/_src/src/FPS/test.js" */
(function() {
'use strict';

var instance,
    util = Global.utility,
    win = util.win,
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

Global.FPS = Global.klass({
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
Global.ImgLoad = Global.klass({
    init: function(config) {
        this.srcs = config.srcs,
        this.srccount = this.srcs.length,
        this.loadedsrcs = [];
        this.onload = config.onload || this._u.nullFunction,
        this.onprogress = config.onprogress || this._u.nullFunction,
        this.loadcount = 0;
        this.progress = 0;
        this.started = false;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
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
                i, len;

            for (i = 0, len = mine.srccount; i < len; i++) {
                img = mine._el.create('img');
                img.src = mine.srcs[i];

                mine._el.on(img, mine._ev.load, function() {
                    mine._c();
                });

                mine.loadedsrcs.push(img);
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        onload: function(func) {
            this._el.on(this._u.win, this._ev.load, func);
        }
    }
});
/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global.LocalStorage = Global.klass({
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
        _s: Global.utility.win.localStorage,
        set: function(key, val) {
            this._s.setItem(this._n + key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            var mine = this;

            if (key) {
                return JSON.parse(mine._s.getItem(mine._n + key));
            }

            var ret = {},
                i,
                key;

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
Global.LocalStorage.instance = null;
/* Test: "../../spec/_src/src/Mobile/test.js" */
(function() {
'use strict';

var userAgent = navigator.userAgent;

Global.Mobile = Global.klass({
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        isAndroid: function(ua) {
            return checkUA(ua, /Android/i);
        },
        isIOS: function(ua) {
            return checkUA(ua, /iPhone|iPad|iPod/i);
        },
        isWindows: function(ua) {
            return checkUA(ua, /IEMobile/i);
        },
        isFBAPP: function(ua) {
            return checkUA(ua, /FBAN/);
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
                this._u.pageTop();
            }
            this._el.on(this._u.doc, this._ev.touchmove, preventDefault);
        },
        revivalScroll: function(isNoTop) {
            if (!isNoTop) {
                this._u.pageTop();
            }
            this._el.off(this._u.doc, this._ev.touchmove, preventDefault);
        },
        hideAddress: function() {
            this._el.on(this._u.win, this._ev.load, hideAddressHandler, false);
            this._el.on(this._u.win, this._ev.orientationchange, hideAddressHandler, false);
        },
        getOrientation: function() {
            if (
                Math.abs(this._u.win.orientation) !== 90 &&
                this._u.win.innerWidth < this._u.win.innerHeight
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
                set(mine._el.on, func);
            }
            function remove(func) {
                set(mine._el.off, func);
            }
            function set(setfunc, handler) {
                setfunc(mine._u.win, mine._ev.load, handler);
                setfunc(mine._u.win, mine._ev.orientationchange, handler);
                setfunc(mine._u.win, mine._ev.resize, handler);
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

function preventDefault(e) {
    e.preventDefault();
    return false;
}
function checkUA(ua, pattern) {
    ua = ua ? ua : userAgent;

    return ua.match(pattern) ? true : false;
}
function doScroll() {
    if (win.pageYOffset === 0) {
        this._u.pageTop();
    }
}
function hideAddressHandler() {
    setTimeout(doScroll, 100);
}
}());
/* Test: "../../spec/_src/src/FontImage/test.js" */
Global.FontImage = Global.klass({
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
Global.Observer = Global.klass({
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
        getObserved: function() {
            return this.observed;
        },
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
Global.Observer.instance = null;
/* Test: "../../spec/_src/src/PreRender/test.js" */
Global.PreRender = Global.klass({
    init: function(config) {
        config = config || {};

        if (!config.loopblur) {
            config.loopblur = 20;
        }

        this.elements = config.elements || [];
        this.guesslimit = config.guesslimit || 30;
        this.onrendered = config.onrendered || this._u.nullFunction;
        this.looptime = config.looptime || 100;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = this.prevtime = null;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                this._el.show(this.elements[i]);
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
                            mine._el.hide(mine.elements[i]);
                        }

                        mine.onrendered();
                    }
                }
            }
        }
    }
});
/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = Global.klass({
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        requests: function(varary) {
            var i = 0,
                len = varary.length;

            for (; i < len; i++) {
                this.request(varary[i]);
            }
        },
        request: function(vars) {
            var script = this._el.create('script');

            script.type = 'text/javascript';
            script.src = vars.src;
            this._el.append(this._u.doc.body, script);

            if (vars.callback) {
                this._el.on(script, this._ev.load, vars.callback);
            }
        }
    }
});
/* Test: "../../spec/_src/src/ServerMeta/test.js" */
(function() {
'use strict';

var xhr,
    isLoaded = false;

Global.ServerMeta = Global.klass({
    init: function(config) {
        config = config || {};

        var callback = config.callback || this._u.nullFunction;

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
        _u: Global.utility,
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
    if (isLoaded)  {
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
Global.SessionStorage = Global.klass({
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
        _s: Global.utility.win.sessionStorage,
        set: function(key, val) {
            this._s.setItem(this._n + key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            var mine = this;

            if (key) {
                return JSON.parse(mine._s.getItem(mine._n + key));
            }

            var ret = {},
                i,
                key;

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
Global.SessionStorage.instance = null;
/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global.Surrogate = Global.klass({
    init: function(config) {
        this.delay = config.delay;
        this.callback = config.callback;
        this.args = null;
        this.waitid = null;
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
Global.Throttle = Global.klass({
    init: function(config) {
        this.waittime = config.waittime;
        this.callback = config.callback;
        this.locked = false;
        this.waitid = null;
        this.waitarg = null;
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
/* Test: "../../spec/_src/src/Tweener/test.js" */
Global.Tweener = Global.klass({
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
            var win = Global.utility.win;

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
Global.Tweener.timerId = null;
Global.Tweener.Items = [];
Global.Tweener.FPS = 30;
Global.Tweener.Duration = 500;
/* Test: "../../spec/_src/src/Twitter/test.js" */
Global.Twitter = Global.klass({
    properties: {
        _u: Global.utility,
        _b: 'https://twitter.com/intent/tweet?',
        getShareURL: function(vars) {
            var redirect_uri = vars.redirect_uri,
                caption = vars.caption || '',
                name = vars.name || '',
                hash = vars.hash || '',
                url = this._b;

            name = name ? ' 「' + name + '」' : '';
            hash = hash ? ' ' + hash : '';

            url += this._u.makeQueryString({
                'url': redirect_uri,
                'text': caption + name + hash
            });

            return url;
        }
    }
});
/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = Global.klass({
    init: function(config) {
        this.element = this._el.create('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    properties: {
        _el: Global.element,
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return this._el.$child(selector, this.element);
        },
        $$: function(selector) {
            return this._el.$$child(selector, this.element);
        }
    }
});
}());
