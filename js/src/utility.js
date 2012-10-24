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
    body: $('body', doc),
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
    onEvent: function(element, eventname, handler) {
        element.addEventListener(eventname, handler);
    },
    offEvent: function(element, eventname, handler) {
        element.removeEventListener(eventname, handler);
    },
    createElement: function(tagname) {
        return doc.createElement(tagname);
    },
    showElement: function(element) {
        setStyleDisplay(element, 'block');
    },
    hideElement: function(element) {
        setStyleDisplay(element, 'none');
    },
    override: function(target, vars) {
        var i;

        for (i in vars) {
            target[i] = vars[i];
        }

        return target;
    },
    replaceAll: function(targettext, needle, replacetext) {
        return targettext.split(needle).join(replacetext);
    },
    windowOpen: function(url, windowname) {
        return win.open(url, windowname);
    },
    typeCast: typeCast,
    makeQueryString: function(vars) {
        var sign = '',
            query = '';

        for (var i in vars) {
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
    }
};

function setStyleDisplay(element, value) {
    element.style.display = value;
}
function $(selector, element) {
    return element.querySelector(selector);
}
function $$(selector, element) {
    var eles = element.querySelectorAll(selector),
        arys = [],
        i,
        len;

    for (i = 0, len = eles.length; i < len; i++) {
        arys[i] = eles[i];
    }

    return arys;
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
