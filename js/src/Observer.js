/* Test: "../../spec/_src/src/Observer/test.js" */
Global.Observer = function() {
    'use strict';

    var observed = {},
        instanse = {
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
                for (var i in obj) {
                    instanse.on(i, obj[i]);
                }
            },
            off: function(key, func) {
                if (!func) {
                    deleteKey(key);

                    return true;
                }

                var target = observed[key];

                if (!target) {
                    return false;
                }

                for (var i = 0, len = target.length; i < len; i++) {
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
                for (var i in obj) {
                    instanse.off(i, obj[i]);
                }
            },
            fire: function(key, config) {
                var target = observed[key],
                    func;

                if (!target) {
                    return false;
                }

                for (var i = 0, len = target.length; i < len; i++) {
                    func = target[i];
                    if (func) {
                        func(config);
                    }
                }

                return true;
            }
        };

    function deleteKey(key) {
        delete observed[key];
    }

    return instanse;
};
