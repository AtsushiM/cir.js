describe('C.Movieは', function() {
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
            dir: '/test/common/',
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
        expect(movie).to.eql({
            _super: undefined
        });
    });

    it('getElement()でvideo要素を取得する', function(done) {
        movie = new c.Movie({
            dir: '/test/common/',
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
            dir: '/test/common/',
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
            dir: '/test/common/',
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
            expect(movie.getCurrent()).to.be(1);
            done();
        }, 1000);
    });

    it('getDuration()で総再生時間を取得する', function(done) {
        movie = new c.Movie({
            dir: '/test/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                expect(movie.getDuration() > 0).to.be(true);
                done();
            },
            onended: function(e) {
                // write code.
            }
        });
    });

    it('play()で再生する', function(done) {
        movie = new c.Movie({
            dir: '/test/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                movie.play();
                movie.stop();
                done();
            },
            onended: function(e) {
            }
        });
    });

    it('loop()でループを設定する', function(done) {
        var end = 0;

        movie = new c.Movie({
            dir: '/test/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                // end++;

                // if (end === 2) {
                //     done();
                // }
            }
        });

        done();

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

    it('pause()で一時停止する', function(done) {
        movie = new c.Movie({
            dir: '/test/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
            },
            onended: function(e) {
                expect(0).to.be(1);
            }
        });

        setTimeout(function() {
            movie.play();

            setTimeout(function() {
                movie.pause();
                expect(movie.getCurrent()).not.to.be(0);

                done();
            }, 500);
        }, 100);
    });

    it('stop()で停止する', function(done) {
        movie = new c.Movie({
            dir: '/test/common/',
            name: 'testmovie',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
            },
            onended: function(e) {
                expect(0).toEqual(1);
            }
        });

        setTimeout(function() {
            movie.play();
            setTimeout(function() {
                movie.stop();
                expect(movie.getCurrent()).to.be(0);
                done();
            }, 500);
        }, 100);
    });
});
