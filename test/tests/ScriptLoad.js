describe('ScriptLoadは', function() {
    var scriptload;

    beforeEach(function() {
        // init
        if (window.C) {
            scriptload = new C.ScriptLoad();
        }
        else {
            scriptload = new Global.ScriptLoad();
        }
    });
    afterEach(function() {
        // clear
        if (scriptload.dispose) {
            scriptload.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        scriptload.dispose();
        expect(scriptload).to.eql({});
    });

    it('request({src, callback})でscriptファイルをhtmlに読み込む', function(done) {
        var arg = {
                src: '/test/common/test.js',
                callback: function(e) {
                    expect(
                        !!document.querySelector('script[src="/test/common/test.js"]')
                    ).to.be(true);
                    done();
                }
            };

        scriptload.request(arg);
    });

    it('requests([{src, callback}], callback)で複数scriptファイルをhtmlに読み込む', function(done) {
        var arg = [
                {
                    src: '/test/common/test2.js',
                    callback: function() {}
                },
                {
                    src: '/test/common/test3.js',
                    callback: function(e) {
                    }
                }
            ];

        scriptload.requests(arg, function() {
            expect(
                !!document.querySelectorAll('script[src="/test/common/test2.js"]')
            ).to.be(true);
            expect(
                !!document.querySelectorAll('script[src="/test/common/test3.js"]')
            ).to.be(true);

            done();
        });
    });
});
