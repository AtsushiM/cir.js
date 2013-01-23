/* Test: "../../spec/_src/src/Facebook/test.js" */
Global['Facebook'] = klass({
    'extend': Base,
    'properties': {
        _b: 'https://www.facebook.com/dialog/feed?',
        'shareURL': function(vars) {
            var url = this._b +
                    'app_id=' + vars['app_id'] + '&' +
                    'redirect_uri=' + vars['redirect_uri'];

            url += makeQueryString({
                'link': vars['link'],
                'picture': vars['picture'],
                'name': vars['name'],
                'caption': vars['caption'],
                'description': vars['description']
            });

            return url;
        }
    }
});
