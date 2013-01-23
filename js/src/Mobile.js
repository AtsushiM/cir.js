/* Test: "../../spec/_src/src/Mobile/test.js" */
Global['Mobile'] = klass({
    'extend': Base,
    'init': function() {
        this['_super']();
    },
    'properties': {
        'getZoom': function() {
            return doc.body.clientWidth / win.innerWidth;
        },
        'isAndroid': function(ua) {
            return checkUserAgent(/Android/i, ua);
        },
        'isIOS': function(ua) {
            return checkUserAgent(/iPhone|iPad|iPod/i, ua);
        },
        'isWindows': function(ua) {
            return checkUserAgent(/IEMobile/i, ua);
        },
        'isFBAPP': function(ua) {
            return checkUserAgent(/FBAN/, ua);
        },
        'isMobile': function() {
            return (
                this['isAndroid']() ||
                this['isIOS']() ||
                this['isWindows']() ||
                this['isFBAPP']()
            );
        },
        'killScroll': function(isNoTop) {
            if (!isNoTop) {
                pageTop();
            }
            on(doc, ev['touchmove'], eventPrevent);
        },
        'revivalScroll': function(isNoTop) {
            if (!isNoTop) {
                pageTop();
            }
            off(doc, ev['touchmove'], eventPrevent);
        },
        'hideAddress': function() {
            this.ondispose(win, ev['load'], hideAddressHandler, FALSE);
            this.ondispose(win, ev_orientationchange, hideAddressHandler, FALSE);

            function doScroll() {
                if (win.pageYOffset === 0) {
                    pageTop();
                }
            }
            function hideAddressHandler() {
                setTimeout(doScroll, 100);
            }
        },
        'getOrientation': function() {
            if (
                Math.abs(win.orientation) !== 90 &&
                win.innerWidth < win.innerHeight
            ) {
                return {
                    'portrait': TRUE,
                    'landscape': FALSE
                };
            }

            return {
                'portrait': FALSE,
                'landscape': TRUE
            };
        },
        'bindOrientation': function(vars) {
            var mine = this,
                ret_remove;

            if (vars['immediately']) {
                change();
            }

            if (vars['one']) {
                add(onechange);

                return function() {
                    remove(onechange);
                };
            }

            add(change);

            ret_remove = function() {
                remove(change);
            };

            return ret_remove;

            function add(handler) {
                mine.ondispose(win, ev['load'], handler);
                mine.ondispose(win, ev_orientationchange, handler);
                mine.ondispose(win, ev['resize'], handler);
            }
            function remove(handler) {
                off(win, ev['load'], handler);
                off(win, ev_orientationchange, handler);
                off(win, ev['resize'], handler);
            }
            function onechange() {
                change();
                remove(onechange);
            }
            function change() {
                if (
                    mine['getOrientation']()['portrait']
                ) {
                    vars['portrait']();
                    return TRUE;
                }
                vars['landscape']();
            }
        }
    }
});
