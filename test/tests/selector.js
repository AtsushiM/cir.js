describe('$は', function() {
    var c = window.C ? C : Global,
        selector;

    beforeEach(function() {
        // init
        /* selector = new c.selector(); */
    });
    afterEach(function() {
        // clear
    });

    it('$(string)でjQueryライクなオブジェクトを返す', function() {
        var selector = new c.$('script');

        expect(selector.hide()).to.be(selector);
        expect(selector.show()).to.be(selector);
        expect(selector.hide().show().hide()).to.be(selector);
    });

    it('$(string, element)でelementからstringに対応するelementを内包したselectorインスタンスを返す', function() {
        var selector = new c.$('script', document.body);

        expect(selector.length > 0).to.be(true);
    });

    it('$(string, selector)でselectorからstringに対応するelementを内包したselectorインスタンスを返す', function() {
        var body = c.$('body'),
            selector = new c.$('script', body);

        expect(selector.length > 0).to.be(true);
    });
});
