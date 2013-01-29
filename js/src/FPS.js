/* Test: "../../spec/_src/src/FPS/test.js" */
var FPSName = 'FPS';
Global[FPSName] = klassExtendBase(function(config) {
    this['_super'](config);

    this.criterion = config['criterion'] || 20,
    this.surver = this.criterion,
    this.enterframe = config['enterframe'],
    this.msecFrame = this._getFrame(this.criterion),
    this.prevtime =
    this.nowtime =
    this.loopid = 0;

    if (!config['manual']) {
        this['start']();
    }

    return this.singleAct(FPSName);
}, {
    'dispose': function() {
        this['stop']();
        this._orgdis();
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
