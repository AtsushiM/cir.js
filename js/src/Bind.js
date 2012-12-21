/* Test: "../../spec/_src/src/Bind/test.js" */
Global.Bind = Global.klass({
    properties: {
        utility: Global.utility,
        add: function(vars) {
            return this.exe(vars, true);
        },
        remove: function(vars) {
            return this.exe(vars, false);
        },
        exe: function(vars, isBind) {
            var util = this.utility,
                element = vars.element,
                events = vars.events,
                onoff = isBind ? util.onEvent : util.offEvent,
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
