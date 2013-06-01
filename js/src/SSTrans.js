/* (function() { */
var sstrans_ret = checkCSSAnimTranCheck([
        'transitionProperty',
        'webkitTransitionProperty'
    ], 'Transition'),
    sstrans_css_prefix = sstrans_ret.css_prefix,
    sstrans_event_key = sstrans_ret.event_key,
    sstrans_sheet = sstrans_ret.sheet,
SSTrans = C['SSTrans'] =
    classExtendObserver({
    'init': function(el, property, option /* varless */, that) {
        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        SSTrans['id']++;
        that._id = 'cirtrans' + SSTrans['id'];

        var transProp = [],
            animeProp = override({}, property),
            i,
            duration = option['duration'] || SSTrans['duration'],
            // easeOutExpo
            ease = option['ease'] || csseaseOutExpo;

        if (!isArray(ease)) {
            ease = [ease];
        }

        for (i in property) {
            transProp.push(i);
        }

        SSTrans_addCSSRule(that._id, sstrans_css_prefix, duration, ease, transProp);

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

        on(that._el, sstrans_event_key + 'End', that._endfunc);
        on(that._el, 'transitionend', that._endfunc);
        addClass(that._el, that._id);
        css(that._el, that._property);
    },
    _stop: function(/* varless */ that) {
        that = this;

        var rule = sstrans_sheet.cssRules,
            len = rule.length,
            name;

        off(that._el, sstrans_event_key + 'End', that._endfunc);
        off(that._el, 'transitionend', that._endfunc);
        removeClass(that._el, that._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name == that._id) {
                sstrans_sheet.deleteRule(len);
                break;
            }
        }
    },
    _isStoped: FALSE,
    'stop': function(that) {
        that = this;
        that._isStoped = TRUE;
        that['fire']('stop');
        that._stop();
    }
}, sstrans_ret.support);

function SSTrans_addCSSRule(id, css_prefix, duration, eases, transProp) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

    rule +=
        css_prefix + 'transition-property:' + transProp.join(' ') + ';' +
        css_prefix + 'transition-duration:' + duration + 'ms;';

    for (; i < len; i++) {
        rule += css_prefix + 'transition-timing-function:' + eases[i] + ';';
    }

    sheetAddCSSRule(sstrans_sheet, id, rule);
}

SSTrans['id'] = 0;
SSTrans['duration'] = 500;
/* }()); */
