/* Test: "../../spec/_src/src/Twitter/test.js" */
Global.Twitter = function(config) {
    'use strict';

    var util = Global.utility,
        makeQuery = util.makeQueryString,
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

                url += makeQuery({
                    'url': redirect_uri,
                    'text': caption + name + hash
                });

                return url;
            }
        };

    return instanse;
};
