/* Test: "../../spec/_src/src/Validate/test.js" */
Global['Validate'] = klassExtendBase(UNDEFINED, {
    'isObject': function(key, value) {
        if (isObject(value)) {
            return TRUE;
        }
        consoleError(key + ' is Object');
    },
    'isNumber': function(key, value) {
        if (isNumber(value)) {
            return TRUE;
        }
        consoleError(key + ' is Number');
    },
    'isString': function(key, value) {
        if (isString(value)) {
            return TRUE;
        }
        consoleError(key + ' is String');
    },
    'isFunction': function(key, value) {
        if (isFunction(value)) {
            return TRUE;
        }
        consoleError(key + ' is Function');
    },
    'isBoolean': function(key, value) {
        if (isBoolean(value)) {
            return TRUE;
        }
        consoleError(key + ' is Boolean');
    },
    'isArray': function(key, value) {
        if (isArray(value)) {
            return TRUE;
        }
        consoleError(key + ' is Array');
    }
});
function consoleError(txt) {
    console.log('Validate Error: ' + txt + '.');
}
Global['validate'] = new Global['Validate']();
