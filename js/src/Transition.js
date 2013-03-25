/* Test: "../../spec/_src/src/Transition/test.js" */
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
    Mine;

Mine = C['Transition'] =
    classExtendBase({
    'init': function(el, property, option /* varless */, mine) {
        mine = this;

        option = option || NULLOBJ;

        Mine['id']++;
        mine._id = 'cirtrans' + Mine['id'];

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

        addCSSRule(mine._id, css_prefix, duration, ease, transProp);

        mine._el = el;
        mine._property = property;
        mine._onComplete = option['onComplete'] || nullFunction;

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    'start': function(/* varless */ mine) {
        /* var mine = this; */
        mine = this;

        mine._endfunc = function(e) {
            mine['stop']();
            setTimeout(function() {
                mine._onComplete(e);
            }, 1);
        };

        on(mine._el, event_key + 'End', mine._endfunc);
        on(mine._el, 'transitionend', mine._endfunc);
        addClass(mine._el, mine._id);
        css(mine._el, mine._property);
    },
    'stop': function(/* varless */ mine) {
        mine = this;

        var rule = sheet.cssRules,
            len = rule.length,
            name;

        off(mine._el, event_key + 'End', mine._endfunc);
        off(mine._el, 'transitionend', mine._endfunc);
        removeClass(mine._el, mine._id);

        for (; len--;) {
            name = rule[len].name ||
                (EMPTY + rule[len].selectorText).split('.')[1];

            if (name == mine._id) {
                sheet.deleteRule(len);
                break;
            }
        }
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

Mine['id'] = 0;
Mine['duration'] = 500;
}());
