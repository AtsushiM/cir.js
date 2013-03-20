/* Test: "../../spec/_src/src/FontImg/test.js" */
C['FontImg'] = klassExtendBase(function(config /* varless */, type) {
    config = config || NULLOBJ;
    type = config['type'];

    this._type = type ? type + '_' : EMPTY;
    this._tag = config['tag'] || 'span';
}, {
    'make': function(x) {
        var aryX = (EMPTY + x).split(EMPTY),
            tagtemp = this._tag,
            tags = EMPTY,
            i = aryX.length;

        for (; i--;) {
            tags = '<' + tagtemp +
                ' class="font_' + this._type + aryX[i] +
                '"></' + tagtemp + '>' + tags;
        }

        return tags;
    }
});
