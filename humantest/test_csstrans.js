(function() {
    var $ = C.$,
        $cssanime = $('#cssanime');

    $cssanime.css({
        position: 'absolute',
        top: 400,
        left: 0,
        width: 200,
        height: 200,
        backgroundColor: '#0F0'
    });

    $cssanime.on(C.event.click, function() {
        var mine = this,
            anime = new C.Transition(mine, {
                '-webkit-transform': 'rotate(180deg)',
                opacity: '0'
            }, {
                /* manual: true, */
                ease: C.cssease.inExpo,
                duration: 1000,
                onComplete: function(e) {
                    console.log(e);

                    new C.Transition(mine, {
                        '-webkit-transform': 'rotate(0deg)',
                        opacity: '1'
                    });
                }
            });

        // setTimeout(function() {
        //     mine.style.opacity = 1;
        // }, 500);
    });
}());
