describe('C.DeviceMotionは', function() {
    var c = window.C ? C : Global,
        devicemotion;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('devicemotionイベントを登録する', function() {
        expect(c.DeviceMotion.support).to.be('ondevicemotion' in window);
    });
});
