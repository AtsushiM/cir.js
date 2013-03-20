/* Test: "../../spec/_src/src/FPS/test.js" */
C['FPS'] = klassExtendBase(function(config /* varless */, mine) {
    mine = this;

    mine._criterion =
    mine._surver = config['criterion'];
    mine._msecFrame = mine._getFrame(mine._criterion);
    mine._enterframe = config['enterframe'];
    // mine._prevtime =
    // mine._nowtime =
    // mine._loopid = 0;

    if (!config['manual']) {
        mine['start']();
    }
}, {
    _prevtime: 0,
    _nowtime: 0,
    _loopid: 0,
    'disposeInternal': this_stop,
    'getCriterion': function() {
        return this._criterion;
    },
    'getSurver': function() {
        return this._surver;
    },
    'getFrameTime': function() {
        return this._msecFrame;
    },
    'enter': function(/* varless */ mine) {
        mine = this;

        mine._enterframe({
            'criterion': mine._criterion,
            'surver': mine._surver
        });
    },
    'start': function(/* varless */ mine) {
        mine = this;

        mine._prevtime = dateNow();
        mine._loopid = setInterval(mine._loop, mine._msecFrame, mine);
    },
    _loop: function(mine /* varless */, nowtime) {
        nowtime = mine._nowtime = dateNow();
        mine._surver = mine._getFrame(nowtime - mine._prevtime);
        mine._prevtime = nowtime;

        mine['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': this_clearInterval_loop
});
