/* var PC_browser; */

if (checkUserAgent(/opera/i)) {
    PC_browser = 'opera';
}
else if (checkUserAgent(/msie/i)) {
    PC_browser = 'ie';
}
else if (checkUserAgent(/chrome/i)) {
    PC_browser = 'chrome';
}
else if (checkUserAgent(/safari/i)) {
    PC_browser = 'safari';
}
else if (checkUserAgent(/gecko/i)) {
    PC_browser = 'gecko';
}
else {
    PC_browser = 'ather';
}

system_temp = C['PC'] = classExtendBase({
    'isChrome': function() {
        return PC_browser == 'chrome';
    },
    'isSafari': function() {
        return PC_browser == 'safari';
    },
    'isGecko': function() {
        return PC_browser == 'gecko';
    },
    'isOpera': function() {
        return PC_browser == 'opera';
    },
    'isIE': function() {
        return PC_browser == 'ie';
    }
});
C['pc'] = new system_temp();
