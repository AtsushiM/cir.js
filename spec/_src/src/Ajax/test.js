/* Class: "../../../../js/src/Ajax.js" */
describe('Ajaxは', function() {
    var ajax;

    beforeEach(function() {
        // init
        ajax = window.C ? new C.Ajax() : new Global.Ajax();
    });
    afterEach(function() {
        // clear
        if (ajax.dispose) {
            ajax.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        ajax.dispose();
        expect(ajax).toEqual({});
    });

    it('インスタンス生成時にrequest()に渡す形式の引数を指定した場合、request()を呼び出す', function() {
        var data = '',
            ajax = new C.Ajax({
                url: '/spec/common/test.xml',
                callback: function(d) {
                    data = d;
                }
            });

        waits(500);
        runs(function() {
            expect(data).not.toEqual('');
        });
    });

    it('request({url, callback})で非同期でurlの実行結果を取得する', function() {
        var data = '';
        ajax.request({
            url: '/spec/common/test.xml',
            callback: function(d) {
                console.log(d);
                data = d;
            }
        });

        waits(500);
        runs(function() {
            expect(data).not.toEqual('');
        });
    });

    it('request({url, cash: true, callback})でキャッシュ無効化用のフラグを立てる', function() {
        var data = '';
        ajax.request({
            url: '/spec/common/test.xml',
            cash: true,
            callback: function(d) {
                data = d;
            }
        });

        waits(500);
        runs(function() {
            expect(data).not.toEqual('');
        });
    });

    it('request({url, type: "POST", callback})で送信メソッドをPOSTにする', function() {
        var data = '';
        ajax.request({
            url: '/spec/common/test.xml',
            type: 'POST',
            callback: function(d) {
                data = d;
            }
        });

        waits(500);
        runs(function() {
            expect(data).not.toEqual('');
        });
    });

    it('json({url, callback})で非同期でjsonを取得する', function() {
        var data = '';
        ajax.json({
            url: '/spec/common/test.json',
            callback: function(d) {
                data = d;
            }
        });

        waits(500);
        runs(function() {
            expect(data).not.toEqual('');
        });
    });

    it('abort()で非同期通信を停止する', function() {
        var data = '';
        ajax.request({
            url: '/sp/spec/common/test.xml',
            callback: function(d) {
                data = d;
            }
        });
        ajax.abort();

        waits(500);
        runs(function() {
            expect(data).toEqual('');
        });
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
