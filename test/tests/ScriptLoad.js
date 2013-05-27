describe('C.ScriptLoadは', function() {
    var scriptload,
        progress = 0,
        progresscount = 0,
        loadend = false;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        progress = 0;
        progresscount = 0;
        loadend = false;
        if (scriptload.dispose) {
            scriptload.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function(done) {
        scriptload = new C.ScriptLoad({
            srcs: [
                '/test/common/test.js',
                '/test/common/test2.js',
                '/test/common/test3.js'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                scriptload.dispose();
                done();
            }
        });
    });

    it('start()でscriptのローディングを開始する', function(done) {
        scriptload = new C.ScriptLoad({
            manual: true,
            srcs: [
                '/test/common/test.js',
                '/test/common/test2.js',
                '/test/common/test3.js'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                loadend = true;
            }
        });

        setTimeout(function() {
            expect(loadend).to.be.false;
            expect(progress).to.be(0);

            scriptload.start();

            setTimeout(function() {
                expect(loadend).to.be.true;
                expect(progress).to.be(1);

                done();
            }, 500);
        }, 500);
    });

    it('start()でローディングを開始した場合、startイベントを発火する', function(done) {
        scriptload = new C.ScriptLoad({
            manual: true,
            srcs: [
                '/test/common/test.js',
                '/test/common/test2.js',
                '/test/common/test3.js'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                loadend = true;
            }
        });

        scriptload.on('start', function() {
            done();
        });

        scriptload.start();
    });

    it('ローディング完了時、completeイベントを発火する', function(done) {
        scriptload = new C.ScriptLoad({
            srcs: [
                '/test/common/test.js',
                '/test/common/test2.js',
                '/test/common/test3.js'
            ],
            onprogress: function(prog) {
                progress = prog;
            },
            oncomplete: function() {
                loadend = true;
            }
        });

        scriptload.on('complete', function() {
            done();
        });
    });
});
