describe('C.LimitTextは', function() {
    var limittext,
        el = C.dom.create('p');

    document.body.appendChild(el);

    beforeEach(function() {
    });
    afterEach(function() {
        if (limittext.dispose) {
            limittext.dispose();
        }
    });

    after(function() {
        C.dom.remove(el);
    });

    it('dispose()でインスタンスを解放する', function() {
        limittext = new C.LimitText({
            el: el,
            width: 100,
            height: 100
        });
        limittext.dispose();
        expect(limittext).to.eql({});
    });

    it('getLimitFontSize(text)でel.innterHTMLにtextを代入した場合、width,heightの値を超えない限界のフォントサイズを返す', function() {
        limittext = new C.LimitText({
            el: el
        });
        console.log(limittext._width, limittext._height);
        expect(limittext.getLimitFontSize('a') > 0).to.be(true);

        limittext = new C.LimitText({
            el: el,
            width: 1
        });
        expect(limittext.getLimitFontSize('a')).to.be(0);
    });
    it('getLimitTextLength(text)でel.innterHTMLにtextを代入した場合、width,heightの値を超えない限界の文字数を返す', function() {
        limittext = new C.LimitText({
            el: el
        });
        expect(limittext.getLimitTextLength('a') > 0).to.be(true);

        limittext = new C.LimitText({
            el: el,
            width: 1
        });
        expect(limittext.getLimitTextLength('a')).to.be(0);
    });
});
