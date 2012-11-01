/* Test: "../../spec/_src/src/LocalStorage/test.js" */
(function() {
'use strict';

var instance,
    win = Global.utility.win,
    storage = win.localStorage;

Global.LocalStorage = function(config) {
    config = config || {single: false};

    // singleton
    if (config.single && instance) {
        return instance;
    }

    if (config.single) {
        instance = this;
    }
};
Global.LocalStorage.prototype = {
    setData: function(key, val) {
        storage.setItem(key, JSON.stringify(val));
        return true;
    },
    getData: function(key) {
        if (key) {
            return JSON.parse(storage.getItem(key));
        }

        var ret = {},
            i;

        for (i in storage) {
            ret[i] = JSON.parse(storage[i]);
        }

        return ret;
    },
    removeData: function(key) {
        if (!storage.getItem(key)) {
            return false;
        }

        storage.removeItem(key);

        return true;
    },
    resetData: function() {
        storage.clear();

        return true;
    }
};
}());
