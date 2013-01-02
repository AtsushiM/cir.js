(function() {
    C.Tweener.Duration = 1000;
    C.Tweener.FPS = 60;

    var tweener = new C.Tweener(
            document.getElementById('test').style,
            {
                width: {
                    to: 100
                },
                height: {
                    to: 200
                }
            },
            {
                easing: C.easing.easeOutExpo,
                onComplete: function() {
                    alert('end');
                }
            }
        );
}());
