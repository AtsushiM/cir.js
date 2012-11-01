/* Test: "../../spec/_src/src/DataStore/test.js" */
(function() {
var instance;

Global.DataStore = function(config) {
    'use strict';

    config = config || {single: false};

    // singleton
    if (config.single && instance) {
        return instance;
    }

    this.data = {};

    if (config.single) {
        instance = this;
    }
};
Global.DataStore.prototype = {
    setData: function(key, val) {
        this.data[key] = val;
        return true;
    },
    getData: function(key) {
        var data = this.data;

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
        var data = this.data;

        if (!data[key]) {
            return false;
        }

        delete data[key];

        return true;
    },
    resetData: function() {
        this.data = {};
        return true;
    }
};
}());
