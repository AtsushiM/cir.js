/* Test: "../../spec/_src/src/XML/test.js" */
C['XML'] = klassExtendBase(function(config) {
    this._el = create('div');
    html(this._el, config['data']);
}, {
    '$': function(selector) {
        return $child(selector, this._el);
    },
    '$$': function(selector) {
        return $$child(selector, this._el);
    }
});
