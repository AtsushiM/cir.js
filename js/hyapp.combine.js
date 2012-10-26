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
/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = function() {
    'use strict';

    var xhr = new XMLHttpRequest(),
        instanse = {
            request: function(vars) {
                var url = vars.url,
                    callback = vars.callback;

                if (!vars.cash) {
                    if (url.match(/\?/)) {
                        url += '&';
                    }
                    else {
                        url += '?';
                    }

                    url += 'ajaxcash' + Date.now() + '=0';
                }

                xhr = new XMLHttpRequest();

                xhr.onload = function() {
                    callback(xhr.responseText);
                };

                xhr.open('GET', url);
                xhr.send(null);
            },
            abort: function() {
                xhr.abort();
            }
        };

    return instanse;
};
/* Test: "../../spec/_src/src/CanvasImage/test.js" */
Global.CanvasImage = function(config) {
    'use strict';

    var util = Global.utility,
        create = util.createElement,
        src = config.src,
        width = config.width,
        height = config.height,
        onload = config.onload,
        img = create('img'),
        canv = create('canvas');

    img.onload = function() {
        canv.width = width;
        canv.height = height;
        canv.getContext('2d').drawImage(img, 0, 0);

        onload(canv, img);
    };
    img.src = src;

    return canv;
};

/* Test: "../../spec/_src/CanvasRender/test.js" */
Global.CanvasRender = function(config) {
    'use strict';

    var canvas = config.canvas,
        ctx = canvas.getContext('2d'),
        canvasWidth = canvas.width,
        canvasHeight = canvas.height,
        i, len, item,
        instanse = {
            setSize: function(vars) {
                if (vars.width) {
                    canvasWidth = vars.width;
                    canvas.width = canvasWidth;
                }
                if (vars.height) {
                    canvasHeight = vars.height;
                    canvas.height = canvasHeight;
                }
            },
            draw: function(layer) {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                for (i = 0, len = layer.length; i < len; i++) {
                    item = layer[i];
                    ctx.drawImage(item.image, item.x, item.y);
                }
            }
        };

    instanse.setSize(config);

    return instanse;
};
/* Test: "../../spec/_src/src/DataStore/test.js" */
Global.DataStore = function(config) {
    'use strict';

    var Mine = Global.DataStore,
        override = Global.utility.override,
        data,
        store;

    config = override({
        single: false
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    data = {},
    store = {
        setData: function(key, val) {
            data[key] = val;
            return true;
        },
        getData: function(key) {
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
        resetData: function() {
            data = {};
            return true;
        }
    };

    if (config.single) {
        Mine.instance = store;
    }

    return store;
};
/* Test: "../../spec/_src/src/Event/test.js" */
Global.Event = function(config) {
    'use strict';

    var Mine = Global.Event,
        override = Global.utility.override,
        e;

    config = override({
        single: false,
        isMobile: function() {
            return false;
        }
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    e = {
        // デフォルトイベント
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchend: 'touchend',

        // 切替イベント
        switchclick: 'touchstart',
        switchdown: 'touchstart',
        switchmove: 'touchmove',
        switchup: 'touchend'
    };

    if (!config.isMobile()) {
        e.switchclick = 'click';
        e.switchdown = 'mousedown';
        e.switchmove = 'mousemove';
        e.switchup = 'mouseup';
    }

    if (config.single) {
        Mine.instance = e;
    }

    return e;
};
/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global.ExternalInterface = function(config) {
    'use strict';

    var external,
        isAndroid = false,
        android = null,
        ios = null,
        hashCtrl = new Global.HashController();

    if (!config) {
        config = {};
    }

    // ネイティブから呼び出しメソッドが設定されているか、
    // 強制的にAndoroidモードにするフラグでチェック
    if (config.android) {
        isAndroid = true;
        android = config.android;

        // Androidのネイティブから参照するオブジェクト
        Global.EXTERNAL = {};
    }
    else {
        ios = {};
    }

    external = (function() {
            var returned;
            if (isAndroid) {
                // Android
                returned = {
                    'call': function(config) {
                        android[config.mode](hashCtrl.makeHash(config));
                    },
                    'addCallback': function(name, func) {
                        Global.EXTERNAL[name] = function(vars) {
                            var objs = hashCtrl.parseHash(vars);
                            return func(objs.vars);
                        };
                    },
                    'removeCallback': function(name) {
                        delete Global.EXTERNAL[name];
                    }
                };
            }
            else {
                // iOS
                returned = {
                    call: function(config) {
                        hashCtrl.setHash(config);
                    },
                    addCallback: function(name, func) {
                        ios[name] = function(e) {
                            var hash = hashCtrl.getHash();

                            if (hash.mode === name) {
                                func(hash.vars);
                                return true;
                            }
                            return false;
                        };
                        window.addEventListener('hashchange', ios[name]);
                    },
                    removeCallback: function(name) {
                        window.removeEventListener('hashchange', ios[name]);
                        delete ios[name];
                    }
                };
            }

            returned.isAndroid = function() {
                return isAndroid;
            };

            return returned;
        }());

    return external;
};
/* Test: "../../spec/_src/src/Facebook/test.js" */
Global.Facebook = function() {
    'use strict';

    var util = Global.utility,
        makeQuery = util.makeQueryString,
        instanse = {
            getShareURL: function(vars) {
                var shareURL = 'https://www.facebook.com/dialog/feed?',
                    app_id = vars.app_id,
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
        };

    return instanse;
};
/* Test: "../../spec/_src/src/FPS/test.js" */
Global.FPS = function(config) {
    'use strict';

    var Mine = Global.FPS,
        util = Global.utility,
        override = util.override;

    config = override({
        single: false,
        criterion: 20
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    var win = util.win,
        criterion = config.criterion,
        surver = criterion,
        enterframe = config.enterframe,
        msecFrame = getFrame(criterion),
        prevtime,
        nowtime,
        loopid,
        fps = {
            getCriterion: function() {
                return criterion;
            },
            getSurver: function() {
                return surver;
            },
            getFrameTime: function() {
                return msecFrame;
            },
            enter: function() {
                enterframe({
                    criterion: criterion,
                    surver: surver
                });
            },
            start: function() {
                prevtime = Date.now();
                loop();
            },
            stop: function() {
                clearInterval(loopid);
                loopid = 0;
            }
        },
        animationFrameCount = 0,
        animationFrameWait = Math.round(60 / criterion) + 1,
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

    function animationFrame() {
        animationFrameCount++;

        if (animationFrameCount === animationFrameWait) {
            animationFrameCount = 0;
            _loop();
        }

        if (loopid === 1) {
            requestAnimationFrame(animationFrame);
        }
    }

    function loop() {
        if (requestAnimationFrame) {
            loopid = 1;
            animationFrame();
        }
        else {
            loopid = setInterval(_loop, msecFrame);
        }
    }
    function _loop() {
        nowtime = Date.now();
        surver = getFrame(nowtime - prevtime);
        prevtime = nowtime;

        fps.enter();
    }

    function getFrame(time) {
        return Math.round(1000 / time);
    }

    if (config.single) {
        Mine.instance = fps;
    }

    return fps;
};
/* Test: "../../spec/_src/src/HashController/test.js" */
Global.HashController = function() {
    'use strict';

    var util = Global.utility,
        cast = util.typeCast,
        controller = {
            makeHash: function(config) {
                var hash = '#' + config.mode,
                    vars = config.vars,
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
            setHash: function(config) {
                location.hash = controller.makeHash(config);
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
                return controller.parseHash(location.hash);
            }
        };

    function typeCast(str) {
        var caststr = cast(str);

        if (str === caststr && str.match('^["\'](.*)["\']$')) {
            return str.match('^["\'](.*)["\']$')[1];
        }

        return caststr;
    }

    return controller;
};
/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = function(config) {
    'use strict';

    var util = Global.utility,
        create = util.createElement,
        srcs = config.srcs,
        srccount = srcs.length,
        onload = config.onload,
        loadcount = 0,
        imgload = {
            start: function() {
                var img,
                    i;

                for (i = srccount; i--;) {
                    img = create('img');
                    img.src = srcs[i];
                    img.onload = completeCheck;
                }
            }
        };

    function completeCheck() {
        loadcount++;
        if (loadcount >= srccount) {
            onload();
        }
    }

    return imgload;
};
/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = function(config) {
    'use strict';

    var win = Global.utility.win,
        instanse = {
            onload: function(func) {
                win.addEventListener('load', func);
            }
        };

    if (config) {
        if (config.onload) {
            instanse.onload(config.onload);
        }
    }

    return instanse;
};
/* Test: "../../spec/_src/src/Mobile/test.js" */
Global.Mobile = function() {
    'use strict';

    var util = Global.utility,
        win = util.win,
        doc = util.doc,
        onEvent = util.onEvent,
        offEvent = util.offEvent,
        scrollTop = util.scrollTop,
        userAgent = navigator.userAgent,
        mobile = {
            isAndroid: function(ua) {
                return checkUA(ua, /Android/i);
            },
            isIOS: function(ua) {
                return checkUA(ua, /iPhone|iPad|iPod/i);
            },
            isWindows: function(ua) {
                return checkUA(ua, /IEMobile/i);
            },
            isMobile: function() {
                return (
                    mobile.isAndroid() ||
                    mobile.isIOS() ||
                    mobile.isWindows()
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

                function doScroll() {
                    if (win.pageYOffset === 0) {
                        scrollTop();
                    }
                }
                function hideAddressHandler() {
                    setTimeout(doScroll, 100);
                }
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
                        mobile.orientationCheck().portrait
                    ) {
                        vars.portrait();
                        return true;
                    }
                    vars.landscape();
                }
            }
        };

    function preventDefault(e) {
        e.preventDefault();
        return false;
    }

    function checkUA(ua, pattern) {
        ua = ua ? ua : userAgent;

        return ua.match(pattern) ? true : false;
    }

    return mobile;
};
/* Test: "../../spec/_src/src/NumberImage/test.js" */
Global.NumberImage = function(config) {
    'use strict';

    var type = config.type,
        extension = config.extension,
        numimg = {
            make: function(x) {
                var aryX = ('' + x).split(''),
                    tags = '',
                    i;

                for (i = aryX.length; i--;) {
                    tags = make1Digit(aryX[i]) + tags;
                }

                return tags;
            }
        };

    if (!type) {
        type = '';
    }

    function make1Digit(x) {
        return '<span class="num_' + type + x + '">&nbsp;</span>';
    }

    return numimg;
};
/* Test: "../../spec/_src/src/Observer/test.js" */
Global.Observer = function(config) {
    'use strict';

    var Mine = Global.Observer,
        override = Global.utility.override;

    config = override({
        single: false
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    var observed = {},
        instance = {
            getObserved: function() {
                return observed;
            },
            on: function(key, func) {
                if (!observed[key]) {
                    observed[key] = [];
                }

                observed[key].push(func);
            },
            forOn: function(obj) {
                var i;
                for (i in obj) {
                    instance.on(i, obj[i]);
                }
            },
            one: function(key, func) {
                wrapfunc = function(vars) {
                    func(vars);
                    instance.off(key, wrapfunc);
                };

                instance.on(key, wrapfunc);
            },
            off: function(key, func) {
                if (!func) {
                    deleteKey(key);

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
                            deleteKey(key);
                        }

                        return true;
                    }
                }

                return false;
            },
            forOff: function(obj) {
                var i;
                for (i in obj) {
                    instance.off(i, obj[i]);
                }
            },
            fire: function(key, vars) {
                var target = observed[key],
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
        };

    function deleteKey(key) {
        delete observed[key];
    }

    if (config.single) {
        Mine.instance = instance;
    }

    return instance;
};
/* Test: "../../spec/_src/src/PreRender/test.js" */
Global.PreRender = function(config) {
    'use strict';

    var util = Global.utility,
        override = util.override;

    config = override({
        elements: [],
        guesslimit: 30,
        looptime: 100,
        loopblur: 20,
        onrendered: function() {}
    }, config);

    var show = util.showElement,
        hide = util.hideElement,
        elements = config.elements,
        guesslimit = config.guesslimit,
        onrendered = config.onrendered,
        looptime = config.looptime,
        loopblur = looptime + config.loopblur,
        loopid,
        gettime,
        difftime,
        prevtime,
        instanse = {
            start: function() {
                var i;

                for (i = elements.length; i--;) {
                    show(elements[i]);
                }
                prevtime = Date.now();
                loopid = setInterval(check, looptime);
            }
        };

    function check() {
        gettime = Date.now(),
        difftime = gettime - prevtime;

        prevtime = gettime;

        if (difftime < loopblur) {
            guesslimit--;

            if (guesslimit < 1) {
                clearInterval(loopid);

                for (var i = elements.length; i--;) {
                    hide(elements[i]);
                }

                onrendered();
            }
        }
    }

    return instanse;
};
/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global.Surrogate = function(config) {
    'use strict';

    var delay = config.delay,
        callback = config.callback,
        args,
        waitid,
        surrogate = {
            request: function(arg) {
                args = arg;
                surrogate.clear();
                waitid = setTimeout(surrogate.flush, delay);
            },
            flush: function() {
                callback(args);
            },
            clear: function() {
                clearInterval(waitid);
            }
        };

    return surrogate;
};
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
Global.Twitter = function(config) {
    'use strict';

    var util = Global.utility,
        makeQuery = util.makeQueryString,
        instanse = {
            getShareURL: function(vars) {
                var shareURL = 'https://twitter.com/intent/tweet?',
                    redirect_uri = vars.redirect_uri,
                    caption = vars.caption || '',
                    name = vars.name || '',
                    hash = vars.hash || '',
                    url = shareURL;

                if (name) {
                    name = ' 「' + name + '」';
                }
                if (hash) {
                    hash = ' ' + hash;
                }

                url += makeQuery({
                    'url': redirect_uri,
                    'text': caption + name + hash
                });

                return url;
            }
        };

    return instanse;
};
/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = function(config) {
    'use strict';

    var util = Global.utility,
        $child = util.$child,
        $$child = util.$$child,
        element = util.createElement('div'),
        data,
        instanse = {
            getData: function() {
                return data;
            },
            setData: function(d) {
                data =
                element.innerHTML = d;
            },
            $: function(selector) {
                return $child(selector, element);
            },
            $$: function(selector) {
                return $$child(selector, element);
            }
        };

    if (config && config.data) {
        instanse.setData(config.data);
    }

    return instanse;
};
