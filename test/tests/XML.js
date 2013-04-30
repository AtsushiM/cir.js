describe('C.XMLは', function() {
    var c = window.C ? C : Global,
        xml,
        data = '<?xml version="1.0" encoding="UTF-8"?><testdata><data>aaaa</data><data>bbbb</data></testdata>';

    beforeEach(function() {
        // init
        xml = new c.XML({
            data: data
        });
    });
    afterEach(function() {
        // clear
        if (xml.dispose) {
            xml.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        xml.dispose();
        expect(xml).to.eql({});
    });

    it('$(selector)でXMLからelement形式でデータを取得する', function() {
        var data = xml.$('data');

        expect(data.innerHTML).to.be('aaaa');
    });

    it('$$(selector)でXMLからelement形式でデータを配列で取得する', function() {
        var data = xml.$$('data');

        expect(data[0].innerHTML).to.be('aaaa');
        expect(data[1].innerHTML).to.be('bbbb');
    });
});
