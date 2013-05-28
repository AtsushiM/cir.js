WebStorage = classExtendBase({
    _createStore: function() {
        if (!this._array) {
            return {};
        }

        return [];
    },
    'init': function(config) {
        this._array = config['array'] || FALSE;
        this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
        this._storage = win[config['type'] + 'Storage'];
    },
    'set': function(key, val) {
        var i;

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
    'get': function(key /* varless */, mine) {
        mine = this;

        var ret = this._createStore(),
            i,
            storage = mine._storage;

        if (key) {
            return jsonParse(storage.getItem(mine._n + key));
        }

        for (i in storage) {
            if (!mine._n) {
                ret[i] = jsonParse(storage[i]);
            }
            else {
                key = i.split(mine._n)[1];
                if (key) {
                    ret[key] = jsonParse(storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key /* varless */, mine) {
        mine = this;

        key = mine._n + key;

        if (isDefined(mine._storage.getItem(key))) {
            mine._storage.removeItem(key);
        }
    },
    'reset': function(/* varless */ mine, i) {
        mine = this;

        if (!mine._n) {
            return mine._storage.clear();
        }

        /* var i; */

        for (i in mine._storage) {
            mine.remove(i);
        }
    }
});
