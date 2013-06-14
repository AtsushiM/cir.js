C['Validate'] = classExtendBase({
    _check: function(is, key, value, txt) {
        if (is(value)) {
            return TRUE;
        }
        return !!this['displayError'](key, txt);
    },
    'init': function(config /* varless */, that) {
        that = this;

        config = config || {};

        /* that._level = config['level'] || 'warn'; */
        that._level = config['level'];

        owner(that, that, config);
    },
    'displayError': function(key, text /* varless */, level) {
        text = 'Validate Error:' + key + ' is ' + text + '.';

        level = this.level;

        if (level == 'log') {
            console.log(text);
        }
        else if (level == 'error') {
            throw new Error(text);
        }
        else if (level === 'off') {
        }
        else {
            console.warn(text);
        }
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
