// ElementLoad
ElementLoad = classExtendObserver({
    _tagname: EMPTY,
    _fire_complete: this_fire_complete,
    _fire_progress: this_fire_progress,
    'init': function(config /* varless */, that) {
        that = this;

        that['_super']();

        that._srcs = config['srcs'];
        that._loadedsrcs = [];
        that._contractid = [];
        that._progress = new Progress({
            'waits': that._srcs,
            'onprogress': function(progress) {
                that._fire_progress(progress);
            },
            'oncomplete': function() {
                var i = that._contractid.length;

                for (; i--;) {
                    that._uncontract(that._contractid[i]);
                }
                that._contractid = [];

                that._fire_complete(that._loadedsrcs);
            }
        });

        bindOnProp(that, config);

        if (!config['manual']) {
            that['start']();
        }
    },
    _fire_start: this_fire_start,
    'start': function(/* varless */el) {
        var that = this,
            i = 0,
            /* el, */
            len = that._srcs.length;

        that._fire_start();

        if (that._started) {
            return;
        }

        that._started = TRUE;

        for (; i < len; i++) {
            el = create(that._tagname);
            el.src = that._srcs[i];

            that._contractid.push(that._contract(el, ev['LOAD'], countup));
            that._loadedsrcs.push(el);
            that._loadloop(el);
        }

        function countup() {
            that._progress['pass']();
        }
    },
    _loadloop: nullFunction
});

