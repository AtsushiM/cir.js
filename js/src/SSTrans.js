(function() {
var ret = checkCSSAnimTranCheck([
        'transitionProperty',
        'webkitTransitionProperty'
    ], 'Transition'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
    That;

That = C['SSTrans'] =
    classExtendObserver({
    'init': function(el, property, option /* varless */, that) {
        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        That['id']++;
        that._id = 'cirtrans' + That['id'];

        var transProp = [],
            animeProp = override({}, property),
            i,
            duration = option['duration'] || That['duration'],
            // easeOutExpo
            ease = option['ease'] || csseaseOutExpo;

        if (!isArray(ease)) {
            ease = [ease];
        }

        for (i in property) {
            transProp.push(i);
        }

        addCSSRule(that._id, css_prefix, duration, ease, transProp);

        that._el = el;
        that._property = property;

        if (!option['manual']) {
            that['start']();
        }
    },
    'dispose': this_stop__super,
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */ that) {
        that = this;

        that._fire_start();

        that._endfunc = function(e) {
            that._stop();
            setTimeout(function() {
                if (!that._isStoped) {
                    that._fire_complete(e);
                }
            }, 1);
        };

        on(that._el, event_key + 'End', that._endfunc);
        on(that._el, 'transitionend', that._endfunc);
        addClass(that._el, that._id);
        css(that._el, that._property);
    },
    _stop: function(/* varless */ that) {
        that = this;

        var rule = sheet.cssRules,
            len = rule.length,
            name;

        off(that._el, event_key + 'End', that._endfunc);
        off(that._el, 'transitionend', that._endfunc);
        removeClass(that._el, that._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name == that._id) {
                sheet.deleteRule(len);
                break;
            }
        }
    },
    _isStoped: FALSE,
    'stop': function() {
        this._isStoped = TRUE;
        this['fire']('stop');
        this._stop();
    }
}, support);

function addCSSRule(id, css_prefix, duration, eases, transProp) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

    rule +=
        css_prefix + 'transition-property:' + transProp.join(' ') + ';' +
        css_prefix + 'transition-duration:' + duration + 'ms;';

    for (; i < len; i++) {
        rule += css_prefix + 'transition-timing-function:' + eases[i] + ';';
    }

    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

That['id'] = 0;
That['duration'] = 500;
}());
