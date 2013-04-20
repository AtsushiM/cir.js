describe('Videoは', function() {
    var c = window.C ? C : Global,
        video;

    beforeEach(function() {
        // init
        video = new c.Video({
            dir: '/spec/common/',
            name: 'testmovie',
            preload: 'auto',
            autoplay: true,
            loop: false
        });
    });
    afterEach(function() {
        // clear
    });

    it('Video要素を返す', function() {
        console.dir(video);
        expect(video.nodeName).to.be('VIDEO');
        expect(video.preload).to.be('auto');
        expect(video.autoplay).to.be(true);
        expect(video.loop).to.be(false);
    });
});
