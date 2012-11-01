var Global = {};
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
    body: doc.body,
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
    scrollTop: function() {
        win.scrollTo(0, 1);
    },
    onEvent: function(element, eventname, handler) {
        element.addEventListener(eventname, handler);
    },
    offEvent: function(element, eventname, handler) {
        element.removeEventListener(eventname, handler);
    },
    createElement: function(tagname) {
        return doc.createElement(tagname);
    },
    showElement: function(element) {
        setStyleDisplay(element, 'block');
    },
    hideElement: function(element) {
        setStyleDisplay(element, 'none');
    },
    override: function(target, vars) {
        var i;

        for (i in vars) {
            target[i] = vars[i];
        }

        return target;
    },
    replaceAll: function(targettext, needle, replacetext) {
        return targettext.split(needle).join(replacetext);
    },
    windowOpen: function(url, windowname) {
        return win.open(url, windowname);
    },
    typeCast: typeCast,
    makeQueryString: function(vars) {
        var sign = '',
            query = '';

        for (var i in vars) {
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
    }
};

function setStyleDisplay(element, value) {
    element.style.display = value;
}
function $(selector, element) {
    return element.querySelector(selector);
}
function $$(selector, element) {
    var eles = element.querySelectorAll(selector),
        arys = [],
        i,
        len;

    for (i = 0, len = eles.length; i < len; i++) {
        arys[i] = eles[i];
    }

    return arys;
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
/* Test: "../../spec/_src/src/klass/test.js" */
Global.klass = function(config) {
'use strict';

var util = Global.utility,
    override = util.override,
    constructor = config.constructor,
    method = config.method,
    extend = config.extend;

if (extend) {
    Global.extend(constructor, extend);
}

override(constructor.prototype, method);

return constructor;
};
/* Test: "../../spec/_src/src/extend/test.js" */
(function () {
'use strict';

Global.extend = function(child, _super) {
    function ctor() { this.constructor = child; }
    ctor.prototype = _super.prototype;
    child.prototype = new ctor();
    child.prototype._superclass = _super;
    child.prototype._super = function() {
        if (this._prevctor) {
            this._prevctor = this._prevctor.prototype._superclass;
        }
        else {
            this._prevctor = _super;
        }
        this._prevctor.apply(this, arguments);
    };
}
}());
/* Test: "../../spec/_src/src/Ajax/test.js" */
(function() {
'use strict';

Global.Ajax = Global.klass({
    constructor: function() {
        this.xhr = new XMLHttpRequest();
    },
    method: {
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback,
                xhr;

            if (!vars.cash) {
                if (url.match(/\?/)) {
                    url += '&';
                }
                else {
                    url += '?';
                }

                url += 'ajaxcash' + Date.now() + '=0';
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;


            xhr.onload = function() {
                callback(xhr.responseText);
            };

            xhr.open('GET', url);
            xhr.send(null);
        },
        abort: function() {
            this.xhr.abort();
        }
    }
});
}());
/* Test: "../../spec/_src/src/CanvasImage/test.js" */
(function() {
'use strict';

var util = Global.utility,
    create = util.createElement;

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
/* Test: "../../spec/_src/CanvasRender/test.js" */
(function() {
'use strict';

Global.CanvasRender = Global.klass({
    constructor: function(config) {
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;

        this.setSize(config);
    },
    method: {
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
}());
/* Test: "../../spec/_src/src/DataStore/test.js" */
(function() {
'use strict';

var instance;

Global.DataStore = Global.klass({
    constructor: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        this.data = {};

        if (config.single) {
            instance = this;
        }
    },
    method: {
        setData: function(key, val) {
            this.data[key] = val;
            return true;
        },
        getData: function(key) {
            var data = this.data;

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
        removeData: function(key) {
            var data = this.data;

            if (!data[key]) {
                return false;
            }

            delete data[key];

            return true;
        },
        resetData: function() {
            this.data = {};
            return true;
        }
    }
});
}());
/* Test: "../../spec/_src/src/Event/test.js" */
(function() {
'use strict';

var instance,
    override = Global.utility.override;

Global.Event = Global.klass({
    constructor: function(config) {
        config = override({
            single: false,
            isMobile: function() {
                return false;
            }
        }, config);

        // singleton
        if (config.single && instance) {
            return instance;
        }

        // デフォルトイベント
        this.click = 'click';
        this.mousedown = 'mousedown';
        this.mousemove = 'mousemove';
        this.mouseup = 'mouseup';
        this.touchstart = 'touchstart';
        this.touchmove = 'touchmove';
        this.touchend = 'touchend';

        // 切替イベント
        this.switchclick = 'touchstart';
        this.switchdown = 'touchstart';
        this.switchmove = 'touchmove';
        this.switchup = 'touchend';

        if (!config.isMobile()) {
            this.switchclick = 'click';
            this.switchdown = 'mousedown';
            this.switchmove = 'mousemove';
            this.switchup = 'mouseup';
        }

        if (config.single) {
            instance = this;
        }
    }
});
}());
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
(function() {
'use strict';

var instanse;

Global.ExternalInterface = function(config) {
    config = config || {};

    var external;

    if (config.single && instanse) {
        return instanse;
    }

    if (config.android) {
        external = new Global.ExternalAndroidInterface(config);
    }
    else {
        external = new Global.ExternalIOSInterface(config);
    }

    if (config.single) {
        instanse = external;
    }

    return external;
};
}());
/* Test: "../../spec/_src/src/ExternalAndroidInterface/test.js" */
(function() {
'use strict';

var instanse;

Global.ExternalAndroidInterface = Global.klass({
    constructor: function(config) {
        config = config || {};

        if (config.single && instanse) {
            return instanse;
        }

        this.android = config.android;
        this.externalObj = config.externalObj;
        this.hashCtrl = new Global.HashController();

        if (!this.externalObj) {
            Global.EXTERNAL_ANDROID = {};
            this.externalObj = Global.EXTERNAL_ANDROID;
        }

        if (config.single) {
            instanse = this;
        }
    },
    method: {
        'call': function(conf) {
            this.android[conf.mode](this.hashCtrl.makeHash(conf));
        },
        'addCallback': function(name, func) {
            var mine = this;
            mine.externalObj[name] = function(vars) {
                var objs = mine.hashCtrl.parseHash(vars);
                return func(objs.vars);
            };
        },
        'removeCallback': function(name) {
            delete this.externalObj[name];
        }
    }
});
}());
/* Test: "../../spec/_src/src/ExternalIOSInterface/test.js" */
(function() {
'use strict';

var util = Global.utility,
    win = util.win,
    instanse;

Global.ExternalIOSInterface = Global.klass({
    constructor: function(config) {
        config = config || {};

        if (config.single && instanse) {
            return instanse;
        }

        this.ios = {};
        this.hashCtrl = new Global.HashController();

        if (config.single) {
            instanse = this;
        }
    },
    method: {
        call: function(conf) {
            this.hashCtrl.setHash(conf);
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.ios[name] = function(e) {
                var hash = mine.hashCtrl.getHash();

                if (hash.mode === name) {
                    func(hash.vars);
                    return true;
                }
                return false;
            };
            win.addEventListener('hashchange', this.ios[name]);
        },
        removeCallback: function(name) {
            win.removeEventListener('hashchange', this.ios[name]);
            delete this.ios[name];
        }
    }
});
}());
/* Test: "../../spec/_src/src/Facebook/test.js" */
(function() {
'use strict';

var util = Global.utility,
    makeQuery = util.makeQueryString,
    shareURL = 'https://www.facebook.com/dialog/feed?';

Global.Facebook = Global.klass({
    constructor: function() {},
    method: {
        getShareURL: function(vars) {
            var app_id = vars.app_id,
                redirect_uri = vars.redirect_uri,
                link = vars.link,
                picture = vars.picture,
                name = vars.name,
                caption = vars.caption,
                description = vars.description,
                url = shareURL +
                    'app_id=' + app_id + '&' +
                    'redirect_uri=' + redirect_uri;

            url += makeQuery({
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
}());
/* Test: "../../spec/_src/src/FPS/test.js" */
(function() {
'use strict';

var instance,
    util = Global.utility,
    override = util.override,
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
    constructor: function(config) {
        config = override({
            single: false,
            criterion: 20
        }, config);

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

        if (config.single) {
            instance = this;
        }
    },
    method: {
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
/* Test: "../../spec/_src/src/HashController/test.js" */
(function() {
'use strict';

var util = Global.utility,
    cast = util.typeCast;

Global.HashController = Global.klass({
    constructor: function() {},
    method: {
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
                vars = null;

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
                (function() {
                    var splitVar,
                        i;

                    for (i = varsHash.length; i--;) {
                        if (varsHash[i]) {
                            splitVar = varsHash[i].split('=');
                            vars[splitVar[0]] = typeCast(splitVar[1]);
                        }
                    }
                }());

                return {
                    mode: mode,
                    vars: vars
                };
            }

            return {
                mode: mode
            };
        },
        getHash: function() {
            return this.parseHash(location.hash);
        }
    }
});

function typeCast(str) {
    var caststr = cast(str);

    if (str === caststr && str.match('^["\'](.*)["\']$')) {
        return str.match('^["\'](.*)["\']$')[1];
    }

    return caststr;
}
}());
/* Test: "../../spec/_src/src/ImgLoad/test.js" */
(function() {
'use strict';

var util = Global.utility,
    create = util.createElement,
    nullfunc = function() {};

Global.ImgLoad = Global.klass({
    constructor: function(config) {
        var mine = this;

        mine.srcs = config.srcs,
        mine.srccount = this.srcs.length,
        mine.loadedsrcs = [];
        mine.onload = config.onload || nullfunc,
        mine.onprogress = config.onprogress || nullfunc,
        mine.loadcount = 0;
        mine.progress = 0;
        mine.check = function() {
            mine.loadcount++;

            mine.progress = mine.loadcount / mine.srccount;
            mine.onprogress(mine.progress);

            if (mine.loadcount >= mine.srccount) {
                mine.onload(mine.loadedsrcs);
            }
        };
    },
    method: {
        start: function() {
            var img,
                i, len;

            for (i = 0, len = this.srccount; i < len; i++) {
                img = create('img');
                img.src = this.srcs[i];
                img.onload = this.check;

                this.loadedsrcs.push(img);
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
}());
/* Test: "../../spec/_src/src/Loading/test.js" */
(function() {
'use strict';

var win = Global.utility.win;

Global.Loading = Global.klass({
    constructor: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    method: {
        onload: function(func) {
            win.addEventListener('load', func);
        }
    }
});
}());
/* Test: "../../spec/_src/src/LocalStorage/test.js" */
(function() {
'use strict';

var instance,
    win = Global.utility.win,
    storage = win.localStorage;

Global.LocalStorage = Global.klass({
    constructor: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        if (config.single) {
            instance = this;
        }
    },
    method: {
        setData: function(key, val) {
            storage.setItem(key, JSON.stringify(val));
            return true;
        },
        getData: function(key) {
            if (key) {
                return JSON.parse(storage.getItem(key));
            }

            var ret = {},
                i;

            for (i in storage) {
                ret[i] = JSON.parse(storage[i]);
            }

            return ret;
        },
        removeData: function(key) {
            if (!storage.getItem(key)) {
                return false;
            }

            storage.removeItem(key);

            return true;
        },
        resetData: function() {
            storage.clear();

            return true;
        }
    }
});
}());
/* Test: "../../spec/_src/src/Mobile/test.js" */
(function() {
'use strict';

var util = Global.utility,
    win = util.win,
    doc = util.doc,
    onEvent = util.onEvent,
    offEvent = util.offEvent,
    scrollTop = util.scrollTop,
    userAgent = navigator.userAgent;

Global.Mobile = Global.klass({
    constructor: function() {},
    method: {
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
        killScroll: function() {
            scrollTop();
            onEvent(doc, 'touchmove', preventDefault);
        },
        revivalScroll: function() {
            scrollTop();
            offEvent(doc, 'touchmove', preventDefault);
        },
        hideAddress: function() {
            onEvent(win, 'load', hideAddressHandler, false);
            onEvent(win, 'orientationchange', hideAddressHandler, false);
        },
        orientationCheck: function() {
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
        orientationChange: function(vars) {
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
                set(onEvent, func);
            }
            function remove(func) {
                set(offEvent, func);
            }
            function set(setfunc, handler) {
                setfunc(win, 'load', handler);
                setfunc(win, 'orientationchange', handler);
                setfunc(win, 'resize', handler);
            }
            function onechange() {
                change();
                remove(onechange);
            }
            function change() {
                if (
                    mine.orientationCheck().portrait
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
        scrollTop();
    }
}
function hideAddressHandler() {
    setTimeout(doScroll, 100);
}
}());
/* Test: "../../spec/_src/src/NumberImage/test.js" */
(function() {
'use strict';

Global.NumberImage = Global.klass({
    constructor: function(config) {
        config = config || {type: ''};

        this.type = config.type;
    },
    method: {
        make: function(x) {
            var aryX = ('' + x).split(''),
                tags = '',
                i;

            for (i = aryX.length; i--;) {
                tags = make1Digit(this.type + aryX[i]) + tags;
            }

            return tags;
        }
    }
});

function make1Digit(x) {
    return '<span class="num_' + x + '">&nbsp;</span>';
}
}());
/* Test: "../../spec/_src/src/Observer/test.js" */
(function() {
'use strict';

var instance;

Global.Observer = Global.klass({
    constructor: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        this.observed = {};

        if (config.single) {
            instance = this;
        }
    },
    method: {
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
        forOn: function(obj) {
            var i;

            for (i in obj) {
                this.on(i, obj[i]);
            }
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
        forOff: function(obj) {
            var i;
            for (i in obj) {
                this.off(i, obj[i]);
            }
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
}());
/* Test: "../../spec/_src/src/PreRender/test.js" */
(function() {
'use strict';

var util = Global.utility,
    override = util.override,
    show = util.showElement,
    hide = util.hideElement;

Global.PreRender = Global.klass({
    constructor: function(config) {
        config = override({
            elements: [],
            guesslimit: 30,
            looptime: 100,
            loopblur: 20,
            onrendered: function() {}
        }, config);

        this.elements = config.elements;
        this.guesslimit = config.guesslimit;
        this.onrendered = config.onrendered;
        this.looptime = config.looptime;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = null;
        this.prevtime = null;
    },
    method: {
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                show(this.elements[i]);
            }
            this.prevtime = Date.now();
            this.loopid = setInterval(check, this.looptime, this);
        }
    }
});

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
}());
/* Test: "../../spec/_src/src/Surrogate/test.js" */
(function() {
'use strict';

Global.Surrogate = Global.klass({
    constructor: function(config) {
        this.delay = config.delay;
        this.callback = config.callback;
        this.args = null;
        this.waitid = null;
    },
    method: {
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
}());
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
        instanse = {
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
            instanse.stop();
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

    return instanse;
};
/* Test: "../../spec/_src/src/Twitter/test.js" */
(function() {
'use strict';

var util = Global.utility,
    makeQuery = util.makeQueryString,
    shareURL = 'https://twitter.com/intent/tweet?';

Global.Twitter = Global.klass({
    constructor: function() {},
    method: {
        getShareURL: function(vars) {
            var redirect_uri = vars.redirect_uri,
                caption = vars.caption || '',
                name = vars.name || '',
                hash = vars.hash || '',
                url = shareURL;

            name = name ? ' 「' + name + '」' : '';
            hash = hash ? ' ' + hash : '';

            url += makeQuery({
                'url': redirect_uri,
                'text': caption + name + hash
            });

            return url;
        }
    }
});
}());
/* Test: "../../spec/_src/src/XML/test.js" */
(function() {
'use strict';

var util = Global.utility,
    $child = util.$child,
    $$child = util.$$child,
    create = util.createElement;

Global.XML = Global.klass({
    constructor: function(config) {
        this.element = create('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    method: {
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
}());
