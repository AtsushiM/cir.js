/* Test: "../../spec/_src/src/Observer/test.js" */
C['Observer'] = klassExtendBase(function() {
    this._observed = {};
}, {
    'on': function(key, func) {
        if (!this._observed[key]) {
            this._observed[key] = [];
        }

        this._observed[key].push(func);
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
        if (!func) {
            return delete this._observed[key];
        }

        var target = this._observed[key],
            i;

        if (target) {
            for (i = target.length; i--;) {
                if (func === target[i]) {
                    target.splice(i, 1);

                    if (target.length === 0) {
                        delete this._observed[key];
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
