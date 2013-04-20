describe('Collectionは', function() {
    var c = window.C ? C : Global,
        collection;

    beforeEach(function() {
        // init
        collection = new c.Collection({
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
