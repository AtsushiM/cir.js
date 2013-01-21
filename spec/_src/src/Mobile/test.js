/* Class: "../../../../js/src/Mobile.js" */
describe('Mobileは', function() {
    var c = window.C ? C : Global,
        mb;

    beforeEach(function() {
        // init
        mb = new c.Mobile();
    });
    afterEach(function() {
        // clear
    });

    it('dispose()でインスタンスを解放する', function() {
        mb.dispose();
        expect(mb).toEqual({});
    });

    it('getZoom()で画面の拡大率を取得する', function() {
        expect(mb.getZoom()).toBeGreaterThan(0);
    });

    it('isAndroid()でAndroid端末かどうかチェック', function() {
        expect(mb.isAndroid()).toBeFalsy();
        expect(mb.isAndroid('Android')).toBeTruthy();
        expect(mb.isAndroid('PC')).toBeFalsy();
    });

    it('isIOS()でiOS端末かどうかチェック', function() {
        expect(mb.isIOS()).toBeFalsy();
        expect(mb.isIOS('iPhone')).toBeTruthy();
        expect(mb.isIOS('iPad')).toBeTruthy();
        expect(mb.isIOS('iPod')).toBeTruthy();
        expect(mb.isIOS('PC')).toBeFalsy();
    });

    it('isWindows()でWindowsモバイル端末かどうかチェック', function() {
        expect(mb.isWindows()).toBeFalsy();
        expect(mb.isWindows('IEMobile')).toBeTruthy();
        expect(mb.isWindows('PC')).toBeFalsy();
    });

    it('isFBAPP()でFacebookアプリかどうかチェック', function() {
        expect(mb.isFBAPP()).toBeFalsy();
        expect(mb.isFBAPP('FBAN')).toBeTruthy();
        expect(mb.isFBAPP('fban')).toBeFalsy();
    });

    it('isMobile()でモバイル端末かどうかチェック', function() {
        spyOn(mb, 'isAndroid').andCallThrough();
        spyOn(mb, 'isIOS').andCallThrough();
        spyOn(mb, 'isWindows').andCallThrough();
        spyOn(mb, 'isFBAPP').andCallThrough();

        expect(mb.isMobile()).toBeFalsy();
        expect(mb.isAndroid).toHaveBeenCalled();
        expect(mb.isIOS).toHaveBeenCalled();
        expect(mb.isWindows).toHaveBeenCalled();
        expect(mb.isFBAPP).toHaveBeenCalled();
    });

    it('hideAddress()でアドレスバーを非表示にする', function() {
        mb.hideAddress();
        expect(0).toEqual(0);
    });

    it('killScroll()でスクロールを禁止する', function() {
        mb.killScroll(true);
        mb.killScroll();
        expect(0).toEqual(0);
    });

    it('revivalScroll()でスクロールを復活する', function() {
        mb.revivalScroll(true);
        mb.revivalScroll();
        expect(0).toEqual(0);
    });

    it('getOrientation()で画面の向きをチェックする', function() {
        var orient = mb.getOrientation();
        expect(orient.portrait).toBeDefined();
        expect(orient.landscape).toBeDefined();
    });

    it('bindOrientation()で画面サイズ変更の際の処理を実行する', function() {
        mb.bindOrientation({
            landscape: function() {
                // 横
            },
            portrait: function() {
                // 縦
            }
        });
        expect(0).toEqual(0);
    });

    it('bindOrientation()は画面向きチェックに紐付けたイベントを削除する関数を返す', function() {
        var remove = mb.bindOrientation({
            landscape: function() {
                // 横
            },
            portrait: function() {
                // 縦
            }
        });
        remove();

        expect(0).toEqual(0);
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
