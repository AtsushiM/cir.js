/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        onload: function(func) {
            this._el.on(this._u.win, this._ev.load, func);
        }
    }
});
