describe('C.Calcは', function() {
    var calc;

    beforeEach(function() {
        calc = new C.Calc();
    });
    afterEach(function() {
        // clear
        if (calc.dispose) {
            calc.dispose();
        }
    });

    it('dispose()でプロパティとメソッドを破棄し、メモリーを解放する', function() {
        calc.dispose();
        expect(calc).to.eql({});
    });

    it('fewdigitプロパティで計算する少数の桁を決定する', function() {
        calc = new C.Calc({
            fewdigit: 1
        });

        expect(calc.addition(1.11, 1.101)).to.eql(2.211);
    });

    it('addition(num1, num2)で加算する', function() {
        expect(calc.addition(0.1, 0.2)).to.eql(0.3);
    });

    it('subtraction(num1, num2)で減算する', function() {
        expect(calc.subtraction(1, 0.9)).to.eql(0.1);
    });

    it('multiplication(num1, num2)で乗算する', function() {
        expect(calc.multiplication(0.1, 0.1)).to.eql(0.01);
    });

    it('division(num1, num2)で除算する', function() {
        expect(calc.division(0.3, 0.1)).to.eql(3);
    });
});
