/* Class: "../../../../js/src/ExternalInterface.js" */
describe('ExternalInterfaceは', function() {
    var extAndroid,
        extIOS,
        androidMethod = {
            test1: function() {},
            test2: function() {},
            test3: function() {}
        };

    beforeEach(function() {
        // init
        extAndroid = new HYAPP.ExternalInterface({
            android: androidMethod
        });
        extIOS = new HYAPP.ExternalInterface({
            android: false
        });
    });
    afterEach(function() {
        // clear
    });

    it('singleオプションでsingletonになる', function() {
        var e1 = new HYAPP.ExternalInterface({
                single: true
            }),
            e2 = new HYAPP.ExternalInterface({
                single: true
            }),
            e3 = new HYAPP.ExternalInterface({
                single: false
            });

        expect(e1).toBe(e2);
        expect(e1).not.toBe(e3);
    });

    it('iOSとAndroid端末で、メソッドの動作を変更する', function() {
        // それぞれ同じメソッドを持つことを確認する
        expect(extAndroid.call).toBeDefined();
        expect(extIOS.call).toBeDefined();
        expect(extAndroid.addCallback).toBeDefined();
        expect(extIOS.addCallback).toBeDefined();
        expect(extAndroid.removeCallback).toBeDefined();
        expect(extIOS.removeCallback).toBeDefined();
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
