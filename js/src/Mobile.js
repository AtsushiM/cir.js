/* Test: "../../spec/_src/src/Mobile/test.js" */
mb = C['Mobile'] = klassExtendBase(UNDEFINED, {
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
        if (!this._killscrollid) {
            if (!isNoTop) {
                pageTop();
            }
            this._killscrollid = this['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revivalScroll': function(isNoTop) {
        if (this._killscrollid) {
            if (!isNoTop) {
                pageTop();
            }
            this['uncontract'](this._killscrollid);
            delete this._killscrollid;
        }
    },
    'hideAddress': function() {
        this['contract'](win, ev['LOAD'], hideAddressHandler, FALSE);
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
    'attachOrientation': function(vars) {
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
            disposeid.push(
                mine['contract'](win, ev['LOAD'], handler),
                mine['contract'](win, ev_orientationchange, handler),
                mine['contract'](win, ev['RESIZE'], handler)
            );
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
                return vars['portrait']();
            }
            vars['landscape']();
        }

        return ret_remove;
    }
});
C['mobile'] = new mb();
