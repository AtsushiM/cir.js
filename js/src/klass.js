/* Test: "../../spec/_src/src/klass/test.js" */
C['klass'] = function(config) {
    var init = config['init'] || function() {},
        wrap = function() {
            var inits = ancestors(this, '_init'),
                i = inits.length;

            for (; i--;) {
                inits[i].apply(this, arguments);
            }
        },
        prop = config['prop'],
        extend = config['extend'];

    if (extend) {
        C['extend'](wrap, extend);
    }
    wrap.prototype['_init'] = init;

    override(wrap.prototype, prop);

    return wrap;
};
C['klass']['ancestors'] = ancestors;

function ancestors(obj, propname /* varless */, props, flg) {
    // var props = [],
    //     flg = FALSE;
    props = [];

    while (!flg) {
        if (obj[propname] && props[props.length - 1] != obj[propname]) {
            props.push(obj[propname]);
        }
        if (obj._superclass && obj._superclass.prototype) {
            obj = obj._superclass.prototype;
        }
        else {
            flg = TRUE;
        }
    }

    return props;
}
function klassExtend(kls, init, prop, support) {
    var klass = C['klass']({
            'extend': kls,
            'init': init,
            'prop': prop
        });

    if (isDefined(support)) {
        klass['support'] = support;
    }

    return klass;
}
function klassExtendBase(init, prop, support) {
    return klassExtend(C['Base'], init, prop, support);
}
