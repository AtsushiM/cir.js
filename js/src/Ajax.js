/* Test: "../../spec/_src/src/Ajax/test.js" */
Global['Ajax'] = klassExtendBase(function(config) {
    if (config) {
        this['request'](config);
    }
}, {
    'request': function(vars) {
        if (vars.dataType === 'json') {
            delete vars.dataType;

            return this.json(vars);
        }

        var url = vars['url'],
            callback = vars['callback'] || nullFunction,
            error = vars['error'] || nullFunction,
            type = vars['type'] || 'GET',
            query = EMPTY,
            xhr = this.xhr = new XMLHttpRequest();

        if (!vars['cash']) {
            if (!vars['query']) {
                vars['query'] = {};
            }

            vars['query']['cir' + dateNow()] = '0';
        }
        if (vars['query']) {
            query = vars['query'];

            if (isObject(query)) {
                query = encodeURI(makeQueryString(query));
            }
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status == 200) {
                return callback(xhr.responseText, xhr);
            }

            error(xhr);
        }

        if (type === 'GET') {
            if (url.indexOf('?') !== -1) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = EMPTY;
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
});
