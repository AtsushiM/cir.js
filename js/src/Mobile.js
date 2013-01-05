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
        orientationCheck: function() {
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
        this._u.pageTop();
    }
}
function hideAddressHandler() {
    setTimeout(doScroll, 100);
}
}());
