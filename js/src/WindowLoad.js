/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global.WindowLoad = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        onload: function(func) {
            on(win, ev.load, func);
        }
    }
});
