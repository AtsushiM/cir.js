// require
var required_obj = {};

C['require'] = function(required, srcpath, callback) {
    var cls = C_require(required),
        method = callback ? C_require_async : C_require_sync;

    if (!cls && (!srcpath || required_obj[srcpath])) {
        throw new Error('not found ' + required);
    }

    if (srcpath) {
        required_obj[srcpath] = TRUE;
    }

    return method(cls, required, srcpath, callback);
};

function C_require_async(cls, required, srcpath, callback) {
    if (cls) {
        return callback(cls);
    }

    new C['ScriptLoad']({
        'srcs': [
            srcpath
        ],
        'oncomplete': function() {
            cls = C_require(required);

            if (!cls) {
                throw new Error('not found ' + required);
            }

            callback(cls);
        }
    });
}

function C_require_sync(cls, required, srcpath) {
    if (cls) {
        return cls;
    }

    new C['Ajax']({
        'url': srcpath,
        'sync': TRUE,
        'oncomplete': function(ret) {
            new Function(ret)();
        }
    });

    cls = C_require(required);

    if (cls) {
        return cls;
    }

    throw new Error('not found ' + required);
}

function C_require(required) {
    var required_ary = required.split('.'),
        i = 0,
        len = required_ary.length,
        temp = win;

    for (; i < len; i++) {
        if (!temp[required_ary[i]]) {
            return;
        }

        temp = temp[required_ary[i]];
    }

    return temp;
}
