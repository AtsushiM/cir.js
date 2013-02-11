/* Test: "../../spec/_src/src/Tweener/test.js" */
Tweener = Global['Tweener'] = klassExtendBase(function(target, property, option) {
    var name,
        prop;

    option = option || {};

    this._target = target;
    this.property = [];

    for (name in property) {
        prop = property[name];
        prop['name'] = name;

        prop.distance = prop['to'] - prop['from'];
        prop['prefix'] = prop['prefix'] || EMPTY;
        prop['suffix'] = prop['suffix'] || 'px';

        this.property.push(prop);
    }

    this._duration = option['duration'] || Tweener['duration'];
    this.ease = option['ease'] || this._ease;
    this.onComplete = option['onComplete'];

    if (!option['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        this['stop']();
    },
    // easeOutExpo
    _ease: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    _requestAnimationFrame: (function() {
        if (win.requestAnimationFrame) {
            return function(callback) {
                requestAnimationFrame(callback);
            };
        }
        if (win.webkitRequestAnimationFrame) {
            return function(callback) {
                webkitRequestAnimationFrame(callback);
            };
        }
        if (win.mozRequestAnimationFrame) {
            return function(callback) {
                mozRequestAnimationFrame(callback);
            };
        }
        if (win.oRequestAnimationFrame) {
            return function(callback) {
                oRequestAnimationFrame(callback);
            };
        }
        if (win.msRequestAnimationFrame) {
            return function(callback) {
                msRequestAnimationFrame(callback);
            };
        }

        return function(callback) {
            setTimeout(callback, 1000 / Tweener.fps);
        };
    }()),
    loop: function() {
        var mine = this,
            items = Tweener.Items,
            item,
            now = dateNow(),
            time,
            n = items.length,
            /* i = 0, */
            len,
            prop;

        while (n--) {
            item = items[n];
            /* len = item.property.length; */
            i = item.property.length;
            time = now - item.begin;

            if (time < item._duration) {
                for (; i--;) {
                    prop = item.property[i];

                    Tweener._setProp(item._target, prop, item.ease(
                        time,
                        prop['from'],
                        prop.distance,
                        item._duration
                    ));
                }
            }
            else {
                for (; i--;) {
                    prop = item.property[i];

                    Tweener._setProp(item._target, prop, prop['to']);
                }
                if (item.onComplete) {
                    item.onComplete();
                }
                items.splice(n, 1);
            }
        }

        if (items.length) {
            mine._requestAnimationFrame(function() {
                mine.loop();
            });

            return;
        }

        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine.begin = dateNow();

        Tweener.Items.push(mine);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine.loop();
            });
        }
    },
    'stop': function() {
        Tweener.Items = [];
        clearInterval(Tweener.timerId);
        Tweener.timerId = NULL;
    }
});
Tweener._setProp = function(target, prop, point) {
    target[prop['name']] = prop['prefix'] + point + prop['suffix'];
};
/* Tweener.timerId = NULL; */
Tweener.Items = [];
Tweener['fps'] = 30;
Tweener['duration'] = 500;
