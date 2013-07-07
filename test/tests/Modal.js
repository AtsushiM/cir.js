describe('C.Modalは', function() {
    var modal;

    beforeEach(function() {
        // // init
        modal = new C.Modal({
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
        expect(modal).to.eql({
            _super: undefined
        });
    });

    // it('manual: trueでmodal.openを呼び出さない', function(done) {
    //     modal.dispose();
    //     modal = new C.Modal({
    //         html: 'test',
    //         manual: true
    //     });
    //     setTimeout(function() {
    //         expect(C.dom.$('.cir-modal-bg').style.display).to.be('none');
    //         done();
    //     }, 15);
    // });
});
