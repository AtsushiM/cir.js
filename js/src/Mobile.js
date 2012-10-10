/* Test: "../../spec/_src/src/Mobile/test.js" */
Global.Mobile = function() {
    'use strict';

    var win = Global.utility.win,
        doc = Global.utility.doc,
        userAgent = navigator.userAgent,
        mobile = {
            isAndroid: function(ua) {
                return checkUA(ua, /Android/i);
            },
            isIOS: function(ua) {
                return checkUA(ua, /iPhone|iPad|iPod/i);
            },
            isWindows: function(ua) {
                return checkUA(ua, /IEMobile/i);
            },
            isMobile: function() {
                return (
                    mobile.isAndroid() ||
                    mobile.isIOS() ||
                    mobile.isWindows()
                );
            },
            killScroll: function() {
                scrollTop();
                doc.addEventListener('touchmove', preventDefault);
            },
            revivalScroll: function() {
                scrollTop();
                doc.removeEventListener('touchmove', preventDefault);
            },
            hideAddress: function() {
                win.addEventListener('load', hideAddressHandler, false);
                win.addEventListener('orientationchange', hideAddressHandler, false);

                function doScroll() {
                    if (win.pageYOffset === 0) {
                        scrollTop();
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

    function scrollTop() {
        win.scrollTo(0, 1);
    }

    function checkUA(ua, pattern) {
        ua = ua ? ua : userAgent;

        return ua.match(pattern) ? true : false;
    }

    return mobile;
};
