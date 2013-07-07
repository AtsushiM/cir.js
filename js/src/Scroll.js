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
    'checkBottom': function(offset) {
        offset = offset || 0;

        var remain = this['scrollLimit']() - this['scrollTop']();

        if (remain <= offset) {
            return TRUE;
        }

        return FALSE;
    },
    'percent': function(vars) {
        vars = vars || NULLOBJ;

        var low = vars['low'] || 0,
            high = vars['high'] || this['scrollLimit'](),
            now = (vars['now'] || this['scrollTop']()) - low,
            range = high - low;

        if (!range) {
            range = now;
        }

        return now / range;
    },
    'scrollTop': function(/* varless */ pageYOffset) {
        pageYOffset = win.pageYOffset;

        return isDefined(pageYOffset) ? pageYOffset : (doc.documentElement || doc.body.parentNode || doc.body).scrollTop;
    },
    'scrollLimit': function() {
        return doc.body.scrollHeight - win.innerHeight;
    },
    'smooth': function(target, callback /* varless */, that, max) {
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

            that._before = that['scrollTop']();
            that._smoothid = setInterval(function(/* varless */ position) {
                /* var position = that.scrollTop(); */
                position = that['scrollTop']();

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

            if (isTouchable()) {
                that._killid = that._contract(doc, ev['TOUCHMOVE'], eventPrevent);
            }
        }
    },
    'revival': function(/* varless */ that) {
        that = this;

        css(doc.body, {
            'overflow': 'auto'
        });

        if (isTouchable()) {
            that._uncontract(that._killid);
            delete that._killid;
        }
    }
});
