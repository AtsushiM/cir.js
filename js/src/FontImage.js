/* Test: "../../spec/_src/src/FontImage/test.js" */
Global.FontImage = Global.klass({
    init: function(config) {
        config = config || {type: ''};

        this.type = config.type;
    },
    properties: {
        make: function(x) {
            var aryX = ('' + x).split(''),
                tags = '',
                i;

            for (i = aryX.length; i--;) {
                tags = make1Digit(this.type + aryX[i]) + tags;
            }

            function make1Digit(x) {
                return '<span class="num_' + x + '">&nbsp;</span>';
            }

            return tags;
        }
    }
});
