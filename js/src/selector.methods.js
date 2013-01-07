/* Test: "../../spec/_src/src/selector.methods/test.js" */
(function() {
var el= Global.element;

function forExe(_this, func, arg) {
    var i = 0,
        len = _this.length,
        ary = makeAry(arg);

    for (; i < len; i++) {
        ary[0] = _this[i];
        func.apply(null, ary);
    }

    return _this;
}
function exe(_this, func, arg) {
    var ary = makeAry(arg);

    ary[0] = _this[0];

    return func.apply(null, ary);
}

function makeAry(arg) {
    var ary = [null];

    ary.push.apply(ary, arg)

    return ary;
}

Global.selector.methods = {
    _forexe: forExe,
    _exe: exe,
    _argary: makeAry,
    querySelectorAll: function(query) {
        return this[0].querySelectorAll(query);
    },
    find: function(query) {
        return Global.selector(query, this);
    },
    parent: function() {
        return Global.selector(this[0].parentNode);
    },
    on: function() {
        return forExe(this, el.on, arguments);
    },
    off: function() {
        return forExe(this, el.off, arguments);
    },
    show: function() {
        return forExe(this, el.show);
    },
    hide: function() {
        return forExe(this, el.hide);
    },
    opacity: function() {
        return forExe(this, el.opacity, arguments);
    },
    hasClass: function() {
        return exe(this, el.hasClass, arguments);
    },
    addClass: function() {
        return forExe(this, el.addClass, arguments);
    },
    removeClass: function() {
        return forExe(this, el.removeClass, arguments);
    },
    toggleClass: function() {
        return forExe(this, el.toggleClass, arguments);
    },
    css: function() {
        return forExe(this, el.css, arguments);
    },
    html: function() {
        return exe(this, el.html, arguments);
    },
    attr: function() {
        return exe(this, el.attr, arguments);
    },
    append: function() {
        return forExe(this, el.append, arguments);
    }
};
}());
