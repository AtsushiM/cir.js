C['Modal'] = classExtendBase({
    _closeDetach: function(/* varless */ mine) {
        mine = this;

        var i = mine._contractid.length;

        for (; i--;) {
            mine['uncontract'](mine._contractid[i]);
        }

        mine._contractid = [];
    },
    'init': function(config /* varless */, mine, commoncss) {
        mine = this;
        config = config || NULLOBJ;

        // mine._html = config['html'];
        // mine._bgClose = config['bgClose'];
        // mine._closeSelector = config['closeSelector'];
        mine._config = config;

        /* var commoncss = { */
        commoncss = {
            'display': 'none',
            'position': 'absolute'
        };

        mine._scroll = new C['Scroll']();

        mine._contractid = [];

        mine._bg = create('div', {
            'class': 'cir-modal-bg'
        });
        css(mine._bg, override({
            'z-ndex': 9998,
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '300%'
        }, commoncss));
        append(body, mine._bg);

        mine._inner = create('div', {
            'class': 'cir-modal-content'
        });
        css(mine._inner, override({
            'z-index': 9999,
            'top': '50%',
            'left': '50%'
        }, commoncss));
        append(body, mine._inner);

        if (!config['manual']) {
            mine['open']();
        }
    },
    'dispose': function(/* varless */ mine) {
        mine = this;

        mine['close']();
        remove(mine._bg);
        remove(mine._inner);

        this['_super']();
    },
    'open': function(text /* varless */, mine) {
        mine = this;

        mine._scroll['kill']();
        css(mine._bg, {
            'top': body.scrollTop
        });

        show(mine._bg);

        mine['inner'](text);
    },
    'close': function(/* varless */ mine) {
        mine = this;

        mine._closeDetach();

        html(mine._inner, EMPTY);
        hide(mine._inner);
        hide(mine._bg);

        mine._scroll['revival']();
    },
    'inner': function(text /* varless */, mine, computed, close, i) {
        mine = this;

        // var computed,
        //     close;

        mine._closeDetach();

        text = text || mine._config['html'];

        html(mine._inner, text);
        show(mine._inner);

        computed = computedStyle(mine._inner);

        css(mine._inner, {
            'margin-top':
            body.scrollTop - splitSuffix(computed.height)[2] / 2,
            'margin-left': -(splitSuffix(computed.width)[2] / 2)
        });

        if (mine._config['bgClose']) {
            mine['contract'](mine._bg, ev['CLICK'], proxy(mine, mine['close']));
        }

        if (mine._config['closeSelector']) {
            close = $$child(mine._config['closeSelector'], mine._inner),
                i = close.length;

            for (; i--;) {
                mine._contractid.push(
                    mine['contract'](close[i],
                    ev['CLICK'],
                    proxy(mine, mine['close']))
                );
            }
        }
    }
});
