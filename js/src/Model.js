Model = C['Model'] = classExtendObserver({
    _notice: function(eventname, key, val /* varless */, that) {
        that = this;

        that['emit'](eventname, that._store['get']());

        if (key) {
            that['emit'](eventname + ':' + key, val);
        }
    },
    'init': function(config /* varless */, that) {
        that = this;

        config = config || NULLOBJ;

        that['_super']();

        var i,
            defaults = config['defaults'] || that['defaults'] || NULLOBJ,
            events = config['events'] || that['events'];

        that._validate = config['validate'] || that['validate'] || {};
        that._store = config['store'] || that['store'] || new C['Storage']();

        for (i in defaults) {
            that['set'](i, defaults[i]);
        }
        for (i in events) {
            that['on'](i, events[i]);
        }
    },
    'set': function(key, val /* varless */, that, i) {
        that = this;

        /* var i; */

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        that._prev = that._store['get']();

        for (i in key) {
            val = key[i];

            if (
                that._validate[i] &&
                !that._validate[i](i, val)
            ) {
                return that._notice('fail', i, val);
            }

            that._store['set'](i, val);
            that['emit'](ev['CHANGE'] + ':' + i, val);
        }

        that['emit'](ev['CHANGE'], that._store['get']());
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
    'remove': function(key /* varless */, that) {
        that = this;

        if (key) {
            var get = that._store['get'](key),
                ret = that._store['remove'](key);

            that._notice('remove', key, get);

            return ret;
        }
    },
    'reset': function(/* varless */ ret) {
        ret = this._store['reset']();

        this._notice('reset');
    }
});
