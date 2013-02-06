/* Test: "../../spec/_src/src/Model/test.js" */
Global['Model'] = klassExtendBase(function(config) {
    var i,
        defaults = config['defaults'] || {},
        on = config['on'];

    this._validate = config['validate'];
    this._store = new C['DataStore']();
    this._observer = new C['Observer']();

    for (i in defaults) {
        this['set'](i, defaults[i]);
    }
    for (i in on) {
        this['on'](i, on[i]);
    }
}, {
    notice: function(eventname, key, val) {
        this._observer['fire'](eventname, this._store['get']());

        if (key) {
            this._observer['fire'](eventname + ':' + key, val);
        }
    },
    'set': function(key, val) {
        if (
            this._validate[key] &&
            !this._validate[key](val)
        ) {
            throw new Error('cir-framework: Model / Validate Error.');
        }

        this._prev = this._store['get']();
        this._store['set'](key, val);

        this.notice(ev['CHANGE'], key, val);

        return true;
    },
    'prev': function(key) {
        if (!key) {
            return this._prev;
        }
        return this._prev[key];
    },
    'get': function(key) {
        return this._store['get'](key);
    },
    'remove': function(key) {
        if (!key) {
            return false;
        }

        var get = this._store['get'](key),
            ret = this._store['remove'](key);

        this.notice('remove', key, get);

        return ret;
    },
    'reset': function() {
        var ret = this._store['reset']();

        this.notice('reset');

        return ret;
    },
    'on': function(key, func) {
        this._observer['on'](key, bind(this, func));
    },
    'off': function(key, func) {
        return this._observer['off'](key, func);
    },
    'fire': function(key, vars) {
        return this._observer['fire'](key, vars);
    }
});
