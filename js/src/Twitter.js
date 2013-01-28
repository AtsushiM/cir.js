/* Test: "../../spec/_src/src/Twitter/test.js" */
Global['Twitter'] = klass({
    'extend': Base,
    'properties': {
        'shareURL': function(vars) {
            var caption = vars['caption'] || '',
                name = vars['name'],
                hash = vars['hash'],
                url = 'https://twitter.com/intent/tweet?';

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
