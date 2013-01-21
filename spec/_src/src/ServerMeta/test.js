/* Class: "../../../../js/src/ServerMeta.js" */
describe('ServerMetaは', function() {
    var c = window.C ? C : Global,
        servermeta;

    beforeEach(function() {
        // init
        servermeta = new c.ServerMeta();
    });
    afterEach(function() {
        // clear
    });

    it('初期化完了時にcallbackを実行する', function() {
        servermeta = new c.ServerMeta({
            callback: function() {
                expect(0).toEqual(0);
            }
        });
    });

    it('dispose()でインスタンスを解放する', function() {
        servermeta.dispose();
        expect(servermeta).toEqual({});
    });

    it('date()はサーバ時間を取得する', function() {
        var after = function(date) {
                expect(date.getFullYear()).toBeDefined();
            };

        expect(servermeta.date(after)).toBeDefined();
    });

    it('connection()はコネクション状態を取得する', function() {
        expect(servermeta.connection()).toBeDefined();
    });

    it('contentLength()はコンテンツ長を取得する', function() {
        expect(servermeta.contentLength()).toBeDefined();
    });

    it('lastModified()は最終更新時間を取得する', function() {
        expect(servermeta.lastModified()).toBeDefined();
    });

    it('server()はサーバ情報を取得する', function() {
        expect(servermeta.server()).toBeDefined();
    });

    it('contentType()はコンテンツタイプを取得する', function() {
        expect(servermeta.contentType()).toBeDefined();
    });

    it('acceptRanges()はレンジを取得する', function() {
        expect(servermeta.acceptRanges()).toBeDefined();
    });

    it('keepAlive()はタイムアウト時間などを取得する', function() {
        expect(servermeta.keepAlive()).toBeDefined();
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
