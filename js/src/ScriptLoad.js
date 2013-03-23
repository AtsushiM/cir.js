/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
C['ScriptLoad'] = classExtendBase({
    'init': function(config) {
        this._els = [];

        if (config) {
            this['requests'](config);
        }
    },
    'requests': function(varary, callback) {
        var mine = this,
            i = 0,
            len = varary.length,
            async = new Async({
                'waits': varary,
                'callback': function() {
                    callback(mine._els);
                }
            }),
            wrapback;

        for (; i < len; i++) {
            wrapback = varary[i]['callback'];

            varary[i]['callback'] = function(e) {
                wrapback(e);
                async['pass']();
            };

            mine['request'](varary[i]);
        }
    },
    'request': function(vars) {
        var mine = this,
            script = create('script'),
            disposeid;

        /* script.type = 'text/javascript'; */
        script.src = vars['src'];
        append(body, script);
        mine._els.push(script);

        if (vars['callback']) {
            disposeid = mine['contract'](script, ev['LOAD'], function() {
                mine['uncontract'](disposeid);
                vars['callback'].apply(this, arguments);
            });
        }
    }
});
