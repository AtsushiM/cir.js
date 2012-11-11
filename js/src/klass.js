/* Test: "../../spec/_src/src/klass/test.js" */
Global.klass = function(config) {
    'use strict';

    var util = Global.utility,
        override = util.override,
        init = config.init,
        methods = config.methods,
        extend = config.extend;

    if (extend) {
        Global.extend(init, extend);
    }

    override(init.prototype, methods);

    return init;
};
