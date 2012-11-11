/* Test: "../../spec/_src/src/LocalStorage/test.js" */
(function() {
'use strict';

var instance,
    win = Global.utility.win,
    storage = win.localStorage;

Global.LocalStorage = Global.klass({
    init: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        if (config.single) {
            instance = this;
        }
    },
    methods: {
        set: function(key, val) {
            storage.setItem(key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
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
        remove: function(key) {
            if (!storage.getItem(key)) {
                return false;
            }

            storage.removeItem(key);

            return true;
        },
        reset: function() {
            storage.clear();

            return true;
        }
    }
});
}());
