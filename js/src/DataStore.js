C['DataStore'] = classExtendBase({
    _createStore: function() {
        if (this._array) {
            return [];
        }

        return {};
    },
    'init': function(config) {
        this._array = (config || NULLOBJ)['array'] || FALSE,

        this['reset']();
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
    'remove': function(key/* varless */, that) {
        that = this;

        if (isDefined(that._data[key])) {
            if (that._array) {
                that.data.splice(key, 1);
            }
            else {
                delete that._data[key];
            }
        }
    },
    'reset': function() {
        this._data = this._createStore();
    }
});
