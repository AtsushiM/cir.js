C['Modal'] = classExtend(C['Scroll'], {
    _closeDetach: function(/* varless */ that) {
        that = this;

        var i = that._contractid.length;

        for (; i--;) {
            that._uncontract(that._contractid[i]);
        }

        that._contractid = [];
    },
    'init': function(config /* varless */, that, commoncss) {
        that = this;
        config = config || NULLOBJ;

        that['_super']();

        // that._html = config['html'];
        // that._bgClose = config['bgClose'];
        // that._closeSelector = config['closeSelector'];
        that._config = config;

        /* var commoncss = { */
        commoncss = {
            'display': 'none',
            'position': 'absolute'
        };

        that._contractid = [];

        that._bg = create('div', {
            'class': 'cir-modal-bg'
        });
        css(that._bg, override({
            'zIndex': '9998',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '200%'
        }, commoncss));
        append(doc.body, that._bg);

        that._inner = create('div', {
            'class': 'cir-modal-content'
        });
        css(that._inner, override({
            'zIndex': '9999',
            'top': '50%',
            'left': '50%'
        }, commoncss));
        append(doc.body, that._inner);

        ifManualStart(that, config, 'open');
    },
    'dispose': function(/* varless */ that) {
        that = this;

        that['close']();
        remove(that._bg);
        remove(that._inner);

        that['_super']();
    },
    'open': function(text /* varless */, that) {
        that = this;

        that['kill']();
        css(that._bg, {
            'top': doc.body.scrollTop
        });

        show(that._bg);

        that['inner'](text);
    },
    'close': function(/* varless */ that) {
        that = this;

        that._closeDetach();

        html(that._inner, EMPTY);
        hide(that._inner);
        hide(that._bg);

        that['revival']();
    },
    'inner': function(text /* varless */, that, computed, close, i) {
        that = this;

        // var computed,
        //     close;

        that._closeDetach();

        text = text || that._config['html'];

        html(that._inner, text);
        show(that._inner);

        computed = computedStyle(that._inner);

        css(that._inner, {
            'marginTop':
            doc.body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'marginLeft': -(splitSuffix(computed.width)[2] / 2)
        });

        if (that._config['bgClose']) {
            that._contract(that._bg, ev['CLICK'], proxy(that, that['close']));
        }

        if (that._config['closeSelector']) {
            close = $$child(that._config['closeSelector'], that._inner),
                i = close.length;

            for (; i--;) {
                that._contractid.push(
                    that._contract(close[i],
                    ev['CLICK'],
                    proxy(that, that['close']))
                );
            }
        }
    }
});
