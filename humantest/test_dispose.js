var $ = C.$,
    $test = $('#test'),
    flg = false,
    binds = [],
    i = 0,
    len = 10000;

$('#start').on(C.e.CLICK, function() {
    if (!flg) {
        for (i = 0; i < len; i++) {
            binds[i] = new C.Bind({
                el: $test[0],
                events: {
                    click: function() {
                        console.log('click');
                    },
                    mouseover: function() {
                        console.log('over');
                    },
                    mouseout: function() {
                        console.log('out');
                    }
                }
            });
        }

        flg = true;
    }
});

$('#dispose').on(C.e.CLICK, function() {
    if (flg) {
        for (i = 0; i < len; i++) {
            binds[i].dispose();
        }

        flg = false;
    }
});
