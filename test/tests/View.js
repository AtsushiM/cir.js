describe('Viewは', function() {
    var c = window.C ? C : Global,
        view;

    beforeEach(function() {
        // init
        view = new c.View({
            el: 'body',
            events: {
                'me': {
                    'click': 'click'
                }
            },
            init: function() {
            },
            render: function() {
            },
            click: function(e) {
                view.ret = true;
            }
        });
    });
    afterEach(function() {
        // clear
        if (view.dispose) {
            view.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        view.dispose();
        expect(view).to.eql({
            _super: undefined
        });
    });

    it('イベントを登録する', function() {
        console.log(view);
        document.body.click();
        expect(view.ret).to.be(true);
    });

    it('detach()でイベントを破棄する', function() {
        view.detach();
        document.body.click();
        expect(view.ret).to.be(undefined);
    });

    it('attach()でイベントを登録する', function() {
        view.detach();
        view.attach();
        document.body.click();
        expect(view.ret).to.be(true);
    });
});
