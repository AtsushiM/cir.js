/* Test: "../../spec/_src/src/Animation/test.js" */
(function() {
var prop = [
        'webkitAnimation',
        // 'MozAnimation',
        // 'mozAnimation',
        // 'msAnimation',
        // 'oAnimation',
        'animation'
    ],
    el = C.element.create('p'),
    support = false,
    prefix,
    css_prefix,
    event_key = 'animation',
    i = 0,
    len = prop.length,
    style;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)animation$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Animation';
        }

        style = document.querySelector('head')
            .appendChild(document.createElement('style'));
        style.type = 'text/css';

        break;
    }
}

Global.Animation = klass({
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        option = option || {};

        this.onComplete = option.onComplete || nullFunction;

        this.element = element;

        Global.Animation.id++;
        this.id = 'ciranim' + Global.Animation.id;

        this.style = style;

        var duration = option.duration || Global.Animation.Duration,
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
            if (i === 'transform') {
                prop[css_prefix + i] = prop[i];
                delete prop[i];
            }
        }

        /* this.property = prop; */

        prop = replaceAll(
            replaceAll(JSON.stringify(prop), '"', ''),
            ',',
            ';'
        );

        sheet.insertRule('@' + css_prefix + 'keyframes ' + this.id + ' {' +
                'to' + prop +
            '}', sheet.cssRules.length);

        sheet.insertRule('.' + this.id +
            '{' +
                css_prefix + 'animation:' +
                this.id + ' ' +
                duration + 'ms ' +
                ease + ' ' +
                '0s ' +
                '1 ' +
                'normal ' +
                'forwards' +
            '}',
            sheet.cssRules.length);

        if (!option.manual) {
            this.start();
        }
    },
    properties: {
        start: function() {
            var mine = this;

            on(mine.element, event_key + 'End', endaction);
            on(mine.element, 'animationend', endaction);

            addClass(mine.element, mine.id);

            function endaction(e) {
                mine.stop();
                // css(mine.element, mine.property);
                // removeClass(mine.element, mine.id);
                // remove(mine.style);
                mine.onComplete(e);
            }
        },
        stop: function() {
            css(this.element, {
                '-webkit-animation-play-state': 'paused'
            });
            on(this.element, event_key + 'End');
            on(this.element, 'animationend');
        }
    }
});
Global.Animation.id = 0;
Global.Animation.Duration = 500;
}());
