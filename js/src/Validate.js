/* Test: "../../spec/_src/src/Validate/test.js" */
Global['Validate'] = klassExtendBase(function(config) {
    config = config || {};

    /* this._level = config['level'] || 'warn'; */
    this._level = config['level'];

    owner(this, this, config);
}, {
    displayError: function(key, text) {
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
            default:
                console.warn(text);
                return FALSE;
        }
    },
    'isObject': function(key, value) {
        if (isObject(value)) {
            return TRUE;
        }
        this.displayError(key, 'Object');
    },
    'isNumber': function(key, value) {
        if (isNumber(value)) {
            return TRUE;
        }
        this.displayError(key, 'Number');
    },
    'isString': function(key, value) {
        if (isString(value)) {
            return TRUE;
        }
        this.displayError(key, 'String');
    },
    'isFunction': function(key, value) {
        if (isFunction(value)) {
            return TRUE;
        }
        this.displayError(key, 'Function');
    },
    'isBoolean': function(key, value) {
        if (isBoolean(value)) {
            return TRUE;
        }
        this.displayError(key, 'Boolean');
    },
    'isArray': function(key, value) {
        if (isArray(value)) {
            return TRUE;
        }
        this.displayError(key, 'Array');
    }
});

Global['validate'] = new Global['Validate']();
