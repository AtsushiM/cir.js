/* Test: "../../spec/_src/src/XML/test.js" */
Global['XML'] = klass({
    'extend': Base,
    'init': function(config) {
        this.element = create('div');
        this.data = {};

        if (config && config['data']) {
            this['setData'](config['data']);
        }
    },
    'properties': {
        'getData': function() {
            return this.data;
        },
        'setData': function(d) {
            this.data =
            this.element.innerHTML = d;
        },
        '$': function(selector) {
            return $child(selector, this.element);
        },
        '$$': function(selector) {
            return $$child(selector, this.element);
        }
    }
});
