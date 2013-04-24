describe('SessionStorageは', function() {
    var c = window.C ? C : Global,
        storage,
        storagecir,
        SS = window.sessionStorage;

    beforeEach(function() {
        // init
        storage = new c.SessionStorage();
        storagecir = new c.SessionStorage({
            namespace: 'cir'
        });
    });
    afterEach(function() {
        // clear
        SS.clear();
        if (storage.dispose) {
            storage.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        storage.dispose();
        expect(storage).to.eql({});
    });

    it('namespaceオプションでsessionStorage内を区切って管理する', function(done) {
        done();
    });

    it('set(key, value)でデータをsessionStorageにデータを保存する', function() {
        test(storage);
        test(storagecir);

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

    it('set(obj)でデータをsessionStorageにデータを保存する', function() {
        test(storage);
        test(storagecir);

        function test(storage) {
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
        }
    });

    it('get(key)でsessionStorageからデータを取得する', function() {
        test(storage);
        test(storagecir);

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

    it('get()でsessionStorageから全データを取得する', function() {
        test(storage);
        test(storagecir);

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

    it('remove(key)でsessionStorageからデータを削除する', function() {
        test(storage);
        test(storagecir);

        function test(storage) {
            storage.set('test1', 1);
            storage.set('test2', 'test');
            storage.remove('test1');

            expect(storage.get('test1')).to.be(null);
            expect(storage.get('test2')).not.to.be(undefined);
        }
    });

    it('reset(key)でsessionStorageから全データを削除する', function() {
        storage.set('test1', 1);
        storage.set('test2', 'test');
        storagecir.set('test1', 1);
        storagecir.set('test2', 'test');

        storagecir.reset();

        expect(storage.get('test1')).not.to.be(null);
        expect(storage.get('test2')).not.to.be(null);
        expect(storagecir.get('test1')).to.be(null);
        expect(storagecir.get('test2')).to.be(null);

        storagecir.set('test1', 1);
        storagecir.set('test2', 'test');

        storage.reset();

        expect(storage.get('test1')).to.be(null);
        expect(storage.get('test2')).to.be(null);
        expect(storagecir.get('test1')).to.be(null);
        expect(storagecir.get('test2')).to.be(null);
    });
});
