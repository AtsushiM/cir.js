C['FPS'] = classExtendBase({
    _prevtime: 0,
    _nowtime: 0,
    _loopid: 0,
    'init': function(config /* varless */, that) {
        that = this;

        that._criterion =
        that._surver = config['criterion'];
        that._msecFrame = that._getFrame(that._criterion);
        that._enterframe = config['enterframe'];
        // that._prevtime =
        // that._nowtime =
        // that._loopid = 0;

        if (!config['manual']) {
            that['start']();
        }
    },
    'dispose': this_stop__super,
    'getCriterion': function() {
        return this._criterion;
    },
    'getSurver': function() {
        return this._surver;
    },
    'getFrameTime': function() {
        return this._msecFrame;
    },
    'enter': function(/* varless */ that) {
        that = this;

        that._enterframe({
            'criterion': that._criterion,
            'surver': that._surver
        });
    },
    'start': function(/* varless */ that) {
        that = this;

        that._prevtime = dateNow();
        that._loopid = setInterval(that._loop, that._msecFrame, that);
    },
    _loop: function(that /* varless */, nowtime) {
        nowtime = that._nowtime = dateNow();
        that._surver = that._getFrame(nowtime - that._prevtime);
        that._prevtime = nowtime;

        that['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this._loopid);
    }
});
