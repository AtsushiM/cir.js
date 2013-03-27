describe('ExternalInterfaceは', function() {
    var c = window.C ? C : Global,
        extAndroid,
        extIOS,
        androidMethod = {
            test1: function() {},
            test2: function() {},
            test3: function() {}
        };

    beforeEach(function() {
        // init
        extAndroid = new c.ExternalInterface({
            android: androidMethod
        });
        extIOS = new c.ExternalInterface({
            android: false
        });
    });
    afterEach(function() {
        // clear
        if (extAndroid.dispose) {
            extAndroid.dispose();
        }
        if (extIOS.dispose) {
            extIOS.dispose();
        }
    });

    it('iOSとAndroid端末で、メソッドの動作を変更する', function() {
        // それぞれ同じメソッドを持つことを確認する
        expect(extAndroid.call).not.to.be(undefined);
        expect(extIOS.call).not.to.be(undefined);
        expect(extAndroid.addCallback).not.to.be(undefined);
        expect(extIOS.addCallback).not.to.be(undefined);
        expect(extAndroid.removeCallback).not.to.be(undefined);
        expect(extIOS.removeCallback).not.to.be(undefined);
    });
});
