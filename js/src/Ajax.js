/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = function() {
    'use strict';

    var xhr = new XMLHttpRequest(),
        instanse = {
            request: function(vars) {
                var url = vars.url,
                    callback = vars.callback;

                if (!vars.cash) {
                    if (url.match(/\?/)) {
                        url += '&';
                    }
                    else {
                        url += '?';
                    }

                    url += 'ajaxcash' + Date.now() + '=0';
                }

                xhr = new XMLHttpRequest();

                xhr.onload = function() {
                    callback(xhr.responseText);
                };

                xhr.open('GET', url);
                xhr.send(null);
            },
            abort: function() {
                xhr.abort();
            }
        };

    return instanse;
};
