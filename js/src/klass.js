/* Test: "../../spec/_src/src/klass/test.js" */
Global.klass = function(config) {
    'use strict';

    var util = Global.utility,
        override = util.override,
        init = config.init,
        properties = config.properties,
        extend = config.extend;

    if (extend) {
        Global.extend(init, extend);
    }

    override(init.prototype, properties);

    return init;
};
