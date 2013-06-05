system_temp = {
    'request': function(callback) {
        return this._animeframe.call(win, callback);
    },
    'cancel': function(id) {
        this._cancelframe.call(win, id);
    }
};

/* (function() { */
    // var animeframe_check = ['webkit', 'moz', 'o', 'ms'],
    //     animeframe_len,
    //     animeframe_animeframe,
    //     animeframe_cancelframe;

    animeframe_check = ['webkit', 'moz', 'o', 'ms'];

    if (win['requestAnimationFrame']) {
        animeframe_animeframe = win['requestAnimationFrame'];
        animeframe_cancelframe = win['cancelAnimationFrame'];
    }
    else {
        for (animeframe_len = animeframe_check.length; animeframe_len--; ) {
            if (win[animeframe_check[animeframe_len] + 'RequestAnimationFrame']) {
                animeframe_animeframe = win[animeframe_check[animeframe_len] + 'RequestAnimationFrame'];
                animeframe_cancelframe = win[animeframe_check[animeframe_len] + 'CancelAnimationFrame'];
                break;
            }
        }

        if (!animeframe_animeframe) {
            animeframe_animeframe = function(callback) {
                return setTimeout(callback, 1000 / C['AnimeFrame']['fps']);
            };
            animeframe_cancelframe = function(id) {
                clearTimeout(id);
            };
        }
    }

    system_temp._animeframe = animeframe_animeframe;
    system_temp._cancelframe = animeframe_cancelframe;
/* }()); */

system_temp = C['AnimeFrame'] = classExtendBase(system_temp);
system_temp['fps'] = 30;

C['animeframe'] = new system_temp();
