describe('Timerは', function() {
    var c = window.C ? C : Global,
        timer,
        dammy = {
            onupdate: function(vars) {
                dammy.onupdateresult = vars;
            },
            ontimeup: function() {
            },
            onupdateresult: null
        };

    beforeEach(function() {
        // init
        timer = new c.Timer({
            template: 'xxx.xxx',
            limit: 20,
            interval: 0.05,
            onupdate: dammy.onupdate,
            ontimeup: dammy.ontimeup
        });
    });
    afterEach(function() {
        // clear
        if (timer.dispose) {
            timer.stop();
            timer.dispose();
        }
    });

    it('getLimit()でlimitプロパティで指定した数値を秒数を取得する', function() {
        expect(timer.getLimit()).to.be(20);
    });

    it('getTime()で現在のカウントを取得する', function() {
        expect(timer.getTime()).to.be('020.000');
    });

    it('setUpdate(function)でアップデート時の動作を登録する', function() {
        var test = function() {};
        timer.setUpdate(test);
        expect(dammy.onupdate).not.to.be(test);
    });

    it('getProgress()で進捗の%を取得する', function(done) {
        var prev = timer.getProgress(),
            now;

        expect(prev).to.be(0);

        timer.countDown();

        expect(prev).to.be(0);

        setTimeout(function() {
            now = timer.getProgress();
            expect(now > prev).to.be(true);
            prev = now;

            setTimeout(function() {
                now = timer.getProgress();
                expect(now > prev).to.be(true);
                prev = now;

                done();
            }, 100);
        }, 100);
    });

    it('countDown()でタイマーをスタートさせる', function(done) {
        timer.countDown();
        expect(timer.getTime()).to.be('020.000');
        expect(dammy.onupdateresult).to.be('020.000');

        setTimeout(function() {
            expect(timer.getTime().split('.')[0]).to.be('019');
            expect(dammy.onupdateresult).to.be(timer.getTime());
            done();
        }, 100);
    });

    it('countDown()は指定した秒数後停止する', function(done) {
        timer = new C.Timer({
            template: 'xxx.xxx',
            limit: 0.1,
            interval: 0.05,
            onupdate: dammy.onupdate,
            ontimeup: dammy.ontimeup
        });

        timer.countDown();

        setTimeout(function() {
            expect(timer.getTime()).to.be('000.000');
            done();
        }, 300);
    });

    it('stop()でタイマーをストップさせる', function(done) {
        var key = '020.000';

        timer.countDown();
        expect(timer.getTime()).to.be(key);
        timer.stop();

        setTimeout(function() {
            expect(timer.getTime()).to.be(key);
            done();
        }, 100);
    });
});
