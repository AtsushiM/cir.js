/* Test: "../../spec/_src/src/Twitter/test.js" */
Global['Twitter'] = klass({
    'extend': Base,
    'properties': {
        _b: 'https://twitter.com/intent/tweet?',
        'shareURL': function(vars) {
            var caption = vars['caption'] || '',
                name = vars['name'],
                hash = vars['hash'],
                url = this._b;

            name = name ? ' 「' + name + '」' : '';
            hash = hash ? ' ' + hash : '';

            url += makeQueryString({
                'url': vars['redirect_uri'],
                'text': caption + name + hash
            });

            return url;
        }
    }
});
