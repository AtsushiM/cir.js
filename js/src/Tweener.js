Tweener = C['Tweener'] = classExtendBase({
    'init': function(target, property, option /* varless */, name, prop, mine) {
        // var name,
        //     prop;

        mine = this;

        option = option || NULLOBJ;

        mine._target = target;
        mine._property = [];

        for (name in property) {
            prop = property[name];
            prop['name'] = name;

            prop.distance = prop['to'] - prop['from'];
            prop['prefix'] = prop['prefix'] || EMPTY;
            prop['suffix'] = prop['suffix'] || 'px';

            mine._property.push(prop);
        }

        mine._duration = option['duration'] || Tweener['duration'];
        mine._ease = option['ease'] || mine.__ease;
        mine._onComplete = option['onComplete'];

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    // easeOutExpo
    __ease: function(time, from, dist, duration) {
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
    _loop: function() {
        var mine = this,
            items = Tweener.Items,
            item,
            now = dateNow(),
            time,
            n = items.length,
            i,
            len,
            prop;

        while (n--) {
            item = items[n];
            /* len = item.property.length; */
            i = item._property.length;
            time = now - item.begin;

            if (time < item._duration) {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener._setProp(item._target, prop, item._ease(
                        time,
                        prop['from'],
                        prop.distance,
                        item._duration
                    ));
                }
            }
            else {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener._setProp(item._target, prop, prop['to']);
                }
                if (item._onComplete) {
                    item._onComplete();
                }
                items.splice(n, 1);
            }
        }

        if (items.length) {
            mine._requestAnimationFrame(function() {
                mine._loop();
            });

            return;
        }

        mine['stop']();
    },
    'start': function(/* varless */ mine) {
        /* var mine = this; */
        mine = this;

        mine.begin = dateNow();

        Tweener.Items.push(mine);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            mine._requestAnimationFrame(function() {
                mine._loop();
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
