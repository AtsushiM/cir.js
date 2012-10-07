/* Test: "../../spec/_src/src/Proxy/test.js" */
Global.Proxy = function(config) {
    'use strict';

    var delay = config.delay,
        callback = config.callback,
        args,
        waitid,
        proxy = {
            request: function(arg) {
                args = arg;
                proxy.clear();
                waitid = setTimeout(proxy.flush, delay);
            },
            flush: function() {
                callback(args);
            },
            clear: function() {
                clearInterval(waitid);
            }
        };

    return proxy;
};
