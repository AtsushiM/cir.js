/* Class: "../../../../js/src/Datetime.js" */
describe('Datetimeは', function() {
    it('ミリ秒か、2000/01/01,2000-01-01T00:00:00,2000/01/01 00:00:00+09:00などのテキスト形式の日付をDate型で返す', function() {
        var date = new Date(10000),
            datetime = new C.Datetime(10000);

        expect(date).toEqual(datetime);

        date = new Date(2000, 0, 1, 0, 0, 0);

        expect(date).toEqual(new C.Datetime('2000/1/1'));
        expect(date).toEqual(new C.Datetime('2000-1-1'));
        expect(date).toEqual(new C.Datetime('2000/01/01'));
        expect(date).toEqual(new C.Datetime('2000-01-01'));
        expect(date).toEqual(new C.Datetime('2000/01/01 00:00:00'));
        expect(date).toEqual(new C.Datetime('2000-01-01T00:00:00'));
        expect(date).toEqual(new C.Datetime('2000-01-01T00:00:00+09:00'));
        expect(date).toEqual(new C.Datetime('2000-01-01 00:00:00-09:00'));
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
