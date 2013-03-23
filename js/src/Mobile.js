/* Test: "../../spec/_src/src/Mobile/test.js" */
mb = C['Mobile'] = classExtendBase({
    'getZoom': function() {
        return body.clientWidth / win.innerWidth;
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
    'isMobile': function(/* varless */ mine) {
        mine = this;

        return (
            mine['isAndroid']() ||
            mine['isIOS']() ||
            mine['isWindows']() ||
            mine['isFBAPP']()
        );
    },
    'hideAddress': function() {
        this['contract'](win, ev['LOAD'], hideAddressHandler, FALSE);
        this['contract'](win, ev_orientationchange, hideAddressHandler, FALSE);

        function doScroll() {
            if (win.pageYOffset == 0) {
                pageTop();
            }
        }
        function hideAddressHandler() {
            setTimeout(doScroll, 100);
        }
    }
});
C['mobile'] = new mb();
