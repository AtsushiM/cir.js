describe('Ollectionは', function() {
    var c = window.C ? C : Global,
        collection;

    beforeEach(function() {
        // init
        collection = new c.Ollection({
            on: {
                'change': function(vars) {
                },
                'remove': function(vars) {
                },
                'reset': function(vars) {
                }
            }
        });
    });
    afterEach(function() {
        // clear
        if (collection.dispose) {
            collection = collection.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        collection.dispose();
        expect(collection).to.eql({});
    });

    it('set(key, val)で値を設定し、changeイベントを発火する', function() {
        var ret = 0;

        collection.on('change', function() {
            ret = 1;
        });
        collection.set('settest', 1);

        expect(ret).to.be(1);
    });

    it('add(val)で連番をkeyにし、set(key, val)を呼び出す。返り値はkeyとなる。', function() {
        var count = 0,
            _val = 'test';

        collection.set = function(key, val) {
            count++;
            expect(key).to.be(count);
            expect(val).to.be(_val);
        };

        expect(collection.add(_val)).to.be(1);
        expect(collection.add(_val)).to.be(2);
    });

    it('each(callback)で保存されたデータ全てにcallbackで処理を行う', function() {
        var count = 0;

        collection.add({
            test: 1
        });
        collection.add({
            test: 2
        });
        collection.add({
            test: 3
        });

        collection.each(function(val, key, collect) {
            count++;

            expect(val).to.eql({
                test: count
            });
            expect(key).to.eql(count);
            expect(collect).to.eql({
                1: {test: 1},
                2: {test: 2},
                3: {test: 3}
            });
        });

        expect(count).to.be(3);
    });

    it('map(callback)で保存されたデータ全てにcallbackで処理を行う。callbackの返り値が対応する保存されたデータを上書きする', function() {
        var count = 0;

        collection.add({
            test: 1
        });
        collection.add({
            test: 2
        });
        collection.add({
            test: 3
        });

        collection.map(function(val, key, collect) {
            count++;

            expect(val).to.eql({
                test: count
            });
            expect(key).to.eql(count);
            expect(collect).to.eql({
                1: {test: 1},
                2: {test: 2},
                3: {test: 3}
            });

            return {
                test: count * 2
            };
        });

        expect(count).to.be(3);
        expect(collection.get()).to.eql({
            1: {test: 2},
            2: {test: 4},
            3: {test: 6}
        });
    });

    it('prev(key)で一つ前の状態の値を返す', function() {
        collection.set('settest', 1);
        expect(collection.prev().settest).to.be(undefined);
        expect(collection.prev('settest')).to.be(undefined);
    });

    it('get(key)で値を返す', function() {
        collection.set('test', 1);
        expect(collection.get('test')).to.be(1);
    });

    it('remove(key)で値を削除し、removeイベントを発火する', function() {
        var ret = 0;

        collection.on('remove', function() {
            ret = 1;
        });
        collection.remove('test');
        expect(ret).to.be(1);
        expect(collection.get('test')).to.be(undefined);
    });

    it('reset()で値を全て削除する', function() {
        var ret = 0;

        collection.on('reset', function() {
            ret = 1;
        });
        collection.reset();

        expect(ret).to.be(1);
    });

    it('on(key, func)でイベントを登録する', function() {
        var ret = 0;

        collection.on('change', function() {
            ret = 1;
        });

        collection.fire('change');
        expect(ret).to.be(1);
    });

    it('off(key, func)でイベントを削除する', function() {
        var ret = 0,
            func = function() {
                ret = 1;
            };

        var bindfunc = collection.on('change', func);
        collection.off('change', bindfunc);

        collection.fire('change');
        expect(ret).to.be(0);
    });

    it('fire(key, value)でイベントを発火する', function() {
        var ret = 0,
            func = function() {
                ret = 1;
            };

        collection.on('change', func);

        collection.fire('change');
        expect(ret).to.be(1);
    });
});
