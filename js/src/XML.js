/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = function(config) {
    'use strict';

    var util = Global.utility,
        $child = util.$child,
        $$child = util.$$child,
        element = util.createElement('div'),
        data,
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

    if (config && config.data) {
        instanse.setData(config.data);
    }

    return instanse;
};
