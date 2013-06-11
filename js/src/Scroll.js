C['Scroll'] = classExtendBase({
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

        var remain = doc.body.scrollHeight -
                win.innerHeight - doc.body.scrollTop;

        if (remain <= offset) {
            return TRUE;
        }

        return FALSE;
    },
    'scrollY': function(/* varless */ pageYOffset) {
        pageYOffset = win.pageYOffset;

        return isDefined(pageYOffset) ? pageYOffset : (doc.documentElement || doc.body.parentNode || doc.body).scrollTop;
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

            that._before = that['scrollY']();
            that._smoothid = setInterval(function(/* varless */ position) {
                /* var position = that.scrollY(); */
                position = that['scrollY']();

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
            that._killid = that._contract(doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function(/* varless */ that) {
        that = this;

        if (that._killid) {
            css(doc.body, {
                'overflow': 'auto'
            });
            that._uncontract(that._killid);
            delete that._killid;
        }
    }
});
