/* (function() { */
system_temp = checkCSSAnimTranCheck([
    'animation',
    'webkitAnimation'
], 'Animation');

var ssanime_prefix = system_temp.prefix,
    ssanime_css_prefix = system_temp.css_prefix,
    ssanime_event_key = system_temp.event_key,
    ssanime_sheet = system_temp.sheet;

SSAnime = C['SSAnime'] =
classExtendObserver({
    _off: function(/* varless */el, end) {
        // var el = this._el,
        //     end = this._end;
        el = this._el,
        end = this._end;

        off(el, ssanime_event_key + 'End', end);
        off(el, 'animationend', end);
    },
    'init': function(el, property, option /* varless */, that, duration, ease, i, prop) {
        that = this;

        that['_super']();

        bindOnProp(that, option);

        option = option || NULLOBJ;

        that._oncomplete = option['oncomplete'] || nullFunction;

        that._el = el;

        SSAnime['id']++;
        that._id = 'ciranim' + SSAnime['id'];

        // var duration = option['duration'] || SSAnime['duration'],
        //     // easeOutExpo
        //     ease = option['ease'] || csseaseOutExpo,
        //     i,
        //     prop = {};
        duration = option['duration'] || SSAnime['duration'],
        // easeOutExpo
        ease = option['ease'] || csseaseOutExpo,
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

        ssanime_sheet.insertRule(
            '@' + ssanime_css_prefix + 'keyframes ' + that._id + '{to' + prop + '}',
            ssanime_sheet.cssRules.length);

        if (!isArray(ease)) {
            ease = [ease];
        }

        SSAnime_addCSSRule(that._id, ssanime_css_prefix, duration, ease);

        ifManualStart(that, option);
    },
    'dispose': this_stop__super,
    'start': function(/* varless */ that, el) {
        // var that = this,
        //     el = that._el;
        that = this,
        el = that._el;

        fire_start(that);

        that._end = endaction;
        on(el, ssanime_event_key + 'End', endaction);
        on(el, 'animationend', endaction);

        addClass(el, that._id);

        function endaction(e) {
            var rule = ssanime_sheet.cssRules,
                len = rule.length,
                name;

            that._off();


            if (ssanime_prefix == 'webkit') {
                for (; len--;) {
                    name = rule[len].name ||
                        (EMPTY + rule[len].selectorText).split('.')[1];

                    if (name == that._id) {
                        ssanime_sheet.deleteRule(len);
                    }
                }
                removeClass(el, that._id);

                css(el, that.property);
            }
            fire_complete(that, e);
        }
    },
    'stop': function(/* varless */stopobj) {
        /* var stopobj = {}; */
        stopobj = {};

        this['fire']('stop');

        stopobj[ssanime_css_prefix + 'animation-play-state'] = 'paused';

        css(this._el, stopobj);
        this._off();
    }
}, system_temp.support);

function SSAnime_addCSSRule(id, css_prefix, duration, eases/* varless */, i, len, rule) {
    // var i = 0,
    //     len = eases.length,
    //     rule = EMPTY;
    i = 0,
    len = eases.length,
    rule = EMPTY;

    for (; i < len; i++) {
        rule += css_prefix + 'animation:' +
                id + ' ' +
                duration + 'ms ' +
                eases[i] + ' 0s 1 normal both;';
    }

    sheetAddCSSRule(ssanime_sheet, id, rule);
}

SSAnime['id'] = 0;
SSAnime['duration'] = 500;
/* }()); */
