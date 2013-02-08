/* Test: "../../spec/_src/src/selector/test.js" */
Global['$'] = function(query, _parent) {
    'use strict';

    var $el,
        base,
        instance,
        len;

    _parent = _parent || doc;

    if (isString(query)) {
        $el = _parent.querySelectorAll(query);
    }
    else {
        $el = [query];
        query = EMPTY;
    }
    len = $el.length;

    base = function() {};
    base.prototype = Global['$'].methods;
    instance = new base();

    instance.length = len;
    /* instance._selector = query; */
    instance._parent = _parent;

    /* for (; i < len; i++) { */
    for (;len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
