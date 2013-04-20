describe('ImgLoadは', function() {
    var c = window.C ? C : Global,
        imgload,
        progress = 0,
        progresscount = 0,
        loadend = false;

    beforeEach(function() {
        // init
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
            onload: function() {
                loadend = true;
            }
        });
    });
    afterEach(function() {
        // clear
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
            onload: function() {
                done();
            }
        });
    });

    it('start()で画像の先読みを開始する', function(done) {
        imgload.start();
        setTimeout(function() {
            expect(loadend).to.be(true);
            expect(progress).to.be(1);
            done();
        }, 500);
    });
});
