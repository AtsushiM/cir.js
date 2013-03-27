describe('DeviceOrientationは', function() {
    var c = window.C ? C : Global,
        deviceorientation;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('deviceorientationイベントを登録する', function() {
        expect(c.DeviceOrientation.support).to.be('ondeviceorientation' in window);
    });
});
