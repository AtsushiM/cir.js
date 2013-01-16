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
    len = prop.length;

for (; i < len; i++) {
    if (el.style[prop[i]] !== undefined) {
        support = true;
        prefix = prop[i].match(/^(.*?)transitionproperty$/i)[1];

        if (prefix) {
            css_prefix = '-' + prefix.toLowerCase() + '-';
            event_key = prefix + 'Transition';
        }

        break;
    }
}

/* console.log(support, prefix, css_prefix, event_key); */

Global.Transition = klass({
    init: function(element, property, option) {
        if (!support) {
            return false;
        }

        var transProp = [],
            animeProp = override({}, property),
            i,
            ease;

        option = option || {};
        option.onComplete = option.onComplete || nullFunction;

        ease = option.ease || 'ease';

        for (i in property) {
            transProp.push(i);
        }

        animeProp[css_prefix + 'transition-property'] = transProp.join(' ');
        animeProp[css_prefix + 'transition-duration'] =
            (option.duration || Global.Transition.Duration) + 'ms';
        animeProp[css_prefix + 'transition-timing-function'] = ease;

        this.element = element;
        this.property = animeProp;
        this.option = option;

        this._stopprop = {};
        this._stopprop[css_prefix + 'transition-property'] =
        this._stopprop[css_prefix + 'transition-duration'] = '';

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
            css(mine.element, mine.property);
        },
        stop: function() {
            off(this.element, event_key + 'End', this._endfunc);
            css(this.element, this._stopprop);
        }
    }
});
Global.Transition.Duration = 500;
}());
