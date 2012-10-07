/* Test: "../../spec/_src/src/Mobile/test.js" */
Global.Mobile = function() {
    'use strict';

    var win = Global.utility.win,
        doc = Global.utility.doc,
        userAgent = navigator.userAgent,
        mobile = {
            isAndroid: function(ua) {
                ua = checkUA(ua);
                return ua.match(/Android/i) ? true : false;
            },
            isIOS: function(ua) {
                ua = checkUA(ua);
                return ua.match(/iPhone|iPad|iPod/i) ? true : false;
            },
            isWindows: function(ua) {
                ua = checkUA(ua);
                return ua.match(/IEMobile/i) ? true : false;
            },
            isMobile: function() {
                return (
                    mobile.isAndroid() ||
                    mobile.isIOS() ||
                    mobile.isWindows()
                );
            },
            killScroll: function() {
                doc.addEventListener('touchmove', preventDefault);
            },
            hideAddress: function() {
                win.addEventListener('load', hideAddressHandler, false);
                win.addEventListener('orientationchange', hideAddressHandler, false);

                function doScroll() {
                    if (win.pageYOffset === 0) {
                        win.scrollTo(0, 1);
                    }
                }
                function hideAddressHandler() {
                    setTimeout(doScroll, 100);
                }
            },
            orientationChange: function(vars) {
                win.addEventListener('load', change);
                win.addEventListener('orientationchange', change);
                win.addEventListener('resize', change);

                function change() {
                    if (
                        Math.abs(win.orientation) !== 90 &&
                        win.innerWidth < win.innerHeight
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

    function checkUA(ua) {
        if (ua) {
            return ua;
        }

        return userAgent;
    }

    return mobile;
};
