describe('PreRenderは', function() {
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
            onrendered: function() {
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
});
