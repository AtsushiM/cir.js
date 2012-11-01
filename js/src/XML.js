/* Test: "../../spec/_src/src/XML/test.js" */
(function() {
var util = Global.utility,
    $child = util.$child,
    $$child = util.$$child,
    create = util.createElement;

Global.XML = function(config) {
    this.element = create('div');
    this.data = {};

    if (config && config.data) {
        this.setData(config.data);
    }
};
Global.XML.prototype = {
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
};
}());
