/* Test: "../../spec/_src/src/dom/test.js" */
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
        i = addedcls.length;

    for (; i--;) {
        if (cls === addedcls[i]) {
            return TRUE;
        }
    }

    return FALSE;
}

function addClass(element, cls) {
    var between = '',
        orgcls = element.className;

    if (hasClass(element, cls)) {
        return FALSE;
    }

    if (orgcls) {
        between = ' ';
    }

    element.className = orgcls + between + cls;

    return TRUE;
}

function removeClass(element, cls) {
    var addedcls,
        attachcls = [],
        i,
        len;

    if (!hasClass(element, cls)) {
        return FALSE;
    }

    addedcls = element.className.split(' ');
    i = addedcls.length;

    for (; i--;) {
        if (cls !== addedcls[i]) {
            attachcls.push(addedcls[i]);
        }
    }

    element.className = attachcls.join(' ');

    return TRUE;
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

        return TRUE;
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
    element.addEventListener(eventname, handler, FALSE);
}
function off(element, eventname, handler) {
    element.removeEventListener(eventname, handler, FALSE);
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
    return doc.defaultView.getComputedStyle(element, NULL);
}
function append(element, addelement) {
    return element['appendChild'](addelement);
}
function parent(element) {
    return element['parentNode'];
}
function remove(element) {
    return parent(element).removeChild(element);
}
function html(element, text) {
    if (!text) {
        return element.innerHTML;
    }

    element.innerHTML = text;
}

Global['dom'] = {
    '$': $,
    '$$': $$,
    '$child': $child,
    '$$child': $$child,
    '$id': $id,
    'on': on,
    'off': off,
    'create': create,
    'show': show,
    'hide': hide,
    'opacity': opacity,
    'hasClass': hasClass,
    'addClass': addClass,
    'removeClass': removeClass,
    'toggleClass': toggleClass,
    'css': css,
    'computedStyle': computedStyle,
    'append': append,
    'parent': parent,
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html
};
