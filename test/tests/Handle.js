describe('Handleは', function() {
    var c = window.C ? C : Global,
        handle,
        eventHandeler;

    beforeEach(function() {
        // init
        eventHandeler = {
            el: document.body,
            events: {
                click: function(str) {
                    eventHandeler.clicktest = true;
                },
                rollover: function() {}
            }
        };
        handle = new c.Handle(eventHandeler);
    });
    afterEach(function() {
        if (handle.dispose) {
            handle.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        handle.dispose();
        expect(handle).to.eql({
            _super: undefined
        });
    });

    it('初期化時に{el: element, events: {event: function}}に合わせてイベントを追加する', function() {
        document.body.click();
        expect(eventHandeler.clicktest).to.be(true);
    });

    it('attach()でelementにeventsを追加する', function() {
        handle.attach();
        document.body.click();
        expect(eventHandeler.clicktest).to.be(true);
    });

    it('detach()でelementからeventsを排除する', function() {
        handle.attach();
        handle.detach();
        document.body.click();
        expect(eventHandeler.clicktest).not.to.be(true);
    });

//     it('_e(eventHandeler, bool)でelementにeventを設定する', function() {
//         spyOn(eventHandeler.events, 'click').andCallThrough();
//         handle._e(false);
//         document.body.click();
//         expect(eventHandeler.events.click).not.toHaveBeenCalled();
//         handle._e(true);
//         document.body.click();
//         expect(eventHandeler.events.click).toHaveBeenCalled();
//     });
});
