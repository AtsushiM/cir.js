/* Test: "../../spec/_src/src/selector.methods/test.js" */
(function() {
var el= Global['element'];

function forExe(_this, func, arg) {
    var i = 0,
        len = _this.length,
        ary = makeAry(arg);

    for (; i < len; i++) {
        ary[0] = _this[i];
        func.apply(_this, ary);
    }

    return _this;
}
function exe(_this, func, arg) {
    var ary = makeAry(arg);

    ary[0] = _this[0];

    return func.apply(NULL, ary);
}

function makeAry(arg) {
    var ary = [NULL];

    ary.push.apply(ary, arg);

    return ary;
}

Global['$'].methods = {
    _forexe: forExe,
    _exe: exe,
    _argary: makeAry,
    'querySelectorAll': function(query) {
        return this[0].querySelectorAll(query);
    },
    'find': function(query) {
        return Global['$'](query, this._parent);
    },
    'parent': function() {
        return Global['$'](parent(this[0]));
    },
    'on': function() {
        return forExe(this, on, arguments);
    },
    'off': function() {
        return forExe(this, off, arguments);
    },
    'show': function() {
        return forExe(this, show);
    },
    'hide': function() {
        return forExe(this, hide);
    },
    'opacity': function() {
        return forExe(this, opacity, arguments);
    },
    'hasClass': function() {
        return exe(this, hasClass, arguments);
    },
    'addClass': function() {
        return forExe(this, addClass, arguments);
    },
    'removeClass': function() {
        return forExe(this, removeClass, arguments);
    },
    'toggleClass': function() {
        return forExe(this, toggleClass, arguments);
    },
    'css': function() {
        return forExe(this, css, arguments);
    },
    'html': function() {
        return exe(this, html, arguments);
    },
    'attr': function() {
        return exe(this, attr, arguments);
    },
    'removeAttr': function() {
        return forExe(this, removeAttr, arguments);
    },
    'append': function() {
        return forExe(this, append, arguments);
    },
    'remove': function() {
        return forExe(this, remove, arguments);
    }
};
}());
