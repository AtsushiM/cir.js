system_temp = C['Validate'] = classExtendBase({
    _check: function(is, key, value, txt) {
        if (is(value)) {
            return TRUE;
        }
        this['displayError'](key, txt);
    },
    'init': function(config /* varless */, that) {
        that = this;

        config = config || {};

        /* that._level = config['level'] || 'warn'; */
        that._level = config['level'];

        owner(that, that, config);
    },
    'displayError': function(key, text) {
        text = 'Validate Error:' + key + ' is ' + text + '.';

        switch (this.level) {
            case 'log':
                console.log(text);
            case 'off':
                return FALSE;
            case 'error':
                throw new Error(text);
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
C['validate'] = new system_temp();
