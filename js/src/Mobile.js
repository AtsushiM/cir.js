/* Test: "../../spec/_src/src/Mobile/test.js" */
Global.Mobile = function() {
    'use strict';

    var util = Global.utility,
        win = util.win,
        doc = util.doc,
        onEvent = util.onEvent,
        offEvent = util.offEvent,
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
            scrollTop: scrollTop,
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

    function scrollTop() {
        win.scrollTo(0, 1);
    }

    function checkUA(ua, pattern) {
        ua = ua ? ua : userAgent;

        return ua.match(pattern) ? true : false;
    }

    return mobile;
};
