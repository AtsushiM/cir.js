/* Test: "../../spec/_src/src/WebStorage/test.js" */
WebStorage = klassExtendBase(function(config) {
    this._n = config['namespace'] ? config['namespace'] + '-' : EMPTY;
    this._storage = win[config['type'] + 'Storage'];
}, {
    'set': function(key, val) {
        this._storage.setItem(this._n + key, jsonStringify(val));
    },
    'get': function(key) {
        var mine = this,
            ret = {},
            i;

        if (key) {
            return jsonParse(mine._storage.getItem(mine._n + key));
        }

        for (i in mine._storage) {
            if (!this._n) {
                ret[i] = jsonParse(mine._storage[i]);
            }
            else {
                key = i.split(this._n)[1];
                if (key) {
                    ret[key] = jsonParse(mine._storage[i]);
                }
            }
        }

        return ret;
    },
    'remove': function(key) {
        key = this._n + key;

        if (isDefined(this._storage.getItem(key))) {
            this._storage.removeItem(key);
        }
    },
    'reset': function() {
        if (!this._n) {
            return this._storage.clear();
        }

        var i;

        for (i in this._storage) {
            this.remove(i);
        }
    }
});
