/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global.WindowLoad = klass({
    extend: Base,
    init: function(config) {
        this._super();

        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        onload: function(func) {
            this.ondispose(win, ev.load, func);
        }
    }
});
