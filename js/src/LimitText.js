C['LimitText'] = classExtendBase({
    _minfontsize: 8,
    _copyAppend: function(text) {
        append(parent(this._el), this._copyel);
    },
    _copyRemove: function() {
        html(this._copyel, '');
        remove(this._copyel);
    },
    _parseComputed: function(computedPoint) {
        return +computedPoint.split('px')[0];
    },
    _getComputed: function(text) {
        html(this._copyel, text);

        /* var computed = computedStyle(this._copyel); */

        return {
            'width': this._parseComputed(this._computed['width']),
            'height': this._parseComputed(this._computed['height']),
            'font-size': this._parseComputed(this._computed['font-size'])
        };
    },
    'init': function(config) {
        this._width = config['width'];
        this._height = config['height'];
        this._el = config['el'];
        this._copyel = create(this._el.tagName, {
            'class': attr(this._el, 'class'),
            'id': attr(this._el, 'id'),
            'style': attr(this._el, 'style')
        });

        css(this._copyel, {
            'position': 'fixed',
            /* 'top': '-9999px', */
            'top': '0',
            'left': '0',
            'visibility': 'hidden'
        });

        this._computed = computedStyle(this._copyel);

        this._copyAppend();
        this._fontsize = this._getComputed('a')['font-size'];
        this._copyRemove();
    },
    _limitCheck: function(text) {
        var computed = this._getComputed(text);

        if (
            computed['width'] <= this._width &&
            computed['height'] <= this._height
        ) {
            return TRUE;
        }

        return FALSE;
    },
    'getLimitFontSize': function(text) {
        text = '' + text;

        var that = this,
            high = this._fontsize;

        css(that._copyel, {
            'font-size': high
        });

        that._copyAppend();

        if (that._limitCheck(text)) {
            answer = high;
        }
        else {
            binarySearch({
                'low': that._minfontsize - 1,
                'high': high,
                'compare': function(point) {
                    css(that._copyel, {
                        'font-size': point
                    });
                    return that._limitCheck(text);
                },
                'end': function(point) {
                    answer = point;
                }
            });
        }

        that._copyRemove();

        if (answer < that._minfontsize) {
            answer = 0;
        }

        return answer;
    },
    'getLimitTextLength': function(text) {
        text = '' + text;

        var that = this,
            len = text.length,
            answer;

        that._copyAppend();

        if (that._limitCheck(text)) {
            answer = len;
        }
        else {
            binarySearch({
                'low': 0,
                'high': len,
                'compare': function(point) {
                    return that._limitCheck(text.slice(0, point));
                },
                'end': function(point) {
                    answer = point;
                }
            });
        }

        that._copyRemove();

        return answer;
    }
});
