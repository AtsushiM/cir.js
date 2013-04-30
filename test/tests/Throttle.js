describe('C.Throttleは', function() {
    var c = window.C ? C : Global,
        throttle,
        retarg = null,
        argfunction = function(vars) {
            retarg = vars;
        };

    beforeEach(function() {
        // init
        throttle = new c.Throttle({
            waittime: 100,
            callback: argfunction
        });
    });
    afterEach(function() {
        // clear
        retarg = null;
        if (throttle.dispose) {
            throttle.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        throttle.dispose();
        expect(throttle).to.eql({
            _super: undefined
        });
    });

    it('request(arg)でcallback関数をスロットル実行する', function(done) {
        throttle.request(0);
        throttle.request(1);
        throttle.request(2);

        expect(retarg).to.be(0);

        setTimeout(function() {
            expect(retarg).to.be(2);
            throttle.request(3);
            expect(retarg).to.be(3);
            done();
        }, 150);
    });

    it('lock()で強制的にcallback関数をロックする', function() {
        throttle.lock();
        throttle.request(0);

        expect(retarg).to.be(null);
    });

    it('unlock()で強制的にcallback関数をアンロックする', function() {
        throttle.lock();
        throttle.unlock();

        throttle.request(0);

        expect(retarg).to.be(0);

        throttle.unlock();
        throttle.request(1);

        expect(retarg).to.be(1);
    });
});
