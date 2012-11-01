/* Test: "../../spec/_src/src/Twitter/test.js" */
(function() {
var util = Global.utility,
    makeQuery = util.makeQueryString,
    shareURL = 'https://twitter.com/intent/tweet?';

Global.Twitter = function(config) {};
Global.Twitter.prototype = {
    getShareURL: function(vars) {
        var redirect_uri = vars.redirect_uri,
            caption = vars.caption || '',
            name = vars.name || '',
            hash = vars.hash || '',
            url = shareURL;

        name = name ? ' 「' + name + '」' : '';
        hash = hash ? ' ' + hash : '';

        url += makeQuery({
            'url': redirect_uri,
            'text': caption + name + hash
        });

        return url;
    }
};
}());
