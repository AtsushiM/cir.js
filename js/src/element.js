/* Test: "../../spec/_src/src/element/test.js" */
(function() {
'use strict';

var util = Global.utility,
    win = util.win,
    doc = util.doc;

Global.element = {
    $: function(selector) {
        return $(selector, doc);
    },
    $$: function(selector) {
        return $$(selector, doc);
    },
    $child: $,
    $$child: $$,
    $id: function(id) {
        return doc.getElementById(id);
    },
    on: function(element, eventname, handler) {
        element.addEventListener(eventname, handler);
    },
    off: function(element, eventname, handler) {
        element.removeEventListener(eventname, handler);
    },
    create: function(tagname, attr) {
        var element = doc.createElement(tagname);

        if (attr) {
            attrElement(element, attr);
        }

        return element;
    },
    show: function(element) {
        element.style.display = 'block';
    },
    hide: function(element) {
        element.style.display = 'none';
    },
    opacity: function(element, value) {
        element.style.opacity = value;
    },
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: function(element, cls) {
        if (hasClass(element, cls)) {
            return removeClass(element, cls);
        }

        return addClass(element, cls);
    },
    style: function(element, addstyle) {
        var style = element.style,
            i,
            key,
            value;

        for (i in addstyle) {
            key = i;
            value = addstyle[i];

            if (util.isNumber(value)) {
                value += 'px';
            }

            style[key] = value;
        }
    },
    computedStyle: function(element) {
        return doc.defaultView.getComputedStyle(element, null);
    },
    append: function(element, addelement) {
        element.appendChild(addelement);
    },
    attr: attrElement,
    html: function(element, text) {
        if (text) {
            element.innerHTML = text;
        }
        else {
            return element.innerHTML;
        }
    }
};

function $(selector, element) {
    return element.querySelector(selector);
}
function $$(selector, element) {
    var eles = element.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
}

function hasClass(element, cls) {
    var clsName = element.className,
        addedcls = clsName ? clsName.split(' ') : [],
        i = 0,
        len = addedcls.length;

    for (; i < len; i++) {
        if (cls && cls === addedcls[i]) {
            return true;
        }
    }

    return false;
}

function addClass(element, cls) {
    var between = '';

    if (hasClass(element, cls)) {
        return false;
    }

    if (element.className) {
        between = ' ';
    }

    element.className = element.className + between + cls;

    return true;
}

function removeClass(element, cls) {
    var addedcls,
        bindcls = [],
        i,
        len;

    if (!hasClass(element, cls)) {
        return false;
    }

    addedcls = element.className.split(' ');
    i = 0,
    len = addedcls.length;

    for (; i < len; i++) {
        if (cls !== addedcls[i]) {
            bindcls.push(addedcls[i]);
        }
    }

    element.className = bindcls.join(' ');

    return true;
}

function attrElement(element, vars, value) {
    var i;

    if (util.isObject(vars)) {
        for (i in vars) {
            element.setAttribute(i, vars[i]);
        }

        return true;
    }

    if (value || value === '') {
        return element.setAttribute(vars, value);
    }

    return element.getAttribute(vars);
}
}());
