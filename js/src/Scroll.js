/* Test: "../../spec/_src/src/Scroll/test.js" */
C['Scroll'] = klassExtendBase(UNDEFINED, {
    'disposeInternal': function() {
        this['revival']();
        clearInterval(this._smoothid);
    },
    'to': scrollTo,
    'toTop': pageTop,
    'toBottom': function() {
        scrollTo(doc.height);
    },
    'smooth': function(target, callback) {
        var mine = this,
            max;

        callback = callback || nullFunction;

        if (!mine._smoothmove) {
            mine._smoothmove = TRUE;

            if (!isNumber(target)) {
                target = target.offsetTop;
            }

            max = doc.height - win.innerHeight;
            if (target > max) {
                target = max;
            }

            mine._before = win.scrollY;
            mine._smoothid = setInterval(function() {
                var position = (target - win.scrollY) * 0.3 + win.scrollY;

                if (Math.abs(target - position) < 1 || mine._before === position) {
                    scrollTo(target);
                    clearInterval(mine._smoothid);
                    callback(target);
                    return delete mine._smoothmove;
                }

                mine._before = position;
                scrollTo(position);
            }, 50);
        }
    },
    'kill': function() {
        if (!isTouch) {
            return css(doc.body, {
                'overflow': 'hidden'
            });
        }
        if (!this._killscrollid) {
            this._killscrollid = this['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function() {
        if (!isTouch) {
            return css(doc.body, {
                'overflow': 'auto'
            });
        }
        if (this._killscrollid) {
            this['uncontract'](this._killscrollid);
            delete this._killscrollid;
        }
    }
});
