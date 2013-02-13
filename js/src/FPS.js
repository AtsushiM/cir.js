/* Test: "../../spec/_src/src/FPS/test.js" */
C['FPS'] = klassExtendBase(function(config) {
    this._criterion =
    this._surver = config['criterion'];
    this._msecFrame = this._getFrame(this._criterion);
    this._enterframe = config['enterframe'];
    // this._prevtime =
    // this._nowtime =
    // this._loopid = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    _prevtime: 0,
    _nowtime: 0,
    _loopid: 0,
    'disposeInternal': function() {
        this['stop']();
    },
    'getCriterion': function() {
        return this._criterion;
    },
    'getSurver': function() {
        return this._surver;
    },
    'getFrameTime': function() {
        return this._msecFrame;
    },
    'enter': function() {
        this._enterframe({
            'criterion': this._criterion,
            'surver': this._surver
        });
    },
    'start': function() {
        this._prevtime = dateNow();
        this._loopid = setInterval(this._loop, this._msecFrame, this);
    },
    _loop: function(mine) {
        mine._nowtime = dateNow();
        mine._surver = mine._getFrame(mine._nowtime - mine._prevtime);
        mine._prevtime = mine._nowtime;

        mine['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this._loopid);
    }
});
