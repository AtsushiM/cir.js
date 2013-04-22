describe('SSAnimeは', function() {
    var c = window.C ? C : Global,
        animation,
        div;

    beforeEach(function() {
        // init
        div = c.dom.create('div');
        c.dom.append(document.body, div);
    });
    afterEach(function() {
        // clear
        c.dom.remove(div);
        if (animation.dispose) {
            animation.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        animation = new c.SSAnime(div, {
            opacity: '0'
        }, {
            onComplete: function() {
                count = 1;
            }
        });

        animation.dispose();
        expect(animation).to.eql({
            _super: undefined
        });
    });

    it('アニメーションする', function(done) {
        var count = 0;

        animation = new c.SSAnime(div, {
            opacity: '0'
        }, {
            onComplete: function() {
                count = 1;
                expect(count).to.be(1);
                done();
            }
        });

        expect(count).to.be(0);
    });

    it('start()でアニメーションを開始する', function(done) {
        var count = 0;

        animation = new c.SSAnime(div, {
            opacity: '0'
        }, {
            manual: true,
            onComplete: function() {
                count = 1;
                expect(count).to.be(1);
                done();
            }
        });

        setTimeout(function() {
            expect(count).to.be(0);
            animation.start();
        }, c.SSAnime.duration + 200);
    });

    it('stop()でアニメーションを開始する', function() {
        var count = 0;

        animation = new c.SSAnime(div, {
            opacity: '0'
        }, {
            onComplete: function() {
                count = 1;
            }
        });

        animation.stop();

        setTimeout(function() {
            expect(count).to.be(0);
        }, c.SSAnime.duration + 200);
    });
});
