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
function $$child(selector, el /* varless */, eles, ary) {
    // var eles = el.querySelectorAll(selector),
    //     ary = [];
    eles = el.querySelectorAll(selector),
    ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(el, cls /* varless */, clsName, addedcls, i) {
    // var clsName = el.className,
    //     addedcls = clsName ? clsName.split(' ') : [],
    //     i = addedcls.length;
    clsName = el.className,
    addedcls = clsName ? clsName.split(' ') : [],
    i = addedcls.length;

    for (; i--;) {
        if (cls === addedcls[i]) {
            return TRUE;
        }
    }

    return FALSE;
}

function addClass(el, cls /* varless */, between, orgcls) {
    if (!hasClass(el, cls)) {
        // var between = EMPTY,
        //     orgcls = el.className;
        between = EMPTY,
        orgcls = el.className;

        if (orgcls) {
            between = ' ';
        }

        el.className = orgcls + between + cls;
    }
}

function removeClass(el, cls /* varless */, addedcls, attachcls, i) {
    if (hasClass(el, cls)) {
        // var addedcls,
        //     attachcls = [],
        //     i;
        attachcls = [];

        addedcls = el.className.split(' ');
        i = addedcls.length;

        for (; i--;) {
            if (cls !== addedcls[i]) {
                attachcls.push(addedcls[i]);
            }
        }

        el.className = attachcls.join(' ');
    }
}
function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        return removeClass(el, cls);
    }

    addClass(el, cls);
}

function attr(el, vars, value /* varless */, i) {
    /* var i; */

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

function create(tagname, attribute /* varless */, el) {
    /* var el= doc.createElement(tagname); */
    el= doc.createElement(tagname);

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
function css(el, addstyle /* varless */, style, i, key, value) {
    // var style = el.style,
    //     i,
    //     key,
    //     value;
    style = el.style;

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

C['dom'] = {
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
