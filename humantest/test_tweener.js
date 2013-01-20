(function() {
    var tweener = new C.Tweener(
            document.getElementById('test').style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 200
                }
            },
            {
                manual: true,
                ease: C.ease.inBack,
                onComplete: testAnimate
            }
        );

    tweener.start();

    function testAnimate() {
        var $ = C.$,
            $test = $('#test');

        $test.animate({
            width: 50,
            height: 100,
            '-webkit-transform': 'rotate(180deg)',
            '-moz-transform': 'rotate(180deg)'
        }, 1000, 'outExpo', function() {
            /* console.log('anime end.'); */
        });
    }
}());
