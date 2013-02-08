/* Test: "../../spec/_src/src/Transition/test.js" */
(function() {
'use strict';

var ret = checkCSSAnimTranCheck([
        'transitionProperty',
        'webkitTransitionProperty'
    ], 'Transition'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
    Mine;

Mine = Global['Transition'] =
    klassExtendBase(function(el, property, option) {

    option = option || {};
    option['onComplete'] = option['onComplete'] || nullFunction;

    Mine['id']++;
    this._id = 'cirtrans' + Mine['id'];

    var transProp = [],
        animeProp = override({}, property),
        i,
        duration = option['duration'] || Mine['duration'],
        // easeOutExpo
        ease = option['ease'] || csseaseOutExpo;

    if (!isArray(ease)) {
        ease = [ease];
    }

    for (i in property) {
        transProp.push(i);
    }

    addCSSRule(this._id, css_prefix, duration, ease, transProp);

    this.el = el;
    this.property = property;
    this.option = option;

    if (!option['manual']) {
        this['start']();
    }
}, {
    'disposeInternal': function() {
        this['stop']();
    },
    'start': function() {
        var mine = this;

        mine._endfunc = function(e) {
            mine['stop']();
            setTimeout(function() {
                mine.option['onComplete'](e);
            }, 1);
        };

        on(mine.el, event_key + 'End', mine._endfunc);
        on(mine.el, 'transitionend', mine._endfunc);
        addClass(mine.el, mine._id);
        css(mine.el, mine.property);
    },
    'stop': function() {
        var rule = sheet.cssRules,
            len = rule.length,
            name;

        off(this.el, event_key + 'End', this._endfunc);
        off(this.el, 'transitionend', this._endfunc);
        removeClass(this.el, this._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name === this._id) {
                sheet.deleteRule(len);
                break;
            }
        }
    }
});

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

Mine['id'] = 0;
Mine['support'] = support;
Mine['duration'] = 500;
}());
