/* Test: "../../spec/_src/src/selector/test.js" */
var $base = function(){};
C['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    /* var base = function(){}; */
    /* base.prototype = $_methods; */

    /* _parent = _parent || doc; */

    /* if (isString(query)) { */
    if (typeof query === 'string') {
        _parent = _parent || doc;
        $el = _parent.querySelectorAll(query);
    }
    else {
        $el = [query];
        query = EMPTY;
    }
    len = $el.length;
    /* instance = new base(); */
    instance = new $base();

    instance.length = len;
    /* instance._selector = query; */
    /* instance._parent = _parent; */

    /* for (; i < len; i++) { */
    for (;len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
