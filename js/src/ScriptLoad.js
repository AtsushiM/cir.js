/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = Global.klass({
    properties: {
        utility: Global.utility,
        _event: new Global.Event(),
        requests: function(varary) {
            var i = 0,
                len = varary.length;

            for (; i < len; i++) {
                this.request(varary[i]);
            }
        },
        request: function(vars) {
            var script = this.utility.makeElement('script');

            script.type = 'text/javascript';
            script.src = vars.src;
            this.utility.body.appendChild(script);

            if (vars.callback) {
                this.utility.onEvent(script, this._event.load, vars.callback);
            }
        }
    }
});
