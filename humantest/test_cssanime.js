(function() {
    var $ = C.$,
        $cssanime = $('#cssanime');

    $cssanime.css({
        position: 'absolute',
        top: 300,
        left: 0,
        width: 200,
        height: 200,
        backgroundColor: '#0F0'
    });

    $cssanime.on(C.event.click, function() {
        var mine = this,
            anime = new C.Transition(mine, {
                'transform': 'rotate(180deg)',
                opacity: '0'
            }, {
                /* manual: true, */
                duration: 1000,
                callback: function(e) {
                    console.log(e);

                    new C.Transition(mine, {
                        'transform': 'rotate(0deg)',
                        opacity: '1'
                    });
                }
            });

        // setTimeout(function() {
        //     anime.start();
        // }, 500);
    });
}());
