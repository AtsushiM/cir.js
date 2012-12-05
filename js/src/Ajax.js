/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = Global.klass({
    init: function() {
        this.xhr = new XMLHttpRequest();
    },
    properties: {
        utility: Global.utility,
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback,
                type = vars.type || 'GET',
                query = '',
                xhr;

            if (!vars.cash) {
                if (!vars.query) {
                    vars.query = {};
                }

                vars.query['ajaxcash' + Date.now()] = '0';
            }
            if (vars.query) {
                query = this.utility.makeQueryString(vars.query);
                query = encodeURI(query);
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;

            xhr.onload = function() {
                callback(xhr.responseText);
            };

            xhr.open(type, url);

            if (type === 'POST') {
                xhr.setRequestHeader('Content-Type',
                        'application/x-www-form-urlencoded');
            }
            xhr.send(query);
        },
        abort: function() {
            this.xhr.abort();
        },
        getJSON: function(vars) {
            this.request({
                type: vars.type,
                url: vars.url,
                callback: function(data) {
                    vars.callback(JSON.parse(data));
                }
            });
        }
    }
});
