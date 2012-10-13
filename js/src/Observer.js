/* Test: "../../spec/_src/src/Observer/test.js" */
Global.Observer = function(config) {
    'use strict';

    var Mine = Global.Observer,
        override = Global.utility.override;

    config = override({
        single: false
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    var observed = {},
        instance = {
            getObserved: function() {
                return observed;
            },
            on: function(key, func) {
                if (!observed[key]) {
                    observed[key] = [];
                }

                observed[key].push(func);
            },
            forOn: function(obj) {
                var i;
                for (i in obj) {
                    instance.on(i, obj[i]);
                }
            },
            one: function(key, func) {
                wrapfunc = function(vars) {
                    func(vars);
                    instance.off(key, wrapfunc);
                };

                instance.on(key, wrapfunc);
            },
            off: function(key, func) {
                if (!func) {
                    deleteKey(key);

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
                            deleteKey(key);
                        }

                        return true;
                    }
                }

                return false;
            },
            forOff: function(obj) {
                var i;
                for (i in obj) {
                    instance.off(i, obj[i]);
                }
            },
            fire: function(key, vars) {
                var target = observed[key],
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
        };

    function deleteKey(key) {
        delete observed[key];
    }

    if (config.single) {
        Mine.instance = instance;
    }

    return instance;
};
