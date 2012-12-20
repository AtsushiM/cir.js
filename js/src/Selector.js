/* Test: "../../spec/_src/src/Selector/test.js" */
Global.Selector = function(query, _parent) {
    'use strict';

    var Mine = Global.Selector,
        _par = _parent || document,
        $elements = _par.querySelectorAll(query),
        base,
        instanse,
        i = 0,
        len = $elements.length;

    // if (!len) {
    //     return $elements;
    // }

    base = function() {};
    base.prototype = Mine.methods;
    instanse = new base();

    instanse.length = len;
    instanse.selector = query;

    for (; i < len; i++) {
        instanse[i] = $elements[i];
    }

    return instanse;
};
