/* Test: "../../spec/_src/src/Transition/test.js" */
(function() {
'use strict';

var prop = [
        'webkitTransitionProperty',
        'transitionProperty'
    ],
    el = create('p'),
    support = FALSE,
    prefix,
    css_prefix = '',
    event_key = 'transition',
    i = prop.length,
    style,
    sheet,
    Mine;

for (; i--;) {
    if (el.style[prop[i]] !== UNDEFINED) {
        support = TRUE;
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

Mine = Global['Transition'] = klass({
    'extend': Base,
    'init': function(element, property, option) {
        option = option || {};
        option['onComplete'] = option['onComplete'] || nullFunction;

        Mine['id']++;
        this._id = 'cirtrans' + Mine['id'];

        var transProp = [],
            animeProp = override({}, property),
            i,
            duration = option['duration'] || Mine['duration'],
            ease = option['ease'] || 'ease';

        if (!isArray(ease)) {
            ease = [ease];
        }

        for (i in property) {
            transProp.push(i);
        }

        addCSSRule(this._id, css_prefix, duration, ease, transProp);

        this.el = element;
        this.property = property;
        this.option = option;

        if (!option['manual']) {
            this['start']();
        }
    },
    'properties': {
        'dispose': function() {
            this['stop']();
            this._orgdis();
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
                    ('' + rule[len].selectorText).split('.')[1];

                if (name === this._id) {
                    sheet.deleteRule(len);
                    break;
                }
            }
        }
    }
});

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

Mine['id'] = 0;
Mine['support'] = support;
Mine['duration'] = 500;
}());
