describe('ServerMetaは', function() {
    var c = window.C ? C : Global,
        servermeta;

    beforeEach(function() {
        // init
        servermeta = new c.ServerMeta();
    });
    afterEach(function() {
        // clear
        if (servermeta.dispose) {
            servermeta.dispose();
        }
    });

    it('初期化完了時にcallbackを実行する', function(done) {
        servermeta = new c.ServerMeta({
            callback: function() {
                done();
            }
        });
    });

    it('dispose()でインスタンスを解放する', function() {
        servermeta.dispose();
        expect(servermeta).to.eql({});
    });

    it('date()はサーバ時間を取得する', function() {
        var after = function(date) {
                expect(date).not.to.be(undefined);
            };

        expect(servermeta.date(after)).not.to.be(undefined);
    });

    it('connection()はコネクション状態を取得する', function() {
        expect(servermeta.connection()).not.to.be(undefined);
    });

    it('contentLength()はコンテンツ長を取得する', function() {
        expect(servermeta.contentLength()).not.to.be(undefined);
    });

    it('lastModified()は最終更新時間を取得する', function() {
        expect(servermeta.lastModified()).not.to.be(undefined);
    });

    it('server()はサーバ情報を取得する', function() {
        expect(servermeta.server()).not.to.be(undefined);
    });

    it('contentType()はコンテンツタイプを取得する', function() {
        expect(servermeta.contentType()).not.to.be(undefined);
    });

    it('acceptRanges()はレンジを取得する', function() {
        expect(servermeta.acceptRanges()).not.to.be(undefined);
    });

    it('keepAlive()はタイムアウト時間などを取得する', function() {
        expect(servermeta.keepAlive()).not.to.be(undefined);
    });
});
