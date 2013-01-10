/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = Global.klass({
    properties: {
        requests: function(varary) {
            var i = 0,
                len = varary.length;

            for (; i < len; i++) {
                this.request(varary[i]);
            }
        },
        request: function(vars) {
            var script = Global.element.create('script');

            script.type = 'text/javascript';
            script.src = vars.src;
            Global.element.append(doc.body, script);

            if (vars.callback) {
                Global.element.on(script, Global.event.load, vars.callback);
            }
        }
    }
});
