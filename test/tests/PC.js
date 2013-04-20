describe('PCは', function() {
    var c = window.C ? C : Global,
        pc;

    beforeEach(function() {
        // init
        pc = new c.PC();
    });
    afterEach(function() {
        // clear
        if (pc.dispose) {
            pc.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        pc.dispose();
        expect(pc).to.eql({});
    });

    it('isChrome()でブラウザがChromeかチェックする', function() {
        var flg = C.util.isBoolean(pc.isChrome());

        expect(flg).to.be(true);
    });

    it('isGecko()でブラウザがChromeかチェックする', function() {
        var flg = C.util.isBoolean(pc.isGecko());

        expect(flg).to.be(true);
    });

    it('isIE()でブラウザがIEかチェックする', function() {
        var flg = C.util.isBoolean(pc.isIE());

        expect(flg).to.be(true);
    });

    it('isOpera()でブラウザがOperaかチェックする', function() {
        var flg = C.util.isBoolean(pc.isOpera());

        expect(flg).to.be(true);
    });

    it('isSafari()でブラウザがSafariかチェックする', function() {
        var flg = C.util.isBoolean(pc.isSafari());

        expect(flg).to.be(true);
    });
});
