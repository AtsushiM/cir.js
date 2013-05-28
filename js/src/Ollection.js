C['Ollection'] = classExtend(C['Model'], {
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

        var i;

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        mine._prev = mine._store['get']();

        for (i in key) {
            val = key[i];

            if (!isNumber(+i)) {
                return mine._notice('fail', key, val);
            }

            mine._store['set'](key, val);
            mine._observer['fire'](ev['CHANGE'], val, +i, mine._store['get']());
        }
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
