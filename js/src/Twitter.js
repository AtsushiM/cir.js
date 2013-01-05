/* Test: "../../spec/_src/src/Twitter/test.js" */
Global.Twitter = Global.klass({
    properties: {
        _u: Global.utility,
        _b: 'https://twitter.com/intent/tweet?',
        getShareURL: function(vars) {
            var redirect_uri = vars.redirect_uri,
                caption = vars.caption || '',
                name = vars.name || '',
                hash = vars.hash || '',
                url = this._b;

            name = name ? ' 「' + name + '」' : '';
            hash = hash ? ' ' + hash : '';

            url += this._u.makeQueryString({
                'url': redirect_uri,
                'text': caption + name + hash
            });

            return url;
        }
    }
});
