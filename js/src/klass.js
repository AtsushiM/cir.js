/* Test: "../../spec/_src/src/klass/test.js" */
Global['klass'] = function(config) {
    'use strict';

    var init = config['init'] || function() {},
        wrap = function() {
            var inits = ancestors(this, '__init__'),
                i = inits.length;

            for (; i--;) {
                inits[i].apply(this, arguments);
            }
        },
        prop = config['prop'],
        extend = config['extend'];

    if (extend) {
        Global['extend'](wrap, extend);
    }
    wrap.prototype['__init__'] = init;

    override(wrap.prototype, prop);

    return wrap;
};

function klassExtend(kls, init, prop) {
    return Global['klass']({
        'extend': kls,
        'init': init,
        'prop': prop
    });
}
function klassExtendBase(init, prop) {
    return klassExtend(Global['Base'], init, prop);
}
