/* Test: "../../spec/_src/src/selector/test.js" */
Global.$ = function(query, _parent) {
    'use strict';

    var Mine = Global.$,
        $elements,
        base,
        instance,
        i = 0,
        len;

    _parent = _parent || doc;

    if (isString(query)) {
        $elements = _parent.querySelectorAll(query);
    }
    else {
        $elements = [query];
        query = '';
    }
    len = $elements.length;

    base = function() {};
    base.prototype = Mine.methods;
    instance = new base();

    instance.length = len;
    instance._selector = query;
    instance._parent = _parent;

    for (; i < len; i++) {
        instance[i] = $elements[i];
    }

    return instance;
};
