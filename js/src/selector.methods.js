/* Test: "../../spec/_src/src/selector.methods/test.js" */
(function() {
var util = Global.utility;

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
    on: function() {
        return forExe(this, util.onEvent, arguments);
    },
    off: function() {
        return forExe(this, util.offEvent, arguments);
    },
    show: function() {
        return forExe(this, util.showElement);
    },
    hide: function() {
        return forExe(this, util.hideElement);
    },
    opacity: function() {
        return forExe(this, util.opacityElement, arguments);
    },
    hasClass: function() {
        return exe(this, util.hasClass, arguments);
    },
    addClass: function() {
        return forExe(this, util.addClass, arguments);
    },
    removeClass: function() {
        return forExe(this, util.removeClass, arguments);
    },
    toggleClass: function() {
        return forExe(this, util.toggleClass, arguments);
    },
    css: function() {
        return forExe(this, util.styleElement, arguments);
    },
    html: function() {
        return exe(this, util.innerHTML, arguments);
    },
    attr: function() {
        return exe(this, util.attrElement, arguments);
    },
    append: function() {
        return forExe(this, util.appendElement, arguments);
    }
};
}());
