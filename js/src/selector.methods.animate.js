/* (function() { */
// var selector_Animation = SSAnime || NULLOBJ,
//     selector_csssupport = selector_Animation['support'],
//     selector_EASE = NULLOBJ;
selector_Animation = SSAnime || NULLOBJ,
selector_csssupport = selector_Animation['support'],
selector_EASE = NULLOBJ;

if (selector_csssupport && C['ssease']) {
    selector_EASE = C['ssease'];
}
else if (C['ease']) {
    selector_EASE = C['ease'];
}

$_methods['animate'] = function() {
    if (!this._animate) {
        this._animate = [];
    }

    return selectorForExe(this, selector_animate, arguments);
};
$_methods['stop'] = function(/* varless */ that, i) {
    that = this;

    if (that._animate) {
        /* var i = that._animate.length; */
        i = that._animate.length;

        for (; i--;) {
            that._animate[i]['stop']();
        }

        that._animate = NULL;
    }

    return that;
};

function selector_animate(el, params, duration, ease, callback/* varless */, style, anime, option) {
    // var style = el.style,
    //     anime,
    //     option;
    style = el.style;

    if (isFunction(duration)) {
        callback = duration;
        duration = NULL;
    }
    if (isFunction(ease) && !callback) {
        callback = ease;
        ease = NULL;
    }

    if (ease) {
        ease = selector_EASE[ease];
    }

    option = {
        'duration': duration,
        'ease': ease,
        'oncomplete': callback
    };

    if (selector_csssupport) {
        anime = new selector_Animation(
            el,
            params,
            option
        );
    }
    else {
        anime = new Tweener(
            el.style,
            selector_convertTweenerParam(el, params),
            option
        );
    }

    this._animate.push(anime);
}

function selector_convertTweenerParam(el, params) {
    var name,
        styled = computedStyle(el),
        tosplit,
        from,
        retobj = {};

    for (name in params) {
        tosplit = splitSuffix(params[name]);
        from = styled.getPropertyValue(name);

        if (!from || from == 'none') {
            from = 0;
        }
        else {
            from = +splitSuffix(from)[2];
        }

        retobj[name] = {
            'from': from,
            'to': +tosplit[2] || 0,
            'prefix': tosplit[1],
            'suffix': tosplit[3]
        };
    }

    return retobj;
}
/* }()); */
