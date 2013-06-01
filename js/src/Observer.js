Observer = C['Observer'] = classExtendBase({
    'init': function() {
        this._observed = {};
    },
    'on': function(key, func /* varless */, that, observed) {
        that = this;
        observed = that._observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func /* varless */, that) {
        /* var that = this; */
        that = this;

        that['on'](key, wrapfunc);

        function wrapfunc(vars) {
            func(vars);
            that['off'](key, wrapfunc);
        }
    },
    'off': function(key, func /* varless */, that, observed, target, i) {
        // var observed = that._observed,
        //     target = observed[key],
        //     i;
        that = this;
        observed = that._observed;

        if (!func) {
            return delete observed[key];
        }

        target = observed[key];

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
    'fire': function(key) {
        var target = this._observed[key],
            args,
            func,
            i,
            len;

        if (target) {
            args = toArray(arguments).slice(1);

            for (i = 0, len = target.length; i < len; i++) {
                func = target[i];
                if (func) {
                    func.apply(NULL, args);
                }
            }
        }
    }
});
