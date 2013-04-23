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

    it('set(key, val)で値を設定し、changeイベントを発火する', function(done) {
        collection.on('change', function(val, key, collect) {
            expect(val).to.be('test');
            expect(key).to.be(0);
            expect(c.util.isArray(collect)).to.be(true);
            done();
        });
        collection.set(0, 'test');
    });

    it('add(val)で連番をkeyにし、set(key, val)を呼び出す。返り値はkeyとなる。', function() {
        expect(collection.add('test1')).to.be(0);
        expect(collection.add('test2')).to.be(1);
        expect(collection.get()).to.eql([
            'test1',
            'test2'
        ]);
    });

    it('each(callback)で保存されたデータ全てにcallbackで処理を行う', function() {
        var count = 0;

        collection.add({
            test: 0
        });
        collection.add({
            test: 1
        });
        collection.add({
            test: 2
        });

        collection.each(function(val, key, collect) {
            expect(val).to.eql({
                test: count
            });
            expect(key).to.eql(count);
            expect(collect).to.eql([
                {test: 0},
                {test: 1},
                {test: 2}
            ]);

            count++;
        });

        expect(count).to.be(3);
    });

    it('map(callback)で保存されたデータ全てにcallbackで処理を行う。callbackの返り値が対応する保存されたデータを上書きする', function() {
        var count = 0;

        collection.add({
            test: 0
        });
        collection.add({
            test: 1
        });
        collection.add({
            test: 2
        });

        collection.map(function(val, key, collect) {
            var ret = {
                    test: count * 2
                };

            expect(val).to.eql({
                test: count
            });
            expect(key).to.eql(count);
            expect(collect).to.eql([
                {test: 0},
                {test: 1},
                {test: 2}
            ]);

            count++;

            return ret;
        });

        expect(count).to.be(3);
        expect(collection.get()).to.eql([
            {test: 0},
            {test: 2},
            {test: 4}
        ]);
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
