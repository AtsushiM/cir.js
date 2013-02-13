/* Test: "../../spec/_src/src/XML/test.js" */
Global['XML'] = klassExtendBase(function(config) {
    this.el = create('div');
    html(this.el, config['data']);
}, {
    '$': function(selector) {
        return $child(selector, this.el);
    },
    '$$': function(selector) {
        return $$child(selector, this.el);
    }
});
