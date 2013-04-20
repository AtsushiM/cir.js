C['DataStore'] = classExtendBase({
    'init': function() {
        this._data = {};
    },
    'set': function(key, val) {
        this._data[key] = val;
    },
    'get': function(key) {
        var ret = {},
            data = this._data,
            i;

        if (key) {
            return data[key];
        }

        for (i in data) {
            ret[i] = data[i];
        }

        return ret;
    },
    'remove': function(key) {
        if (isDefined(this._data[key])) {
            delete this._data[key];
        }
    },
    'reset': function() {
        this._data = {};
    }
});
