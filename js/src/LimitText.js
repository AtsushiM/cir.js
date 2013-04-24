C['LimitText'] = classExtendBase({
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

        var computed = computedStyle(this._copyel);

        return {
            'width': this._parseComputed(computed['width']),
            'height': this._parseComputed(computed['height']),
            'font-size': this._parseComputed(computed['font-size'])
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

        this._copyAppend();
        this._fontsize = this._getComputed('a')['font-size'];
        this._copyRemove();
    },
    'getLimitFontSize': function(text) {
        text = '' + text;

        var flg = true,
            computed,
            size = this._fontsize,
            limitsize = 8;

        css(this._copyel, {
            'font-size': size
        });
        this._copyAppend();

        while (flg && size >= limitsize) {
            computed = this._getComputed(text);

            if (
                computed['width'] <= this._width &&
                computed['height'] <= this._height
            ) {
                flg = false;
            }
            else {
                size--;
                css(this._copyel, {
                    'font-size': size
                });
            }
        }

        this._copyRemove();

        return size;
    },
    'getLimitTextLength': function(text) {
        text = '' + text;

        var orgtext = text,
            flg = true,
            computed;

        this._copyAppend();

        while (flg && text !== '') {
            computed = this._getComputed(text);

            if (
                computed['width'] <= this._width &&
                computed['height'] <= this._height
            ) {
                flg = false;
            }
            else {
                text = text.slice(0, text.length - 1);
            }
        }

        this._copyRemove();

        return text.length;
    }
});
