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
    pageTop: function() {
        win.scrollTo(0, 1);
    },
    onEvent: function(element, eventname, handler) {
        element.addEventListener(eventname, handler);
    },
    offEvent: function(element, eventname, handler) {
        element.removeEventListener(eventname, handler);
    },
    makeElement: function(tagname) {
        return doc.createElement(tagname);
    },
    showElement: function(element) {
        setStyleDisplay(element, 'block');
    },
    hideElement: function(element) {
        setStyleDisplay(element, 'none');
    },
    opacityElement: function(element, value) {
        element.style.opacity = value;
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
    },
    nullFunction: function() {
        return null;
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
        init = config.init,
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
/* Test: "../../spec/_src/src/HashController/test.js" */
Global.HashController = Global.klass({
    init: function() {},
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
        utility: Global.utility,
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback,
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
                query = this.utility.makeQueryString(vars.query);
                query = encodeURI(query);
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;

            xhr.onload = function() {
                callback(xhr.responseText);
            };

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
            this.request({
                type: vars.type,
                url: vars.url,
                callback: function(data) {
                    vars.callback(JSON.parse(data));
                }
            });
        }
    }
});
/* Test: "../../spec/_src/src/CanvasImage/test.js" */
(function() {
'use strict';

var util = Global.utility,
    make = util.makeElement;

Global.CanvasImage = function(config) {
    var canv = make('canvas'),
        img = make('img'),
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
(function() {
'use strict';

var instance;

Global.DataStore = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        this.data = {};

        if (config.single) {
            instance = this;
        }
    },
    properties: {
        set: function(key, val) {
            this.data[key] = val;
            return true;
        },
        get: function(key) {
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
        remove: function(key) {
            var data = this.data;

            if (!data[key]) {
                return false;
            }

            delete data[key];

            return true;
        },
        reset: function() {
            this.data = {};
            return true;
        }
    }
});
}());
/* Test: "../../spec/_src/src/Event/test.js" */
(function() {
'use strict';

var instance;

Global.Event = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        // switch event
        if (config.mobileMode) {
            this.switchclick = 'touchstart';
            this.switchdown = 'touchstart';
            this.switchmove = 'touchmove';
            this.switchup = 'touchend';
        }
        else {
            this.switchclick = 'click';
            this.switchdown = 'mousedown';
            this.switchmove = 'mousemove';
            this.switchup = 'mouseup';
        }

        if (config.single) {
            instance = this;
        }
    },
    properties: {
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchend: 'touchend'
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
    init: function(config) {
        config = config || {};

        if (config.single && instanse) {
            return instanse;
        }

        this.android = config.android;
        this.externalObj = config.externalObj;

        if (!this.externalObj) {
            Global.EXTERNAL_ANDROID = {};
            this.externalObj = Global.EXTERNAL_ANDROID;
        }

        if (config.single) {
            instanse = this;
        }
    },
    properties: {
        hashCtrl: new Global.HashController(),
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
    init: function(config) {
        config = config || {};

        if (config.single && instanse) {
            return instanse;
        }

        this.ios = {};

        if (config.single) {
            instanse = this;
        }
    },
    properties: {
        hashCtrl: new Global.HashController(),
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
Global.Facebook = Global.klass({
    init: function() {},
    properties: {
        utility: Global.utility,
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

            url += this.utility.makeQueryString({
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
        var mine = this;

        mine.srcs = config.srcs,
        mine.srccount = mine.srcs.length,
        mine.loadedsrcs = [];
        mine.onload = config.onload || mine.utility.nullFunction,
        mine.onprogress = config.onprogress || mine.utility.nullFunction,
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
    properties: {
        utility: Global.utility,
        start: function() {
            var img,
                i, len;

            for (i = 0, len = this.srccount; i < len; i++) {
                img = this.utility.makeElement('img');
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
/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        utility: Global.utility,
        onload: function(func) {
            this.utility.win.addEventListener('load', func);
        }
    }
});
/* Test: "../../spec/_src/src/LocalStorage/test.js" */
(function() {
'use strict';

var instance;

Global.LocalStorage = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        if (config.single) {
            instance = this;
        }
    },
    properties: {
        utility: Global.utility,
        storage: Global.utility.win.localStorage,
        set: function(key, val) {
            this.storage.setItem(key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            if (key) {
                return JSON.parse(this.storage.getItem(key));
            }

            var ret = {},
                i;

            for (i in this.storage) {
                ret[i] = JSON.parse(this.storage[i]);
            }

            return ret;
        },
        remove: function(key) {
            if (!this.storage.getItem(key)) {
                return false;
            }

            this.storage.removeItem(key);

            return true;
        },
        reset: function() {
            this.storage.clear();

            return true;
        }
    }
});
}());
/* Test: "../../spec/_src/src/Mobile/test.js" */
(function() {
'use strict';

var userAgent = navigator.userAgent;

Global.Mobile = Global.klass({
    init: function() {},
    properties: {
        utility: Global.utility,
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
                this.utility.pageTop();
            }
            this.utility.onEvent(this.utility.doc, 'touchmove', preventDefault);
        },
        revivalScroll: function(isNoTop) {
            if (!isNoTop) {
                this.utility.pageTop();
            }
            this.utility.offEvent(this.utility.doc, 'touchmove', preventDefault);
        },
        hideAddress: function() {
            this.utility.onEvent(this.utility.win, 'load', hideAddressHandler, false);
            this.utility.onEvent(this.utility.win, 'orientationchange', hideAddressHandler, false);
        },
        orientationCheck: function() {
            if (
                Math.abs(this.utility.win.orientation) !== 90 &&
                this.utility.win.innerWidth < this.utility.win.innerHeight
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
                set(mine.utility.onEvent, func);
            }
            function remove(func) {
                set(mine.utility.offEvent, func);
            }
            function set(setfunc, handler) {
                setfunc(mine.utility.win, 'load', handler);
                setfunc(mine.utility.win, 'orientationchange', handler);
                setfunc(mine.utility.win, 'resize', handler);
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
        this.utility.pageTop();
    }
}
function hideAddressHandler() {
    setTimeout(doScroll, 100);
}
}());
/* Test: "../../spec/_src/src/NumberImage/test.js" */
Global.NumberImage = Global.klass({
    init: function(config) {
        config = config || {type: ''};

        this.type = config.type;
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
                return '<span class="num_' + x + '">&nbsp;</span>';
            }

            return tags;
        }
    }
});
/* Test: "../../spec/_src/src/Observer/test.js" */
(function() {
'use strict';

var instance;

Global.Observer = Global.klass({
    init: function(config) {
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
Global.PreRender = Global.klass({
    init: function(config) {
        config = config || {};

        if (!config.loopblur) {
            config.loopblur = 20;
        }

        this.elements = config.elements || [];
        this.guesslimit = config.guesslimit || 30;
        this.onrendered = config.onrendered || this.utility.nullFunction;
        this.looptime = config.looptime || 100;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = this.prevtime = null;
    },
    properties: {
        utility: Global.utility,
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                this.utility.showElement(this.elements[i]);
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
                            mine.utility.hideElement(mine.elements[i]);
                        }

                        mine.onrendered();
                    }
                }
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

        var callback = config.callback || function() {};

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
    },
    properties: {
        exec: function(vars) {
            if (this.locked) {
                return false;
            }

            this.callback(vars);
            this.lock();
            this.waitid = setTimeout(this.unlock, this.waittime, this);
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
Global.Twitter = Global.klass({
    init: function() {},
    properties: {
        utility: Global.utility,
        shareURLBase: 'https://twitter.com/intent/tweet?',
        getShareURL: function(vars) {
            var redirect_uri = vars.redirect_uri,
                caption = vars.caption || '',
                name = vars.name || '',
                hash = vars.hash || '',
                url = this.shareURLBase;

            name = name ? ' 「' + name + '」' : '';
            hash = hash ? ' ' + hash : '';

            url += this.utility.makeQueryString({
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
        this.element = this.utility.makeElement('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    properties: {
        utility: Global.utility,
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return this.utility.$child(selector, this.element);
        },
        $$: function(selector) {
            return this.utility.$$child(selector, this.element);
        }
    }
});
