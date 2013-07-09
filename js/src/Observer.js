Observer = C['Observer'] = classExtendBase({
    'init': function() {
        this._observed = {};
        this._childs = [];
    },
    'on': function(key, func /* varless */, that, observed) {
        that = this;
        observed = that._observed;

        if (!observed[key]) {
            observed[key] = [];
        }

        observed[key].push(func);
    },
    'one': function(key, func /* varless */, that, wrap) {
        /* var that = this; */
        that = this;
        wrap = function(vars) {
            func.apply(that, vars);
            that['off'](key, wrap);
        };

        wrap.original = func;

        that['on'](key, wrap);
    },
    'off': function(key, func /* varless */, that, observed, target, i) {
        // var observed = that._observed,
        //     target = observed[key],
        //     i;
        that = this;
        observed = that._observed;

        if (func) {
            target = observed[key];

            if (target) {
                for (i = target.length; i--;) {
                    if (func == target[i] || func == target[i].original) {
                        deleteArrayKey(target, i);

                        if (target.length == 0) {
                            delete observed[key];
                        }

                        return TRUE;
                    }
                }
            }

            return FALSE;
        }

        return delete observed[key];
    },
    'fire': Observer_bubble,
    'bubble': Observer_bubble,
    'capture': function() {
        var that = this,
            args = arguments;

        if (FALSE !== that['only'].apply(that, args)) {
            that._childFire.apply(that, args);
        }
    },
    'only': function(key) {
        var args = toArray(arguments),
            e = Observer_event(args),
            target = this._observed[e['type']] || [],
            temp,
            i = target.length;

        deleteArrayKey(args, 0);
        args[args.length] = e;

        for (; i--;) {
            temp = target[i];
            if (temp) {
                temp = temp.apply(this, args);

                if (temp === FALSE || e._flgPreventDefault) {
                    return temp;
                }
            }
        }

        return e;
    },
    _parentFire: function() {
        var parentObserver = this._parentObserver;

        if (parentObserver) {
            parentObserver['bubble'].apply(parentObserver, arguments);
        }
    },
    _childFire: function() {
        var childs = this._childs,
            i = 0,
            len = childs.length,
            temp;

        for (; i < len; i++) {
            temp = childs[i];
            temp['capture'].apply(temp, arguments);
        }
    },
    'addChild': function(instance) {
        if (instance._parentObserver) {
            instance._parentObserver['removeChild'](instance);
        }

        instance._parentObserver = this;
        this._childs.push(instance);
    },
    'removeChild': function(instance) {
        var childs = this._childs,
            i = childs.length;

        if (instance) {
            for (; i--; ) {
                if (childs[i] === instance) {
                    Observer_removeChildExe(childs, i);

                    return;
                }
            }
        }
        else {
            for (; i--; ) {
                Observer_removeChildExe(childs, i);
            }
        }
    }
});

function Observer_removeChildExe(childs, i) {
    delete childs[i]._parentObserver;
    deleteArrayKey(childs, i);
}
function Observer_bubble() {
    var that = this,
        args = arguments,
        temp;

    temp = that['only'].apply(that, args);

    if (FALSE !== temp && !(temp || NULLOBJ)._flgStopPropagation && that._parentFire) {
        that._parentFire.apply(that, args);
    }
}
function Observer_preventDefault() {
    this._flgPreventDefault = TRUE;
}
function Observer_stopPropagation() {
    this._flgStopPropagation = TRUE;
}
function Observer_event(args /* varless */, e) {
    e = args[0];

    if (isString(e)) {
        e = {
            'type': e,
            'attribute': args,
            _flgPreventDefault: FALSE,
            _flgStopPropagation: FALSE,
            'preventDefault': Observer_preventDefault,
            'stopPropagation': Observer_stopPropagation
        };
    }

    return e;
}
