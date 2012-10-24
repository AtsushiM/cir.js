/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = function(config) {
    'use strict';

    var util = Global.utility,
        $child = util.$child,
        $$child = util.$$child,
        element = util.createElement('div'),
        data = config.data,
        instanse = {
            getData: function() {
                return data;
            },
            setData: function(d) {
                data =
                element.innerHTML = d;
            },
            $: function(selector) {
                return $child(selector, element);
            },
            $$: function(selector) {
                return $$child(selector, element);
            }
        };

    if (data) {
        element.innerHTML = data;
    }

    return instanse;
};

