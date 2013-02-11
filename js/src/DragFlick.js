/* Test: "../../spec/_src/src/DragFlick/test.js" */
Global['DragFlick'] = klassExtendBase(function(config) {
    this._contractid = [];
    this.config = config;

    config = config || NULLOBJ;
    if (!config['manual']) {
        this['attach']();
    }
}, {
    _t: function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    },
    _amount: function(vars) {
        var mine = this,
            startX,
            startY,
            dragflg = FALSE;

        this._contractid.push(
            this['contract'](vars['el'], ev['SWITCHDOWN'], start),
            this['contract'](win, ev['SWITCHUP'], end)
        );

        function start(e) {
            var changed = mine._t(e);

            startX = changed.pageX;
            startY = changed.pageY;

            dragflg = TRUE;

            eventPrevent(e);
        }
        function end(e) {
            if (dragflg) {
                var changed = mine._t(e),
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
    'attach': function() {
        var mine = this,
            vars = this.config,
            el = vars['el'],
            start = vars['start'] || nullFunction,
            move = vars['move'] || nullFunction,
            end = vars['end'] || nullFunction,
            flg = FALSE,
            startX = 0,
            startY = 0;

        if (vars['direction']) {
            mine._direction({
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
            var handler = function(e) {
                    var changed = mine._t(e);
                    callback(changed);
                };

            mine._contractid.push(
                mine['contract'](el, ev, handler)
            );
        }
    },
    'detach': function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    }
});
