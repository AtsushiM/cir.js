/* Test: "../../spec/_src/src/PreRender/test.js" */
Global.PreRender = function(config) {
    'use strict';

    var util = Global.utility,
        override = util.override;

    config = override({
        elements: [],
        guesslimit: 30,
        looptime: 100,
        loopblur: 20,
        onrendered: function() {}
    }, config);

    var Mine = Global.PreRender,
        util = Global.utility,
        $ = util.$,
        show = util.showElement,
        hide = util.hideElement,
        elements = config.elements,
        guesslimit = config.guesslimit,
        onrendered = config.onrendered,
        looptime = config.looptime,
        loopblur = looptime + config.loopblur,
        loopid,
        prevtime,
        instanse = {
            start: function() {
                for (var i = elements.length; i--;) {
                    show(elements[i]);
                }
                prevtime = Date.now();
                loopid = setInterval(instanse.check, looptime);
            },
            check: function() {
                var gettime = Date.now(),
                    diff = gettime - prevtime;

                prevtime = gettime;

                if (diff < loopblur) {
                    guesslimit--;

                    if (guesslimit < 1) {
                        clearInterval(loopid);

                        for (var i = elements.length; i--;) {
                            hide(elements[i]);
                        }

                        onrendered();
                    }
                }
            }
        };

    return instanse;
};

