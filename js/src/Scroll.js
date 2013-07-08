C['Scroll'] = classExtendObserver({
    'init': function() {
        this['_super']();
    },
    'dispose': function(/* varless */that) {
        that = this;

        that['revival']();
        clearInterval(that._smoothid);

        that['_super']();
    },
    'to': scrollTo,
    'toTop': pageTop,
    'toBottom': function() {
        scrollTo(doc.height);
    },
    'isBottom': function(offset) {
        offset = offset || 0;

        var remain = this['getLimit']() - this['getY']();

        if (remain <= offset) {
            return TRUE;
        }

        return FALSE;
    },
    'getRatio': function(vars) {
        vars = vars || NULLOBJ;

        var low = vars['low'] || 0,
            high = vars['high'] || this['getLimit'](),
            now = (vars['now'] || this['getY']()) - low,
            range = high - low;

        if (!range) {
            range = now;
        }

        return now / range;
    },
    'getY': function(/* varless */ pageYOffset) {
        pageYOffset = win.pageYOffset;

        return isDefined(pageYOffset) ? pageYOffset : (doc.documentElement || doc.body.parentNode || doc.body).scrollTop;
    },
    'getLimit': function() {
        return doc.body.scrollHeight - win.innerHeight;
    },
    'toSmooth': function(target, callback /* varless */, that, max) {
        // var that = this,
        //     max;
        that = this;

        callback = callback || nullFunction;

        if (!that._smoothmove) {
            that._smoothmove = TRUE;

            if (!isNumber(target)) {
                target = target.offsetTop;
            }

            max = doc.height - win.innerHeight;
            if (target > max) {
                target = max;
            }

            that._before = that['getY']();
            that._smoothid = setInterval(function(/* varless */ position) {
                /* var position = that.getY(); */
                position = that['getY']();

                position = (target - position) * 0.3 + position;

                if (Math.abs(target - position) < 1 || that._before == position) {
                    scrollTo(target);
                    clearInterval(that._smoothid);
                    callback(target);
                    return delete that._smoothmove;
                }

                that._before = position;
                scrollTo(position);
            }, 50);
        }
    },
    'kill': function(/* varless */ that) {
        that = this;

        if (!that._killid) {
            css(doc.body, {
                'overflow': 'hidden'
            });

            if (isTouch) {
                that._killid = that._contract(doc, ev['TOUCHMOVE'], eventPrevent);
            }
        }
    },
    'revival': function(/* varless */ that) {
        that = this;

        css(doc.body, {
            'overflow': 'auto'
        });

        if (isTouch) {
            that._uncontract(that._killid);
            delete that._killid;
        }
    }
});
