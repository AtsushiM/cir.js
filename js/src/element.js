/* Test: "../../spec/_src/src/element/test.js" */
function $(selector) {
    return $child(selector, doc);
}
function $$(selector) {
    return $$child(selector, doc);
}
function $child(selector, element) {
    return element.querySelector(selector);
}
function $$child(selector, element) {
    var eles = element.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function $id(id) {
    return doc.getElementById(id);
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
function toggleClass(element, cls) {
    if (hasClass(element, cls)) {
        return removeClass(element, cls);
    }

    return addClass(element, cls);
}

function attr(element, vars, value) {
    var i;

    if (isObject(vars)) {
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
function removeAttr(element, key) {
    element.removeAttribute(key);
}

function create(tagname, attribute) {
    var element = doc.createElement(tagname);

    if (attribute) {
        attr(element, attribute);
    }

    return element;
}

function on(element, eventname, handler) {
    element.addEventListener(eventname, handler);
}
function off(element, eventname, handler) {
    element.removeEventListener(eventname, handler);
}
function show(element) {
    element.style.display = 'block';
}
function hide(element) {
    element.style.display = 'none';
}
function opacity(element, value) {
    element.style.opacity = value;
}
function css(element, addstyle) {
    var style = element.style,
        i,
        key,
        value;

    for (i in addstyle) {
        key = i;
        value = addstyle[i];

        if (isNumber(value)) {
            value += 'px';
        }

        style[key] = value;
    }
}
function computedStyle(element) {
    return doc.defaultView.getComputedStyle(element, null);
}
function append(element, addelement) {
    element.appendChild(addelement);
}
function html(element, text) {
    if (!text) {
        return element.innerHTML;
    }

    element.innerHTML = text;
}

Global.element = {
    $: function(selector) {
        return $child(selector, doc);
    },
    $$: function(selector) {
        return $$child(selector, doc);
    },
    $child: $child,
    $$child: $$child,
    $id: $id,
    on: on,
    off: off,
    create: create,
    show: show,
    hide: hide,
    opacity: opacity,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    css: css,
    computedStyle: computedStyle,
    append: append,
    attr: attr,
    removeAttr: removeAttr,
    html: html
};
