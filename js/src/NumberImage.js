/* Test: "../../spec/_src/src/NumberImage/test.js" */
(function() {
'use strict';

Global.NumberImage = function(config) {
    config = config || {type: ''};

    this.type = config.type;
};
Global.NumberImage.prototype = {
    make: function(x) {
        var aryX = ('' + x).split(''),
            tags = '',
            i;

        for (i = aryX.length; i--;) {
            tags = make1Digit(this.type + aryX[i]) + tags;
        }

        return tags;
    }
};

function make1Digit(x) {
    return '<span class="num_' + x + '">&nbsp;</span>';
}
}());
