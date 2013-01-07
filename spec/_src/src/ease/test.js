/* Class: "../../../../js/src/ease.js" */
describe('easeは', function() {
    var easing;

    beforeEach(function() {
        // init
        easing = Global.easing;
    });
    afterEach(function() {
        // clear
    });

    it('inCubicメソッドを持つ', function() {
        expect(easing.inCubic).toBeDefined();
    });
    it('outCubicメソッドを持つ', function() {
        expect(easing.outCubic).toBeDefined();
    });
    it('inOutCubicメソッドを持つ', function() {
        expect(easing.inOutCubic).toBeDefined();
    });

    it('inQuartメソッドを持つ', function() {
        expect(easing.inQuart).toBeDefined();
    });
    it('outQuartメソッドを持つ', function() {
        expect(easing.outQuart).toBeDefined();
    });
    it('inOutQuartメソッドを持つ', function() {
        expect(easing.inOutQuart).toBeDefined();
    });

    it('inQuintメソッドを持つ', function() {
        expect(easing.inQuint).toBeDefined();
    });
    it('outQuintメソッドを持つ', function() {
        expect(easing.outQuint).toBeDefined();
    });
    it('inOutQuintメソッドを持つ', function() {
        expect(easing.inOutQuint).toBeDefined();
    });

    it('inSineメソッドを持つ', function() {
        expect(easing.inSine).toBeDefined();
    });
    it('outSineメソッドを持つ', function() {
        expect(easing.outSine).toBeDefined();
    });
    it('inOutSineメソッドを持つ', function() {
        expect(easing.inOutSine).toBeDefined();
    });

    it('inExpoメソッドを持つ', function() {
        expect(easing.inExpo).toBeDefined();
    });
    it('outExpoメソッドを持つ', function() {
        expect(easing.outExpo).toBeDefined();
    });
    it('inOutExpoメソッドを持つ', function() {
        expect(easing.inOutExpo).toBeDefined();
    });

    it('inCircメソッドを持つ', function() {
        expect(easing.inCirc).toBeDefined();
    });
    it('outCircメソッドを持つ', function() {
        expect(easing.outCirc).toBeDefined();
    });
    it('inOutCircメソッドを持つ', function() {
        expect(easing.inOutCirc).toBeDefined();
    });

    it('inQuadメソッドを持つ', function() {
        expect(easing.inQuad).toBeDefined();
    });
    it('outQuadメソッドを持つ', function() {
        expect(easing.outQuad).toBeDefined();
    });
    it('inOutQuadメソッドを持つ', function() {
        expect(easing.inOutQuad).toBeDefined();
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
