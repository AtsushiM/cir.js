/* Test: "../../spec/_src/src/Transition/test.js" */
(function() {
'use strict';

var prop = [
        'transitionProperty',
        'webkitTransitionProperty'
        // 'MozTransitionProperty',
        // 'mozTransitionProperty',
        // 'msTransitionProperty',
        // 'oTransitionProperty'
    ],
    el = create('p'),
    support = false,
    prefix,
    css_prefix,
    event_key = 'transition',
    i = 0,
    len = prop.length,
    style;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)transitionproperty$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Transition';
        }

        style = append($('head'),
            create('style'));
        style.type = 'text/css';

        break;
    }
}

Global.Transition = klass({
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        option = option || {};
        option.onComplete = option.onComplete || nullFunction;

        Global.Transition.id++;
        this.id = 'cirtrans' + Global.Transition.id;

        this.style = style;

        var transProp = [],
            animeProp = override({}, property),
            i,
            duration = option.duration || Global.Transition.Duration,
            ease = option.ease || 'ease',
            sheet = style.sheet;

        if (!isArray(ease)) {
            ease = [ease];
        }

        for (i in property) {
            transProp.push(i);
        }

        addCSSRule(sheet, this.id, css_prefix, duration, ease, transProp);

        this.element = element;
        this.property = property;
        this.option = option;

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
        start: function() {
            var mine = this;

            mine._endfunc = function(e) {
                mine.stop();
                setTimeout(function() {
                    mine.option.onComplete(e);
                }, 1);
            };

            on(mine.element, event_key + 'End', mine._endfunc);
            addClass(mine.element, mine.id);
            css(mine.element, mine.property);
        },
        stop: function() {
            var sheet = this.style.sheet,
                rule = sheet.cssRules,
                len = rule.length,
                name;

            off(this.element, event_key + 'End', this._endfunc);
            removeClass(this.element, this.id);

            for (; len--;) {
                name = rule[len].name ||
                    ('' + rule[len].selectorText).split('.')[1];

                if (name === this.id) {
                    sheet.deleteRule(len);
                    break;
                }
            }
        }
    }
});
Global.Transition.id = 0;
Global.Transition.Duration = 500;

function addCSSRule(sheet, id, css_prefix, duration, eases, transProp) {
    var i = 0,
        len = eases.length,
        rule = '';

    rule +=
        css_prefix + 'transition-property:' + transProp.join(' ') + ';' +
        css_prefix + 'transition-duration:' + duration + 'ms;';

    for (; i < len; i++) {
        rule += css_prefix + 'transition-timing-function:' + eases[i] + ';';
    }

    console.log('.' + id +
        '{' + rule + '}');
    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}
}());
