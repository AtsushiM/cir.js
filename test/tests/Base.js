describe('C.Baseは', function() {
    var c = window.C ? C : Global,
        base;

    beforeEach(function() {
        // init
        base = new c.Base();
    });
    afterEach(function() {
        // clear
        if (base.dispose) {
            base.dispose();
        }
    });

    it('dispose()でプロパティとメソッドを破棄し、メモリーを解放する', function() {
        base.test1 = 1;
        base.test2 = '2';
        base.test3 = {};
        base.test4 = function() {};
        base.dispose();
        expect(base).to.eql({});
        expect(base.dispose).to.be(undefined);
    });

    it('contract(element, e, handler)でelementにeventnameでhandlerを登録する', function() {
        base.contract(window, 'load', function() {
            expect(1).to.be(1);
        });
    });

    it('uncontract(id)でidを元にelementのhandlerを解除する', function() {
        var func = function() {
                expect(1).to.be(0);
            };

        base.uncontract(base.contract(window, 'load', func));
    });
});
