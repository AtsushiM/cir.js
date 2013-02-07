(function() {
'use strict';
    var start = Date.now(),
        $;

    if (!window.C) {
        $ = window.$;

        $('#test').animate({
            paddingTop: 0
        });
    }
    else {
        $ = C.$;
    }

    var $test;
    for (var i = 0, len = 1000; i < len; i++) {
        $test = $('.test');
    }

    console.log(Date.now() - start);
}());

var test = {
    prop: '1'
};
var testfunc = function() {
    console.log(this.prop);
};
testfunc();
var ret = C.util.bind(test, testfunc);
ret();
