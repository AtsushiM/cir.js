/* Test: "../../spec/_src/src/Bind/test.js" */
Global.Bind = Global.klass({
    init: function(config) {
        this.handler = config;
        this.add();
    },
    properties: {
        _el: Global.element,
        getHandler: function() {
            return this.handler;
        },
        add: function() {
            return this._exe(true);
        },
        remove: function() {
            return this._exe(false);
        },
        _exe: function(isBind) {
            var el = this._el,
                onoff = isBind ? el.on : el.off,
                i;

            for (i in this.handler.events) {
                onoff(
                    this.handler.element,
                    i,
                    this.handler.events[i]
                );
            }

            return this.handler;
        }
    }
});
