(function() {
'use strict';
    var start,
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

    var $test,
        i,
        len;

    start = Date.now();
    for (i = 0, len = 100000; i < len; i++) {
        $test = $('#test');
    }
    console.log(Date.now() - start);
}());
