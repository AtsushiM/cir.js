/* Test: "../../spec/_src/src/klass/test.js" */
Global.klass = function(config) {
'use strict';

var util = Global.utility,
    override = util.override,
    constructor = config.constructor,
    method = config.method,
    extend = config.extend;

if (extend) {
    Global.extend(constructor, extend);
}

override(constructor.prototype, method);

return constructor;
};
