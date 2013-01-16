/* Test: "../../spec/_src/src/Tweener/test.js" */
Global.Tweener = klass({
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
        this.ease = option.ease || this._ease;
        this.onComplete = option.onComplete;

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
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
                setTimeout(callback, 1000 / Global.Tweener.FPS);
            };
        }()),
        loop: function() {
            var mine = this,
                items = Global.Tweener.Items,
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

                        Global.Tweener._setProp(item.target, prop, item.ease(
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

                        Global.Tweener._setProp(item.target, prop, prop.to);
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

                return true;
            }

            this.stop();
        },
        start: function() {
            var mine = this;

            mine.begin = Date.now();

            Global.Tweener.Items.push(mine);
            if (!Global.Tweener.timerId) {
                Global.Tweener.timerId = 1;
                mine._requestAnimationFrame(function() {
                    mine.loop();
                });
            }
        },
        stop: function() {
            Global.Tweener.Items = [];
            clearInterval(Global.Tweener.timerId);
            Global.Tweener.timerId = null;
        }
    }
});
Global.Tweener._setProp = function(target, prop, point) {
    target[prop.name] = prop.prefix + point + prop.suffix;
};
/* Global.Tweener.timerId = null; */
Global.Tweener.Items = [];
Global.Tweener.FPS = 30;
Global.Tweener.Duration = 500;
