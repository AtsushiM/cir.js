/* Class: "../../../../js/src/Handle.js" */
describe('Handleは', function() {
    var c = window.C ? C : Global,
        handle,
        eventHandeler;

    beforeEach(function() {
        // init
        eventHandeler = {
            el: document.body,
            events: {
                click: function(str) {
                    eventHandeler.clicktest = true;
                },
                rollover: function() {}
            }
        };
        handle = new c.Handle(eventHandeler);
    });
    afterEach(function() {
        if (handle.dispose) {
            handle.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        handle.dispose();
        expect(handle).toEqual({});
    });

    it('初期化時に{el: element, events: {event: function}}に合わせてイベントを追加する', function() {
        document.body.click();
        expect(eventHandeler.clicktest).toBeTruthy();
    });

    it('attach()でelementにeventsを追加する', function() {
        handle.attach();
        document.body.click();
        expect(eventHandeler.clicktest).toBeTruthy();
    });

    it('detach()でelementからeventsを排除する', function() {
        handle.attach();
        handle.detach();
        document.body.click();
        expect(eventHandeler.clicktest).not.toBeTruthy();
    });

//     it('_e(eventHandeler, bool)でelementにeventを設定する', function() {
//         spyOn(eventHandeler.events, 'click').andCallThrough();
//         handle._e(false);
//         document.body.click();
//         expect(eventHandeler.events.click).not.toHaveBeenCalled();
//         handle._e(true);
//         document.body.click();
//         expect(eventHandeler.events.click).toHaveBeenCalled();
//     });
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
