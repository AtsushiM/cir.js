/* Test: "../../spec/_src/src/Animation/test.js" */
(function() {
var prop = [
        'animation',
        'webkitAnimation'
        // 'MozAnimation',
        // 'mozAnimation',
        // 'msAnimation',
        // 'oAnimation',
    ],
    el = create('p'),
    support = false,
    prefix,
    css_prefix,
    event_key = 'animation',
    i = 0,
    len = prop.length,
    style,
    Mine;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)animation$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Animation';
        }

        style = append($('head'),
            create('style'));
        style.type = 'text/css';

        break;
    }
}

Mine = Global.Animation = klass({
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        option = option || {};

        this.onComplete = option.onComplete || nullFunction;

        this.element = element;

        Mine.id++;
        this.id = 'ciranim' + Mine.id;

        this.style = style;

        var duration = option.duration || Mine.Duration,
            ease = option.ease || 'ease',
            sheet = style.sheet;

        // property
        var i,
            prop = {};

        for (i in property) {
            prop[i] = property[i];
            if (isNumber(prop[i])) {
                prop[i] = prop[i] + 'px';
            }
        }

        this.property = prop;

        prop = replaceAll(
            replaceAll(JSON.stringify(prop), '"', ''),
            ',',
            ';'
        );

        sheet.insertRule(
            '@' + css_prefix + 'keyframes ' + this.id + '{to' + prop + '}',
            sheet.cssRules.length);

        if (!isArray(ease)) {
            ease = [ease];
        }
        // sheet.insertRule('.' + this.id +
        //     '{' +
        //         css_prefix + 'animation:' +
        //         this.id + ' ' +
        //         duration + 'ms ' +
        //         ease + ' 0s 1 normal forwards}',
        //     sheet.cssRules.length);

        addCSSRule(sheet, this.id, css_prefix, duration, ease);

        function addCSSRule(sheet, id, css_prefix, duration, eases) {
            var i = 0,
                len = eases.length,
                rule = '';

            for (; i < len; i++) {
                rule += css_prefix + 'animation:' +
                        id + ' ' +
                        duration + 'ms ' +
                        eases[i] + ' 0s 1 normal forwards;';
            }

            sheet.insertRule('.' + id +
                '{' + rule + '}',
                sheet.cssRules.length);
        }

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
        _off: function() {
            off(this.element, event_key + 'End', this.end);
            off(this.element, 'animationend', this.end);
        },
        start: function() {
            var mine = this;

            mine.end = endaction;
            on(mine.element, event_key + 'End', endaction);
            on(mine.element, 'animationend', endaction);

            addClass(mine.element, mine.id);

            function endaction(e) {
                var sheet = mine.style.sheet,
                    rule = sheet.cssRules,
                    len = rule.length,
                    name,
                    dels = [];

                mine._off();

                css(mine.element, mine.property);
                removeClass(mine.element, mine.id);

                for (; len--;) {
                    name = rule[len].name ||
                        ('' + rule[len].selectorText).split('.')[1];

                    if (name === mine.id) {
                        sheet.deleteRule(len);
                    }
                }

                mine.onComplete(e);
            }
        },
        stop: function() {
            var stopobj = {};

            stopobj[css_prefix + 'animation-play-state'] = 'paused';

            css(this.element, stopobj);
            this._off();
        }
    }
});
Mine.id = 0;
Mine.Duration = 500;
}());
