/* Test: "../../spec/_src/src/XML/test.js" */
Global['XML'] = klassExtendBase(function(config) {
    this.el = create('div');
    this._data = {};

    if (config) {
        this['setData'](config['data']);
    }
}, {
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
});
