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
    return toArray(el.querySelectorAll(selector));
}
function $id(id) {
    return doc.getElementById(id);
}

function hasClass(el, cls) {
    if (el.className.indexOf(cls) >= 0) {
        return TRUE;
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
            if (cls != addedcls[i]) {
                attachcls.push(addedcls[i]);
            }
        }

        el.className = attachcls.join(' ');
    }
}
function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        removeClass(el, cls);
    }
    else {
        addClass(el, cls);
    }
}

function attr(el, vars, value /* varless */, i) {
    /* var i; */

    if (isObject(vars)) {
        for (i in vars) {
            if (isDefined(vars[i])) {
                el.setAttribute(i, vars[i]);
            }
        }

        return TRUE;
    }
    else if (!isDefined(value)) {
        return el.getAttribute(vars);
    }

    el.setAttribute(vars, value);
}
function removeAttr(el, key) {
    el.removeAttribute(key);
}

function create(tagname, attribute /* varless */, el) {
    /* var el= doc.createElement(tagname); */
    el = doc.createElement(tagname);

    if (attribute) {
        attr(el, attribute);
    }

    return el;
}
function toElements(txt) {
    var div = create('div');

    html(div, txt);

    return toArray(div.children);
}
function toElement(txt) {
    return toElements(txt)[0];
}

function on(el, eventname, handler) {
    el.addEventListener(eventname, handler, FALSE);
}
function off(el, eventname, handler) {
    el.removeEventListener(eventname, handler, FALSE);
}

function delegate(el, selector, eventname, handler) {
    on(el, eventname, wraphandle);

    function wraphandle(e) {
        var tar = e.target,
            $$select = $$child(selector, el),
            i = $$select.length,
            temp;

        for (; i--; ) {
            temp = $$select[i].compareDocumentPosition(tar);

            if (temp == 0 || temp & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                handler.apply($$select[i], arguments);
                break;
            }
        }
    }

    return wraphandle;
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
    return parent(el)['insertBefore'](addel, target);
}
function before(el, addel) {
    return beforeafter(el, addel, el);
}
function after(el, addel) {
    return beforeafter(el, addel, el.nextSibling);
}
function insertBefore(el, addel) {
    return el.insertBefore(addel, el.firstChild);
}
function remove(el) {
    return parent(el).removeChild(el);
}
function html(el, text) {
    if (!isDefined(text)) {
        return el.innerHTML;
    }

    el.innerHTML = text;
}
function val(el, value) {
    if (!isDefined(value)) {
        return el.value;
    }

    el.value = value;
}

function reflow(el) {
    el = el || doc.body;
    el.offsetTop;
}

function naturalSize(image) {
    var run = image.naturalWidth,
        ret,
        mem;

    if (isDefined(run)) {
        ret = {
            'w': run,
            'h': image.naturalHeight
        };
    }
    else {
        run = image.runtimeStyle;

        if (isDefined(run)) {
            mem = size(run);
            size(run, 'auto');
        }
        else {
            mem = size(image);
            removeAttr(image, label_w);
            removeAttr(image, label_h);
        }

        ret = size(image);
        size(image, mem['w'], mem['h']);
    }

    return ret;
};

C['dom'] = {
    'win': win,
    'doc': doc,
    '$': $,
    '$$': $$,
    '$child': $child,
    '$$child': $$child,
    '$id': $id,
    'on': on,
    'off': off,
    'delegate': delegate,
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
    'insertBefore': insertBefore,
    'remove': remove,
    'attr': attr,
    'removeAttr': removeAttr,
    'html': html,
    'val': val,
    'reflow': reflow,
    'toElement': toElement,
    'toElements': toElements,
    'naturalSize': naturalSize
};
