describe('ExternalInterface.IOSは', function() {
    var c = window.C ? C : Global,
        external,
        orgHash = location.hash,
        hashCntl = new c.HashQuery(),
        iOSMethod = {
            test1: function() {},
            test2: function() {},
            test3: function() {}
        };

    beforeEach(function() {
        // init
        /* external = new c.ExternalInterface.IOS(); */
        external = new c.ExternalInterface();
    });
    afterEach(function() {
        // clear
        location.hash = orgHash;
        if (external.dispose) {
            external.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        external.dispose();
        expect(external).to.eql({
            _super: undefined
        });
    });

    it('call({mode: string, vars: {key: val}})でネイティブ機能を呼び出す', function() {
        // iOSの場合はhash,
        var args = {
                id: 0,
                loop: 0
            };

        for (var i in iOSMethod) {
            external.call({
                mode: i,
                vars: args
            });
            expect(
                location.hash
                .split('#')[1]
                .split('?')[0]
            ).to.be(i);
        }
    });

    it('addCallback(name, function)でネイティブから機能を呼び出す関数を登録する', function(done) {
        var args = {
                mode: 'test',
                vars: {
                    test: 1
                }
            };

        external.addCallback('load', function(ret) {
            expect(ret).to.eql(args);

            done();
        });

        hashCntl.setHash({
            mode: 'load',
            vars: args
        });
    });

    it('removeCallback(name)でネイティブ呼び出しを削除する', function(done) {
        var returned = null;

        external.addCallback('load', function() {
            returned = true;
        });
        external.removeCallback('load');

        hashCntl.setHash({
            mode: 'load',
            vars: {
                test: 'test'
            }
        });

        setTimeout(function() {
            expect(returned).to.be(null);

            done();
        }, 500);
    });
});
