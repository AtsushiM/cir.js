/* Test: "../../spec/_src/src/ScriptLoad/test.js" */
Global.ScriptLoad = function(config) {
    'use strict';

    var Mine = Global.ScriptLoad,
        instanse = {
            requests: function(varary) {
                var i = 0,
                    len = varary.length;

                for (; i < len; i++) {
                    instanse.request(varary[i]);
                }
            },
            request: function(vars) {
                var script = document.createElement('script');

                script.type = 'text/javascript';
                script.src = vars.src;
                document.body.appendChild(script);

                if (vars.callback) {
                    script.onload = vars.callback;
                }
            }
        };

    return instanse;
};
