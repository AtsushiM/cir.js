/* Test: "../../spec/_src/src/Modal/test.js" */
Global['Modal'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    // this._html = config['html'];
    // this._bgClose = config['bgClose'];
    // this._closeSelector = config['closeSelector'];
    this.config = config;

    var commoncss = {
        'display': 'none',
        'position': 'absolute'
    };

    this._scroll = new (isTouch ? mb : pc)();

    this._contractid = [];

    this._bg = create('div', {
        'class': 'cir-modal-bg'
    });
    css(this._bg, override({
        'zIndex': 9998,
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '300%'
    }, commoncss));
    append(doc.body, this._bg);

    this._inner = create('div', {
        'class': 'cir-modal-content'
    });
    css(this._inner, override({
        'zindex': 9999,
        'top': '50%',
        'left': '50%'
    }, commoncss));
    append(doc.body, this._inner);

    if (!config['manual']) {
        this['open']();
    }
}, {
    _closeDetach: function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    },
    'disposeInternal': function() {
        this['close']();
        remove(this._bg);
        remove(this._inner);
    },
    'open': function(text) {
        this._scroll['killScroll'](true);
        css(this._bg, {
            'top': doc.body.scrollTop
        });

        show(this._bg);

        this['inner'](text);
    },
    'close': function() {
        this._closeDetach();

        html(this._inner, '');
        hide(this._inner);
        hide(this._bg);

        this._scroll['revivalScroll'](true);
    },
    'inner': function(text) {
        this._closeDetach();

        text = text || this.config['html'];

        html(this._inner, text);
        show(this._inner);

        var computed = computedStyle(this._inner);

        css(this._inner, {
            'margin-top':
            doc.body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'margin-left': -(splitSuffix(computed.width)[2] / 2)
        });

        if (this.config['bgClose']) {
            this['contract'](this._bg, ev['CLICK'], proxy(this, this['close']));
        }

        if (this.config['closeSelector']) {
            var close = $$child(this.config['closeSelector'], this._inner),
                i = close.length;

            for (; i--;) {
                this._contractid.push(
                    this['contract'](close[i],
                    ev['CLICK'],
                    proxy(this, this['close']))
                );
            }
        }
    }
});
