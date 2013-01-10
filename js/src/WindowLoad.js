/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global.WindowLoad = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        onload: function(func) {
            Global.element.on(win, Global.event.load, func);
        }
    }
});
