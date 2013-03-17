/* Test: "../../spec/_src/src/Observer/test.js" */
C['Observer'] = klassExtendBase(function() {
    this._observed = {};
}, {
    'on': function(key, func /* varless */, mine, observed) {
        mine = this;
        observed = mine._observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        mine['on'](key, wrapfunc);

        function wrapfunc(vars) {
            func(vars);
            mine['off'](key, wrapfunc);
        }
    },
    'off': function(key, func /* varless */, mine) {
        mine = this;

        var observed = mine._observed,
            target = observed[key],
            i;

        if (!func) {
            return delete observed[key];
        }

        if (target) {
            for (i = target.length; i--;) {
                if (func == target[i]) {
                    target.splice(i, 1);

                    if (target.length == 0) {
                        delete observed[key];
                    }

                    return TRUE;
                }
            }
        }

        return FALSE;
    },
    'fire': function(key, vars) {
        var target = this._observed[key],
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
