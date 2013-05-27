describe('C.WindowLoadは', function() {
    var c = window.C ? C : Global,
        winload,
        loadend = false;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        if (winload.dispose) {
            winload.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        winload = new C.WindowLoad({
        });

        winload.dispose();
        expect(winload).to.eql({});
    });

    it('ページ読み込み完了時、completeイベントを発火する', function(done) {
        winload = new C.WindowLoad({
            oncomplete: function() {
                done();
            }
        });
    });

    it('start()でstartイベントを発火する', function(done) {
        winload = new C.WindowLoad({
            manual: true
        });

        winload.on('start', function() {
            done();
        });

        winload.start();
    });
});
