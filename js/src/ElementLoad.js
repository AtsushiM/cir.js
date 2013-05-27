// ElementLoad
var ElementLoad = classExtend(C['Observer'], {
    _tagname: '',
    'init': function(config /* varless */, that) {
        this['_super'](config);

        that = this;

        that._srcs = config['srcs'];
        that._loadedsrcs = [];
        that._contractid = [];
        that._progress = new Progress({
            'waits': that._srcs,
            'onprogress': function(progress) {
                that['fire']('progress', progress);
            },
            'oncomplete': function() {
                var i = that._contractid.length;

                for (; i--;) {
                    that['uncontract'](that._contractid[i]);
                }
                that._contractid = [];

                that['fire']('complete', that._loadedsrcs);
            }
        });

        bindOnProp(that, config);

        if (!config['manual']) {
            that['start']();
        }
    },
    'start': function() {
        var that = this,
            el,
            i = 0,
            len = that._srcs.length;

        this['fire']('start');

        if (that._started) {
            return;
        }

        that._started = TRUE;

        for (; i < len; i++) {
            el = create(that._tagname);
            el.src = that._srcs[i];

            that._contractid.push(that['contract'](el, ev['LOAD'], countup));
            that._loadedsrcs.push(el);
            that._loadloop(el);
        }

        function countup() {
            that._progress['pass']();
        }
    },
    _loadloop: nullFunction
});

