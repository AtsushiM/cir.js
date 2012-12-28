/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = Global.klass({
    init: function(config) {
        if (config && config.onload) {
            this.onload(config.onload);
        }
    },
    properties: {
        utility: Global.utility,
        _event: new Global.Event(),
        onload: function(func) {
            this.utility.onEvent(this.utility.win, this._event.load, func);
        }
    }
});
