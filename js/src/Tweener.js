/* Test: "../../spec/_src/src/Tweener/test.js" */
Global.Tweener = Global.klass({
    init: function(target, property, option) {
        var name,
            prop;

        option = option || {};

        this.target = target;
        this.property = [];

        for (name in property) {
            prop = property[name];
            prop.name = name;

            prop.distance = prop.to - prop.from;
            prop.prefix = prop.prefix || '';
            prop.suffix = prop.suffix || 'px';

            this.property.push(prop);
        }

        this.duration = option.duration || Global.Tweener.Duration;
        this.easing = option.easing || this._easing;
        this.onComplete = option.onComplete;

        this.begin = Date.now();

        Global.Tweener.Items.push(this);
        if (!Global.Tweener.timerId) {
            this.start();
        }
    },
    properties: {
        _easing: function(time, from, dist, duration) {
            return dist * time / duration + from;
        },
        setProp: function(target, prop, point) {
            target[prop.name] = prop.prefix + point + prop.suffix;
        },
        loop: function() {
            var items = Global.Tweener.Items,
                item,
                now = Date.now(),
                time,
                n = items.length,
                i,
                len,
                prop;

            while (n--) {
                item = items[n];
                len = item.property.length;
                time = now - item.begin;

                if (time < item.duration) {
                    for (i = 0; i < len; i++) {
                        prop = item.property[i];

                        this.setProp(item.target, prop, item.easing(
                            time,
                            prop.from,
                            prop.distance,
                            item.duration
                        ));
                    }
                }
                else {
                    for (i = 0; i < len; i++) {
                        prop = item.property[i];

                        this.setProp(item.target, prop, prop.to);
                    }
                    if (item.onComplete) {
                        item.onComplete();
                    }
                    items.splice(n, 1);
                }
            }
            if (!items.length) {
                this.end();
            }
        },
        start: function() {
            var mine = this;

            Global.Tweener.timerId = setInterval(
                function() {
                    mine.loop();
                },
                1000 / Global.Tweener.FPS
            );
        },
        end: function() {
            Global.Tweener.Items = [];
            clearInterval(Global.Tweener.timerId);
            Global.Tweener.timerId = null;
        }
    }
});
Global.Tweener.timerId = null;
Global.Tweener.Items = [];
Global.Tweener.FPS = 30;
Global.Tweener.Duration = 500;
