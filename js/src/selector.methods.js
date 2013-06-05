function selectorForExe(_this, func, arg) {
    var i = _this.length;

    arg = selectorMakeAry(arg);

    for (; i--;) {
        arg[0] = _this[i];
        func.apply(_this, arg);
    }

    return _this;
}
function selectorExe(_this, func, arg) {
    var ary = selectorMakeAry(arg);

    ary[0] = _this[0];

    return func.apply(NULL, ary);
}

function selectorMakeAry(arg) {
    var ary = [NULL];

    ary.push.apply(ary, arg);

    return ary;
}

$_methods = C['$'].methods = {
    'querySelectorAll': function(query) {
        return this[0].querySelectorAll(query);
    },
    'find': function(query) {
        return C['$'](query, this);
    },
    'parent': function() {
        return C['$'](parent(this[0]));
    },
    'on': function() {
        return selectorForExe(this, on, arguments);
    },
    'off': function() {
        return selectorForExe(this, off, arguments);
    },
    'delegate': function(clsname, eventname, handler/* varless */, that, temp) {
        that = this;
        /* var temp; */

        if (!that._delegated) {
            that._delegated = {};
        }
        temp = that._delegated;

        if (!temp[eventname]) {
            temp[eventname] = {};
        }
        temp = temp[eventname];

        if (!temp[clsname]) {
            temp[clsname] = [];
        }
        temp = temp[clsname];

        return selectorForExe(that, function() {
            var wraphandle = delegate.apply(NULL, arguments);

            temp.push([handler, wraphandle]);
        }, arguments);
    },
    'undelegate': function(clsname, eventname, handler) {
        var temp = this._delegated,
            i;

        if (!temp || !(temp = temp[eventname]) || !(temp = temp[clsname])) {
            return FALSE;
        }

        i = temp.length;

        if (handler) {
            for (; i--; ) {
                if (temp[i][0] === handler) {
                    this['off'](eventname, temp[i][1]);

                    temp.splice(i, 1);

                    return TRUE;
                }
            }

            return FALSE;
        }
        else {
            for (; i--; ) {
                this['off'](eventname, temp[i][1]);
                temp.splice(i, 1);
            }

            return TRUE;
        }
    },
    'show': function() {
        return selectorForExe(this, show);
    },
    'hide': function() {
        return selectorForExe(this, hide);
    },
    'hasClass': function() {
        return selectorExe(this, hasClass, arguments);
    },
    'addClass': function() {
        return selectorForExe(this, addClass, arguments);
    },
    'removeClass': function() {
        return selectorForExe(this, removeClass, arguments);
    },
    'toggleClass': function() {
        return selectorForExe(this, toggleClass, arguments);
    },
    'css': function() {
        return selectorForExe(this, css, arguments);
    },
    'html': function() {
        return selectorExe(this, html, arguments);
    },
    'val': function() {
        return selectorExe(this, val, arguments);
    },
    'attr': function() {
        return selectorExe(this, attr, arguments);
    },
    'removeAttr': function() {
        return selectorForExe(this, removeAttr, arguments);
    },
    'append': function() {
        return selectorForExe(this, append, arguments);
    },
    'before': function() {
        return selectorExe(this, before, arguments);
    },
    'after': function() {
        return selectorExe(this, after, arguments);
    },
    'insertBefore': function() {
        return selectorExe(this, insertBefore, arguments);
    },
    'remove': function() {
        return selectorForExe(this, remove, arguments);
    }
};
