/* Test: "../../spec/_src/src/Facebook/test.js" */
C['Facebook'] = klassExtendBase(UNDEFINED,
{
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
