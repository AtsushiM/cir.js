/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        utility: Global.utility,
        onload: function(func) {
            this.utility.win.addEventListener('load', func);
        }
    }
});
