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
            prop['suffix'] = prop['suffix'] ||
                (prop['suffix'] === EMPTY ? EMPTY : 'px');

            mine._property.push(prop);
        }

        mine._duration = option['duration'] || Tweener['duration'];
        mine._ease = option['ease'] || mine.__ease;
        mine._oncomplete = option['oncomplete'];

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    // easeOutExpo
    __ease: function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
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
                if (item._oncomplete) {
                    item._oncomplete();
                }
                items.splice(n, 1);
            }
        }

        if (items.length) {
            C['animeframe']['request'](function() {
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
            C['animeframe']['request'](function() {
                mine._loop();
            });
        }
    },
    'stop': function() {
        Tweener.Items = [];
        C['animeframe']['cancel'](Tweener.timerId);
        Tweener.timerId = NULL;
    }
});
Tweener._setProp = function(target, prop, point) {
    if (prop['prefix'] || prop['suffix']) {
        target[prop['name']] = prop['prefix'] + point + prop['suffix'];
    }
    else {
        target[prop['name']] = point;
    }
};
/* Tweener.timerId = NULL; */
Tweener.Items = [];
Tweener['duration'] = 500;
