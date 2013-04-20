C['Observer'] = classExtendBase({
    'init': function() {
        this._observed = {};
    },
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
    'fire': function(key, args___) {
        var target = this._observed[key],
            args = [],
            func,
            i;

        if (target) {
            args.push.apply(args, arguments);
            args = args.slice(1);

            for (i = target.length; i--;) {
                func = target[i];
                if (func) {
                    func.apply(null, args);
                }
            }
        }
    }
});
