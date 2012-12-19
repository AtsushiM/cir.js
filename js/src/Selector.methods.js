/* Test: "../../spec/_src/src/Selector.methods/test.js" */
(function() {
var util = Global.utility;

function forExe(_this, func, arg) {
    var i = 0,
        aryarg = [],
        arglen = arg ? arg.length : 0,
        len = _this.length;

    aryarg[0] = null;
    for (i = 0; i < arglen; i++) {
        aryarg[i + 1] = arg[i];
    }

    for (i = 0; i < len; i++) {
        aryarg[0] = _this[i];
        func.apply(null, aryarg);
    }

    return _this;
}

Global.Selector.methods = {
    on: function(eventname, handler) {
        return forExe(this, util.onEvent, arguments);
    },
    off: function(eventname, handler) {
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
    hasClass: function(classname) {
        /* return forExe(this, util.hasClass, arguments); */
        return util.hasClass(this[0], classname);
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
    html: function(text) {
        /* return forExe(this, util.innerHTML, arguments); */
        return util.innerHTML(this[0], text);
    },
    append: function() {
        return forExe(this, util.appendElement, arguments);
    }
};
}());
