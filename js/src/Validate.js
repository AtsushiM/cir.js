/* Test: "../../spec/_src/src/Validate/test.js" */
C['Validate'] = classExtendBase({
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
            default:
                console.warn(text);
                return FALSE;
        }
    },
    'isObject': function(key, value) {
        if (isObject(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Object');
    },
    'isNumber': function(key, value) {
        if (isNumber(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Number');
    },
    'isString': function(key, value) {
        if (isString(value)) {
            return TRUE;
        }
        this['displayError'](key, 'String');
    },
    'isFunction': function(key, value) {
        if (isFunction(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Function');
    },
    'isBoolean': function(key, value) {
        if (isBoolean(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Boolean');
    },
    'isArray': function(key, value) {
        if (isArray(value)) {
            return TRUE;
        }
        this['displayError'](key, 'Array');
    }
});

C['validate'] = new C['Validate']();
