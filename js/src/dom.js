/* Test: "../../spec/_src/src/dom/test.js" */
function $(selector) {
    return $child(selector, doc);
}
function $$(selector) {
    return $$child(selector, doc);
}
function $child(selector, el) {
    return el.querySelector(selector);
}
function $$child(selector, el) {
    var eles = el.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(el, cls) {
    var clsName = el.className,
        addedcls = clsName ? clsName.split(' ') : [],
        i = addedcls.length;

    for (; i--;) {
        if (cls === addedcls[i]) {
            return TRUE;
        }
    }

    return FALSE;
}

function addClass(el, cls) {
    var between = EMPTY,
        orgcls = el.className;

    if (hasClass(el, cls)) {
        return FALSE;
    }

    if (orgcls) {
        between = ' ';
    }

    el.className = orgcls + between + cls;
}

function removeClass(el, cls) {
    var addedcls,
        attachcls = [],
        i,
        len;

    if (!hasClass(el, cls)) {
        return FALSE;
    }

    addedcls = el.className.split(' ');
    i = addedcls.length;

    for (; i--;) {
        if (cls !== addedcls[i]) {
            attachcls.push(addedcls[i]);
        }
    }

    el.className = attachcls.join(' ');

    return TRUE;
}
function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        return removeClass(el, cls);
    }

    return addClass(el, cls);
}

function attr(el, vars, value) {
    var i;

    if (isObject(vars)) {
        for (i in vars) {
            el.setAttribute(i, vars[i]);
        }

        return TRUE;
    }

    if (value || value === EMPTY) {
        return el.setAttribute(vars, value);
    }

    return el.getAttribute(vars);
}
function removeAttr(el, key) {
    el.removeAttribute(key);
}

function create(tagname, attribute) {
    var el= doc.createElement(tagname);

    if (attribute) {
        attr(el, attribute);
    }

    return el;
}

function on(el, eventname, handler) {
    el.addEventListener(eventname, handler, FALSE);
}
function off(el, eventname, handler) {
    el.removeEventListener(eventname, handler, FALSE);
}
function show(el) {
    el.style.display = 'block';
}
function hide(el) {
    el.style.display = 'none';
}
function opacity(el, value) {
    el.style.opacity = value;
}
function css(el, addstyle) {
    var style = el.style,
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
function computedStyle(el) {
    return doc.defaultView.getComputedStyle(el, NULL);
}
function parent(el) {
    return el['parentNode'];
}
function append(el, addel) {
    return el['appendChild'](addel);
}
function beforeafter(el, addel, target) {
    return parent(el).insertBefore(addel, target);
}
function before(el, addel) {
    return beforeafter(el, addel, el);
}
function after(el, addel) {
    return beforeafter(el, addel, el.nextSibling);
}
function remove(el) {
    return parent(el).removeChild(el);
}
function html(el, text) {
    if (!text) {
        return el.innerHTML;
    }

    el.innerHTML = text;
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
    'before': before,
    'after': after,
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html
};
