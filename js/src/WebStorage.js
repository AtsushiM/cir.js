/* Test: "../../spec/_src/src/WebStorage/test.js" */
WebStorage = klassExtendBase(function(config) {
    this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
    this._storage = win[config['type'] + 'Storage'];
}, {
    'set': function(key, val) {
        this._storage.setItem(this._n + key, jsonStringify(val));
    },
    'get': function(key /* varless */, mine) {
        mine = this;

        var ret = {},
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
