/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = Global.klass({
    init: function() {},
    properties: {
        utility: Global.utility,
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
                script.onload = vars.callback;
            }
        }
    }
});
