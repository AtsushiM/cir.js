// task
(function() {
    var $test = C.$('#test'),
        task = new C.Async({
            queue: [
                new C.Tweener(
                    $test[0].style,
                    {
                        opacity: {
                            from: 1,
                            to: 0,
                            suffix: ''
                        }
                    },
                    {
                        manual: true,
                        oncomplete: function() {
                            C.dom.css($test[0], {
                                opacity: '1'
                            });
                        }
                    }
                ),
                new C.WindowLoad({
                    manual: true,
                    oncomplete: function() {
                        console.log('windowloaded');
                    }
                }),
                new C.Ajax({
                    manual: true,
                    url: './task.html',
                    oncomplete: function(src) {
                        console.log(src);
                    }
                }),
                new C.ImgLoad({
                    manual: true,
                    srcs: [
                        'r.png',
                        'g.png',
                        'b.png'
                    ],
                    oncomplete: function(a) {
                        console.log(a);
                    }
                })
            ],
            oncomplete: function() {
                console.log('complete', Date.now() - diff);
            }
        }),
        diff;

    task.on('start', function() {
        diff = Date.now();
    });

    task.start();
}());

