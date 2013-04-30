describe('C.SSTransは', function() {
    var c = window.C ? C : Global,
        transition,
        div;

    beforeEach(function() {
        // init
        div = c.dom.create('div');
        c.dom.append(document.body, div);
    });
    afterEach(function() {
        // clear
        div.removeAttribute('style');
        c.dom.remove(div);
        if (transition.dispose) {
            transition.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            onComplete: function() {
                count = 1;
            }
        });
        transition.dispose();
        expect(transition).to.eql({
            _super: undefined
        });
    });

    it('CSS Trasitionでアニメーションする', function() {
        var count = 0;

        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            onComplete: function() {
                count = 1;
            }
        });
        expect(count).to.be(0);
    });

    it('start()でアニメーションを開始する', function() {
        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            manual: true,
            onComplete: function() {
            }
        });

        transition.start();
    });

    it('stop()でアニメーションを停止する', function() {
        var count = 0;

        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            onComplete: function() {
                count = 1;
            }
        });

        transition.stop();
        setTimeout(function() {
            expect(count).to.be(0);
        }, c.SSTrans.duration + 200);
    });

});
