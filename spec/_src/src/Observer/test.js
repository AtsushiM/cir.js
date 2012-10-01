/* Class: "../../../../js/src/Observer.js" */
describe('Observerは', function() {
    var observer;

    beforeEach(function() {
        // init
        observer = new Global.Observer();
    });
    afterEach(function() {
        // clear
    });

    it('getObserved()で登録イベント一覧を取得する', function() {
        expect(observer.getObserved()).toBeDefined();
    });

    it('add()でイベントを登録する', function() {
        var dammy = function() {
            },
            getobj;

        observer.add('test', dammy);

        getobj = observer.getObserved();
        expect(getobj.test[0]).toBe(dammy);

        observer.add('test', dammy);

        getobj = observer.getObserved();
        expect(getobj.test[1]).toBe(dammy);

        observer.add('test1', function() {
        });

        getobj = observer.getObserved();
        expect(getobj.test1[0]).not.toBe(dammy);
    });

    it('adds()でオブジェクトに纏めた関数を登録する', function() {
        var args = {
                test1: function() {
                },
                test2: function() {
                }
            };

        observer.adds(args);

        var observed = observer.getObserved();

        expect(args.test1).toBe(observed.test1[0]);
        expect(args.test2).toBe(observed.test2[0]);
    });

    it('remove()でイベントを削除する', function() {
        var dammy1 = function() {
            },
            dammy2 = function() {
            },
            getobj;

        observer.add('test', dammy1);
        observer.remove('test');
        getobj = observer.getObserved();

        expect(getobj).toEqual({});

        observer.add('test1', dammy1);
        observer.add('test2', dammy2);
        observer.remove('test1', dammy1);
        getobj = observer.getObserved();

        expect(getobj.test1).not.toBeDefined();
        expect(getobj.test2[0]).toBe(dammy2);
    });

    it('removes()でオブジェクトに纏めた関数を登録解除する', function() {
        var args = {
                test1: function() {
                },
                test2: function() {
                }
            };

        observer.adds(args);
        observer.removes(args);

        var observed = observer.getObserved();

        expect(observed).toEqual({});
    });

    it('fire()でイベントを発火する', function() {
        var ret1 = 0,
            dammy1 = function() {
                ret1++;
            },
            ret2 = 0,
            dammy2 = function() {
                ret2++;
            };

        observer.add('test1', dammy1);
        observer.add('test2', dammy2);

        observer.fire('test1');

        expect(ret1).toEqual(1);
        expect(ret2).toEqual(0);

        observer.fire('test2');

        expect(ret1).toEqual(1);
        expect(ret2).toEqual(1);

        observer.add('test1', dammy2);

        observer.fire('test1');

        expect(ret1).toEqual(2);
        expect(ret2).toEqual(2);

        observer.fire('test2');

        expect(ret1).toEqual(2);
        expect(ret2).toEqual(3);
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

