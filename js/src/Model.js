C['Model'] = classExtendBase({
    _notice: function(eventname, key, val /* varless */, mine) {
        mine = this;

        mine._observer['fire'](eventname, mine._store['get']());

        if (key) {
            mine._observer['fire'](eventname + ':' + key, val);
        }
    },
    'init': function(config /* varless */, mine) {
        mine = this;

        config = config || NULLOBJ;

        var i,
            defaults = config['defaults'] || mine['defaults'] || {},
            events = config['events'] || mine['events'];

        mine._validate = config['validate'] || mine['validate'] || {};
        mine._store = config['store'] || mine['store'] || new C['DataStore']();
        mine._observer = new C['Observer']();

        for (i in defaults) {
            mine['set'](i, defaults[i]);
        }
        for (i in events) {
            mine['on'](i, events[i]);
        }
    },
    'set': function(key, val /* varless */, mine) {
        mine = this;

        if (
            mine._validate[key] &&
            !mine._validate[key](key, val)
        ) {
            return mine._notice('fail', key, val);
        }

        mine._prev = mine._store['get']();
        mine._store['set'](key, val);

        mine._notice(ev['CHANGE'], key, val);
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
    'remove': function(key /* varless */, mine) {
        mine = this;

        if (key) {
            var get = mine._store['get'](key),
                ret = mine._store['remove'](key);

            mine._notice('remove', key, get);

            return ret;
        }
    },
    'reset': function(/* varless */ ret) {
        ret = this._store['reset']();

        this._notice('reset');
    },
    'on': function(key, func /* varless */, proxyfunc) {
        /* var proxyfunc = proxy(this, func); */
        proxyfunc = proxy(this, func);
        this._observer['on'](key, proxyfunc);

        return proxyfunc;
    },
    'off': function(key, func) {
        this._observer['off'](key, func);
    },
    'fire': function(key, vars) {
        return this._observer['fire'].apply(this._observer, arguments);
    }
});
