/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = function() {
    this.xhr = new XMLHttpRequest();
};
Global.Ajax.prototype = {
    request: function(vars) {
        var url = vars.url,
            callback = vars.callback,
            xhr;

        if (!vars.cash) {
            if (url.match(/\?/)) {
                url += '&';
            }
            else {
                url += '?';
            }

            url += 'ajaxcash' + Date.now() + '=0';
        }

        this.xhr = new XMLHttpRequest();
        xhr = this.xhr;


        xhr.onload = function() {
            callback(xhr.responseText);
        };

        xhr.open('GET', url);
        xhr.send(null);
    },
    abort: function() {
        this.xhr.abort();
    }
};
