/* Test: "../../spec/_src/src/FPS/test.js" */
Global.FPS = klass({
    extend: Base,
    init: function(config) {
        config = config || {};

        if (!config.criterion) {
            config.criterion = 20;
        }

        // singleton
        if (config.single && Global.FPS.instance) {
            return Global.FPS.instance;
        }

        this.criterion = config.criterion,
        this.surver = this.criterion,
        this.enterframe = config.enterframe,
        this.msecFrame = this._getFrame(this.criterion),
        this.prevtime =
        this.nowtime =
        this.loopid = 0;

        if (!config.manual) {
            this.start();
        }

        if (config.single) {
            Global.FPS.instance = this;
        }
    },
    properties: {
        dispose: function() {
            this.stop();
            this.__proto__.__proto__.dispose.call(this, []);
        },
        getCriterion: function() {
            return this.criterion;
        },
        getSurver: function() {
            return this.surver;
        },
        getFrameTime: function() {
            return this.msecFrame;
        },
        enter: function() {
            this.enterframe({
                criterion: this.criterion,
                surver: this.surver
            });
        },
        start: function() {
            this.prevtime = Date.now();
            this.loopid = setInterval(this._loop, this.msecFrame, this);
        },
        _loop: function(mine) {
            mine.nowtime = Date.now();
            mine.surver = mine._getFrame(mine.nowtime - mine.prevtime);
            mine.prevtime = mine.nowtime;

            mine.enter();
        },
        _getFrame: function(time) {
            return Math.round(1000 / time);
        },
        stop: function() {
            clearInterval(this.loopid);
        }
    }
});
