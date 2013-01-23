/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global['ScriptLoad'] = klass({
    'extend': Base,
    'init': function() {
        this['_super']();
        this.elements = [];
    },
    'properties': {
        'requests': function(varary, callback) {
            var mine = this,
                i = 0,
                len = varary.length;

            for (; i < len; i++) {
                request(i);
            }

            function request(i) {
                var callback = varary[i]['callback'],
                    check = function(e) {
                        callback(e);
                        countdown();
                    };

                varary[i]['callback'] = check;

                mine['request'](varary[i]);
            }
            function countdown() {
                i--;

                if (i === 0) {
                    callback(mine.elements);
                }
            }
        },
        'request': function(vars) {
            var mine = this,
                script = create('script'),
                disposeid;

            /* script.type = 'text/javascript'; */
            script.src = vars['src'];
            append(doc.body, script);
            mine.elements.push(script);

            if (vars['callback']) {
                disposeid = mine['contract'](script, ev['load'], function() {
                    mine['uncontract'](disposeid);
                    vars['callback'].apply(this, arguments);
                });
            }
        }
    }
});
