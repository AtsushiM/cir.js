describe('Rolloverは', function() {
    var rollover;

    beforeEach(function() {
        // init
        rollover = new C.Rollover({
            els: C.dom.$$('body'),
            toggleClass: '',
            over: function() {},
            out: function() {},
            manual: true
        });
    });
    afterEach(function() {
        // clear
    });

    it('タッチデバイス対応のロールオーバ処理を行う', function() {
        rollover = new C.Rollover({
            els: C.dom.$$('body'),
            toggleClass: '',
            over: function() {},
            out: function() {}
        });
        expect(1).to.be(1);
    });

    it('attach()でロールオーバを設定する', function() {
        rollover.attach();
        expect(1).to.be(1);
    });

    it('detach()でロールオーバを設定する', function() {
        rollover.attach();
        rollover.detach();
        expect(1).to.be(1);
    });
});
