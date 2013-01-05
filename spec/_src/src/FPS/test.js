/* Class: "../../../../js/src/FPS.js" */
describe('FPSは', function() {
    var c = window.C ? C : Global,
        fps,
        dammy = {
            enterframe: function(vars) {
            }
        },
        criterion = 10;

    function setFPS() {
        fps = new c.FPS({
            criterion: criterion,
            enterframe: dammy.enterframe
        });
    }

    beforeEach(function() {
        // init
        setFPS();
    });
    afterEach(function() {
        // clear
        fps.stop();
    });

    it('singleオプションでsingletonになる', function() {
        var fps1 = new c.FPS({
                single: true,
                enterframe: dammy.enterframe
            }),
            fps2 = new c.FPS({
                single: true,
                enterframe: dammy.enterframe
            });

        expect(fps1).toBe(fps2);
    });

    it('getCriterion()で目標FPSを取得する', function() {
        expect(fps.getCriterion()).toEqual(criterion);
    });

    it('getSurver()で現在FPSを取得する', function() {
        expect(fps.getSurver()).toEqual(fps.getCriterion());
    });

    it('getFrameTime()で1フレームあたりのミリ秒数を取得する', function() {
        expect(fps.getFrameTime()).toEqual(1000 / criterion);
    });

    it('enter()で毎フレーム実行するメソッドを実行する', function() {
        spyOn(dammy, 'enterframe').andCallThrough();
        setFPS();
        fps.enter();

        expect(dammy.enterframe).toHaveBeenCalledWith({
            criterion: fps.getCriterion(),
            surver: fps.getSurver()
        });
    });

    it('start()でフレームごとの実行を開始する', function() {
        spyOn(dammy, 'enterframe').andCallThrough();
        setFPS();
        waits(100);
        runs(function() {
            fps.start();
        });
        waits(Math.ceil(fps.getFrameTime() * 20));
        runs(function() {
            expect(dammy.enterframe.callCount).toBeGreaterThan(13);
            expect(dammy.enterframe.callCount).toBeLessThan(21);
        });
    });

    it('stop()でフレームごとの実行を停止する', function() {
        spyOn(dammy, 'enterframe').andCallThrough();
        setFPS();
        fps.start();
        fps.stop();

        waits(fps.getFrameTime() + 10);
        runs(function() {
            expect(dammy.enterframe.callCount).toEqual(0);
        });
        waits(fps.getFrameTime());
        runs(function() {
            expect(dammy.enterframe.callCount).toEqual(0);
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
