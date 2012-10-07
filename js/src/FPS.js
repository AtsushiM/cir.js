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

    var criterion = config.criterion,
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
                    criterion: fps.getCriterion(),
                    surver: fps.getSurver()
                });
            },
            start: function() {
                prevtime = Date.now();
                loop();
            },
            stop: function() {
                clearInterval(loopid);
            }
        };

    function loop() {
        loopid = setInterval(_loop, msecFrame);
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
