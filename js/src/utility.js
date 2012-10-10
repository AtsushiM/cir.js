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
    $: function(selector) {
        return doc.querySelector(selector);
    },
    $$: function(selector) {
        var eles = doc.querySelectorAll(selector),
            arys = [];

        for (var i = 0, len = eles.length; i < len; i++) {
            arys[i] = eles[i];
        }

        return arys;
    },
    $id: function(id) {
        return doc.getElementById(id);
    },
    showElement: function(element) {
        element.style.display = 'block';
    },
    hideElement: function(element) {
        element.style.display = 'none';
    },
    override: function(target, vars) {
        for (var i in vars) {
            target[i] = vars[i];
        }

        return target;
    },
    replaceAll: function(targettext, needle, replacetext) {
        var text = targettext.split(needle);

        text = text.join(replacetext);
        return text;
    }
};

}(window, document));
