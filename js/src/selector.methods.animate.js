/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var util = Global.utility,
    el = Global.element,
    methods = Global.selector.methods,
    EASING = {};

methods.animate = function() {
    return methods._forexe(this, animate, arguments);
}

function animate(element, params, duration, easing, callback) {
    var style = element.style,
        tweener;

    if (util.isFunction(duration)) {
        callback = duration;
        duration = null;
    }
    if (util.isFunction(easing)) {
        callback = easing;
        easing = null;
    }

    tweener = new Global.Tweener(
        element.style,
        convertTweenerParam(element, params),
        {
            duration: duration,
            easing: EASING[easing],
            onComplete: callback
        }
    );
}
function convertTweenerParam(element, params) {
    var name,
        computedStyle = el.computedStyle(element),
        tosplit,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);

        retobj[name] = {
            from: splitSuffix(computedStyle.getPropertyValue(name))[1] * 1 || 0,
            to: tosplit[1] * 1 || 0,
            suffix: tosplit[2]
        };
    }

    return retobj;
}
function splitSuffix(value) {
    value = value || '';
    value = '' + value;

    return value.match(/^([0-9\.]+)(.*)/);
}
}());
