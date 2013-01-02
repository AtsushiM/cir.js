/* Test: "../../spec/_src/src/selector/test.js" */
Global.selector = function(query, _parent) {
    'use strict';

    var Mine = Global.selector,
        _par = _parent || document,
        $elements = _par.querySelectorAll(query),
        base,
        instance,
        i = 0,
        len = $elements.length;

    // if (!len) {
    //     return $elements;
    // }

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
