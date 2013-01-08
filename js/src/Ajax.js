/* Test: "../../spec/_src/src/Ajax/test.js" */
Global.Ajax = Global.klass({
    init: function() {
        this.xhr = new XMLHttpRequest();
    },
    properties: {
        _u: Global.utility,
        request: function(vars) {
            var url = vars.url,
                callback = vars.callback || this._u.nullFunction,
                error = vars.error || this._u.nullFunction,
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
                query = vars.query;

                if (this._u.isObject(query)) {
                    query = this._u.makeQueryString(query);
                    query = encodeURI(query);
                }
            }

            this.xhr = new XMLHttpRequest();
            xhr = this.xhr;

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return false;
                }

                if (xhr.status == 200) {
                    return callback(xhr.responseText, xhr);
                }

                return error(xhr);
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
            var callback = vars.callback,
                error = vars.error;

            vars.callback = function(data) {
                callback(JSON.parse(data));
            };
            vars.error = function(data) {
                if (error) {
                    error(data);
                }
            };

            this.request(vars);
        }
    }
});
