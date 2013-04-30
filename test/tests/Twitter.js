describe('C.Twitterは', function() {
    var c = window.C ? C : Global,
        twitter;

    beforeEach(function() {
        // init
        twitter = new c.Twitter();
    });
    afterEach(function() {
        // clear
        if (twitter.dispose) {
            twitter.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        twitter.dispose();
        expect(twitter).to.eql({});
    });

    it('shareURL(options)でTwitter用のShareURLを作成する', function() {
        var url = twitter.shareURL({
                redirect_uri: 'http://atms.sakura.ne.jp/wallsearch',
                caption: 'テストキャプション',
                description: 'テストデスクリプション'
            });

        expect(url).to.be('https://twitter.com/intent/tweet?url=http%3A%2F%2Fatms.sakura.ne.jp%2Fwallsearch&text=%E3%83%86%E3%82%B9%E3%83%88%E3%82%AD%E3%83%A3%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3');
    });
});
