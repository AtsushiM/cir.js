describe('C.Storageは', function() {
    var c = window.C ? C : Global,
        storage;

    beforeEach(function() {
        // init
        storage = new c.Storage();
    });
    afterEach(function() {
        if (storage.dispose) {
            storage.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        storage.dispose();
        expect(storage).to.eql({});
    });

    it('set(key, value)でデータを保存する', function() {
        test(storage);

        function test(storage) {
            storage.set('test1', 1);
            storage.set('test2', 'test');
            storage.set('test3', {
                test: 'test'
            });

            expect(storage.get('test1')).to.be(1);
            expect(storage.get('test2')).to.be('test');
            expect(storage.get('test3')).to.eql({test: 'test'});
        }
    });

    it('set(obj)でデータを保存する', function() {
        storage.set({
            test1: 1,
            test2: 'test',
            test3: {
                test: 'test'
            }
        });

        expect(storage.get('test1')).to.be(1);
        expect(storage.get('test2')).to.be('test');
        expect(storage.get('test3')).to.eql({test: 'test'});
    });

    it('get(key)でデータを取得する', function() {
        test(storage);

        function test(storage) {
            storage.set('test1', 1);
            storage.set('test2', 'test');
            storage.set('test3', {
                test: 'test'
            });

            var test1 = storage.get('test1'),
                test2 = storage.get('test2'),
                test3 = storage.get('test3');

            expect(test1).to.be(1);
            expect(test2).to.be('test');
            expect(test3).to.eql({
                test: 'test'
            });
        }
    });

    it('get()で全データを取得する', function() {
        test(storage);

        function test(storage) {
            storage.reset();
            storage.set('test1', 1);
            storage.set('test2', 'test');
            storage.set('test3', {
                test: 'test'
            });

            var test = storage.get();

            expect(test).to.eql({
                test1: 1,
                test2: 'test',
                test3: {
                    test: 'test'
                }
            });
        }
    });

    it('remove(key)でデータを削除する', function() {
        test(storage);

        function test(storage) {
            storage.set('test1', 1);
            storage.set('test2', 'test');
            storage.remove('test1');

            expect(storage.get('test1')).to.be(undefined);
            expect(storage.get('test2')).not.to.be(undefined);
        }
    });

    it('reset(key)で全データを削除する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');

        expect(storage.get('test1')).not.to.be(null);
        expect(storage.get('test2')).not.to.be(null);

        storage.reset();

        expect(storage.get('test1')).to.be(undefined);
        expect(storage.get('test2')).to.be(undefined);
    });
});
