/* Test: "../../spec/_src/src/Twitter/test.js" */
Global.Twitter = function(config) {
    'use strict';

    var Mine = Global.Twitter,
        instanse = {
            getShareURL: function(vars) {
                var shareURL = 'https://twitter.com/intent/tweet?',
                    redirect_uri = vars.redirect_uri,
                    caption = vars.caption || '',
                    name = vars.name || '',
                    hash = vars.hash || '',
                    url = shareURL;

                if (name) {
                    name = ' 「' + name + '」';
                }
                if (hash) {
                    hash = ' ' + hash;
                }

                urlParam('url', redirect_uri);
                urlParam('text', caption + name + hash);

                function urlParam(key, val) {
                    if (val) {
                        url += '&' + key + '=' + encodeURIComponent(val);
                    }
                }

                return url;
            }
        };

    return instanse;
};
