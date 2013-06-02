describe('C.LowPassFilterは', function() {
    var lowpassfilter;

    beforeEach(function() {
        lowpassfilter = new C.LowPassFilter();
    });
    afterEach(function() {
        // clear
        if (lowpassfilter.dispose) {
            lowpassfilter.dispose();
        }
    });

    it('dispose()でプロパティとメソッドを破棄し、メモリーを解放する', function() {
        lowpassfilter.dispose();
        expect(lowpassfilter).to.eql({});
    });

    it('getRate()で計算レートを取得する', function() {
        expect(lowpassfilter.getRate()).to.be.a('number');

        lowpassfilter = new C.LowPassFilter({
            rate: 0.5
        });

        expect(lowpassfilter.getRate()).to.eql(0.5);
    });

    it('setRate(rate)で計算レートを設定する', function() {
        lowpassfilter.setRate(0.5);
        expect(lowpassfilter.getRate()).to.eql(0.5);
    });

    it('getBefore()で計算レートを設定する', function() {
        expect(lowpassfilter.getBefore()).to.be.a('number');

        lowpassfilter = new C.LowPassFilter({
            before: 100
        });
        expect(lowpassfilter.getBefore()).to.eql(100);
    });

    it('setBefore(num)で直前の値を設定する', function() {
        lowpassfilter.setBefore(12345);
        expect(lowpassfilter.getBefore()).to.eql(12345);
    });

    it('forecast(num)で値を直前の値を使用して丸め込む', function() {
        var ret = lowpassfilter.forecast(1);
        expect(ret > 0 && ret < 1).to.be.true;
    });
});

