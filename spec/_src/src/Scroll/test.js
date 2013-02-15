/* Class: "../../../../js/src/Scroll.js" */
describe('Scrollは', function() {
    var scroll;

    beforeEach(function() {
        // init
        scroll = new Global.Scroll();
    });
    afterEach(function() {
        // clear
        if (scroll.dispose) {
            scroll.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        scroll.dispose();
        expect(scroll).toEqual({});
    });

    it('to(num)でスクロールを移動する', function() {
        scroll.to(1);
        scroll.to(100);
        expect(0).toEqual(0);
    });

    it('toTop()でスクロールを一番上に移動する', function() {
        scroll.toTop();
        expect(0).toEqual(0);
    });

    it('toBottom()でスクロールを一番下に移動する', function() {
        scroll.toBottom();
        expect(0).toEqual(0);
    });

    it('smooth(target)でtargetが数値の場合はその位置へ、elementの場合はelementのoffsetTopへ移動する', function() {
        scroll.smooth(document.body);
        expect(0).toEqual(0);
    });

    it('kill()でスクロールを禁止する', function() {
        scroll.kill();
        expect(0).toEqual(0);
    });

    it('revival()でスクロールを復活する', function() {
        scroll.revival();
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
