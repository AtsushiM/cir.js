// namespace
C['namespace'] = function(keyword, swap) {
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

    if (swap) {
        for (i in temp) {
            if (!isDefined(swap[i])) {
                swap[i] = temp[i];
            }
        }

        par[keyword_ary[(len - 1)]] = swap;

        temp = swap;
    }

    return temp;
}
