// namespace
C['namespace'] = function(keyword, arg) {
    var keyword_ary = keyword.split('.'),
        i = 0,
        len = keyword_ary.length,
        temp = win,
        par;

    for (; i < len; i++) {
        if (!temp[keyword_ary[i]]) {
            break;
        }

        par = temp;
        temp = temp[keyword_ary[i]];
    }
    for (; i < len; i++) {
        par = temp;
        temp = temp[keyword_ary[i]] = {};
    }

    if (arg) {
        override(arg, temp);

        par[keyword_ary[(len - 1)]] = arg;

        temp = arg;
    }

    return temp;
}
