/* Class: "../../../../js/src/Class.js" */
describe('Classは', function() {
    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('extend(prop)でクラスを作成する', function() {
        var initcount = 0,
            method1count = 0,
            Test = C.lass.extend({
                init: function(num) {
                    initcount += num;
                },
                method1: function() {
                    method1count++;
                }
            }),
            test = new Test(1);

        expect(initcount).toEqual(1);
        test.method1();
        expect(method1count).toEqual(1);
        test.method1();
        expect(method1count).toEqual(2);
    });

    it('initは省略できる', function() {
        var method1count = 0,
            Test = C.lass.extend({
                method1: function() {
                    method1count++;
                }
            }),
            test = new Test(1);

        test.method1();
        expect(method1count).toEqual(1);
        test.method1();
        expect(method1count).toEqual(2);
    });

    it('extend()で作成したクラスはextend()を持つ', function() {
        var method1count = 0,
            method2count = 0,
            method3count = 0,
            Test1 = C.lass.extend({
                method1: function() {
                    method1count += 1;
                },
                method2: function() {
                    method2count += 1;
                },
                method3: function() {
                    method3count += 1;
                }
            });
            Test2 = Test1.extend({
                method1: function() {
                    method1count += 2;
                },
                method2: function() {
                    method2count += 2;
                    this._super();
                }
            }),
            test2 = new Test2();

        test2.method1();
        test2.method2();
        test2.method3();

        expect(method1count).toEqual(2);
        expect(method2count).toEqual(3);
        expect(method3count).toEqual(1);
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
