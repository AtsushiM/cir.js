Validate = C['Validate'] = classExtendBase({
    _check: function(is, key, value, txt) {
        if (is(value)) {
            return TRUE;
        }
        this['displayError'](key, txt);
    },
    'init': function(config /* varless */, mine) {
        mine = this;

        config = config || {};

        /* mine._level = config['level'] || 'warn'; */
        mine._level = config['level'];

        owner(mine, mine, config);
    },
    'displayError': function(key, text) {
        text = 'Validate Error:' + key + ' is ' + text + '.';

        switch (this.level) {
            case 'log':
                console.log(text);
                return FALSE;
            case 'error':
                throw new Error(text);
            case 'off':
                return FALSE;
            /* case 'warn': */
            /* default: */
        }
                console.warn(text);
                return FALSE;
    },
    'isObject': function(key, value) {
        return this._check(isObject, key, value, 'Object');
    },
    'isNumber': function(key, value) {
        return this._check(isNumber, key, value, 'Number');
    },
    'isString': function(key, value) {
        return this._check(isString, key, value, 'String');
    },
    'isFunction': function(key, value) {
        return this._check(isFunction, key, value, 'Function');
    },
    'isBoolean': function(key, value) {
        return this._check(isBoolean, key, value, 'Boolean');
    },
    'isArray': function(key, value) {
        return this._check(isArray, key, value, 'Array');
    }
});
C['validate'] = new Validate();
