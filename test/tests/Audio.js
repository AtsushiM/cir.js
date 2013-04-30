describe('C.Audioは', function() {
    var c = window.C ? C : Global,
        audio;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('Audio要素を返す', function() {
        if (c.Audio.support) {
            audio = new c.Audio({
                dir: './common/',
                name: 'tm2_door000',
                preload: 'auto',
                autoplay: true,
                loop: false
            });

            expect(audio.nodeName).to.be('AUDIO');
            expect(audio.preload).to.be('auto');
            expect(audio.autoplay).to.be.ok();
            expect(audio.loop).to.not.be.ok();
        }
    });
});
