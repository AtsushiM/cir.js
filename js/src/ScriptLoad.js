/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = Global.klass({
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: new Global.Event(),
        requests: function(varary) {
            var i = 0,
                len = varary.length;

            for (; i < len; i++) {
                this.request(varary[i]);
            }
        },
        request: function(vars) {
            var script = this._el.create('script');

            script.type = 'text/javascript';
            script.src = vars.src;
            this._el.append(this._u.doc.body, script);

            if (vars.callback) {
                this._el.on(script, this._ev.load, vars.callback);
            }
        }
    }
});
