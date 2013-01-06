/* Class: "../../../js/src/DataStore.js" */
describe('DataStoreは', function() {
    var c = window.C ? C : Global,
        store;

    beforeEach(function() {
        store = new c.DataStore();
    });
    afterEach(function() {
        store.reset();
    });

    it('singleオプションでsingletonになる', function() {
        var store1 = new c.DataStore({
                single: true
            }),
            store2 = new c.DataStore({
                single: true
            }),
            store3 = new c.DataStore({
                single: false
            });

        expect(store1).toBe(store2);
        expect(store1).not.toBe(store3);
    });

    it('set(key, val)でデータを保存する', function() {
        store.set('test', 'test');

        expect(store.get('test')).toEqual('test');
    });

    it('get(key)でデータを取得する', function() {
        store.set('test', 'test');

        expect(store.get('test')).toEqual('test');
    });

    it('get()で全データを取得する', function() {
        expect(store.get()).toEqual({});
        store.set('test', 'test');
        expect(store.get()).toEqual({test: 'test'});
    });

    it('remove(key)でデータを削除する', function() {
        store.set('test1', 'test1');
        store.set('test2', 'test2');
        store.remove('test1');

        expect(store.get()).toEqual({test2: 'test2'});
    });

    it('reset()で全データを削除する', function() {
        store.set('test1', 'test');
        store.set('test2', 'test');
        store.set('test3', 'test');

        expect(store.get('test1')).toEqual('test');
        expect(store.get('test2')).toEqual('test');
        expect(store.get('test3')).toEqual('test');

        store.reset();

        expect(store.get('test1')).not.toBeDefined();
        expect(store.get('test2')).not.toBeDefined();
        expect(store.get('test3')).not.toBeDefined();
    });
});
/*
describe('SUGOROKUは', function() {
    var XXXX;

    beforeEach(function() {
        XXXX = new YYYY({
        });
    });
    afterEach(function() {
        XXXX = null;
    });

    runs(function() {
        //処理
    });
    // １秒待ち
    waits(1000);
    runs(function() {
        //処理
    });

    it('XXXX は XXXXX で XXXXX', function() {
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

    });
});
*/
