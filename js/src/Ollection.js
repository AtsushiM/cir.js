C['Ollection'] = classExtend(C['Model'], {
    _notice: function(eventname, key, val /* varless */, mine) {
        mine = this;

        mine._observer['fire'](eventname, val, key, mine._store['get']());
    },
    'init': function(config /* varless */, mine) {
        mine = this;

        config = config || NULLOBJ;

        var i,
            defaults = config['defaults'] || mine['defaults'] || [],
            events = config['events'] || mine['events'];

        /* mine._validate = config['validate'] || mine['validate'] || {}; */
        mine._store =
            config['store'] ||
            mine['store'] ||
            new C['DataStore']({
                'array': TRUE
            });
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

        if (!isNumber(+key)) {
            return mine._notice('fail', key, val);
        }

        mine._prev = mine._store['get']();
        mine._store['set'](key, val);

        mine._notice(ev['CHANGE'], key, val);
    },
    'add': function(val) {
        var collectid = this._store['get']().length;

        this['set'](collectid, val);

        return collectid;
    },
    'each': function(callback) {
        var i,
            collection = this['get']();

        for (i in collection) {
            callback.apply(this, [collection[i], i, collection]);
        }
    },
    'map': function(callback) {
        var i,
            collection = this['get']();

        for (i in collection) {
            this['set'](i, callback.apply(this, [collection[i], i, collection]));
        }
    }
});
