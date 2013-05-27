describe('C.ImgLoadは', function() {
    var c = window.C ? C : Global,
        imgload,
        progress = 0,
        progresscount = 0,
        loadend = false;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        progress = 0;
        progresscount = 0;
        loadend = false;
        if (imgload.dispose) {
            imgload.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function(done) {
        imgload = new c.ImgLoad({
            srcs: [
                // img path
                '/test/common/r.png',
                '/test/common/g.png',
                '/test/common/b.png'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                imgload.dispose();
                done();
            }
        });
    });

    it('start()で画像の先読みを開始する', function(done) {
        imgload = new c.ImgLoad({
            manual: true,
            srcs: [
                // img path
                '/test/common/r.png',
                '/test/common/g.png',
                '/test/common/b.png'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                loadend = true;
            }
        });

        setTimeout(function() {
            expect(loadend).to.be.false;
            expect(progress).to.be(0);

            imgload.start();

            setTimeout(function() {
                expect(loadend).to.be.true;
                expect(progress).to.be(1);

                done();
            }, 500);
        }, 500);
    });

    it('start()でローディングを開始した場合、startイベントを発火する', function(done) {
        imgload = new c.ImgLoad({
            manual: true,
            srcs: [
                // img path
                '/test/common/r.png',
                '/test/common/g.png',
                '/test/common/b.png'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                loadend = true;
            }
        });

        imgload.on('start', function() {
            done();
        });

        imgload.start();
    });

    it('ローディング完了時、completeイベントを発火する', function(done) {
        imgload = new c.ImgLoad({
            srcs: [
                // img path
                '/test/common/r.png',
                '/test/common/g.png',
                '/test/common/b.png'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                loadend = true;
            }
        });

        imgload.on('complete', function() {
            done();
        });
    });
});
