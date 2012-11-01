/* Class: "../../../js/src/DataStore.js" */
describe('DataStoreは', function() {
    var store;

    beforeEach(function() {
        store = new Global.DataStore();
    });
    afterEach(function() {
        store.resetData();
    });

    it('singleオプションでsingletonになる', function() {
        var store1 = new Global.DataStore({
                single: true
            }),
            store2 = new Global.DataStore({
                single: true
            }),
            store3 = new Global.DataStore({
                single: false
            });

        expect(store1).toBe(store2);
        expect(store1).not.toBe(store3);
    });

    it('setData(key, val)でデータを保存する', function() {
        store.setData('test', 'test');

        expect(store.getData('test')).toEqual('test');
    });

    it('getData(key)でデータを取得する', function() {
        store.setData('test', 'test');

        expect(store.getData('test')).toEqual('test');
    });

    it('getData()で全データを取得する', function() {
        expect(store.getData()).toEqual({});
        store.setData('test', 'test');
        expect(store.getData()).toEqual({test: 'test'});
    });

    it('removeData(key)でデータを削除する', function() {
        store.setData('test1', 'test1');
        store.setData('test2', 'test2');
        store.removeData('test1');

        expect(store.getData()).toEqual({test2: 'test2'});
    });

    it('resetData()で全データを削除する', function() {
        store.setData('test1', 'test');
        store.setData('test2', 'test');
        store.setData('test3', 'test');

        expect(store.getData('test1')).toEqual('test');
        expect(store.getData('test2')).toEqual('test');
        expect(store.getData('test3')).toEqual('test');

        store.resetData();

        expect(store.getData('test1')).not.toBeDefined();
        expect(store.getData('test2')).not.toBeDefined();
        expect(store.getData('test3')).not.toBeDefined();
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
