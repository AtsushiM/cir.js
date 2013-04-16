describe('Movieは', function() {
    var c = window.C ? C : Global,
        movie;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        if (movie.dispose) {
            movie.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            el: document.body,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                // write code.
            }
        });
        movie.dispose();
        expect(movie).to.eql({});
    });

    it('getElement()でvideo要素を取得する', function(done) {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                // write code.
            }
        });

        setTimeout(function() {
            expect(movie.getElement().nodeName).to.be('VIDEO');
            done();
        }, 100);
    });

    it('getCurrent()で現在秒数を取得する', function() {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                expect(movie.getCurrent() > -1).to.be(true);
            }
        });
    });

    it('setCurrent(num)で現在秒数を設定する', function(done) {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                // write code.
            }
        });

        setTimeout(function() {
            movie.setCurrent(1);
            expect(movie.getCurrent()).toEqual(1);
            done();
        }, 1000);
    });

    it('getDuration()で総再生時間を取得する', function(done) {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                // write code.
                expect(movie.getDuration() > 0).to.be(true);
                done();
            }
        });
    });

    it('play()で再生する', function(done) {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                movie.play();
                movie.stop();
                done();
            }
        });
    });

    it('loop()でループを設定する', function() {
        var end = 0;

        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                console.log(end);
                end++;
            }
        });

        waits(100);
        // runs(function() {
        //     movie.loop(true);
        //     movie.play();
        // });
        // waits(25000);
        // runs(function() {
        //     expect(end).toEqual(2);
        //     movie.loop(false);
        // });
        // waits(25000);
        // runs(function() {
        //     expect(end).toEqual(3);
        // });
    });

    it('pause()で一時停止する', function() {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                expect(0).toEqual(1);
            }
        });

        waits(100);
        runs(function() {
            movie.play();
        });
        waits(500);
        runs(function() {
            movie.pause();
            expect(movie.getCurrent()).not.toEqual(0);
        });
    });

    it('stop()で停止する', function() {
        movie = new c.Movie({
            dir: '/spec/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
            },
            onended: function(e) {
                expect(0).toEqual(1);
            }
        });

        waits(100);
        runs(function() {
            movie.play();
        });
        waits(500);
        runs(function() {
            movie.stop();
            expect(movie.getCurrent()).toEqual(0);
        });
    });
});
