/* Class: "../../../../js/src/Deferred.js" */
describe('Deferredは', function() {
    var c = window.C ? C : Global,
        deferred;

    beforeEach(function() {
        // init
        deferred = new c.Deferred();
    });
    afterEach(function() {
        // clear
    });

    it('dispose()でインスタンスを解放する', function() {
        deferred.dispose();
        expect(deferred).toEqual({});
    });

    it('isResolve()でresolve()が実行されたかどうかboolを返す', function() {
        expect(deferred.isResolve()).toBeFalsy();
        deferred.resolve();
        expect(deferred.isResolve()).toBeTruthy();
        deferred.resolve();
        expect(deferred.isResolve()).toBeTruthy();
    });

    it('done(function)でresolve()が実行された場合、遅延実行される関数を登録する', function() {
        var count = 0;
        deferred
        .done(function() {
            count++;
        })
        .done(function() {
            count += 2;
        })
        .done(function() {
            count += 3;
        });

        expect(count).toEqual(0);
        deferred.resolve();
        expect(count).toEqual(6);
    });

    it('resolve()でdone()で登録した関数を順次実行する', function() {
        var count = 0;
        deferred
        .resolve(1)
        .done(function(num) {
            count += num;
        })
        .done(function(num) {
            count += num;
        })
        .done(function(num) {
            count += num;
        });

        expect(count).toEqual(3);
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
