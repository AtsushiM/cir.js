var animeframeobj = {
        'request': function(callback) {
            return this._animeframe.call(win, callback);
        },
        'cancel': function(id) {
            return this._cancelframe.call(win, id);
        }
    };

(function() {
    var check = ['webkit', 'moz', 'o', 'ms'],
        len,
        _animeframe,
        _cancelframe;

    if (win['requestAnimationFrame']) {
        _animeframe = win['requestAnimationFrame'];
        _cancelframe = win['cancelAnimationFrame'];
    }
    else {
        for (len = check.length; len--; ) {
            if (win[check[len] + 'RequestAnimationFrame']) {
                _animeframe = win[check[len] + 'RequestAnimationFrame'];
                _cancelframe = win[check[len] + 'CancelAnimationFrame'];
                break;
            }
        }

        if (!_animeframe) {
            _animeframe = function(callback) {
                return setTimeout(callback, 1000 / C['AnimeFrame']['fps']);
            };
            _cancelframe = function(id) {
                clearTimeout(id);
            };
        }
    }

    animeframeobj._animeframe = _animeframe;
    animeframeobj._cancelframe = _cancelframe;
}());

C['AnimeFrame'] = classExtendBase(animeframeobj);
C['AnimeFrame']['fps'] = 30;

C['animeframe'] = new C['AnimeFrame']();
