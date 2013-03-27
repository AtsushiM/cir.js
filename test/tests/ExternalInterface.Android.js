describe('ExternalInterface.Androidは', function() {
    var c = window.C ? C : Global,
        external,
        orgHash = location.hash,
        hashCntl = new c.HashQuery(),
        androidMethod = {
            test1: function(ret) {
                this.test1_result = ret;
                console.log(this.test1_result);
            },
            test2: function(ret) {
                this.test2_result = ret;
            },
            test3: function(ret) {
                this.test3_result = ret;
            }
        };

    beforeEach(function() {
        // init
        c.EXTERNAL_ANDROID = {};
        /* external = new c.ExternalInterface.Android({ */
        external = new c.ExternalInterface({
            android: androidMethod,
            externalObj: c.EXTERNAL_ANDROID
        });
    });
    afterEach(function() {
        // clear
        location.hash = orgHash;
        delete c.EXTERNAL_ANDROID;
        if (external.dispose) {
            external.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        external.dispose();
        expect(external).to.eql({});
    });

    it('call({mode: string, vars: {key: val}})でネイティブ機能を呼び出す', function() {
        var args = {
                id: 0,
                loop: 0
            };

        for (var i in androidMethod) {
            external.call({
                mode: i,
                vars: i
            });
            expect(androidMethod[i + '_result']).not.to.be(undefined);
        }
    });

    it('addCallback(name, function)でネイティブから機能を呼び出す関数を登録する', function() {
        var args = {
                mode: 'test',
                vars: {
                    test: 1
                }
            };

        // Android
        var returned = null;

        external.addCallback('load', function(args) {
            returned = args;
        });
        c.EXTERNAL_ANDROID.load(hashCntl.makeHash(args));
        expect(returned).to.eql(args.vars);
        returned = null;
    });

    it('removeCallback(name)でネイティブ呼び出しを削除する', function() {
        // Android
        var returned = null;

        external.addCallback('load', function() {
            returned = true;
        });
        external.removeCallback('load');

        expect(c.EXTERNAL_ANDROID.load).to.be(undefined);
    });
});
