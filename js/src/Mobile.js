/* Test: "../../spec/_src/src/Mobile/test.js" */
Global.Mobile = klass({
    extend: Base,
    init: function() {
        this._added = [];
    },
    properties: {
        getZoom: function() {
            return doc.body.clientWidth / win.innerWidth;
        },
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
            console.log(this);
            on(win, ev.load, hideAddressHandler, false);
            on(win, ev_orientationchange, hideAddressHandler, false);
            this._added.push([win, ev.load, hideAddressHandler]);
            this._added.push([win, ev_orientationchange, hideAddressHandler]);

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
            var mine = this,
                ret_remove;

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

            ret_remove = function() {
                remove(change);
            };
            mine._added.push(ret_remove);

            return ret_remove;

            function add(func) {
                set(on, func);
            }
            function remove(func) {
                set(off, func);
            }
            function set(setfunc, handler) {
                setfunc(win, ev.load, handler);
                setfunc(win, ev_orientationchange, handler);
                setfunc(win, ev.resize, handler);
                mine._added.push([win, ev.load, handler]);
                mine._added.push([win, ev_orientationchange, handler]);
                mine._added.push([win, ev.resize, handler]);
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
