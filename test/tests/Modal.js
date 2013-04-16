describe('Modalは', function() {
    var c = window.C ? C : Global,
        modal;

    beforeEach(function() {
        // init
        modal = new c.Modal({
            html: 'test',
            bgClose: true,
            closeSelector: '.close',
            manual: false
        });
    });
    afterEach(function() {
        if (modal.close) {
            modal.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        modal.dispose();
        expect(modal).to.eql({});
    });

    it('manual: trueでmodal.openを呼び出さない', function(done) {
        modal.dispose();
        modal = new c.Modal({
            html: 'test',
            manual: true
        });
        setTimeout(function() {
            expect(C.dom.$('.cir-modal-bg').style.display).to.be('none');
            done();
        }, 15);
    });
});
