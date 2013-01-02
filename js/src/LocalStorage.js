/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global.LocalStorage = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.LocalStorage.instance) {
            return Global.LocalStorage.instance;
        }

        if (config.single) {
            Global.LocalStorage.instance = this;
        }
    },
    properties: {
        utility: Global.utility,
        storage: Global.utility.win.localStorage,
        set: function(key, val) {
            this.storage.setItem(key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            if (key) {
                return JSON.parse(this.storage.getItem(key));
            }

            var ret = {},
                i;

            for (i in this.storage) {
                ret[i] = JSON.parse(this.storage[i]);
            }

            return ret;
        },
        remove: function(key) {
            if (!this.storage.getItem(key)) {
                return false;
            }

            this.storage.removeItem(key);

            return true;
        },
        reset: function() {
            this.storage.clear();

            return true;
        }
    }
});
Global.LocalStorage.instance = null;
