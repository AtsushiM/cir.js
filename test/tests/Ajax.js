describe('C.Ajaxは', function() {
    var ajax;

    beforeEach(function() {
        // init
        ajax = window.C ? new C.Ajax() : new Global.Ajax();
    });
    afterEach(function() {
        // clear
        if (ajax.dispose) {
            ajax.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        ajax.dispose();
        expect(ajax).to.eql({});
    });

    it('インスタンス生成時にrequest()に渡す形式の引数を指定した場合、request()を呼び出す', function(done) {
        var ajax = new C.Ajax({
                url: './common/test.xml',
                callback: function(d) {
                    expect(d).not.to.be('');
                    done();
                }
            });
    });

    it('request({url, callback})で非同期でurlの実行結果を取得する', function(done) {
        ajax.request({
            url: './common/test.xml',
            callback: function(d) {
                expect(d).not.to.be('');
                done();
            }
        });
    });

    it('request({url, cash: true, callback})でキャッシュ無効化用のフラグを立てる', function(done) {
        ajax.request({
            url: './common/test.xml',
            cash: true,
            callback: function(d) {
                expect(d).not.to.be('');
                done();
            }
        });
    });

    it('request({url, type: "POST", callback})で送信メソッドをPOSTにする', function(done) {
        ajax.request({
            url: './common/test.xml',
            type: 'POST',
            callback: function(d) {
                expect(d).not.to.be('');
                done();
            }
        });
    });

    it('json({url, callback})で非同期でjsonを取得する', function(done) {
        ajax.json({
            url: './common/test.json',
            callback: function(d) {
                expect(d).not.to.be('');
                done();
            }
        });
    });

    it('abort()で非同期通信を停止する', function(done) {
        var data = '';
        ajax.request({
            url: './common/test.xml',
            callback: function(d) {
                data = d;
            }
        });
        ajax.abort();

        setTimeout(function() {
            expect(data).to.be('');
            done();
        }, 500);
    });
});
