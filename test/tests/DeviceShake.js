describe('C.DeviceShakeは', function() {
    var c = window.C ? C : Global,
        deviceshake;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('端末を振る動作に合わせてcallbackを発火する', function() {
        var motion = c.DeviceMotion.support,
            orient = c.DeviceOrientation.support,
            bool = false;

        if (motion || orient) {
            bool = true;
        }

        expect(c.DeviceShake.support).to.be(bool);
    });
});
