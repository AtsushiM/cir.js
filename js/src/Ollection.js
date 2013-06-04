C['Ollection'] = classExtend(C['Model'], {
    'init': function(config /* varless */, that, i, defaults, events) {
        that = this;

        config = config || NULLOBJ;

        // var i,
        //     defaults = config['defaults'] || that['defaults'] || [],
        //     events = config['events'] || that['events'];
        defaults = config['defaults'] || that['defaults'] || [],
        events = config['events'] || that['events'];

        /* that._validate = config['validate'] || that['validate'] || {}; */
        that._store =
            config['store'] ||
            that['store'] ||
            new C['DataStore']({
                'array': TRUE
            });
        that._observer = new Observer();

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

            if (isNumber(+i)) {
                that._store['set'](key, val);
                that._observer['fire'](ev['CHANGE'], val, +i, that._store['get']());
            }
            return that._notice('fail', key, val);
        }
    },
    'add': function(val/* varless */, collectid) {
        /* var collectid = this._store['get']().length; */
        collectid = this._store['get']().length;

        this['set'](collectid, val);

        return collectid;
    },
    'each': function(callback/* varless */, i, collection) {
        // var i,
        //     collection = this['get']();
        collection = this['get']();

        for (i in collection) {
            callback.apply(this, [collection[i], i, collection]);
        }
    },
    'map': function(callback/* varless */, that, i, collection) {
        that = this;
        // var i,
        //     collection = this['get']();
        collection = that['get']();

        for (i in collection) {
            that['set'](i, callback.apply(that, [collection[i], i, collection]));
        }
    }
});
