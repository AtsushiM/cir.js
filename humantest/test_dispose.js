var $ = C.$,
    $test = $('#test'),
    flg = false,
    binds = [],
    i = 0,
    len = 10000;

var base1 = new C.Base(),
    base2 = new C.Base();

console.log(base1);
console.log(base2);

if (base1.o === base2.o) {
    console.log('1');
}
else {
    console.log('2');
}


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
