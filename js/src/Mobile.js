C['Mobile'] = classExtendBase({
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
    'isMobile': function(/* varless */ that) {
        that = this;

        return (
            that['isAndroid']() ||
            that['isIOS']() ||
            that['isWindows']() ||
            that['isFBAPP']()
        );
    },
    'hideAddress': function() {
        this._contract(win, ev['LOAD'], hideAddressHandler, FALSE);
        this._contract(win, ev_orientationchange, hideAddressHandler, FALSE);

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
