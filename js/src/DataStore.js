/* Test: "../../spec/_src/src/DataStore/test.js" */
Global['DataStore'] = klass({
    'extend': Base,
    'init': function(config) {
        config = config || {};

        // singleton
        if (config['single'] && Global['DataStore'].instance) {
            return Global['DataStore'].instance;
        }

        this.data = {};

        if (config['single']) {
            Global['DataStore'].instance = this;
        }
    },
    'properties': {
        'set': function(key, val) {
            this.data[key] = val;
        },
        'get': function(key) {
            var ret = {},
                i;

            if (key) {
                return this.data[key];
            }

            for (i in this.data) {
                ret[i] = this.data[i];
            }

            return ret;
        },
        'remove': function(key) {
            if (!this.data[key]) {
                return FALSE;
            }

            delete this.data[key];
        },
        'reset': function() {
            this.data = {};
        }
    }
});
