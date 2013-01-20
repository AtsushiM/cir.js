/* Test: "../../spec/_src/src/FontImg/test.js" */
Global.FontImg = klass({
    extend: Base,
    init: function(config) {
        config = config || {type: ''};

        this.type = config.type ? config.type + '_' : '';
        this.tag = config.tag || 'span';
    },
    properties: {
        make: function(x) {
            var aryX = ('' + x).split(''),
                tags = '',
                i;

            for (i = aryX.length; i--;) {
                tags = '<' + this.tag +
                    ' class="font_' + this.type + aryX[i] +
                    '">&nbsp;</' + this.tag + '>' + tags;
            }

            return tags;
        }
    }
});
