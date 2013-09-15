describe('C.OmboKeyは', function() {
    var combokey;

    beforeEach(function() {
        combokey = new C.OmboKey({
            switcher: function(down, count) {
                return 'hogehoge';
            },
            keyno: {
                slash: [191],
                escape_: [27]
            },
            onhogehoge: function(e) {
                console.log(e);
            }
        });
    });
    afterEach(function() {
        // clear
        if (combokey.dispose) {
            combokey.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        combokey.dispose();
        expect(combokey).to.eql({});
    });
});
