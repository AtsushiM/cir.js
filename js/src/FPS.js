/* Test: "../../spec/_src/src/FPS/test.js" */
Global.FPS = function(config) {
    'use strict';

    var Mine = Global.FPS,
        override = Global.utility.override;

    config = override({
        single: false,
        criterion: 20
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    var util = Global.utility,
        win = util.win,
        criterion = config.criterion,
        surver = criterion,
        enterframe = config.enterframe,
        msecFrame = getFrame(criterion),
        prevtime,
        nowtime,
        loopid,
        fps = {
            getCriterion: function() {
                return criterion;
            },
            getSurver: function() {
                return surver;
            },
            getFrameTime: function() {
                return msecFrame;
            },
            enter: function() {
                enterframe({
                    criterion: criterion,
                    surver: surver
                });
            },
            start: function() {
                prevtime = Date.now();
                loop();
            },
            stop: function() {
                clearInterval(loopid);
                loopid = 0;
            }
        },
        animationFrameCount = 0,
        animationFrameWait = Math.round(60 / criterion) + 1,
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

    function animationFrame() {
        animationFrameCount++;

        if (animationFrameCount === animationFrameWait) {
            animationFrameCount = 0;
            _loop();
        }

        if (loopid === 1) {
            requestAnimationFrame(animationFrame);
        }
    }

    function loop() {
        if (requestAnimationFrame) {
            loopid = 1;
            animationFrame();
        }
        else {
            loopid = setInterval(_loop, msecFrame);
        }
    }
    function _loop() {
        nowtime = Date.now();
        surver = getFrame(nowtime - prevtime);
        prevtime = nowtime;

        fps.enter();
    }

    function getFrame(time) {
        return Math.round(1000 / time);
    }

    if (config.single) {
        Mine.instance = fps;
    }

    return fps;
};
