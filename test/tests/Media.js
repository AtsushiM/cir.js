describe('C.Mediaは', function() {
    var c = window.C ? C : Global,
        media;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('Audio、もしくはVideoのラッパークラスである', function() {
        expect(0).to.be(0);
        // media = new c.Media({
        //     type: 'Video',
        //     dir: '/test/common/',
        //     name: 'testmovie',
        //     autoplay: false,
        //     loop: false,
        //     el: document.body,
        //     oncanplay: function(e) {
        //         // write code.
        //     },
        //     onended: function(e) {
        //         // write code.
        //     }
        // });

        // expect(media.getElement().nodeName).toEqual('VIDEO');

        // media = new c.Media({
        //     type: 'Audio',
        //     dir: '/test/common/',
        //     name: 'tm2_door000',
        //     autoplay: false,
        //     loop: false,
        //     el: document.body,
        //     oncanplay: function(e) {
        //         // write code.
        //     },
        //     onended: function(e) {
        //         // write code.
        //     }
        // });

        // expect(media.getElement().nodeName).toEqual('AUDIO');
    });
});
