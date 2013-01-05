/* Test: "../../spec/_src/src/Bind/test.js" */
Global.Bind = Global.klass({
    properties: {
        _el: Global.element,
        add: function(vars) {
            return this._exe(true, vars);
        },
        remove: function(vars) {
            return this._exe(false, vars);
        },
        _exe: function(isBind, vars) {
            var el = this._el,
                element = vars.element,
                events = vars.events,
                onoff = isBind ? el.on : el.off,
                i;

            for (i in events) {
                onoff(
                    element,
                    i,
                    events[i]
                );
            }

            return vars;
        }
    }
});
