// task
(function() {
    var $test = C.$('#test'),
        taskElementMove = new C.Sync({
            queue: [
                function(done) {
                    $test.animate({
                        top: 100
                    }, done);
                },
                function(done) {
                    $test.animate({
                        top: 200
                    }, done);
                },
                function(done) {
                    $test.animate({
                        top: 300
                    }, done);
                },
                function(done) {
                    $test.animate({
                        top: 400
                    }, done);
                },
                function(done) {
                    $test.animate({
                        top: 500
                    }, done);
                },
                function(done) {
                    $test.animate({
                        top: 0
                    }, done);
                }
            ],
            oncomplete: function() {
                /* this.restart(); */
            }
        }),
        taskElementStop= new C.Sync({
            queue: [
                function(done) {
                    setTimeout(function() {
                        taskElementMove.pause();
                        done();
                    }, 2000);
                },
                function(done) {
                    setTimeout(function() {
                        taskElementMove.resume();
                        done();
                    }, 2000);
                }
            ],
            oncomplete: function() {
                /* this.restart(); */
            }
        }),
        taskAnime = new C.Sync({
            queue: [
                taskElementMove,
                taskElementStop
            ],
            oncomplete: function() {
                console.log('exe end');
                this.restart();
            }
        });

    taskAnime.start();
}());

