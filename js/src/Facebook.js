/* Test: "../../spec/_src/src/Facebook/test.js" */
Global.Facebook = function() {
    'use strict';

    var Mine = Global.Facebook,
        instanse = {
            getShareURL: function(vars) {
                var shareURL = 'https://www.facebook.com/dialog/feed?',
                    app_id = vars.app_id,
                    redirect_uri = vars.redirect_uri,
                    link = vars.link,
                    picture = vars.picture,
                    name = vars.name,
                    caption = vars.caption,
                    description = vars.description,
                    url = shareURL +
                        'app_id=' + app_id + '&' +
                        'redirect_uri=' + redirect_uri;

                urlParam('link', link);
                urlParam('picture', picture);
                urlParam('name', name);
                urlParam('caption', caption);
                urlParam('description', description);

                function urlParam(key, val) {
                    if (val) {
                        url += '&' + key + '=' + encodeURI(val);
                    }
                }

                return url;
            }
        };

    return instanse;
};
