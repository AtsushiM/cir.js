/* Test: "../../spec/_src/src/DataStore/test.js" */
Global.DataStore = function(config) {
    'use strict';

    var data = {},
        store = {
            setData: function(key, val) {
                data[key] = val;
                return true;
            },
            getData: function(key) {
                if (key) {
                    return data[key];
                }

                var ret = {};
                for (var i in data) {
                    ret[i] = data[i];
                }

                return ret;
            },
            resetData: function() {
                data = {};
                return true;
            }
        };

    // singleton
    function getInstance() {
        return store;
    }
    Global.DataStore = function() {
        return getInstance();
    };
    return getInstance();
};

