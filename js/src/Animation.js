/* Test: "../../spec/_src/src/Animation/test.js" */
(function() {
'use strict';

var ret = checkCSSAnimTranCheck([
        'animation',
        'webkitAnimation'
    ], 'Animation'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
    Mine;

Mine = Global['Animation'] =
    klassExtendBase(function(element, property, option) {

    option = option || {};

    this.onComplete = option['onComplete'] || nullFunction;

    this.el = element;

    Mine['id']++;
    this._id = 'ciranim' + Mine['id'];

    var duration = option['duration'] || Mine['duration'],
        // easeOutExpo
        ease = option['ease'] || csseaseOutExpo,
        i,
        prop = {};

    for (i in property) {
        prop[i] = property[i];
        if (isNumber(prop[i])) {
            prop[i] = prop[i] + 'px';
        }
    }

    this.property = prop;

    prop = replaceAll(
        replaceAll(jsonStringify(prop), '"', ''),
        ',',
        ';'
    );

    sheet.insertRule(
        '@' + css_prefix + 'keyframes ' + this._id + '{to' + prop + '}',
        sheet.cssRules.length);

    if (!isArray(ease)) {
        ease = [ease];
    }

    addCSSRule(this._id, css_prefix, duration, ease);

    if (!option['manual']) {
        this['start']();
    }
}, {
    _off: function() {
        off(this.el, event_key + 'End', this.end);
        off(this.el, 'animationend', this.end);
    },
    'dispose': function() {
        this['stop']();
        this._orgdis();
    },
    'start': function() {
        var mine = this;

        mine.end = endaction;
        on(mine.el, event_key + 'End', endaction);
        on(mine.el, 'animationend', endaction);

        addClass(mine.el, mine._id);

        function endaction(e) {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            mine._off();


            if (prefix === 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        ('' + rule[len].selectorText).split('.')[1];

                    if (name === mine._id) {
                        sheet.deleteRule(len);
                    }
                }
                removeClass(mine.el, mine._id);

                css(mine.el, mine.property);
            }
            mine.onComplete(e);
        }
    },
    'stop': function() {
        var stopobj = {};

        stopobj[css_prefix + 'animation-play-state'] = 'paused';

        css(this.el, stopobj);
        this._off();
    }
});

function addCSSRule(id, css_prefix, duration, eases) {
    var i = 0,
        len = eases.length,
        rule = '';

    for (; i < len; i++) {
        rule += css_prefix + 'animation:' +
                id + ' ' +
                duration + 'ms ' +
                eases[i] + ' 0s 1 normal both;';
    }

    sheet.insertRule('.' + id +
        '{' + rule + '}',
        sheet.cssRules.length);
}

Mine['id'] = 0;
Mine['duration'] = 500;
Mine['support'] = support;
}());
