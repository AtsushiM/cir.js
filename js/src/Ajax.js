/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = Global.klass({
    init: function() {
        this.xhr = new XMLHttpRequest();
    },
    properties: {
        _u: Global.utility,
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback,
                error = vars.error,
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
                query = this._u.makeQueryString(vars.query);
                query = encodeURI(query);
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return false;
                }

                if (xhr.status == 200) {
                    callback(xhr.responseText);
                }
                else if (error) {
                    error(xhr);
                }
            }

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
                },
                error: function(data) {
                    if (vars.error) {
                        vars.error(data);
                    }
                }
            });
        }
    }
});
