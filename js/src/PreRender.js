C['PreRender'] = classExtend(C['Observer'], {
    'init': function(config /* varless */, that) {
        that = this;

        that['_super']();

        that._els = config['els'];
        that._guesslimit = config['guesslimit'] || 30;
        that._looptime = config['looptime'] || 100;
        that._loopblur = that._looptime + (config['loopblur'] || 20);
        /* that._loopid = that.prevtime = NULL; */

        bindOnProp(that, config);

        if (!config['manual']) {
            that['start']();
        }
    },
    'dispose': function() {
        clearInterval(this._loopid);
        this['_super']();
    },
    'start': function() {
        var i,
            that = this,
            prevtime = dateNow();

        that['fire']('start');

        for (i = that._els.length; i--;) {
            show(that._els[i]);
        }
        that._loopid = setInterval(check, that._looptime, that);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < that._loopblur) {
                that._guesslimit--;

                if (that._guesslimit < 1) {
                    clearInterval(that._loopid);

                    for (i = that._els.length; i--;) {
                        hide(that._els[i]);
                    }

                    that['fire']('complete');
                }
            }
        }
    }
});
