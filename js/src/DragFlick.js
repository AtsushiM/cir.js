/* Test: "../../spec/_src/src/DragFlick/test.js" */
Global.DragFlick = Global.klass({
    init: function(config) {
        if (config) {
            this.bind(config);
        }
    },
    properties: {
        utility: Global.utility,
        _event: new Global.Event(),
        _getEventTarget: function(e) {
            var changed = e.changedTouches ? e.changedTouches[0] : e;

            return changed;
        },
        amount: function(vars) {
            var mine = this,
                startX,
                startY,
                dragflg = false;

            mine.utility.onEvent(vars.element, mine._event.switchdown, start);
            mine.utility.onEvent(mine.utility.win, mine._event.switchup, end);

            function start(e) {
                var changed = mine._getEventTarget(e);

                startX = changed.pageX;
                startY = changed.pageY;

                dragflg = true;

                e.preventDefault();
            }
            function end(e) {
                if (dragflg) {
                    var changed = mine._getEventTarget(e),
                        amount = {
                            x: changed.pageX - startX,
                            y: changed.pageY - startY
                        };

                    vars.callback(amount);

                    dragflg = false;
                }
            }
        },
        direction: function(vars) {
            this.amount({
                element: vars.element,
                callback: function(amount) {
                    var boundary = vars.boundary || 0,
                        direction = {
                            change: false,
                            top: false,
                            right: false,
                            bottom: false,
                            left: false,
                            amount: amount
                        };

                    if (Math.abs(amount.x) > boundary) {
                        if (amount.x > 0) {
                            direction.right = true;
                        }
                        else if (amount.x < 0) {
                            direction.left = true;
                        }

                        direction.change = true;
                    }

                    if (Math.abs(amount.y) > boundary) {
                        if (amount.y > 0) {
                            direction.bottom = true;
                        }
                        else if (amount.y < 0) {
                            direction.top = true;
                        }

                        direction.change = true;
                    }

                    vars.callback(direction);
                }
            });
        },
        bind: function(vars) {
            var mine = this,
                element = vars.element,
                e = this._event,
                util = this.utility,
                start = vars.start || util.nullFunction,
                move = vars.move || util.nullFunction,
                end = vars.end || util.nullFunction,
                flg = false,
                startX = 0,
                startY = 0;

            if (vars.direction) {
                mine.direction({
                    element: element,
                    boundary: vars.boundary,
                    callback: vars.direction
                });
            }

            eventProxy(element, e.switchdown, function(_e) {
                flg = true;

                startX = _e.pageX;
                startY = _e.pageY;

                start({
                    e: _e,
                    move: {
                        x: startX,
                        y: startY
                    }
                });
            });
            eventProxy(util.doc, e.switchmove, function(_e) {
                if (flg) {
                    move({
                        e: _e,
                        move: {
                            x: _e.pageX - startX,
                            y: _e.pageY - startY
                        }
                    });
                }
            });
            eventProxy(util.doc, e.switchup, function(_e) {
                if (flg) {
                    end({
                        e: _e,
                        move: {
                            x: _e.pageX - startX,
                            y: _e.pageY - startY
                        }
                    });

                    flg = false;
                }
            });

            function eventProxy(element, ev, callback) {
                util.onEvent(
                    element, ev, function(e) {
                        var changed = mine._getEventTarget(e);
                        callback(changed);
                    });
            }
        }
    }
});
