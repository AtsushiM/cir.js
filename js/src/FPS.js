/* Test: "../../spec/_src/src/FPS/test.js" */
C['FPS'] = classExtendBase({
    _prevtime: 0,
    _nowtime: 0,
    _loopid: 0,
    'init': function(config /* varless */, mine) {
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
    'stop': function() {
        clearInterval(this._loopid);
    }
});
