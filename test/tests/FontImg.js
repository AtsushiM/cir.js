describe('C.FontImgは', function() {
    var c = window.C ? C : Global,
        numimg,
        args = {
            type: 'white',
            tag: 'p' // default: span
        };

    beforeEach(function() {
        // init
        numimg = new c.FontImg(args);
    });
    afterEach(function() {
        // clear
        if (numimg.dispose) {
            numimg.dispose();
        }
    });

    function expectedMakeAction(i) {
        return '<p class="font_' + args.type + '_' + i + '"></p>';
    }

    it('dispose()でインスタンスを解放する', function() {
        numimg.dispose();
        expect(numimg).to.eql({});
    });

    it('make(x)で数値xのimgタグを返す', function() {
        // 0 ~ 9
        for (var i = 0, len = 10; i < len; i++) {
            expect(numimg.make(i)).to.be(expectedMakeAction(i));
        }

        // 10 ~ 19
        for (var i = 10, len = 20; i < len; i++) {
            var j =  ('' + i).split('');
            expect(numimg.make(i)).to.be(
                expectedMakeAction(j[0]) +
                expectedMakeAction(j[1])
            );
        }

        // 000
        expect(numimg.make('000')).to.be(
            expectedMakeAction(0) +
            expectedMakeAction(0) +
            expectedMakeAction(0)
        );
        // 9999
        expect(numimg.make('9999')).to.be(
            expectedMakeAction(9) +
            expectedMakeAction(9) +
            expectedMakeAction(9) +
            expectedMakeAction(9)
        );
    });
});
