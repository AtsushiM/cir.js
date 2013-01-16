(function() {
    var anime = new C.Animation(C.$('#box')[0], {
            'margin-left': 100,
            '-webkit-transform': "rotate(180deg)"
        }, {
            duration: 1000,
            manual: false,
            ease: C.cssease.inQuad,
            onComplete: function(e) {
                console.log(e);
            }
        });

    // setTimeout(function() {
    //     anime.stop();
    // }, 500);
}());
