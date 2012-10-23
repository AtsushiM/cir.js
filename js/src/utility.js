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
        var text = targettext.split(needle);

        text = text.join(replacetext);
        return text;
    },
    windowOpen: function(url, windowname) {
        return win.open(url, windowname);
    },
    parseQueryString: function(query) {
        var params,
            i,
            len,
            p,
            result = {};

        query = query.replace(/^\#/, '');
        query = query.replace(/^\?/, '');

        params = query.split('&');

        for (i = 0, len = params.length; i < len; i++) {
            p = params[i].split('=');
            result[p[0]] = decodeURIComponent(p[1]);
        }
        return result;
    }
};

var util = Global.utility;

console.log(util.parseQueryString('#?test=1&test2=a'));

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

}(window, document));
