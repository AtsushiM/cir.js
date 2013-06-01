C['PreRender'] = classExtendObserver({
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
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */that, i, prevtime, gettime, difftime) {
        that = this,
        // var i,
        //     that = this,
        //     prevtime = dateNow();
        prevtime = dateNow();

        that._fire_start();

        for (i = that._els.length; i--;) {
            show(that._els[i]);
        }
        that._loopid = setInterval(check, that._looptime, that);

        function check(/* varless */) {
            // var gettime = dateNow(),
            //     difftime = gettime - prevtime,
            //     i;
            gettime = dateNow(),
            difftime = gettime - prevtime;

            prevtime = gettime;

            if (difftime < that._loopblur) {
                that._guesslimit--;

                if (that._guesslimit < 1) {
                    clearInterval(that._loopid);

                    for (i = that._els.length; i--;) {
                        hide(that._els[i]);
                    }

                    that._fire_complete();
                }
            }
        }
    }
});
