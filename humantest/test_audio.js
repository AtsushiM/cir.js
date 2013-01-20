(function() {
    var audio = new C.Sound({
            preload: 'auto',
            dir: './',
            name: 'tm2_door000',
            autoplay: true,
            loop: true,
            oncanplay: function(e) {
                /* console.log('canplay'); */
            },
            onended: function(e) {
                /* console.log('ended'); */
            }
        });

    setTimeout(function() {
        /* audio.stop(); */
    }, 2000);
}());
