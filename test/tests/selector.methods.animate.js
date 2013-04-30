describe('C.selector.methods.animateは', function() {
    var c = window.C ? C : Global,
        selector = c.$('body');

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        selector.stop();
        selector.removeAttr('style');
        selector.removeAttr('class');
    });

    it('$(selector).animate(value)でC.Tweenerを実行する', function(done) {
        selector.animate({
            width: 50,
            height: 100
        }, 100, c.ease.outExpo, function() {
            done();
        });
    });

    it('$(selector).stop()でanimateメソッドで実行したC.Tweenerを停止する', function(done) {
        var callback = false;

        selector.animate({
            width: 50,
            height: 100
        }, 100, c.ease.outExpo, function() {
            callback = true;
        });

        setTimeout(function() {
            selector.stop();
        }, 50);

        setTimeout(function() {
            expect(callback).to.be(false);

            done();
        }, 150);
    });
});
