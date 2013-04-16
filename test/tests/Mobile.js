describe('Mobileは', function() {
    var c = window.C ? C : Global,
        mb;

    beforeEach(function() {
        // init
        mb = new c.Mobile();
    });
    afterEach(function() {
        // clear
        if (mb.dispose) {
            mb.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        mb.dispose();
        expect(mb).to.eql({});
    });

    it('getZoom()で画面の拡大率を取得する', function() {
        expect(typeof mb.getZoom()).to.be('number');
    });

    it('isAndroid()でAndroid端末かどうかチェック', function() {
        expect(mb.isAndroid()).to.be(false);
        expect(mb.isAndroid('Android')).to.be(true);
        expect(mb.isAndroid('PC')).to.be(false);
    });

    it('isIOS()でiOS端末かどうかチェック', function() {
        expect(mb.isIOS()).to.be(false);
        expect(mb.isIOS('iPhone')).to.be(true);
        expect(mb.isIOS('iPad')).to.be(true);
        expect(mb.isIOS('iPod')).to.be(true);
        expect(mb.isIOS('PC')).to.be(false);
    });

    it('isWindows()でWindowsモバイル端末かどうかチェック', function() {
        expect(mb.isWindows()).to.be(false);
        expect(mb.isWindows('IEMobile')).to.be(true);
        expect(mb.isWindows('PC')).to.be(false);
    });

    it('isFBAPP()でFacebookアプリかどうかチェック', function() {
        expect(mb.isFBAPP()).to.be(false);
        expect(mb.isFBAPP('FBAN')).to.be(true);
        expect(mb.isFBAPP('fban')).to.be(false);
    });

    it('isMobile()でモバイル端末かどうかチェック', function() {
        expect(mb.isMobile()).to.be(false);
    });

    it('hideAddress()でアドレスバーを非表示にする', function() {
        mb.hideAddress();
        expect(0).to.be(0);
    });
});
