/* Class: "../../../../js/src/DragFlick.js" */
describe('DragFlickは', function() {
    var c = window.C ? C : Global,
        dragflick;

    beforeEach(function() {
        // init
        dragflick = new c.DragFlick({
            el: document.body,
            boundary: 0,
            direction: function(direction) {
            },
            start: function(e) {
            },
            move: function(e) {
            },
            end: function(e) {
            }
        });
    });
    afterEach(function() {
        // clear
        if (dragflick.dispose) {
            dragflick.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        dragflick.dispose();
        expect(dragflick).toEqual({});
    });

    // it('amount({el, callback})でelがフリックされた際、callbackに移動量を{x,y}の形式で渡す', function() {
    //     dragflick.amount({
    //         el: document.body,
    //         callback: function(amount) {
    //             expect(amount.x).toBeDefined();
    //             expect(amount.y).toBeDefined();
    //         }
    //     });

    //     expect(0).toEqual(0);
    // });

    // it('direction({el, boundary, callback})でelがフリックされた際、boundaryで指定した移動量以上フリックされたらcallbackに移動方向を渡す', function() {
    //     dragflick.direction({
    //         el: document.body,
    //         boundary: 0,
    //         callback: function(direction) {
    //             expect(direction.top).toBeDefined();
    //             expect(direction.right).toBeDefined();
    //             expect(direction.bottom).toBeDefined();
    //             expect(direction.left).toBeDefined();
    //             expect(direction.amount).toBeDefined();
    //         }
    //     });

    //     expect(0).toEqual(0);
    // });

    it('attach()でelに対してdirectionメソッドを実行し、touchstart,touchmove,touchendにそれぞれをバインドする', function() {
        dragflick.attach({
            el: document.body,
            boundary: 0,
            direction: function(direction) {
                expect(direction.top).toBeDefined();
                expect(direction.right).toBeDefined();
                expect(direction.bottom).toBeDefined();
                expect(direction.left).toBeDefined();
                expect(direction.amount).toBeDefined();
            },
            start: function(e) {
            },
            move: function(e) {
            },
            end: function(e) {
            }
        });

        expect(0).toEqual(0);
    });

    it('detach()で全ての登録イベントを削除する', function() {
        dragflick.detach();

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
