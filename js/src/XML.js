/* Test: "../../spec/_src/src/XML/test.js" */
Global['XML'] = klass({
    'extend': Base,
    'init': function(config) {
        this.el = create('div');
        this._data = {};

        if (config && config['data']) {
            this['setData'](config['data']);
        }
    },
    'properties': {
        'getData': function() {
            return this._data;
        },
        'setData': function(d) {
            this._data = d;
            html(this.el, d);
        },
        '$': function(selector) {
            return $child(selector, this.el);
        },
        '$$': function(selector) {
            return $$child(selector, this.el);
        }
    }
});
