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
