/* Test: "../../spec/_src/src/Facebook/test.js" */
Global.Facebook = Global.klass({
    properties: {
        _u: Global.utility,
        shareURLBase: 'https://www.facebook.com/dialog/feed?',
        getShareURL: function(vars) {
            var app_id = vars.app_id,
                redirect_uri = vars.redirect_uri,
                link = vars.link,
                picture = vars.picture,
                name = vars.name,
                caption = vars.caption,
                description = vars.description,
                url = this.shareURLBase +
                    'app_id=' + app_id + '&' +
                    'redirect_uri=' + redirect_uri;

            url += this._u.makeQueryString({
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
