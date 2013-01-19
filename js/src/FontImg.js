/* Test: "../../spec/_src/src/FontImg/test.js" */
Global.FontImg = klass({
    init: function(config) {
        config = config || {type: ''};

        this.type = config.type ? config.type + '_' : '';
        this.tag = config.tag || 'span';
    },
    properties: {
        _1: function(x) {
            return '<' + this.tag + ' class="font_' + x + '">&nbsp;</' + this.tag + '>';
        },
        make: function(x) {
            var aryX = ('' + x).split(''),
                tags = '',
                i;

            for (i = aryX.length; i--;) {
                tags = this._1(this.type + aryX[i]) + tags;
            }

            return tags;
        }
    }
});
