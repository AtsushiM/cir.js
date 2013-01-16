/* Class: "../../../../js/src/ease.js" */
describe('easeは', function() {
    var c = window.C ? C : Global,
        ease;

    beforeEach(function() {
        // init
        ease = c.ease;
    });
    afterEach(function() {
        // clear
    });

    it('linearメソッドを持つ', function() {
        expect(ease.linear).toBeDefined();
    });

    it('inCubicメソッドを持つ', function() {
        expect(ease.inCubic).toBeDefined();
    });
    it('outCubicメソッドを持つ', function() {
        expect(ease.outCubic).toBeDefined();
    });
    it('inOutCubicメソッドを持つ', function() {
        expect(ease.inOutCubic).toBeDefined();
    });

    it('inQuartメソッドを持つ', function() {
        expect(ease.inQuart).toBeDefined();
    });
    it('outQuartメソッドを持つ', function() {
        expect(ease.outQuart).toBeDefined();
    });
    it('inOutQuartメソッドを持つ', function() {
        expect(ease.inOutQuart).toBeDefined();
    });

    it('inQuintメソッドを持つ', function() {
        expect(ease.inQuint).toBeDefined();
    });
    it('outQuintメソッドを持つ', function() {
        expect(ease.outQuint).toBeDefined();
    });
    it('inOutQuintメソッドを持つ', function() {
        expect(ease.inOutQuint).toBeDefined();
    });

    it('inSineメソッドを持つ', function() {
        expect(ease.inSine).toBeDefined();
    });
    it('outSineメソッドを持つ', function() {
        expect(ease.outSine).toBeDefined();
    });
    it('inOutSineメソッドを持つ', function() {
        expect(ease.inOutSine).toBeDefined();
    });

    it('inExpoメソッドを持つ', function() {
        expect(ease.inExpo).toBeDefined();
    });
    it('outExpoメソッドを持つ', function() {
        expect(ease.outExpo).toBeDefined();
    });
    it('inOutExpoメソッドを持つ', function() {
        expect(ease.inOutExpo).toBeDefined();
    });

    it('inCircメソッドを持つ', function() {
        expect(ease.inCirc).toBeDefined();
    });
    it('outCircメソッドを持つ', function() {
        expect(ease.outCirc).toBeDefined();
    });
    it('inOutCircメソッドを持つ', function() {
        expect(ease.inOutCirc).toBeDefined();
    });

    it('inQuadメソッドを持つ', function() {
        expect(ease.inQuad).toBeDefined();
    });
    it('outQuadメソッドを持つ', function() {
        expect(ease.outQuad).toBeDefined();
    });
    it('inOutQuadメソッドを持つ', function() {
        expect(ease.inOutQuad).toBeDefined();
    });

    it('inBackメソッドを持つ', function() {
        expect(ease.inBack).toBeDefined();
    });
    it('outBackメソッドを持つ', function() {
        expect(ease.outBack).toBeDefined();
    });
    it('inOutBackメソッドを持つ', function() {
        expect(ease.inOutBack).toBeDefined();
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
