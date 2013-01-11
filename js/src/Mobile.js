/* Test: "../../spec/_src/src/Mobile/test.js" */
(function() {
'use strict';

var userAgent = navigator.userAgent;

Global.Mobile = Global.klass({
    properties: {
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
                pageTop();
            }
            on(doc, Global.event.touchmove, preventDefault);
        },
        revivalScroll: function(isNoTop) {
            if (!isNoTop) {
                pageTop();
            }
            off(doc, Global.event.touchmove, preventDefault);
        },
        hideAddress: function() {
            on(win, Global.event.load, hideAddressHandler, false);
            on(win, Global.event.orientationchange, hideAddressHandler, false);
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
                setfunc(win, Global.event.load, handler);
                setfunc(win, Global.event.orientationchange, handler);
                setfunc(win, Global.event.resize, handler);
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
        pageTop();
    }
}
function hideAddressHandler() {
    setTimeout(doScroll, 100);
}
}());
