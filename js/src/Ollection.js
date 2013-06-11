C['Ollection'] = classExtend(Model, {
    'init': function(config /* varless */, that) {
        that = this;

        config = config || NULLOBJ;

        config['defaults'] = config['defaults'] || that['defaults'] || [],

        config['store'] =
            config['store'] ||
            that['store'] ||
            new C['DataStore']({
                'array': TRUE
            });

        that._super(config);
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
                that['fire'](ev['CHANGE'], val, +i, that._store['get']());
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
