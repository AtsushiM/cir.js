/* Test: "../../spec/_src/src/DragFlick/test.js" */
Global['DragFlick'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        if (config) {
            this['bind'](config);
        }
    },
    'properties': {
        _t: function(e) {
            var changed = e.changedTouches ? e.changedTouches[0] : e;

            return changed;
        },
        'amount': function(vars) {
            var mine = this,
                startX,
                startY,
                dragflg = FALSE;

            this.ondispose(vars.element, ev['switchdown'], start);
            this.ondispose(win, ev['switchup'], end);

            function start(e) {
                var changed = mine._t(e);

                startX = changed.pageX;
                startY = changed.pageY;

                dragflg = TRUE;

                e.preventDefault();
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
        'direction': function(vars) {
            this['amount']({
                'element': vars['element'],
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
        'bind': function(vars) {
            var mine = this,
                element = vars['element'],
                el = Global['element'],
                start = vars['start'] || nullFunction,
                move = vars['move'] || nullFunction,
                end = vars['end'] || nullFunction,
                flg = FALSE,
                startX = 0,
                startY = 0;

            if (vars['direction']) {
                mine['direction']({
                    'element': element,
                    'boundary': vars['boundary'],
                    'callback': vars['direction']
                });
            }

            eventProxy(element, ev['switchdown'], function(_e) {
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
            eventProxy(doc, ev['switchmove'], function(_e) {
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
            eventProxy(doc, ev['switchup'], function(_e) {
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

            function eventProxy(element, ev, callback) {
                var handler = function(e) {
                        var changed = mine._t(e);
                        callback(changed);
                    };
                mine.ondispose(element, ev, handler);
            }
        }
    }
});
