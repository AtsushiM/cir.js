/* Class: "../../../../js/src/Timer.js" */
describe('Timerは', function() {
    var timer,
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
        timer = new HYAPP.Timer({
            template: 'xxx.xxx',
            limit: 20,
            interval: 0.05,
            onupdate: dammy.onupdate,
            ontimeup: dammy.ontimeup
        });
    });
    afterEach(function() {
        // clear
        timer.stop();
    });

    it('getLimit()でlimitプロパティで指定した数値を秒数を取得する', function() {
        expect(timer.getLimit()).toEqual(20);
    });

    it('getTime()で現在のカウントを取得する', function() {
        expect(timer.getTime()).toEqual('020.000');
    });

    it('setUpdate(function)でアップデート時の動作を登録する', function() {
        var test = function() {};
        timer.setUpdate(test);
        expect(dammy.onupdate).not.toEqual(test);
    });

    it('getProgress()で進捗の%を取得する', function() {
        var prev = timer.getProgress(),
            now;

        expect(prev).toEqual(0);

        timer.countDown();

        expect(prev).toEqual(0);

        waits(100);
        runs(function() {
            now = timer.getProgress();
            expect(now).toBeGreaterThan(prev);
            prev = now;
        });
        waits(100);
        runs(function() {
            now = timer.getProgress();
            expect(now).toBeGreaterThan(prev);
            prev = now;
        });
    });

    it('countDown()でタイマーをスタートさせる', function() {
        runs(function() {
            timer.countDown();
            expect(timer.getTime()).toEqual('020.000');
            expect(dammy.onupdateresult).toEqual('020.000');
        });
        waits(100);
        runs(function() {
            expect(timer.getTime().split('.')[0]).toEqual('019');
            expect(dammy.onupdateresult).toEqual(timer.getTime());
        });
    });

    it('countDown()は指定した秒数後停止する', function() {
        timer = new HYAPP.Timer({
            template: 'xxx.xxx',
            limit: 0.1,
            interval: 0.05,
            onupdate: dammy.onupdate,
            ontimeup: dammy.ontimeup
        });

        timer.countDown();

        waits(300);
        runs(function() {
            expect(timer.getTime()).toEqual('000.000');
        });
    });

    it('stop()でタイマーをストップさせる', function() {
        var key = '020.000';

        runs(function() {
            timer.countDown();
            expect(timer.getTime()).toEqual(key);
            timer.stop();
        });
        waits(100);
        runs(function() {
            expect(timer.getTime()).toEqual(key);
        });
    });
});
/*
describe('XXXは', function() {
    it('XXX', function() {
        //spyOn
        //呼び出しに対してargumentsを返却
        spyOn(obj, 'method').andReturn(arguments);
        //呼び出しに対して例外を発生させる
        spyOn(obj, 'method').andThrow(exception);
        //呼び出しに対して代わりの関数を実行させる
        spyOn(obj, 'method').andCallFake(function);
        //呼び出しに対してそのまま本来のメソッドを呼び出す
        spyOn(obj, 'method').andCallThrough(function);

        // spy後
        // 呼び出しが行われたか
        expect(obj, method).toHaveBeenCalled();
        // 呼び出しがargumentsを伴って呼び出されたか
        expect(obj, method).toHaveBeenCalledWith(arguments);

        //呼び出し回数
        obj.method.callCount;
        //直近の読み出し時の引数
        obj.mostRecentCall.args
        // i番目の呼び出し時
        obj.argsForCall[i]

        runs(function() {
            //処理
        });
        // １秒待ち
        waits(1000);
        runs(function() {
            //処理
        });

        //aがbと同じである
        expect(a).toEqual(b);
        //aがbと同じでない
        expect(a).not.toEqual(b);

        //aがbと同じオブジェクトである
        expect(a).toBe(b);
        //aがbと同じオブジェクトでない
        expect(a).not.toBe(b);

        //aがundefinedでない
        expect(a).toBeDefined();
        //aがundefinedである
        expect(a).not.toBeDefined();

        //aがnullである
        expect(a).toBeNull();
        //aがnullでない
        expect(a).not.toBeNull();

        //aがtrueである
        expect(a).toBeTruthy();
        //aがfalseである
        expect(a).toBeFalsy();

        //aにbが含まれている
        expect(a).toBeContain(b);
        //aにbが含まれてない
        expect(a).not.toBeContain(b);

        //aがbより小さい
        expect(a).toBeLessThan(b);
        //aがbより大きい
        expect(a).toBeGreaterThan(b);

        //a（function）が例外をスロー
        expect(a).toThrow(e);
        //a（function）が例外をスローしない
        expect(a).not.toThrow(e);
    });
});
*/
