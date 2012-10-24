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

    var show = util.showElement,
        hide = util.hideElement,
        elements = config.elements,
        guesslimit = config.guesslimit,
        onrendered = config.onrendered,
        looptime = config.looptime,
        loopblur = looptime + config.loopblur,
        loopid,
        gettime,
        difftime,
        prevtime,
        instanse = {
            start: function() {
                var i;

                for (i = elements.length; i--;) {
                    show(elements[i]);
                }
                prevtime = Date.now();
                loopid = setInterval(check, looptime);
            }
        };

    function check() {
        gettime = Date.now(),
        difftime = gettime - prevtime;

        prevtime = gettime;

        if (difftime < loopblur) {
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

    return instanse;
};
