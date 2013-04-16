describe('Facebookは', function() {
    var c = window.C ? C : Global,
        facebook;

    beforeEach(function() {
        // init
        facebook = new c.Facebook();
    });
    afterEach(function() {
        // clear
        if (facebook.dispose) {
            facebook.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        facebook.dispose();
        expect(facebook).to.eql({});
    });

    it('shareURL(options)でfacebook用のShareURLを作成する', function() {
        var url = facebook.shareURL({
                app_id: 168589393194273,
                redirect_uri: 'http://atms.sakura.ne.jp/wallsearch',
                link: 'http://google.co.jp',
                picture: 'http://atms.sakura.ne.jp/wallsearch/img/fav.png',
                name: 'テスト名前',
                caption: 'テストキャプション',
                description: 'テストデスクリプション'
            });

        expect(url).to.be('https://www.facebook.com/dialog/feed?app_id=168589393194273&redirect_uri=http://atms.sakura.ne.jp/wallsearchlink=http%3A%2F%2Fgoogle.co.jp&picture=http%3A%2F%2Fatms.sakura.ne.jp%2Fwallsearch%2Fimg%2Ffav.png&name=%E3%83%86%E3%82%B9%E3%83%88%E5%90%8D%E5%89%8D&caption=%E3%83%86%E3%82%B9%E3%83%88%E3%82%AD%E3%83%A3%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3&description=%E3%83%86%E3%82%B9%E3%83%88%E3%83%87%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3');
    });
});
