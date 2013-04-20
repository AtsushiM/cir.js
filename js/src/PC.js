(function() {
var userAgent = win.navigator.userAgent.toLowerCase(),
    /* appVersion = win.navigator.appVersion.toLowerCase(), */
    browser;

if (noIndexOf(userAgent, 'opera')) {
    browser = 'opera';
}
else if (noIndexOf(userAgent, 'msie')) {
    browser = 'ie';
}
else if (noIndexOf(userAgent, 'chrome')) {
    browser = 'chrome';
}
else if (noIndexOf(userAgent, 'safari')) {
    browser = 'safari';
}
else if (noIndexOf(userAgent, 'gecko')) {
    browser = 'gecko';
}
else {
    browser = 'ather';
}

pc = C['PC'] = classExtendBase({
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
        return browser == 'ie';
    }
});
C['pc'] = new pc();
}());
