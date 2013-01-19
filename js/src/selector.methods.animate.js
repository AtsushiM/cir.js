/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var methods = Global.$.methods,
    Animation = Global.Animation || {},
    csssupport = Animation.support,
    EASE = {};

if (csssupport && Global.cssease) {
    EASE = Global.cssease;
}
else if (Global.ease) {
    EASE = Global.ease;
}

methods.animate = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return methods._forexe(this, animate, arguments);
}
methods.stop = function() {
    if (this._animate) {
        var i = 0,
            len = this._animate.length;

        for (; i < len; i++) {
            this._animate[i].stop();
        }

        this._animate = null;
    }

    return this;
}

function animate(element, params, duration, ease, callback) {
    var style = element.style,
        anime,
        option;

    if (isFunction(duration)) {
        callback = duration;
        duration = null;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = null;
    }

    if (ease) {
        ease = EASE[ease];
    }

    option = {
        duration: duration,
        ease: ease,
        onComplete: callback
    };

    if (csssupport) {
        anime = new Animation(
            element,
            params,
            option
        );
    }
    else {
        anime = new Global.Tweener(
            element.style,
            convertTweenerParam(element, params),
            option
        );
    }

    this._animate.push(anime);
}

function convertTweenerParam(element, params) {
    var name,
        styled = computedStyle(element),
        tosplit,
        from,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);
        from = styled.getPropertyValue(name);

        if (!from || from === 'none') {
            from = 0;
        }
        else {
            from = splitSuffix(from)[2] * 1;
        }

        retobj[name] = {
            from: from,
            to: tosplit[2] * 1 || 0,
            prefix: tosplit[1],
            suffix: tosplit[3]
        };
    }

    return retobj;
}
function splitSuffix(value) {
    value = value || '';
    value = '' + value;

    return value.match(/^(.*?)([0-9\.]+)(.*)$/);
}
}());
