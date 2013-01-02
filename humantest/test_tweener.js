(function() {
    // C.Tweener.Duration = 1000;
    // C.Tweener.FPS = 60;

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
                easing: null,
                onComplete: testAnimate
            }
        );

    function testAnimate() {
        var $ = C.selector;

        $('#test').animate({
            width: 50,
            height: 100
        }, 1000, 'easeOutExpo', function() {
            console.log('anime end.');
        });
    }
}());
