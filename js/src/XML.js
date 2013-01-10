/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = Global.klass({
    init: function(config) {
        this.element = Global.element.create('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    properties: {
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return Global.element.$child(selector, this.element);
        },
        $$: function(selector) {
            return Global.element.$$child(selector, this.element);
        }
    }
});
