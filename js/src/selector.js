/* Test: "../../spec/_src/src/selector/test.js" */
Global.$ = function(query, _parent) {
    'use strict';

    var Mine = Global.$,
        util = Global.utility,
        _par = _parent || document,
        $elements,
        base,
        instance,
        i = 0,
        len;

    if (util.isString(query)) {
        $elements = _par.querySelectorAll(query);
    }
    else {
        $elements = [query];
    }
    len = $elements.length;

    base = function() {};
    base.prototype = Mine.methods;
    instance = new base();

    instance.length = len;
    instance.selector = query;

    for (; i < len; i++) {
        instance[i] = $elements[i];
    }

    return instance;
};
