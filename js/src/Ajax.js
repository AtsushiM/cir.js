/* Test: "../../spec/_src/src/Ajax/test.js" */
Global['Ajax'] = klass({
    'extend': Base,
    'init': function(config) {
        if (config) {
            this['request'](config);
        }
    },
    'properties': {
        'request': function(vars) {
            if (vars.dataType === 'json') {
                delete vars.dataType;

                return this.json(vars);
            }

            var url = vars['url'],
                callback = vars['callback'] || nullFunction,
                error = vars['error'] || nullFunction,
                type = vars['type'] || 'GET',
                query = '',
                xhr;

            xhr = this.xhr = new XMLHttpRequest();

            if (!vars['cash']) {
                if (!vars['query']) {
                    vars['query'] = {};
                }

                vars['query']['cirajaxcash' + dateNow()] = '0';
            }
            if (vars['query']) {
                query = vars['query'];

                if (isObject(query)) {
                    query = makeQueryString(query);
                    query = encodeURI(query);
                }
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return FALSE;
                }

                if (xhr.status == 200) {
                    return callback(xhr.responseText, xhr);
                }

                return error(xhr);
            }

            if (type === 'GET') {
                if (url.indexOf('?') !== -1) {
                    url += '&';
                }
                else {
                    url += '?';
                }
                url += query;

                query = '';
            }

            xhr.open(type, url);

            if (type === 'POST') {
                xhr.setRequestHeader('Content-Type',
                        'application/x-www-form-urlencoded');
            }
            xhr.send(query);
        },
        'abort': function() {
            if (this.xhr) {
                this.xhr.abort();
            }
        },
        'json': function(vars) {
            var callback = vars['callback'],
                error = vars['error'];

            vars['callback'] = function(data) {
                callback(jsonParse(data));
            };
            vars['error'] = function(data) {
                if (error) {
                    error(data);
                }
            };

            this['request'](vars);
        }
    }
});
