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
            if (this.killscrollid) {
                return FALSE;
            }

            if (!isNoTop) {
                pageTop();
            }
            this.killscrollid = this['contract'](doc, ev['touchmove'], eventPrevent);
        },
        'revivalScroll': function(isNoTop) {
            if (!this.killscrollid) {
                return FALSE;
            }

            if (!isNoTop) {
                pageTop();
            }
            this['uncontract'](this.killscrollid);
            delete this.killscrollid;
        },
        'hideAddress': function() {
            this['contract'](win, ev['load'], hideAddressHandler, FALSE);
            this['contract'](win, ev_orientationchange, hideAddressHandler, FALSE);

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
                disposeid = [],
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

            function add(handler) {
                disposeid.push(mine['contract'](win, ev['load'], handler));
                disposeid.push(mine['contract'](win, ev_orientationchange, handler));
                disposeid.push(mine['contract'](win, ev['resize'], handler));
            }
            function remove(handler) {
                var i = disposeid.length;

                for (; i--;) {
                    mine['uncontract'](disposeid[i]);
                }

                disposeid = [];
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

            return ret_remove;
        }
    }
});
Global['mobile'] = new Global['Mobile']();
