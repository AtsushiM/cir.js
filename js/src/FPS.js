/* Test: "../../spec/_src/src/FPS/test.js" */
Global['FPS'] = klassExtendBase(function(config) {
    this.criterion =
    this.surver = config['criterion'];
    this.msecFrame = this._getFrame(this.criterion);
    this.enterframe = config['enterframe'];
    // this.prevtime =
    // this.nowtime =
    // this.loopid = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    prevtime: 0,
    nowtime: 0,
    loopid: 0,
    'disposeInternal': function() {
        this['stop']();
    },
    'getCriterion': function() {
        return this.criterion;
    },
    'getSurver': function() {
        return this.surver;
    },
    'getFrameTime': function() {
        return this.msecFrame;
    },
    'enter': function() {
        this.enterframe({
            'criterion': this.criterion,
            'surver': this.surver
        });
    },
    'start': function() {
        this.prevtime = dateNow();
        this.loopid = setInterval(this._loop, this.msecFrame, this);
    },
    _loop: function(mine) {
        mine.nowtime = dateNow();
        mine.surver = mine._getFrame(mine.nowtime - mine.prevtime);
        mine.prevtime = mine.nowtime;

        mine['enter']();
    },
    _getFrame: function(time) {
        return Math.round(1000 / time);
    },
    'stop': function() {
        clearInterval(this.loopid);
    }
});
