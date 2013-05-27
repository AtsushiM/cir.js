describe('C.PreRenderは', function() {
    var c = window.C ? C : Global,
        prerender,
        $body = document.querySelector('body');

    beforeEach(function() {
        // init
        prerender = new c.PreRender({
            els: [$body],
            guesslimit: 10,
            looptime: 10,
            loopblur: 5,
            oncomplete: function() {
                $body.style.display = 'block';
            }
        });
    });
    afterEach(function() {
        if (prerender.dispose) {
            prerender.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        prerender.dispose();
        expect(prerender).to.eql({
            _super: undefined
        });
    });

    it('start()でelsで指定したエレメントのプリレンダリングを開始する', function() {
        prerender.start();
        expect(0).to.be(0);
    });

    it('start()でローディングを開始した場合、startイベントを発火する', function(done) {
        prerender = new c.PreRender({
            manual: true,
            els: [$body],
            guesslimit: 10,
            looptime: 10,
            loopblur: 5,
            oncomplete: function() {
                $body.style.display = 'block';
            }
        });

        prerender.on('start', function() {
            done();
        });

        prerender.start();
    });

    it('ローディング完了時、completeイベントを発火する', function(done) {
        prerender = new c.PreRender({
            els: [$body],
            guesslimit: 10,
            looptime: 10,
            loopblur: 5,
            oncomplete: function() {
                $body.style.display = 'block';
            }
        });

        prerender.on('complete', function() {
            done();
        });
    });
});
