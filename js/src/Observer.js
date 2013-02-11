/* Test: "../../spec/_src/src/Observer/test.js" */
Global['Observer'] = klassExtendBase(function() {
    this.observed = {};
}, {
    'on': function(key, func) {
        var observed = this.observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func) {
        var mine = this,
            wrapfunc = function(vars) {
                func(vars);
                mine['off'](key, wrapfunc);
            };

        mine['on'](key, wrapfunc);
    },
    'off': function(key, func) {
        var observed = this.observed;

        if (!func) {
            return delete observed[key];
        }

        var target = observed[key],
            i;

        if (target) {
            for (i = target.length; i--;) {
                if (func === target[i]) {
                    target.splice(i, 1);

                    if (target.length === 0) {
                        delete observed[key];
                    }

                    return TRUE;
                }
            }
        }

        return FALSE;
    },
    'fire': function(key, vars) {
        var target = this.observed[key],
            func,
            i;

        if (target) {
            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func(vars);
                }
            }
        }
    }
});
