/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global.LocalStorage = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.LocalStorage.instance) {
            return Global.LocalStorage.instance;
        }

        this._n = config.namespace ? config.namespace + '-' : '';

        if (config.single) {
            Global.LocalStorage.instance = this;
        }
    },
    properties: {
        _s: win.localStorage,
        set: function(key, val) {
            this._s.setItem(this._n + key, JSON.stringify(val));
            return true;
        },
        get: function(key) {
            var mine = this;

            if (key) {
                return JSON.parse(mine._s.getItem(mine._n + key));
            }

            var ret = {},
                i,
                key;

            for (i in mine._s) {
                if (!this._n) {
                    ret[i] = JSON.parse(mine._s[i]);
                }
                else {
                    key = i.split(this._n)[1];
                    if (key) {
                        ret[key] = JSON.parse(mine._s[i]);
                    }
                }
            }

            return ret;
        },
        remove: function(key) {
            key = this._n + key;

            if (!this._s.getItem(key)) {
                return false;
            }

            this._s.removeItem(key);

            return true;
        },
        reset: function() {
            if (!this._n) {
                this._s.clear();

                return true;
            }

            var i;

            for (i in this._s) {
                this.remove(i);
            }
        }
    }
});
Global.LocalStorage.instance = null;
