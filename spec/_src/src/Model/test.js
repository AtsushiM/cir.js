/* Class: "../../../../js/src/Model.js" */
describe('Modelは', function() {
    var c = window.C ? C : Global,
        model;

    beforeEach(function() {
        // init
        model = new c.Model({
            defaults: {
                test: 1,
                test2: 'test'
            },
            validate: {
                test: function(key, vars) {
                    if (C.util.isNumber(vars)) {
                        return true;
                    }
                    return false;
                }
            },
            on: {
                'change': function(vars) {
                },
                'change:test': function(vars) {
                },
                'remove': function(vars) {
                },
                'remove:test2': function(vars) {
                },
                'reset': function(vars) {
                }
            }
        });
    });
    afterEach(function() {
        // clear
        if (model.dispose) {
            model = model.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        model.dispose();
        expect(model).toEqual({});
    });

    it('set(key, val)で値を設定し、changeイベントを発火する', function() {
        var ret = 0;

        model.on('change:settest', function() {
            ret = 1;
        });
        model.set('settest', 1);

        expect(ret).toEqual(1);
    });

    it('prev(key)で一つ前の状態の値を返す', function() {
        model.set('settest', 1);
        expect(model.prev().settest).toEqual(undefined);
        expect(model.prev('settest')).toEqual(undefined);
    });

    it('get(key)で値を返す', function() {
        expect(model.get('test')).toEqual(1);
    });

    it('remove(key)で値を削除し、removeイベントを発火する', function() {
        var ret = 0;

        model.on('remove:test', function() {
            ret = 1;
        });
        model.remove('test');
        expect(ret).toEqual(1);
        expect(model.get('test')).not.toBeDefined();
    });

    it('reset()で値を全て削除する', function() {
        var ret = 0;

        model.on('reset', function() {
            ret = 1;
        });
        model.reset();

        expect(ret).toEqual(1);
    });

    it('on(key, func)でイベントを登録する', function() {
        var ret = 0;

        model.on('change', function() {
            ret = 1;
        });

        model.fire('change');
        expect(ret).toEqual(1);
    });

    it('off(key, func)でイベントを削除する', function() {
        var ret = 0,
            func = function() {
                ret = 1;
            };

        var bindfunc = model.on('change', func);
        model.off('change', bindfunc);

        model.fire('change');
        expect(ret).toEqual(0);
    });

    it('fire(key, value)でイベントを発火する', function() {
        var ret = 0,
            func = function() {
                ret = 1;
            };

        model.on('change', func);

        model.fire('change');
        expect(ret).toEqual(1);
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
