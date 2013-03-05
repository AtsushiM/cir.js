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

            /* mine._before = win.scrollY; */
            mine._smoothid = setInterval(function() {
                var position = win.scrollY;
                position = (target - position) * 0.3 + position;

                if (Math.abs(target - position) < 1 || mine._before == position) {
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
        if (!this._killscrollid) {
            css(body, {
                'overflow': 'hidden'
            });
            this._killscrollid = this['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function() {
        if (this._killscrollid) {
            css(body, {
                'overflow': 'auto'
            });
            this['uncontract'](this._killscrollid);
            delete this._killscrollid;
        }
    }
});
