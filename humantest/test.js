(function() {
'use strict';
    var start = Date.now(),
        $;

    if (!window.HYAPP) {
        $ = window.$;

       console.log($('.test').is('.no2'));
    }
    else {
        $ = HYAPP.selector;
    }

    var $test;
    for (var i = 0, len = 1000; i < len; i++) {
        $test = $('.test');
    }

    console.log(Date.now() - start);
}());
