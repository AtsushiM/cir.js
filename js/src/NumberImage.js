/* Test: "../../spec/_src/src/NumberImage/test.js" */
Global.NumberImage = function(config) {
    'use strict';

    var type = config.type,
        extension = config.extension,
        numimg = {
            make: function(x) {
                // 1文字ずつに分割
                var aryX = ('' + x).split(''),
                    tags = '';

                for (var i = 0, len = aryX.length; i < len; i++) {
                    tags += make1Digit(aryX[i]);
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
