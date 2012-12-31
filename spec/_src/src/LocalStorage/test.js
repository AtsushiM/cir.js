/* Class: "../../../../js/src/LocalStorage.js" */
describe('LocalStorageは', function() {
    var storage,
        LS = window.localStorage;

    beforeEach(function() {
        // init
        storage = new C.LocalStorage();
    });
    afterEach(function() {
        // clear
        LS.clear();
    });

    it('set(key, value)でデータをlocalStorageにデータを保存する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');
        storage.set('test3', {
            test: 'test'
        });

        expect(LS.test1).toEqual('1');
        expect(LS.test2).toEqual('"test"');
        expect(LS.test3).toEqual('{"test":"test"}');
    });

    it('get(key)でlocalStorageからデータを取得する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');
        storage.set('test3', {
            test: 'test'
        });

        var test1 = storage.get('test1'),
            test2 = storage.get('test2'),
            test3 = storage.get('test3');

        expect(test1).toEqual(1);
        expect(test2).toEqual('test');
        expect(test3).toEqual({
            test: 'test'
        });
    });

    it('get()でlocalStorageから全データを取得する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');
        storage.set('test3', {
            test: 'test'
        });

        var test = storage.get();

        expect(test).toEqual({
            test1: 1,
            test2: 'test',
            test3: {
                test: 'test'
            }
        });
    });

    it('remove(key)でlocalStorageからデータを削除する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');
        storage.remove('test1');

        expect(storage.get('test1')).toBeNull();
        expect(storage.get('test2')).toBeDefined();
    });

    it('reset(key)でlocalStorageから全データを削除する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');
        storage.reset();

        expect(storage.get('test1')).toBeNull();
        expect(storage.get('test2')).toBeNull();
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
