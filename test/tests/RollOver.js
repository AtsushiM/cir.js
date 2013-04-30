describe('C.Rolloverは', function() {
    var rollover;

    beforeEach(function() {
        // init
        rollover = new C.Rollover({
            els: C.dom.create('p'),
            toggleClass: '',
            over: function() {},
            out: function() {}
        });
    });
    afterEach(function() {
        // clear
        if (rollover.dispose) {
            rollover.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        rollover.dispose();
        expect(rollover).to.eql({
            _super: undefined
        });
    });

    it('attach()でロールオーバを設定する', function() {
        rollover.attach();
    });

    it('detach()でロールオーバを設定する', function() {
        rollover.attach();
        rollover.detach();
    });
});
