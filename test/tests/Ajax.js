describe('C.Ajaxは', function() {
    var ajax;

    beforeEach(function() {
        // init
        ajax = new C.Ajax({
            url: './common/test.xml'
        });
    });
    afterEach(function() {
        // clear
        // if (ajax.dispose) {
        //     ajax.dispose();
        // }
    });

    it('dispose()でインスタンスを解放する', function() {
        ajax.dispose();
        expect(ajax).to.eql({_super: undefined});
    });

    it('インスタンス生成時にajaxでリクエストを送る', function(done) {
        ajax = new C.Ajax({
            url: './common/test.xml',
            oncomplete: function(d) {
                expect(d).not.to.be('');
                done();
            }
        });
    });

    it('manualオプションでインスタンス生成時にリクエストを送るかどうか決める', function(done) {
        var called = false;

        ajax = new C.Ajax({
            url: './common/test.xml',
            manual: true,
            oncomplete: function(d) {
                called = true;
            }
        });

        setTimeout(function() {
            expect(called).to.be.false;

            ajax.start();

            setTimeout(function() {
                expect(called).to.be.true;
                done();
            }, 500);
        }, 500);
    });

    it('cacheオプションでキャッシュ有効化のフラグを立てる', function(done) {
        ajax = new C.Ajax({
            url: './common/test.xml',
            cache: true,
            oncomplete: function(d) {
                expect(d).not.to.be('');
                done();
            }
        });
    });

    it('typeオプションは"GET"か"POST"で送信の方法を変える', function(done) {
        ajax = new C.Ajax({
            url: './common/test.xml',
            type: 'GET',
            oncomplete: function(d) {
                expect(d).not.to.be('');

                ajax = new C.Ajax({
                    url: './common/test.xml',
                    type: 'POST',
                    oncomplete: function(d) {
                        expect(d).not.to.be('');
                        done();
                    }
                });
            }
        });
    });

    it('dateTypeオプションは"json"を指定した場合、戻り値をJSONとしてパースする', function(done) {
        ajax = new C.Ajax({
            url: './common/test.json',
            dataType: 'json',
            oncomplete: function(d) {
                expect(d).to.be.a('object');
                done();
            }
        });
    });

    it('stop()で非同期通信を停止する', function(done) {
        var data = '';

        ajax = new C.Ajax({
            url: './common/test.xml',
            oncomplete: function(d) {
                data = d;
            }
        });
        ajax.stop();

        setTimeout(function() {
            expect(data).to.be('');
            done();
        }, 500);
    });

    it('stop()でデータ通信を停止した場合、stopイベントを発火する', function(done) {
        ajax = new C.Ajax({
            url: './common/test.xml'
        });

        ajax.on('stop', function() {
            done();
        });

        ajax.stop();
    });

    it('start()でデータ通信を開始した場合、startイベントを発火する', function(done) {
        ajax = new C.Ajax({
            url: './common/test.xml',
            manual: true
        });

        ajax.on('start', function() {
            done();
        });

        ajax.start();
    });

    it('正常にデータを週督できた場合、completeイベントを発火する', function(done) {
        ajax = new C.Ajax({
            url: './common/test.xml'
        });

        ajax.on('complete', function() {
            done();
        });
    });

    it('通信に失敗した場合、errorイベントを発火する', function(done) {
        ajax = new C.Ajax({
            url: './common/mia.xml'
        });

        ajax.on('error', function() {
            done();
        });
    });
});
