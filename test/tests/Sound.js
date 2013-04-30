describe('C.Soundは', function() {
    var c = window.C ? C : Global,
        sound;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        delete sound;
        if (sound.dispose) {
            sound.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
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
        sound.dispose();
        expect(sound).to.eql({
            _super: undefined
        });
    });

    it('getElement()でAudio要素を取得する', function(done) {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                expect(sound.getElement().nodeName).to.be('AUDIO');
                done();
            },
            onended: function(e) {
                // write code.
            }
        });
    });

    it('getCurrent()で現在秒数を取得する', function(done) {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                expect(sound.getCurrent() > -1).to.be(true);
                done();
            },
            onended: function(e) {
                // write code.
            }
        });
    });

    it('setCurrent(num)で現在秒数を設定する', function() {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                sound.setCurrent(1);
                expect(sound.getCurrent()).to.be(1);
            },
            onended: function(e) {
                // write code.
            }
        });
    });

    it('getDuration()で総再生時間を取得する', function() {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                expect(sound.getDuration() > 0).to.be(true);
            },
            onended: function(e) {
                // write code.
            }
        });
    });

    it('play()で再生する', function(done) {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                // write code.
                sound.play();
            },
            onended: function(e) {
                done();
            }
        });
    });

    it('loop()でループを設定する', function(done) {
        done();
        // var end = 0;

        // sound = new c.Sound({
        //     dir: '/test/common/',
        //     name: 'tm2_door000',
        //     autoplay: false,
        //     loop: false,
        //     oncanplay: function(e) {
        //         sound.loop(true);
        //         sound.play();
        //     },
        //     onended: function(e) {
        //         end++;
        //     }
        // });

        // setTimeout(function() {
        //     expect(end).toEqual(2);
        //     done();
        // }, 2500);
    });

    it('pause()で一時停止する', function(done) {
        var end = 0;

        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: false,
            loop: false,
            oncanplay: function(e) {
                expect();
                setTimeout(function() {
                    sound.pause();
                }, 1000);
            },
            onended: function(e) {
                end++;
            }
        });

        setTimeout(function() {
            expect(end).to.be(0);
            done();
        }, 1500);
    });

    it('stop()で停止する', function(done) {
        sound = new c.Sound({
            dir: '/test/common/',
            name: 'tm2_door000',
            autoplay: true,
            loop: false,
            oncanplay: function(e) {
                sound.stop();
            },
            onended: function(e) {
            }
        });

        setTimeout(function() {
            expect(sound.getCurrent()).to.be(0);
            done();
        }, 1000);
    });
});
