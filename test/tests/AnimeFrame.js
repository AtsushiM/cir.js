describe('C.AnimeFrameは', function() {
    var frame;

    beforeEach(function() {
    });
    afterEach(function() {
        // clear
        if (frame.dispose) {
            frame.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        frame = new C.AnimeFrame();
        frame.dispose();
        expect(frame).to.eql({});
    });

    it('request(callback)でcallbackをアニメーションするタイミングで実行する', function(done) {
        frame = new C.AnimeFrame();

        frame.request(function() {
            done();
        });
    });

    it('cancel(id)でアニメーションをキャンセルする', function(done) {
        var call = false,
            id;

        frame = new C.AnimeFrame();

        id = frame.request(function() {
            call = true;
        });

        expect(id).not.to.be(undefined);

        frame.cancel(id);

        setTimeout(function() {
            expect(call).to.be(false);
            done();
        }, ( 1000 / 60 ) * 4);
    });
});
