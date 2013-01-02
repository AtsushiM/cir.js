/* Class: "../../../../js/src/easing.js" */
describe('Easingは', function() {
    var easing;

    beforeEach(function() {
        // init
        easing = Global.easing;
    });
    afterEach(function() {
        // clear
    });

    it('easeInCubicメソッドを持つ', function() {
        expect(easing.easeInCubic).toBeDefined();
    });
    it('easeOutCubicメソッドを持つ', function() {
        expect(easing.easeOutCubic).toBeDefined();
    });
    it('easeInOutCubicメソッドを持つ', function() {
        expect(easing.easeInOutCubic).toBeDefined();
    });

    it('easeInQuartメソッドを持つ', function() {
        expect(easing.easeInQuart).toBeDefined();
    });
    it('easeOutQuartメソッドを持つ', function() {
        expect(easing.easeOutQuart).toBeDefined();
    });
    it('easeInOutQuartメソッドを持つ', function() {
        expect(easing.easeInOutQuart).toBeDefined();
    });

    it('easeInQuintメソッドを持つ', function() {
        expect(easing.easeInQuint).toBeDefined();
    });
    it('easeOutQuintメソッドを持つ', function() {
        expect(easing.easeOutQuint).toBeDefined();
    });
    it('easeInOutQuintメソッドを持つ', function() {
        expect(easing.easeInOutQuint).toBeDefined();
    });

    it('easeInSineメソッドを持つ', function() {
        expect(easing.easeInSine).toBeDefined();
    });
    it('easeOutSineメソッドを持つ', function() {
        expect(easing.easeOutSine).toBeDefined();
    });
    it('easeInOutSineメソッドを持つ', function() {
        expect(easing.easeInOutSine).toBeDefined();
    });

    it('easeInExpoメソッドを持つ', function() {
        expect(easing.easeInExpo).toBeDefined();
    });
    it('easeOutExpoメソッドを持つ', function() {
        expect(easing.easeOutExpo).toBeDefined();
    });
    it('easeInOutExpoメソッドを持つ', function() {
        expect(easing.easeInOutExpo).toBeDefined();
    });

    it('easeInCircメソッドを持つ', function() {
        expect(easing.easeInCirc).toBeDefined();
    });
    it('easeOutCircメソッドを持つ', function() {
        expect(easing.easeOutCirc).toBeDefined();
    });
    it('easeInOutCircメソッドを持つ', function() {
        expect(easing.easeInOutCirc).toBeDefined();
    });

    it('easeInQuadメソッドを持つ', function() {
        expect(easing.easeInQuad).toBeDefined();
    });
    it('easeOutQuadメソッドを持つ', function() {
        expect(easing.easeOutQuad).toBeDefined();
    });
    it('easeInOutQuadメソッドを持つ', function() {
        expect(easing.easeInOutQuad).toBeDefined();
    });
});
/*
describe('XXXは', function() {
    it('XXX', function() {
        //spyOn
        //呼び出しに対してargumentsを返却
        spyOn(obj, 'method').andReturn(arguments);
        //呼び出しに対して例外を発生させる
        spyOn(obj, 'method').andThrow(exception);
        //呼び出しに対して代わりの関数を実行させる
        spyOn(obj, 'method').andCallFake(function);
        //呼び出しに対してそのまま本来のメソッドを呼び出す
        spyOn(obj, 'method').andCallThrough(function);

        // spy後
        // 呼び出しが行われたか
        expect(obj, method).toHaveBeenCalled();
        // 呼び出しがargumentsを伴って呼び出されたか
        expect(obj, method).toHaveBeenCalledWith(arguments);

        //呼び出し回数
        obj.method.callCount;
        //直近の読み出し時の引数
        obj.mostRecentCall.args
        // i番目の呼び出し時
        obj.argsForCall[i]

        runs(function() {
            //処理
        });
        // １秒待ち
        waits(1000);
        runs(function() {
            //処理
        });

        //aがbと同じである
        expect(a).toEqual(b);
        //aがbと同じでない
        expect(a).not.toEqual(b);

        //aがbと同じオブジェクトである
        expect(a).toBe(b);
        //aがbと同じオブジェクトでない
        expect(a).not.toBe(b);

        //aがundefinedでない
        expect(a).toBeDefined();
        //aがundefinedである
        expect(a).not.toBeDefined();

        //aがnullである
        expect(a).toBeNull();
        //aがnullでない
        expect(a).not.toBeNull();

        //aがtrueである
        expect(a).toBeTruthy();
        //aがfalseである
        expect(a).toBeFalsy();

        //aにbが含まれている
        expect(a).toBeContain(b);
        //aにbが含まれてない
        expect(a).not.toBeContain(b);

        //aがbより小さい
        expect(a).toBeLessThan(b);
        //aがbより大きい
        expect(a).toBeGreaterThan(b);

        //a（function）が例外をスロー
        expect(a).toThrow(e);
        //a（function）が例外をスローしない
        expect(a).not.toThrow(e);
    });
});
*/
