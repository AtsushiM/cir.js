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
That = C['SSAnime'] =
classExtendObserver({
    _off: function() {
        var el = this._el,
            end = this._end;

        off(el, event_key + 'End', end);
        off(el, 'animationend', end);
    },
    'init': function(el, property, option /* varless */, that) {
        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        that._oncomplete = option['oncomplete'] || nullFunction;

        that._el = el;

        That['id']++;
        that._id = 'ciranim' + That['id'];

        var duration = option['duration'] || That['duration'],
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

        that.property = prop;

        prop = replaceAll(
            replaceAll(jsonStringify(prop), '"', EMPTY),
            ',',
            ';'
        );

        sheet.insertRule(
            '@' + css_prefix + 'keyframes ' + that._id + '{to' + prop + '}',
            sheet.cssRules.length);

        if (!isArray(ease)) {
            ease = [ease];
        }

        addCSSRule(that._id, css_prefix, duration, ease);

        if (!option['manual']) {
            that['start']();
        }
    },
    'dispose': this_stop__super,
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */ that, el) {
        // var that = this,
        //     el = that._el;
        that = this,
        el = that._el;

        that._fire_start();

        that._end = endaction;
        on(el, event_key + 'End', endaction);
        on(el, 'animationend', endaction);

        addClass(el, that._id);

        function endaction(e) {
            var rule = sheet.cssRules,
                len = rule.length,
                name;

            that._off();


            if (prefix == 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name == that._id) {
                        sheet.deleteRule(len);
                    }
                }
                removeClass(el, that._id);

                css(el, that.property);
            }
            that._fire_complete(e);
        }
    },
    'stop': function() {
        var stopobj = {};

        this['fire']('stop');

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

That['id'] = 0;
That['duration'] = 500;
}());
