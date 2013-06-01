C['lass'] = function() {};

/* (function() { */
    C['lass']['extend'] = function(props) {
        var SuperClass = this,
            i;

        function Class() {
            if (!class_initializing && this['init']) {
                this['init'].apply(this, arguments);
            }
        }

        class_initializing = TRUE;
        Class.prototype = new SuperClass();
        class_initializing = FALSE;

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
                    isFunction(prop) &&
                    isFunction(_super) &&
                    class_fnTest.test(prop)
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
/* }()); */

function classExtend(cls, prop, support) {
    cls = cls || C['lass'];

    var klass = cls['extend'](prop);

    if (isDefined(support)) {
        klass['support'] = support;
    }

    return klass;
}
function classExtendBase(prop, support) {
    return classExtend(Base, prop, support);
}
function classExtendObserver(prop, support) {
    return classExtend(Observer, prop, support);
}
