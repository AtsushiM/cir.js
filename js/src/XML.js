C['XML'] = classExtendBase({
    'init': function(config) {
        html(this._el = create('div'), config['data']);
    },
    '$': function(selector) {
        return $child(selector, this._el);
    },
    '$$': function(selector) {
        return $$child(selector, this._el);
    }
});
