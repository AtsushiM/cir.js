// ElementLoad
ElementLoad = classExtendObserver({
    /* _tagname: EMPTY, */
    'init': function(config /* varless */, that) {
        that = this;

        that['_super']();

        that._srcs = config['srcs'];
        that._loadedsrcs = [];
        that._contractid = [];

        bindOnProp(that, config);

        ifManualStart(that, config);
    },
    'start': function(/* varless */el) {
        var that = this,
            i = 0,
            j = 0,
            /* el, */
            len = that._srcs.length;

        fire_start(that);

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

            fire_progress(that, j / i);

            if (i == j) {
                i = that._contractid.length;

                for (; i--;) {
                    that._uncontract(that._contractid.pop());
                }

                fire_complete(that, that._loadedsrcs);
            }
        }
    },
    _loadloop: nullFunction
});

