var $ = C.$,
    $test = $('#test'),
    flg = false,
    binds = [],
    i = 0,
    len = 10000;

$('#start').on(C.event.click, function() {
    if (!flg) {
        for (i = 0; i < len; i++) {
            binds[i] = new C.Bind({
                element: $test[0],
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

$('#dispose').on(C.event.click, function() {
    if (flg) {
        for (i = 0; i < len; i++) {
            binds[i].dispose();
        }

        flg = false;
    }
});

(function () {
    var a = new Klass(1);

    console.dir(a);
}());

try {
    function Klass(name) {
        throw false;
    }
}
catch (e) {
    return e;
}
finally {
    return false;
}
