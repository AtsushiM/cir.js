// var $base = function(){},
//     checkQuerySelector = /^(.+[\#\.\s\[>:,]|[\[:])/;
function $base() {}

C['$'] = function(query, _parent /* varless */, $el, instance, len) {
    // var $el,
    //     base,
    //     instance,
    //     len;

    // if (typeof query == 'string') {
    //     if (!_parent) {
    //         if (
    //             checkQuerySelector.test(query)
    //         ) {
    //             $el = doc.querySelectorAll(query);
    //         }
    //         else if (query[0] == '#') {
    //             $el = [doc.getElementById(query.substring(1, query.length))];
    //         }
    //         else if (query[0] == '.') {
    //             $el =
    //                 doc
    //                 .getElementsByClassName(query.substring(1, query.length));
    //         }
    //         else {
    //             $el = doc.getElementsByTagName(query);
    //         }
    //     }
    //     else {
    //         $el = _parent.querySelectorAll(query);
    //     }
    // }
    // else {
    //     $el = [query];
    // }
    if (typeof query == 'string') {
        $el = (_parent || doc).querySelectorAll(query);
    }
    else {
        $el = [query];
    }

    instance = new $base();
    len = instance.length = $el.length;

    for (; len--;) {
        instance[len] = $el[len];
    }

    return instance;
};
