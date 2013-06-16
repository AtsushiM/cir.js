// ElementLoad
ElementLoad = classExtendObserver({
    /* _tagname: EMPTY, */
    _fire_complete: this_fire_complete,
    _fire_progress: this_fire_progress,
    'init': function(config /* varless */, that) {
        that = this;

        that['_super']();

        that._srcs = config['srcs'];
        that._loadedsrcs = [];
        that._contractid = [];

        bindOnProp(that, config);

        ifManualStart(that, config);
    },
    _fire_start: this_fire_start,
    'start': function(/* varless */el) {
        var that = this,
            i = 0,
            j = 0,
            /* el, */
            len = that._srcs.length;

        that._fire_start();

        if (!that._started) {
            that._started = TRUE;

            for (; i < len; i++) {
                el = create(that._tagname);
                el.src = that._srcs[i];

                that._contractid.push(that._contract(el, ev['LOAD'], countup));
                that._loadedsrcs.push(el);
                that._loadloop(el);
            }
        }

        function countup() {
            j++;

            that._fire_progress(j / i);

            if (i == j) {
                i = that._contractid.length;

                for (; i--;) {
                    that._uncontract(that._contractid.pop());
                }

                that._fire_complete(that._loadedsrcs);
            }
        }
    },
    _loadloop: nullFunction
});

