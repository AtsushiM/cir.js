/* Test: "../../spec/_src/src/utility/test.js" */
(function() {
'use strict';

Global.utility = {
    $: function(selector) {
        return document.querySelector(selector);
    },
    $$: function(selector) {
        var eles = document.querySelectorAll(selector),
            arys = [];

        for (var i = 0, len = eles.length; i < len; i++) {
            arys[i] = eles[i];
        }

        return arys;
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

}());
