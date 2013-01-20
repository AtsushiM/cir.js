/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global.WindowLoad = klass({
    extend: Base,
    init: function(config) {
        this._added = [];

        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        onload: function(func) {
            on(win, ev.load, func);
            this._added.push(win, ev.load, func);
        }
    }
});
