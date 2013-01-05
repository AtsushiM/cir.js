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
        _s: Global.utility.win.sessionStorage,
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
Global.SessionStorage.instance = null;
