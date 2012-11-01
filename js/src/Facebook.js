/* Test: "../../spec/_src/src/Facebook/test.js" */
(function() {
'use strict';

var util = Global.utility,
    makeQuery = util.makeQueryString,
    shareURL = 'https://www.facebook.com/dialog/feed?';

Global.Facebook = Global.klass({
    constructor: function() {},
    method: {
        getShareURL: function(vars) {
            var app_id = vars.app_id,
                redirect_uri = vars.redirect_uri,
                link = vars.link,
                picture = vars.picture,
                name = vars.name,
                caption = vars.caption,
                description = vars.description,
                url = shareURL +
                    'app_id=' + app_id + '&' +
                    'redirect_uri=' + redirect_uri;

            url += makeQuery({
                'link': link,
                'picture': picture,
                'name': name,
                'caption': caption,
                'description': description
            });

            return url;
        }
    }
});
}());
