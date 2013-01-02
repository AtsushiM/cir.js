/* Test: "../../spec/_src/src/Observer/test.js" */
Global.Observer = Global.klass({
    init: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && Global.Observer.instance) {
            return Global.Observer.instance;
        }

        this.observed = {};

        if (config.single) {
            Global.Observer.instance = this;
        }
    },
    properties: {
        getObserved: function() {
            return this.observed;
        },
        on: function(key, func) {
            var observed = this.observed;

            if (!observed[key]) {
                observed[key] = [];
            }

            observed[key].push(func);
        },
        one: function(key, func) {
            var mine = this,
                wrapfunc = function(vars) {
                    func(vars);
                    mine.off(key, wrapfunc);
                };

            mine.on(key, wrapfunc);
        },
        off: function(key, func) {
            var observed = this.observed;

            if (!func) {
                delete observed[key];

                return true;
            }

            var target = observed[key],
                i;

            if (!target) {
                return false;
            }


            for (i = target.length; i--;) {
                if (func === target[i]) {
                    target.splice(i, 1);

                    if (target.length === 0) {
                        delete observed[key];
                    }

                    return true;
                }
            }

            return false;
        },
        fire: function(key, vars) {
            var target = this.observed[key],
                func,
                i;

            if (!target) {
                return false;
            }

            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func(vars);
                }
            }

            return true;
        }
    }
});
Global.Observer.instance = null;
