/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global.LocalStorage = function(config) {
    'use strict';

    var Mine = Global.LocalStorage,
        util = Global.utility,
        override = util.override;

    config = override({
        single: false
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    var win = util.win,
        storage = win.localStorage,
        instanse = {
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

    if (config.single) {
        Mine.instance = store;
    }

    return instanse;
};
