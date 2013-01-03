/* Test: "../../spec/_src/src/utility/test.js" */
(function(win, doc) {
'use strict';

if (!Date.now) {
    Date.now = function now() {
        return +(new Date);
    };
}

Global.utility = {
    win: win,
    doc: doc,
    body: doc.body,
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
    pageTop: function() {
        win.scrollTo(0, 1);
    },
    onEvent: function(element, eventname, handler) {
        element.addEventListener(eventname, handler);
    },
    offEvent: function(element, eventname, handler) {
        element.removeEventListener(eventname, handler);
    },
    makeElement: function(tagname, attr) {
        var element = doc.createElement(tagname);

        if (attr) {
            attrElement(element, attr);
        }

        return element;
    },
    showElement: function(element) {
        setStyleDisplay(element, 'block');
    },
    hideElement: function(element) {
        setStyleDisplay(element, 'none');
    },
    opacityElement: function(element, value) {
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
    styleElement: function(element, addstyle) {
        var style = element.style,
            i,
            key,
            value;

        for (i in addstyle) {
            key = i;
            value = addstyle[i];

            if (isFinite(value)) {
                value += 'px';
            }

            style[key] = value;
        }
    },
    computedStyleElement: function(element) {
        return doc.defaultView.getComputedStyle(element, null);
    },
    appendElement: function(element, addelement) {
        element.appendChild(addelement);
    },
    attrElement: attrElement,
    innerHTML: function(element, text) {
        if (text) {
            element.innerHTML = text;
        }
        else {
            return element.innerHTML;
        }
    },
    override: override,
    replaceAll: function(targettext, needle, replacetext) {
        return targettext.split(needle).join(replacetext);
    },
    windowOpen: function(url, windowname) {
        return win.open(url, windowname);
    },
    typeCast: typeCast,
    makeQueryString: function(vars) {
        var sign = '',
            query = '',
            i;

        for (i in vars) {
            if (vars[i]) {
                query += sign + i + '=' + encodeURIComponent(vars[i]);
                sign = '&';
            }
        }

        return query;
    },
    parseQueryString: function(query) {
        query = query
            .replace(/^\#/, '')
            .replace(/^\?/, '');

        var params = query.split('&'),
            i,
            p,
            result = {};

        for (i = params.length; i--;) {
            p = params[i].split('=');
            result[p[0]] = typeCast(decodeURIComponent(p[1]));
        }
        return result;
    },
    is: is,
    isObject: isObject,
    isNumber: isNumber,
    isString: isString,
    isFunction: isFunction,
    isBoolean: isBoolean,
    isTouchDevice: function() {
        return 'ontouchstart' in win;
    },
    nullFunction: function() {
        return null;
    }
};

function is(key, vars) {
    if (Object.prototype.toString.call(vars) === '[object ' + key + ']') {
        return true;
    }
    return false;
}
function isObject(vars) {
    return is('Object', vars);
}
function isNumber(vars) {
    return is('Number', vars);
}
function isString(vars) {
    return is('String', vars);
}
function isFunction(vars) {
    return is('Function', vars);
}
function isBoolean(vars) {
    return is('Boolean', vars);
}

function override(target, vars) {
    var i;

    for (i in vars) {
        target[i] = vars[i];
    }

    return target;
}

function attrElement(element, vars, value) {
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

function setStyleDisplay(element, value) {
    element.style.display = value;
}
function $(selector, element) {
    return element.querySelector(selector);
}
function $$(selector, element) {
    var eles = element.querySelectorAll(selector),
        ary = [];

    ary.push.apply(ary, eles);

    return ary;
}
function typeCast(str) {
    var matchstr = '' + str;

    if (matchstr.match('^{.*}$')) {
        return JSON.parse(matchstr);
    }
    else if (matchstr.match('^[0-9\.]+$')) {
        return matchstr * 1;
    }
    else if (matchstr === 'true') {
        return true;
    }
    else if (matchstr === 'false') {
        return false;
    }

    return str;
}

}(window, document));
