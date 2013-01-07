/* Class: "../../../../js/src/Tweener.js" */
describe('Tweenerは', function() {
    var c = window.C ? C : Global,
        tweener,
        element = document.createElement('div');

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        element.removeAttribute('style');
        tweener.stop();
    });

    it('new Tweener(targetObj, property, option)でアニメーションする', function() {
        var comp = false;
        runs(function() {
            expect(element.style.width).toEqual('');
            expect(element.style.height).toEqual('');

            tweener = new c.Tweener(
                element.style,
                {
                    width: {
                        from: 0,
                        to: 100
                    },
                    height: {
                        from: 0,
                        to: 100,
                        prefix: '',
                        suffix: 'px'
                    }
                },
                {
                    ease: c.ease.outExpo,
                    onComplete: function() {
                        comp = true;
                    }
                }
            );
        });
        waits(C.Tweener.Duration / 2);
        runs(function() {
            expect(comp).toBeFalsy();
            expect(element.style.width).toBeDefined();
            expect(element.style.height).toBeDefined();
        });
        waits(C.Tweener.Duration / 2 + 10);
        runs(function() {
            expect(comp).toBeTruthy();
            expect(element.style.width).toEqual('100px');
            expect(element.style.height).toEqual('100px');
        });
    });

    it('stop()でアニメーションを停止する', function() {
        var comp = false;
        runs(function() {
            tweener = new c.Tweener(
                element.style,
                {
                    width: {
                        from: 0,
                        to: 100
                    },
                    height: {
                        from: 0,
                        to: 100,
                        prefix: '',
                        suffix: 'px'
                    }
                },
                {
                    ease: null,
                    onComplete: function() {
                        comp = true;
                    }
                }
            );
        });
        waits(C.Tweener.Duration / 2);
        runs(function() {
            expect(comp).toBeFalsy();
            tweener.stop();
            expect(comp).toBeFalsy();
        });
        waits(C.Tweener.Duration / 2);
        runs(function() {
            expect(comp).toBeFalsy();
        });
    });

    it('C.Tweener.FPSでFPSを調整する', function() {
        expect(C.Tweener.FPS).toBeDefined();
    });

    it('C.Tweener.Durationでデフォルトのアニメーション実行時間を設定する', function() {
        expect(C.Tweener.Duration).toBeDefined();
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
