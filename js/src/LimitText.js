C['LimitText'] = classExtendBase({
    _minfontsize: 8,
    _copyAppend: function(text) {
        html(this._copyel, text);
        append(parent(this._el), this._copyel);
    },
    _copyRemove: function() {
        html(this._copyel, EMPTY);
        remove(this._copyel);
    },
    'init': function(config) {
        var el = this._el = config['el'],
            copyel = this._copyel = create(el.tagName, {
                'class': attr(el, 'class'),
                'id': attr(el, 'id'),
                'style': attr(el, 'style')
            }),
            computed = this._computed = computedStyle(copyel);

        this._width = config['width'];
        this._height = config['height'];

        css(copyel, {
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'visibility': 'hidden'
        });

        this._copyAppend(0);
        this._fontsize = +splitSuffix(computed['fontSize'])[2];
        this._copyRemove();
    },
    _limitCheck: function() {
        if (
            +splitSuffix(this._computed['width'])[2] <= this._width &&
            +splitSuffix(this._computed['height'])[2] <= this._height
        ) {
            return TRUE;
        }

        return FALSE;
    },
    'getLimitFontSize': function(text) {
        text = EMPTY + text;

        var that = this,
            high = that._fontsize,
            answer;

        css(that._copyel, {
            'fontSize': high
        });

        that._copyAppend(text);

        if (that._limitCheck()) {
            answer = high;
        }
        else {
            _binarySearch(
                that._minfontsize - 1,
                high,
                function(point) {
                    css(that._copyel, {
                        'fontSize': point
                    });
                    return that._limitCheck();
                },
                function(point) {
                    answer = point;
                }
            );
        }

        that._copyRemove();

        if (answer < that._minfontsize) {
            answer = 0;
        }

        return answer;
    },
    'getLimitTextLength': function(text) {
        text = EMPTY + text;

        var that = this,
            len = text.length,
            answer;

        that._copyAppend(text);

        if (that._limitCheck()) {
            answer = len;
        }
        else {
            _binarySearch(
                0,
                len,
                function(point) {
                    html(that._copyel, text.slice(0, point));
                    return that._limitCheck();
                },
                function(point) {
                    answer = point;
                }
            );
        }

        that._copyRemove();

        return answer;
    }
});