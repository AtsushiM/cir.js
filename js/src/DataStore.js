/* Test: "../../spec/_src/src/DataStore/test.js" */
Global.DataStore = function(config) {
    'use strict';

    var Mine = Global.DataStore,
        override = Global.utility.override,
        data,
        store;

    config = override({
        single: false
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    data = {},
    store = {
        setData: function(key, val) {
            data[key] = val;
            return true;
        },
        getData: function(key) {
            if (key) {
                return data[key];
            }

            var ret = {},
                i;
            for (i in data) {
                ret[i] = data[i];
            }

            return ret;
        },
        removeData: function(key) {
            if (!data[key]) {
                return false;
            }

            delete data[key];

            return true;
        },
        resetData: function() {
            data = {};
            return true;
        }
    };

    if (config.single) {
        Mine.instance = store;
    }

    return store;
};
