(function() {
    var anime = new C.Animation(C.$('#box')[0], {
            'margin-left': 100,
            transform: 'rotate(180deg)'
        }, {
            duration: 1000,
            manual: false,
            onComplete: function(e) {
                console.log(e);
            }
        });

    // setTimeout(function() {
    //     anime.stop();
    // }, 500);
}());
