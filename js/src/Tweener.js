Tweener = C['Tweener'] = classExtendObserver({
    'init': function(target, property, option /* varless */, name, prop, that) {
        // var name,
        //     prop;

        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        that._target = target;
        that._property = [];

        for (name in property) {
            prop = property[name];
            prop['name'] = name;

            prop.distance = prop['to'] - prop['from'];
            prop['prefix'] = prop['prefix'] || EMPTY;
            prop['suffix'] = prop['suffix'] ||
                (prop['suffix'] === EMPTY ? EMPTY : 'px');

            that._property.push(prop);
        }

        that._duration = option['duration'] || Tweener['duration'];
        that._ease = option['ease'] || that.__ease;
        /* that._oncomplete = option['oncomplete']; */

        ifManualStart(that, option);
    },
    'dispose': this_stop__super,
    // easeOutExpo
    __ease: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    _loop: function(/* varless */i) {
        var that = this,
            item,
            now = dateNow(),
            time,
            n = Tweener_Items.length,
            /* i, */
            len,
            prop;

        while (n--) {
            item = Tweener_Items[n];
            /* len = item.property.length; */
            i = item._property.length;
            time = now - item.begin;

            if (time < item._duration) {
                for (; i--;) {
                    prop = item._property[i];

                    Tweener_setProp(item._target, prop, item._ease(
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

                    Tweener_setProp(item._target, prop, prop['to']);
                }

                fire_complete(item);
                Tweener_Items.splice(n, 1);
            }
        }

        if (Tweener_Items.length) {
            C['animeframe']['request'](function() {
                if (that._loop) {
                    that._loop();
                }
            });

            return;
        }

        that._stop();
    },
    'start': function(/* varless */ that) {
        /* var that = this; */
        that = this;

        fire_start(that);

        that.begin = dateNow();

        Tweener_Items.push(that);
        if (!Tweener.timerId) {
            Tweener.timerId = 1;
            C['animeframe']['request'](function() {
                if (that._loop) {
                    that._loop();
                }
            });
        }
    },
    _stop: function() {
        Tweener_Items = [];
        C['animeframe']['cancel'](Tweener.timerId);
        Tweener.timerId = NULL;
    },
    'stop': function() {
        this['fire']('stop');
        this._stop();
    }
});
function Tweener_setProp(target, prop, point) {
    if (prop['prefix'] || prop['suffix']) {
        target[prop['name']] = prop['prefix'] + point + prop['suffix'];
    }
    else {
        target[prop['name']] = point;
    }
};
/* Tweener.timerId = NULL; */
Tweener_Items = [];
Tweener['duration'] = 500;
