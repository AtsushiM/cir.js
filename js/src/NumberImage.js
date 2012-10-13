/* Test: "../../spec/_src/src/NumberImage/test.js" */
Global.NumberImage = function(config) {
    'use strict';

    var type = config.type,
        extension = config.extension,
        numimg = {
            make: function(x) {
                var aryX = ('' + x).split(''),
                    tags = '',
                    i;

                for (i = aryX.length; i--;) {
                    tags = make1Digit(aryX[i]) + tags;
                }

                return tags;
            }
        };

    if (!type) {
        type = '';
    }

    function make1Digit(x) {
        return '<span class="num_' + type + x + '">&nbsp;</span>';
    }

    return numimg;
};
