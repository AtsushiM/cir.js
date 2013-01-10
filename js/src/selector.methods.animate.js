/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var el = Global.element,
    methods = Global.$.methods;

methods.animate = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return methods._forexe(this, animate, arguments);
}
methods.stop = function() {
    if (this._animate) {
        var tweeners = this._animate,
            i = 0,
            len = tweeners.length;

        for (; i < len; i++) {
            tweeners[i].stop();
        }

        this._animate = null;
    }

    return this;
}

function animate(element, params, duration, ease, callback) {
    var style = element.style,
        tweener;

    if (isFunction(duration)) {
        callback = duration;
        duration = null;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = null;
    }

    tweener = new Global.Tweener(
        element.style,
        convertTweenerParam(element, params),
        {
            duration: duration,
            ease: ease,
            onComplete: callback
        }
    );

    this._animate.push(tweener);
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
