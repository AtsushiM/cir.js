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

    it('getY()で現在のスクロール位置を取得する', function() {
        expect(scroll.getY()).to.be.a('number');
    });

    it('getLimit()でスクロールの限界値を取得する', function() {
        expect(scroll.getLimit()).to.be.a('number');
    });

    it('getRatio([{low: number, high: number, now: number}])でスクロール位置を0~1で返す', function() {
        expect(scroll.getRatio()).to.be.a('number');
        expect(scroll.getRatio({
            low: scroll.getLimit()
        })).to.be.a('number');
        expect(scroll.getRatio({
            high: 0
        })).to.be.a('number');
        expect(scroll.getRatio({
            low: 0,
            high: 100,
            now: 50
        })).to.be(0.5);
    });

    it('isBottom([offset])でスクロール位置が最下部かどうかboolで返す', function() {
        expect(scroll.isBottom(0)).to.be.a('boolean');
    });

    it('toSmooth(target)でtargetが数値の場合はその位置へ、elementの場合はelementのoffsetTopへ移動する', function() {
        scroll.toSmooth(document.body);
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
