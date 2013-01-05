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
        _s: Global.utility.win.localStorage,
        set: function(key, val) {
            this._s.setItem(key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            if (key) {
                return JSON.parse(this._s.getItem(key));
            }

            var ret = {},
                i;

            for (i in this._s) {
                ret[i] = JSON.parse(this._s[i]);
            }

            return ret;
        },
        remove: function(key) {
            if (!this._s.getItem(key)) {
                return false;
            }

            this._s.removeItem(key);

            return true;
        },
        reset: function() {
            this._s.clear();

            return true;
        }
    }
});
Global.LocalStorage.instance = null;
