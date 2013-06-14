WebStorage = classExtendBase({
    'init': function(config) {
        this._array = config['array'] || FALSE;
        this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
        this._storage = win[config['type'] + 'Storage'];
    },
    'set': function(key, val/* varless */, i) {
        /* var i; */

        /* if (typeof key !== 'object') { */
        if (!isObject(key)) {
            i = {};
            i[key] = val;
            key = i;
        }

        for (i in key) {
            this._storage.setItem(this._n + i, jsonStringify(key[i]));
        }
    },
    'get': function(key /* varless */, that) {
        that = this;

        var ret = this._array ? [] : {},
            i,
            storage = that._storage;

        if (key) {
            return jsonParse(storage.getItem(that._n + key));
        }

        for (i in storage) {
            if (!that._n) {
                ret[i] = jsonParse(storage[i]);
            }
            else {
                key = i.split(that._n)[1];
                if (key) {
                    ret[key] = jsonParse(storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key /* varless */, that) {
        that = this;

        key = that._n + key;

        if (isDefined(that._storage.getItem(key))) {
            that._storage.removeItem(key);
        }
    },
    'reset': function(/* varless */ that, i) {
        that = this;

        if (!that._n) {
            return that._storage.clear();
        }

        /* var i; */

        for (i in that._storage) {
            that.remove(i);
        }
    }
});
