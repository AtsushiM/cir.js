/* Class: "../../../../js/src/Async.js" */
describe('Asyncは', function() {
    var async;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('waitsオプションで指定した数値分、pass(vars)を呼び出せばcallback(undefined, args)が実行される', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                expect(error).not.toBeDefined();
                expect(args).toEqual([
                    1,
                    2,
                    3
                ]);
                ret++;
            },
            onprogress: function(vars) {
                console.log(vars);
            }
        });

        expect(ret).toEqual(0);
        async.pass(1);
        expect(ret).toEqual(0);
        async.pass(2);
        expect(ret).toEqual(0);
        async.pass(3);
        expect(ret).toEqual(1);
        async.pass(4);
        expect(ret).toEqual(1);
    });

    it('waitsオプションで指定した配列のlength分、pass(vars)を呼び出せばcallback(undefined, args)が実行される', function() {
        var ret = 0;
        async = new C.Async({
            waits: [
                function() {},
                function() {},
                function() {}
            ],
            callback: function(error, args) {
                expect(error).not.toBeDefined();
                expect(args).toEqual([
                    1,
                    2,
                    3
                ]);
                ret++;
            }
        });

        expect(ret).toEqual(0);
        async.pass(1);
        expect(ret).toEqual(0);
        async.pass(2);
        expect(ret).toEqual(0);
        async.pass(3);
        expect(ret).toEqual(1);
        async.pass(4);
        expect(ret).toEqual(1);
    });

    it('miss(vars)が呼ばれた場合、強制的にcallbackが呼ばれ、第一引数にErrorオブジェクトが渡される', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                expect(error).toBeDefined();
                expect(args).toEqual([
                    1,
                    2
                ]);
                ret++;
            }
        });

        async.pass(1);
        expect(ret).toEqual(0);
        async.miss(2);
        expect(ret).toEqual(1);
        async.pass(3);
        expect(ret).toEqual(1);
    });

    it('exit(vars)が呼ばれた場合、miss()が実行されていなければcallback(undefined, args)が実行される', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        async.miss(1);
        expect(ret).toEqual(1);

        async.exit(2);
        expect(ret).toEqual(1);

        ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                expect(error).not.toBeDefined();
                expect(args).toEqual([
                    1,
                    2
                ]);
                ret++;
            }
        });

        async.pass(1);
        expect(ret).toEqual(0);

        async.exit(2);
        expect(ret).toEqual(1);
    });

    it('getProgress(vars)でwaitsオプションの数値とpass()が呼ばれた回数から0~1の範囲で進捗度を返す', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        expect(async.getProgress()).toEqual(0);
        async.pass();
        expect(async.getProgress()).toEqual(1 / 3);
        async.pass();
        expect(async.getProgress()).toEqual(2 / 3);
        async.pass();
        expect(async.getProgress()).toEqual(3 / 3);
        async.pass();
        expect(async.getProgress()).toEqual(1);

        ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        async.exit();
        expect(async.getProgress()).toEqual(1);

        ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        async.miss();
        expect(async.getProgress()).toEqual(0);
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
