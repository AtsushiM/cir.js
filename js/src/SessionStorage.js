/* Test: "../../spec/_src/src/SessionStorage/test.js" */
Global.SessionStorage = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.SessionStorage.instance) {
            return Global.SessionStorage.instance;
        }

        if (config.single) {
            Global.SessionStorage.instance = this;
        }
    },
    properties: {
        utility: Global.utility,
        storage: Global.utility.win.sessionStorage,
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
Global.SessionStorage.instance = null;
