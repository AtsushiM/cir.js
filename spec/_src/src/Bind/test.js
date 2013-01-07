/* Class: "../../../../js/src/Bind.js" */
describe('Bindは', function() {
    var c = window.C ? C : Global,
        bind,
        eventHandeler;

    beforeEach(function() {
        // init
        eventHandeler = {
            element: document.body,
            events: {
                click: function(str) {
                    eventHandeler.clicktest = true;
                },
                rollover: function() {}
            }
        };
        bind = new c.Bind(eventHandeler);
    });
    afterEach(function() {
    });

    it('初期化時に{element: element, events: {event: function}}に合わせてイベントを追加する', function() {
        document.body.click();
        expect(eventHandeler.clicktest).toBeTruthy();
    });

    it('getHandler()で初期化時の引数を取得する', function() {
        expect(bind.getHandler()).toEqual(eventHandeler);
    });

    it('remove()でelementからeventsを排除する', function() {
        spyOn(bind, '_exe').andCallThrough();

        expect(bind.remove()).toEqual(eventHandeler);
        expect(bind._exe).toHaveBeenCalledWith(false);
    });

    it('add()でelementにeventsを追加する', function() {
        spyOn(bind, '_exe').andCallThrough();

        expect(bind.add()).toEqual(eventHandeler);
        expect(bind._exe).toHaveBeenCalledWith(true);
    });

    it('_exe(eventHandeler, bool)でelementにeventを設定する', function() {
        spyOn(eventHandeler.events, 'click').andCallThrough();

        expect(bind._exe(false)).toEqual(eventHandeler);
        document.body.click();
        expect(eventHandeler.events.click).not.toHaveBeenCalled();
        expect(bind._exe(true)).toEqual(eventHandeler);
        document.body.click();
        expect(eventHandeler.events.click).toHaveBeenCalled();
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
