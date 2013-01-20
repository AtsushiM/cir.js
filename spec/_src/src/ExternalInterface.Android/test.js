/* Class: "../../../../js/src/ExternalInterface.Android.js" */
describe('ExternalInterface.Androidは', function() {
    var c = window.C ? C : Global,
        external,
        orgHash = location.hash,
        hashCntl = new c.HashController(),
        androidMethod = {
            test1: function() {
            },
            test2: function() {
            },
            test3: function() {
            }
        };

    beforeEach(function() {
        // init
        c.EXTERNAL_ANDROID = {};
        external = new c.ExternalInterface.Android({
            android: androidMethod,
            // option
            externalObj: c.EXTERNAL_ANDROID
        });
    });
    afterEach(function() {
        // clear
        location.hash = orgHash;
        delete c.EXTERNAL_ANDROID;
    });

    it('call({mode: string, vars: {key: val}})でネイティブ機能を呼び出す', function() {
        var args = {
                id: 0,
                loop: 0
            };

        for (var i in androidMethod) {
            spyOn(androidMethod, i).andCallThrough();

            external.call({
                mode: i,
                vars: args
            });
            expect(androidMethod[i]).toHaveBeenCalled();
        }
    });

    it('addCallback(name, function)でネイティブから機能を呼び出す関数を登録する', function() {
        var args = {
                mode: 'test',
                vars: {
                    test: 1
                }
            };

        // Android
        var returned = null;

        external.addCallback('load', function(args) {
            returned = args;
        });
        c.EXTERNAL_ANDROID.load(hashCntl.makeHash(args));
        expect(returned).toEqual(args.vars);
        returned = null;
    });

    it('removeCallback(name)でネイティブ呼び出しを削除する', function() {
        // Android
        var returned = null;

        external.addCallback('load', function() {
            returned = true;
        });
        external.removeCallback('load');

        expect(c.EXTERNAL_ANDROID.load).not.toBeDefined();
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
