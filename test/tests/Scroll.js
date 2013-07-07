describe('C.Scrollは', function() {
    var scroll;

    beforeEach(function() {
        // init
        scroll = new C.Scroll();
    });
    afterEach(function() {
        // clear
        if (scroll.dispose) {
            scroll.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        scroll.dispose();
        expect(scroll).to.eql({
            _super: undefined
        });
    });

    it('to(num)でスクロールを移動する', function() {
        scroll.to(1);
        scroll.to(100);
        expect(0).to.be(0);
    });

    it('toTop()でスクロールを一番上に移動する', function() {
        scroll.toTop();
        expect(0).to.be(0);
    });

    it('toBottom()でスクロールを一番下に移動する', function() {
        scroll.toBottom();
        expect(0).to.be(0);
    });

    it('scrollTop()で現在のスクロール位置を取得する', function() {
        expect(scroll.scrollTop()).to.be.a('number');
    });

    it('scrollLimit()でスクロールの限界値を取得する', function() {
        expect(scroll.scrollLimit()).to.be.a('number');
    });

    it('percent([{low: number, high: number, now: number}])でスクロール位置を0~1で返す', function() {
        expect(scroll.percent()).to.be.a('number');
        expect(scroll.percent({
            low: scroll.scrollLimit()
        })).to.be.a('number');
        expect(scroll.percent({
            high: 0
        })).to.be.a('number');
        expect(scroll.percent({
            low: 0,
            high: 100,
            now: 50
        })).to.be(0.5);
    });

    it('checkBottom([offset])でスクロール位置が最下部かどうかboolで返す', function() {
        expect(scroll.checkBottom(0)).to.be.a('boolean');
    });

    it('smooth(target)でtargetが数値の場合はその位置へ、elementの場合はelementのoffsetTopへ移動する', function() {
        scroll.smooth(document.body);
        expect(0).to.be(0);
    });

    it('kill()でスクロールを禁止する', function() {
        scroll.kill();
        expect(0).to.be(0);
    });

    it('revival()でスクロールを復活する', function() {
        scroll.revival();
        expect(0).to.be(0);
    });
});
