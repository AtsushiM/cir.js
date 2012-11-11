/* Test: "../../spec/_src/src/DataStore/test.js" */
(function() {
'use strict';

var instance;

Global.DataStore = Global.klass({
    init: function(config) {
        config = config || {single: false};

        // singleton
        if (config.single && instance) {
            return instance;
        }

        this.data = {};

        if (config.single) {
            instance = this;
        }
    },
    methods: {
        set: function(key, val) {
            this.data[key] = val;
            return true;
        },
        get: function(key) {
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
        remove: function(key) {
            var data = this.data;

            if (!data[key]) {
                return false;
            }

            delete data[key];

            return true;
        },
        reset: function() {
            this.data = {};
            return true;
        }
    }
});
}());
