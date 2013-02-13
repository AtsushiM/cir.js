/* Test: "../../spec/_src/src/DataStore/test.js" */
C['DataStore'] = klassExtendBase(function() {
    this._data = {};
}, {
    'set': function(key, val) {
        this._data[key] = val;
    },
    'get': function(key) {
        if (key) {
            return this._data[key];
        }

        var ret = {},
            i;

        for (i in this._data) {
            ret[i] = this._data[i];
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
