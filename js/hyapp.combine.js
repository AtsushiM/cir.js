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
    $: function(selector) {
        return doc.querySelector(selector);
    },
    $$: function(selector) {
        var eles = doc.querySelectorAll(selector),
            arys = [],
            i;

        for (i = 0, len = eles.length; i < len; i++) {
            arys[i] = eles[i];
        }

        return arys;
    },
    $id: function(id) {
        return doc.getElementById(id);
    },
    showElement: function(element) {
        element.style.display = 'block';
    },
    hideElement: function(element) {
        element.style.display = 'none';
    },
    override: function(target, vars) {
        var i;

        for (i in vars) {
            target[i] = vars[i];
        }

        return target;
    },
    replaceAll: function(targettext, needle, replacetext) {
        var text = targettext.split(needle);

        text = text.join(replacetext);
        return text;
    }
};

}(window, document));
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
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup'
    };

    if (config.isMobile()) {
        e.click = 'touchstart';
        e.mousedown = 'touchstart';
        e.mousemove = 'touchmove';
        e.mouseup = 'touchend';
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
/* Test: "../../spec/_src/src/FPS/test.js" */
Global.FPS = function(config) {
    'use strict';

    var Mine = Global.FPS,
        override = Global.utility.override;

    config = override({
        single: false,
        criterion: 20
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    var criterion = config.criterion,
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
                    criterion: fps.getCriterion(),
                    surver: fps.getSurver()
                });
            },
            start: function() {
                prevtime = Date.now();
                loop();
            },
            stop: function() {
                clearInterval(loopid);
            }
        };

    function loop() {
        loopid = setInterval(_loop, msecFrame);
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

    var onHashChange = null,
        firingCount = 0,
        fireHashKey = 'fire',
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

                hash = decodeURI(hashvars)
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
                        var splitVar;

                        for (var i = varsHash.length; i--;) {
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
        if (str.match('^{.*}$')) {
            return JSON.parse(str);
        }
        else if (str.match('^[0-9\.]+$')) {
            return str * 1;
        }
        else if (str === 'true') {
            return true;
        }
        else if (str === 'false') {
            return false;
        }
        else if (str.match('^["\'](.*)["\']$')) {
            return str.match('^["\'](.*)["\']$')[1];
        }

        return str;
    }

    return controller;
};
/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = function(config) {
    'use strict';

    var Mine = Global.ImgLoad,
        srcs = config.srcs,
        srccount = srcs.length,
        onload = config.onload,
        loadcount = 0,
        instanse = {
            start: function() {
                var img,
                    i;

                for (i = srccount; i--;) {
                    img = new Image();
                    img.src = srcs[i];
                    img.onload = instanse.imgloaded;
                }
            },
            completeCheck: function() {
                if (loadcount >= srccount) {
                    onload();
                    return true;
                }

                return false;
            }
        };

    function imgloaded() {
        loadcount++;
        instanse.completeCheck();
    }

    return instanse;
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

    var win = Global.utility.win,
        doc = Global.utility.doc,
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
                doc.addEventListener('touchmove', preventDefault);
            },
            revivalScroll: function() {
                scrollTop();
                doc.removeEventListener('touchmove', preventDefault);
            },
            hideAddress: function() {
                win.addEventListener('load', hideAddressHandler, false);
                win.addEventListener('orientationchange', hideAddressHandler, false);

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
                    win.addEventListener('load', onechange);
                    win.addEventListener('orientationchange', onechange);
                    win.addEventListener('resize', onechange);

                    return true;
                }

                win.addEventListener('load', change);
                win.addEventListener('orientationchange', change);
                win.addEventListener('resize', change);

                function onechange() {
                    change();

                    win.removeEventListener('load', onechange);
                    win.removeEventListener('orientationchange', onechange);
                    win.removeEventListener('resize', onechange);
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

    function scrollTop() {
        win.scrollTo(0, 1);
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

    var Mine = Global.PreRender,
        util = Global.utility,
        $ = util.$,
        show = util.showElement,
        hide = util.hideElement,
        elements = config.elements,
        guesslimit = config.guesslimit,
        onrendered = config.onrendered,
        looptime = config.looptime,
        loopblur = looptime + config.loopblur,
        loopid,
        prevtime,
        instanse = {
            start: function() {
                for (var i = elements.length; i--;) {
                    show(elements[i]);
                }
                prevtime = Date.now();
                loopid = setInterval(instanse.check, looptime);
            },
            check: function() {
                var gettime = Date.now(),
                    diff = gettime - prevtime;

                prevtime = gettime;

                if (diff < loopblur) {
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
        };

    return instanse;
};

/* Test: "../../spec/_src/src/Proxy/test.js" */
Global.Proxy = function(config) {
    'use strict';

    var delay = config.delay,
        callback = config.callback,
        args,
        waitid,
        proxy = {
            request: function(arg) {
                args = arg;
                proxy.clear();
                waitid = setTimeout(proxy.flush, delay);
            },
            flush: function() {
                callback(args);
            },
            clear: function() {
                clearInterval(waitid);
            }
        };

    return proxy;
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

