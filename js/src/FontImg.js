/* Test: "../../spec/_src/src/FontImg/test.js" */
C['FontImg'] = klassExtendBase(function(config) {
    config = config || NULLOBJ;

    this._type = config['type'] ? config['type'] + '_' : EMPTY;
    this._tag = config['tag'] || 'span';
}, {
    'make': function(x) {
        var aryX = (EMPTY + x).split(EMPTY),
            tags = EMPTY,
            i = aryX.length;

        for (; i--;) {
            tags = '<' + this._tag +
                ' class="font_' + this._type + aryX[i] +
                '"></' + this._tag + '>' + tags;
        }

        return tags;
    }
});
