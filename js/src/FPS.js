/* Test: "../../spec/_src/src/FPS/test.js" */
(function() {
'use strict';

var instance,
    util = Global.utility,
    override = util.override,
    win = util.win,
    requestAnimationFrame = (function() {
        return win.requestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.oRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            false;
            // function(callback, element){
            //         window.setTimeout(callback, 1000 / 60);
            //       };
    }());

Global.FPS = Global.klass({
    constructor: function(config) {
        config = override({
            single: false,
            criterion: 20
        }, config);

        // singleton
        if (config.single && instance) {
            return instance;
        }

        this.criterion = config.criterion,
        this.surver = this.criterion,
        this.enterframe = config.enterframe,
        this.msecFrame = getFrame(this.criterion),
        this.prevtime =
        this.nowtime =
        this.nexttime =
        this.loopid = 0;

        if (config.single) {
            instance = this;
        }
    },
    method: {
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
            this.nexttime = this.prevtime + this.msecFrame;
            loop(this);
        },
        stop: function() {
            clearInterval(this.loopid);
            this.loopid = 0;
        }
    }
});
function animationFrame(mine) {
    if (mine.nexttime <= Date.now()) {
        _loop(mine);
        mine.nexttime = mine.nowtime + mine.msecFrame;
    }
    if (mine.loopid === 1) {
        requestAnimationFrame(function() {
            animationFrame(mine);
        });
    }
}
function loop(mine) {
    if (requestAnimationFrame) {
        mine.loopid = 1;
        animationFrame(mine);
    }
    else {
        mine.loopid = setInterval(_loop, mine.msecFrame, mine);
    }
}
function _loop(mine) {
    mine.nowtime = Date.now();
    mine.surver = getFrame(mine.nowtime - mine.prevtime);
    mine.prevtime = mine.nowtime;

    mine.enter();
}

function getFrame(time) {
    return Math.round(1000 / time);
}
}());
