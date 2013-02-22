/* Test: "../../spec/_src/src/PC/test.js" */
(function() {
var userAgent = win.navigator.userAgent.toLowerCase(),
    /* appVersion = win.navigator.appVersion.toLowerCase(), */
    browser;

if (userAgent.indexOf('opera') != -1) {
    browser = 'opera';
}
else if (userAgent.indexOf('msie') != -1) {
    // if (appVersion.indexOf("msie 9.") != -1) {
    //     browser = 'ie9';
    // }
    // else if (appVersion.indexOf("msie 8.") != -1) {
    //     browser = 'ie8';
    // }
    // else if (appVersion.indexOf("msie 7.") != -1) {
    //     browser = 'ie7';
    // }
    // else if (appVersion.indexOf("msie 6.") != -1) {
    //     browser = 'ie6';
    // }
    // else {
        browser = 'ie';
    /* } */
}
else if (userAgent.indexOf('chrome') != -1) {
    browser = 'chrome';
}
else if (userAgent.indexOf('safari') != -1) {
    browser = 'safari';
}
else if (userAgent.indexOf('gecko') != -1) {
    browser = 'gecko';
}
else {
    browser = 'ather';
}

pc = C['PC'] = klassExtendBase(UNDEFINED, {
    'isChrome': function(ua) {
        return browser == 'chrome';
    },
    'isSafari': function(ua) {
        return browser == 'safari';
    },
    'isGecko': function(ua) {
        return browser == 'gecko';
    },
    'isOpera': function(ua) {
        return browser == 'opera';
    },
    'isIE': function(ua) {
        return browser.indexOf('ie') != -1;
    }
});
C['pc'] = new pc();
}());
