/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var util = Global.utility,
    methods = Global.selector.methods,
    EASING = {};

if (Global.easing) {
    Easing = Global.easing;
}

methods = util.override(
    methods,
    {
        animate: function() {
            return methods._forexe(this, animate, arguments);
        }
    }
);

function animate(element, params, duration, easing, callback) {
    var style = element.style,
        tweener;

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
        computedStyle = util.computedStyleElement(element),
        retobj = {};

    for (name in params) {
        retobj[name] = {
            from: removeSuffix(
                  computedStyle.getPropertyValue(name)),
            to: removeSuffix(params[name]),
            suffix: getSuffix(params[name])
        };
    }

    return retobj;
}
function getSuffix(value) {
    value = '' + value;
    value = value || '';

    return value.match(/^[0-9\.]+(.*)/)[1] || 'px';
}
function removeSuffix(value) {
    value = '' + value;
    value = value || '';

    return value.match(/^[0-9\.]+/)[0] * 1 || 0;
}
}());
