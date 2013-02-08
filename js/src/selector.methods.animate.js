/* Test: "../../spec/_src/src/selector.methods.animate/test.js" */
(function() {
'use strict';

var methods = Global['$'].methods,
    Animation = Global['Animation'] || {},
    csssupport = Animation['support'],
    EASE = {};

if (csssupport && Global['cssease']) {
    EASE = Global['cssease'];
}
else if (Global['ease']) {
    EASE = Global['ease'];
}

methods['animate'] = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return methods._forexe(this, animate, arguments);
}
methods['stop'] = function() {
    if (this._animate) {
        var i = this._animate.length;

        for (; i--;) {
            this._animate[i]['stop']();
        }

        this._animate = NULL;
    }

    return this;
}

function animate(el, params, duration, ease, callback) {
    var style = el.style,
        anime,
        option;

    if (isFunction(duration)) {
        callback = duration;
        duration = NULL;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = NULL;
    }

    if (ease) {
        ease = EASE[ease];
    }

    option = {
        'duration': duration,
        'ease': ease,
        'onComplete': callback
    };

    if (csssupport) {
        anime = new Animation(
            el,
            params,
            option
        );
    }
    else {
        anime = new Global['Tweener'](
            el.style,
            convertTweenerParam(el, params),
            option
        );
    }

    this._animate.push(anime);
}

function convertTweenerParam(el, params) {
    var name,
        styled = computedStyle(el),
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
            'from': from,
            'to': tosplit[2] * 1 || 0,
            'prefix': tosplit[1],
            'suffix': tosplit[3]
        };
    }

    return retobj;
}
function splitSuffix(value) {
    value = value || EMPTY;
    value = EMPTY + value;

    return value.match(/^(.*?)([0-9\.]+)(.*)$/);
}
}());
