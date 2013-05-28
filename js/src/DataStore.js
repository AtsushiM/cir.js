C['DataStore'] = classExtendBase({
    _createStore: function() {
        if (!this._array) {
            return {};
        }

        return [];
    },
    'init': function(config) {
        config = config || NULLOBJ;

        this._array = config['array'] || FALSE,

        this['reset']();
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
            this._data[i] = key[i];
        }
    },
    'get': function(key) {
        var ret = this._createStore(),
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
            if (!this._array) {
                delete this._data[key];
            }
            else {
                this.data.splice(key, 1);
            }
        }
    },
    'reset': function() {
        this._data = this._createStore();
    }
});
