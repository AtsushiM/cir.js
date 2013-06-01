C['Facebook'] = classExtendBase({
    _firstload: apifirstload,
    'includeAPI': function() {
        if ($id('fb-root')) {
            append(doc.body, create('div', {
                id: 'fb-root'
            }));
        }

        this._firstload('facebook-jssdk', '//connect.facebook.net/ja_JP/all.js#xfbml=1');
    },
    'shareURL': function(vars) {
        return 'https://www.facebook.com/dialog/feed?' +
        'app_id=' + vars['app_id'] + '&' +
        'redirect_uri=' + vars['redirect_uri'] +
        makeQueryString({
            'link': vars['link'],
            'picture': vars['picture'],
            'name': vars['name'],
            'caption': vars['caption'],
            'description': vars['description']
        });
    }
});
