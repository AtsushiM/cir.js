/* Test: "../../spec/_src/src/FontImg/test.js" */
Global['FontImg'] = klassExtendBase(function(config) {
    config = config || {};

    this.type = config['type'] ? config['type'] + '_' : '';
    this.tag = config['tag'] || 'span';
}, {
    'make': function(x) {
        var aryX = ('' + x).split(''),
            tags = '',
            i = aryX.length;

        for (; i--;) {
            tags = '<' + this.tag +
                ' class="font_' + this.type + aryX[i] +
                '">&nbsp;</' + this.tag + '>' + tags;
        }

        return tags;
    }
});
