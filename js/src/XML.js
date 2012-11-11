/* Test: "../../spec/_src/src/XML/test.js" */
(function() {
'use strict';

var util = Global.utility,
    $child = util.$child,
    $$child = util.$$child,
    make = util.makeElement;

Global.XML = Global.klass({
    init: function(config) {
        this.element = make('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    methods: {
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
