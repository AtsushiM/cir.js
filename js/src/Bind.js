/* Test: "../../spec/_src/src/Bind/test.js" */
Global.Bind = klass({
    init: function(config) {
        this.handler = config;
        this.add();
    },
    properties: {
        getHandler: function() {
            return this.handler;
        },
        add: function() {
            this._e(true);
        },
        remove: function() {
            this._e(false);
        },
        _e: function(isBind) {
            var onoff = isBind ? on : off,
                i;

            for (i in this.handler.events) {
                onoff(
                    this.handler.element,
                    i,
                    this.handler.events[i]
                );
            }
        }
    }
});
