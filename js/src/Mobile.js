/* Test: "../../spec/_src/src/Mobile/test.js" */
(function() {
'use strict';

var userAgent = navigator.userAgent;

Global.Mobile = Global.klass({
    properties: {
        utility: Global.utility,
        _event: new Global.Event(),
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
            this.utility.onEvent(this.utility.doc, this._event.touchmove, preventDefault);
        },
        revivalScroll: function(isNoTop) {
            if (!isNoTop) {
                this.utility.pageTop();
            }
            this.utility.offEvent(this.utility.doc, this._event.touchmove, preventDefault);
        },
        hideAddress: function() {
            this.utility.onEvent(this.utility.win, this._event.load, hideAddressHandler, false);
            this.utility.onEvent(this.utility.win, this._event.orientationchange, hideAddressHandler, false);
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
                setfunc(mine.utility.win, mine._event.load, handler);
                setfunc(mine.utility.win, mine._event.orientationchange, handler);
                setfunc(mine.utility.win, mine._event.resize, handler);
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
