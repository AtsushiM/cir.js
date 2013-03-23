/* Test: "../../spec/_src/src/Scroll/test.js" */
C['Scroll'] = classExtendBase({
    'dispose': function() {
        this['revival']();
        clearInterval(this._smoothid);

        this['_super']();
    },
    'to': scrollTo,
    'toTop': pageTop,
    'toBottom': function() {
        scrollTo(doc.height);
    },
    'scrollY': function() {
        return (win.pageYOffset !== UNDEFINED) ? win.pageYOffset : (doc.documentElement || body.parentNode || body).scrollTop;
    },
    'smooth': function(target, callback /* varless */, mine, max) {
        // var mine = this,
        //     max;
        mine = this;

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

            mine._before = mine.scrollY();
            mine._smoothid = setInterval(function(/* varless */ position) {
                /* var position = mine.scrollY(); */
                position = mine.scrollY();

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
    'kill': function(/* varless */ mine) {
        mine = this;

        if (!mine._killscrollid) {
            css(body, {
                'overflow': 'hidden'
            });
            mine._killscrollid = mine['contract'](doc, ev['TOUCHMOVE'], eventPrevent);
        }
    },
    'revival': function(/* varless */ mine) {
        mine = this;

        if (mine._killscrollid) {
            css(body, {
                'overflow': 'auto'
            });
            mine['uncontract'](mine._killscrollid);
            delete mine._killscrollid;
        }
    }
});
