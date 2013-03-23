/* Test: "../../spec/_src/src/Class/test.js" */
(function() {
    C['lass'] = function() {};

    var initializing = FALSE,
        fnTest = /xyz/.test(function() {
            xyz;
        }) ? /\b_super\b/ : /.*/;

    C['lass']['extend'] = function(props) {
        var SuperClass = this,
            new_this,
            i;

        initializing = TRUE;
        new_this = new SuperClass();
        initializing = FALSE;

        function Class() {
            if (!initializing && this['init']) {
                this['init'].apply(this, arguments);
            }
        }

        Class.prototype = new_this;
        Class.prototype['constructor'] = Class;

        for (i in props) {
            if (props.hasOwnProperty(i)) {
                addMethod(i);
            }
        }

        function addMethod(key) {
            var prop = props[key],
                _super = SuperClass.prototype[key],
                isMethodOverride = (
                    typeof prop === 'function' &&
                    typeof _super === 'function' &&
                    fnTest.test(prop)
                );

            if (isMethodOverride) {
                Class.prototype[key] = function() {
                    var ret,
                        tmp = this['_super'];

                    this['_super'] = _super;

                    ret = prop.apply(this, arguments);

                    this['_super'] = tmp;

                    return ret;
                };
            }
            else {
                Class.prototype[key] = prop;
            }
        }

        Class['extend'] = SuperClass['extend'];

        return Class;
    };
}());

function classExtend(cls, prop, support) {
    cls = cls || C['lass'];

    var klass = cls['extend'](prop);

    if (isDefined(support)) {
        klass['support'] = support;
    }

    return klass;
}
function classExtendBase(prop, support) {
    return classExtend(C['Base'], prop, support);
}
