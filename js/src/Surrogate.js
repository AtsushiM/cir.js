/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global.Surrogate = function(config) {
    'use strict';

    var delay = config.delay,
        callback = config.callback,
        args,
        waitid,
        surrogate = {
            request: function(arg) {
                args = arg;
                surrogate.clear();
                waitid = setTimeout(surrogate.flush, delay);
            },
            flush: function() {
                callback(args);
            },
            clear: function() {
                clearInterval(waitid);
            }
        };

    return surrogate;
};
