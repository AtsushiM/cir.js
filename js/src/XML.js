/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = Global.klass({
    init: function(config) {
        this.element = this.utility.makeElement('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    properties: {
        utility: Global.utility,
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return this.utility.$child(selector, this.element);
        },
        $$: function(selector) {
            return this.utility.$$child(selector, this.element);
        }
    }
});
