/* Class: "../../../../js/src/Bind.js" */
describe('Bindは', function() {
    var bind,
        eventHandeler;

    beforeEach(function() {
        // init
        bind = window.C ? new C.Bind() : new Global.Bind();
    });
    afterEach(function() {
        bind.remove(eventHandeler);
    });

    it('add({element: element, events: {event: function}})でelementにeventを追加する', function() {
        spyOn(bind, '_exe').andCallThrough();

        eventHandeler = bind.add({
            element: document.body,
            events: {
                click: function() {},
                rollover: function() {}
            }
        });

        expect(bind._exe).toHaveBeenCalledWith(true, eventHandeler);
    });

    it('remove(eventHandeler)でelementからeventを排除する', function() {
        spyOn(bind, '_exe').andCallThrough();

        eventHandeler = bind.add({
            element: document.body,
            events: {
                click: function() {}
            }
        });
        eventHandeler = bind.remove({
            element: document.body,
            events: {
                click: function() {}
            }
        });

        expect(bind._exe).toHaveBeenCalledWith(false, eventHandeler);
    });

    it('_exe(eventHandeler, bool)でelementにeventを設定する', function() {
        eventHandeler = {
            element: document.body,
            events: {
                click: function() {}
            }
        };

        spyOn(eventHandeler.events, 'click').andCallThrough();

        bind._exe(true, eventHandeler);
        document.body.click();
        bind._exe(false, eventHandeler);
        document.body.click();

        expect(eventHandeler.events.click.callCount).toEqual(1);
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
