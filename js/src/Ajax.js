// Ajax
C['Ajax'] = classExtendObserver({
    'dispose': function() {
        this['stop']();
        this['_super']();
    },
    'init': function(config) {
        config = override({}, config);

        var that = this,
            url = config['url'],
            type = config['type'] || 'GET',
            query = EMPTY,
            xhr = that._xhr = new XMLHttpRequest(),
            i;

        that['_super']();

        if (config.dataType == 'json') {
            that._json(config);
        }

        bindOnProp(that, config);

        if (!config['cache']) {
            that._cache(config);
        }
        if (config['query']) {
            query = that._query(config);
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status == 200) {
                return that['fire']('complete', xhr.responseText, xhr);
            }

            that['fire']('error', xhr);
        };

        if (type == 'GET') {
            if (noIndexOf(url, '?')) {
                url += '&';
            }
            else {
                url += '?';
            }
            url += query;

            query = EMPTY;
        }

        this._query = query;

        xhr.open(type, url);

        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencoded');
        }

        if (!config['manual']) {
            that['start']();
        }
    },
    _fire_start: this_fire_start,
    'start': function() {
        this._fire_start();
        this._xhr.send(this._query);
    },
    'stop': function() {
        this._xhr.abort();
        this['fire']('stop', this._xhr);
    },
    _query: function(config) {
        var query = config['query'];

        if (isObject(query)) {
            query = encodeURI(makeQueryString(query));
        }

        return query;
    },
    _cache: function(config) {
        if (!config['query']) {
            config['query'] = {};
        }

        config['query']['cir' + dateNow()] = '0';
    },
    _json: function(config) {
        var oncomplete = config['oncomplete'],
            onerror = config['onerror'];

        if (oncomplete) {
            config['oncomplete'] = function(data) {
                oncomplete(jsonParse(data));
            };
        }
        if (onerror) {
            config['onerror'] = function(data) {
                onerror(data);
            };
        }
    }
});
