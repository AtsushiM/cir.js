/* Test: "../../spec/_src/src/DataStore/test.js" */
Global.DataStore = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.DataStore.instance) {
            return Global.DataStore.instance;
        }

        this.d = {};

        if (config.single) {
            Global.DataStore.instance = this;
        }
    },
    properties: {
        set: function(key, val) {
            this.d[key] = val;
            return true;
        },
        get: function(key) {
            var data = this.d;

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
            var data = this.d;

            if (!data[key]) {
                return false;
            }

            delete data[key];

            return true;
        },
        reset: function() {
            this.d = {};
            return true;
        }
    }
});
Global.DataStore.instance = null;
