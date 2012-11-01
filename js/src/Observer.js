/* Test: "../../spec/_src/src/Observer/test.js" */
(function() {
'use strict';

var instance;

Global.Observer = function(config) {
    config = config || {single: false};

    // singleton
    if (config.single && instance) {
        return instance;
    }

    this.observed = {};

    if (config.single) {
        instance = this;
    }
};
Global.Observer.prototype = {
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
    forOn: function(obj) {
        var i;

        for (i in obj) {
            this.on(i, obj[i]);
        }
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
    forOff: function(obj) {
        var i;
        for (i in obj) {
            this.off(i, obj[i]);
        }
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
};
}());
