describe('Eventは', function() {
    var c = window.C ? C : Global,
        e;

    beforeEach(function() {
        // init
        e = new C.Event();
    });
    afterEach(function() {
        // clear
        if (e.dispose) {
            e.dispose();
        }
    });

    it('タッチデバイスか否かでSWITCH〜プロパティの値が変更される', function() {
        if (c.util.isTouchable()) {
            expect(e.SWITCHCLICK).to.be('touchstart');
            expect(e.SWITCHDOWN).to.be('touchstart');
            expect(e.SWITCHMOVE).to.be('touchmove');
            expect(e.SWITCHUP).to.be('touchend');
            expect(e.SWITCHOVER).to.be('touchstart');
            expect(e.SWITCHOUT).to.be('touchend');
        }
        else {
            expect(e.SWITCHCLICK).to.be('click');
            expect(e.SWITCHDOWN).to.be('mousedown');
            expect(e.SWITCHMOVE).to.be('mousemove');
            expect(e.SWITCHUP).to.be('mouseup');
            expect(e.SWITCHOVER).to.be('mouseover');
            expect(e.SWITCHOUT).to.be('mouseout');
        }
    });

    it('初期化時にC.eにインスタンスを生成する', function() {
        expect(c.e).not.to.be(undefined);
    });
});
