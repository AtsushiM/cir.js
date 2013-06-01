C['LimitText'] = classExtendBase({
    _minfontsize: 8,
    _copyAppend: function(text/* varless */, that) {
        that = this;
        html(that._copyel, text);
        append(parent(that._el), that._copyel);
    },
    _copyRemove: function() {
        html(this._copyel, EMPTY);
        remove(this._copyel);
    },
    'init': function(config/* varless */, that) {
        that = this;

        var el = that._el = config['el'],
            orgcomputed = computedStyle(el),
            copyel = that._copyel = create(el.tagName, {
                'class': attr(el, 'class'),
                'style': attr(el, 'style')
            }),
            computed = that._computed = computedStyle(copyel);

        that._width = config['width'];
        that._height = config['height'];

        that._copyAppend(0);

        if (!isDefined(config['width'])) {
            that._width = +splitSuffix(computed['width'])[2];
        }
        if (!isDefined(config['height'])) {
            that._height = +splitSuffix(computed['height'])[2];
        }

        css(copyel, {
            'height': 'auto'
        });

        that._fontsize = +splitSuffix(computed['fontSize'])[2];
        that._copyRemove();
    },
    _limitCheck: function(/* varless */that) {
        that = this;

        if (
            +splitSuffix(that._computed['width'])[2] <= that._width &&
            +splitSuffix(that._computed['height'])[2] <= that._height
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
