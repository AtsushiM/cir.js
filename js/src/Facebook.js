/* Test: "../../spec/_src/src/Facebook/test.js" */
Global['Facebook'] = klass({
    'extend': Base,
    'properties': {
        'shareURL': function(vars) {
            var url = 'https://www.facebook.com/dialog/feed?' +
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
