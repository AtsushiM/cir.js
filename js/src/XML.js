/* Test: "../../spec/_src/src/XML/test.js" */
(function() {
'use strict';

var util = Global.utility,
    $child = util.$child,
    $$child = util.$$child,
    create = util.createElement;

Global.XML = Global.klass({
    constructor: function(config) {
        this.element = create('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    method: {
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return $child(selector, this.element);
        },
        $$: function(selector) {
            return $$child(selector, this.element);
        }
    }
});
}());
