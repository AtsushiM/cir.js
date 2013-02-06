/* Test: "../../spec/_src/src/Observer/test.js" */
var ObserverName = 'Observer';
Global[ObserverName] = klassExtendBase(function(config) {
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
            delete observed[key];

            return TRUE;
        }

        var target = observed[key],
            i;

        if (!target) {
            return FALSE;
        }


        for (i = target.length; i--;) {
            if (func === target[i]) {
                target.splice(i, 1);

                if (target.length === 0) {
                    delete observed[key];
                }

                return TRUE;
            }
        }

        return FALSE;
    },
    'fire': function(key, vars) {
        var target = this.observed[key],
            func,
            i;

        if (!target) {
            return FALSE;
        }

        for (i = target.length; i--;) {
            func = target[i];
            if (func) {
                func(vars);
            }
        }

        return TRUE;
    }
});
