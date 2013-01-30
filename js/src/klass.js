/* Test: "../../spec/_src/src/klass/test.js" */
Global['klass'] = function(config) {
    'use strict';

    var init = config['init'] || function() {},
        properties = config['properties'],
        extend = config['extend'];

    if (extend) {
        Global['extend'](init, extend);
    }

    override(init.prototype, properties);

    return init;
};

function klassExtend(kls, init, properties) {
    return Global['klass']({
        'extend': kls,
        'init': init,
        'properties': properties
    });
}
function klassExtendBase(init, properties) {
    return klassExtend(Global['Base'], init, properties);
}
