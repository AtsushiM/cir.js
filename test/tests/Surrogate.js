describe('C.Surrogateは', function() {
    var c = window.C ? C : Global,
        surrogate,
        dammy = {
            callback: function() {
            }
        };

    function before() {
        // init
        surrogate = new c.Surrogate({
            delay: 50,
            callback: dammy.callback
        });
    }

    beforeEach(function() {
    });
    afterEach(function() {
        // clear
        if (surrogate.dispose) {
            surrogate.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        surrogate = new c.Surrogate({
            delay: 50,
            callback: function() {
            }
        });
        surrogate.dispose();
        expect(surrogate).to.eql({
            _super: undefined
        });
    });

    it('flush()で引数callback()を実行する', function(done) {
        dammy.callback = function() {
            done();
        };
        before();
        surrogate.flush();
    });

    it('request()でdelayミリ秒遅延させてflush()を実行する', function(done) {
        dammy.callback = function(val) {
            expect(val).to.be('b');
            done();
        };
        before();

        surrogate.request('a');
        setTimeout(function() {
            surrogate.request('b');
        }, 10);
    });

    it('clear()でrequest()をキャンセルする', function(done) {
        dammy.callback = function() {
            expect(0).to.be(1);
        };
        before();

        surrogate.request();
        surrogate.clear();

        setTimeout(function() {
            done();
        }, 100);
    });
});
