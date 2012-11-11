/* Test: "../../spec/_src/src/Loading/test.js" */
(function() {
'use strict';

var win = Global.utility.win;

Global.Loading = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    methods: {
        onload: function(func) {
            win.addEventListener('load', func);
        }
    }
});
}());
