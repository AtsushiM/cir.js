/* Test: "../../spec/_src/src/Event/test.js" */
Global.Event = function(config) {
    'use strict';

    if (!config) {
        config = {
            isMobile: function() {
                return false;
            }
        };
    }

    var mobile = config.isMobile(),
        e = {
            click: 'click',
            mousedown: 'mousedown',
            mousemove: 'mousemove',
            mouseup: 'mouseup'
        };

    if (mobile) {
        e.click = 'touchstart';
        e.mousedown = 'touchstart';
        e.mousemove = 'touchmove';
        e.mouseup = 'touchend';
    }

    return e;
};
