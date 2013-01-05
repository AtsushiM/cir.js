/* Test: "../../spec/_src/src/XML/test.js" */
Global.XML = Global.klass({
    init: function(config) {
        this.element = this._el.create('div');
        this.data = {};

        if (config && config.data) {
            this.setData(config.data);
        }
    },
    properties: {
        _el: Global.element,
        getData: function() {
            return this.data;
        },
        setData: function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        $: function(selector) {
            return this._el.$child(selector, this.element);
        },
        $$: function(selector) {
            return this._el.$$child(selector, this.element);
        }
    }
});
