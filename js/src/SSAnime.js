(function() {
var ret = checkCSSAnimTranCheck([
        'animation',
        'webkitAnimation'
    ], 'Animation'),
    support = ret.support,
    prefix = ret.prefix,
    css_prefix = ret.css_prefix,
    event_key = ret.event_key,
    sheet = ret.sheet,
Mine = C['SSAnime'] =
classExtendBase({
    _off: function() {
        var el = this._el,
            end = this._end;

        off(el, event_key + 'End', end);
        off(el, 'animationend', end);
    },
    'init': function(el, property, option /* varless */, mine) {
        mine = this;

        option = option || NULLOBJ;

        mine._oncomplete = option['oncomplete'] || nullFunction;

        mine._el = el;

        Mine['id']++;
        mine._id = 'ciranim' + Mine['id'];

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

        mine.property = prop;

        prop = replaceAll(
            replaceAll(jsonStringify(prop), '"', EMPTY),
            ',',
            ';'
        );

        sheet.insertRule(
            '@' + css_prefix + 'keyframes ' + mine._id + '{to' + prop + '}',
            sheet.cssRules.length);

        if (!isArray(ease)) {
            ease = [ease];
        }

        addCSSRule(mine._id, css_prefix, duration, ease);

        if (!option['manual']) {
            mine['start']();
        }
    },
    'dispose': this_stop__super,
    'start': function(/* varless */ mine, el) {
        // var mine = this,
        //     el = mine._el;
        mine = this,
        el = mine._el;

        mine._end = endaction;
        on(el, event_key + 'End', endaction);
        on(el, 'animationend', endaction);

        addClass(el, mine._id);

        function endaction(e) {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            mine._off();


            if (prefix == 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name == mine._id) {
                        sheet.deleteRule(len);
                    }
                }
                removeClass(el, mine._id);

                css(el, mine.property);
            }
            mine._oncomplete(e);
        }
    },
    'stop': function() {
        var stopobj = {};

        stopobj[css_prefix + 'animation-play-state'] = 'paused';

        css(this._el, stopobj);
        this._off();
    }
}, support);

function addCSSRule(id, css_prefix, duration, eases) {
    var i = 0,
        len = eases.length,
        rule = EMPTY;

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
}());
