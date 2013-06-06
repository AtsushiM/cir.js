C['DragFlick'] = classExtendBase({
    _t: function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    },
    _amount: function(vars/* varless */, that, startX, startY, dragflg) {
        // var that = this,
        //     startX,
        //     startY,
        //     dragflg = FALSE;
        that = this;

        that._contractid.push(
            that._contract(vars['el'], ev['SWITCHDOWN'], start),
            that._contract(win, ev['SWITCHUP'], end)
        );

        function start(e) {
            var changed = that._t(e);

            startX = changed.pageX;
            startY = changed.pageY;

            dragflg = TRUE;

            eventPrevent(e);
        }
        function end(e) {
            if (dragflg) {
                var changed = that._t(e),
                    amount = {
                        'x': changed.pageX - startX,
                        'y': changed.pageY - startY
                    };

                vars['callback'](amount);

                dragflg = FALSE;
            }
        }
    },
    _direction: function(vars) {
        this._amount({
            'el': vars['el'],
            'callback': function(amount) {
                var boundary = vars['boundary'] || 0,
                    direction = {
                        'change': FALSE,
                        'top': FALSE,
                        'right': FALSE,
                        'bottom': FALSE,
                        'left': FALSE,
                        'amount': amount
                    };

                if (Math.abs(amount['x']) > boundary) {
                    if (amount['x'] > 0) {
                        direction['right'] = TRUE;
                    }
                    else if (amount['x'] < 0) {
                        direction['left'] = TRUE;
                    }

                    direction['change'] = TRUE;
                }

                if (Math.abs(amount['y']) > boundary) {
                    if (amount['y'] > 0) {
                        direction['bottom'] = TRUE;
                    }
                    else if (amount['y'] < 0) {
                        direction['top'] = TRUE;
                    }

                    direction['change'] = TRUE;
                }

                vars['callback'](direction);
            }
        });
    },
    'init': function(config /* varless */, that) {
        that = this;

        that._contractid = [];
        that._config = config;

        config = config || NULLOBJ;
        ifManualStart(that, config, 'attach');
    },
    'attach': function(/* varless */that, flg) {
        that = this;

        var vars = this._config,
            el = vars['el'],
            start = vars['start'] || nullFunction,
            move = vars['move'] || nullFunction,
            end = vars['end'] || nullFunction,
            /* flg = FALSE, */
            startX = 0,
            startY = 0;

        if (vars['direction']) {
            that._direction({
                'el': el,
                'boundary': vars['boundary'],
                'callback': vars['direction']
            });
        }

        eventProxy(el, ev['SWITCHDOWN'], function(_e) {
            flg = TRUE;

            startX = _e.pageX;
            startY = _e.pageY;

            start({
                'e': _e,
                'move': {
                    'x': startX,
                    'y': startY
                }
            });
        });
        eventProxy(doc, ev['SWITCHMOVE'], function(_e) {
            if (flg) {
                move({
                    'e': _e,
                    'move': {
                        'x': _e.pageX - startX,
                        'y': _e.pageY - startY
                    }
                });
            }
        });
        eventProxy(doc, ev['SWITCHUP'], function(_e) {
            if (flg) {
                end({
                    'e': _e,
                    'move': {
                        'x': _e.pageX - startX,
                        'y': _e.pageY - startY
                    }
                });

                flg = FALSE;
            }
        });

        function eventProxy(el, ev, callback) {
            that._contractid.push(
                that._contract(el, ev, handler)
            );

            function handler(e) {
                callback(that._t(e));
            }
        }
    },
    'detach': function(/* varless */ that) {
        that = this;

        var ary = that._contractid,
            i = ary.length;

        for (; i--;) {
            that._uncontract(ary[i]);
        }

        that._contractid = [];
    }
});
