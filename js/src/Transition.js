/* Test: "../../spec/_src/src/Transition/test.js" */
(function() {
'use strict';

var prop = [
        'webkitTransitionProperty',
        'transitionProperty'
    ],
    el = create('p'),
    support = false,
    prefix,
    css_prefix = '',
    event_key = 'transition',
    i = 0,
    len = prop.length,
    style,
    sheet,
    Mine;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)transitionproperty$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix.toLowerCase() + 'Transition';
        }

        style = append($('head'),
            create('style', {
                type: 'text/css'
            }));
        sheet = style.sheet;

        break;
    }
}

Mine = Global.Transition = klass({
    extend: Base,
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        option = option || {};
        option.onComplete = option.onComplete || nullFunction;

        Mine.id++;
        this.id = 'cirtrans' + Mine.id;

        var transProp = [],
            animeProp = override({}, property),
            i,
            duration = option.duration || Mine.Duration,
            ease = option.ease || 'ease';

        if (!isArray(ease)) {
            ease = [ease];
        }

        for (i in property) {
            transProp.push(i);
        }

        addCSSRule(this.id, css_prefix, duration, ease, transProp);

        this.element = element;
        this.property = property;
        this.option = option;

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
        dispose: function() {
            this.stop();
            this.__proto__.__proto__.dispose.call(this);
        },
        start: function() {
            var mine = this;

            mine._endfunc = function(e) {
                mine.stop();
                setTimeout(function() {
                    mine.option.onComplete(e);
                }, 1);
            };

            on(mine.element, event_key + 'End', mine._endfunc);
            on(mine.element, 'transitionend', mine._endfunc);
            addClass(mine.element, mine.id);
            css(mine.element, mine.property);
        },
        stop: function() {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            off(this.element, event_key + 'End', this._endfunc);
            off(this.element, 'transitionend', this._endfunc);
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
Mine.id = 0;
Mine.support = support;
Mine.Duration = 500;

function addCSSRule(id, css_prefix, duration, eases, transProp) {
    var i = 0,
        len = eases.length,
        rule = '';

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
}());
