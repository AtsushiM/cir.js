/* Test: "../../spec/_src/src/Event/test.js" */
Global.Event = function(config) {
    'use strict';

    var Mine = Global.Event,
        override = Global.utility.override,
        e;

    config = override({
        single: false,
        isMobile: function() {
            return false;
        }
    }, config);

    // singleton
    if (config.single && Mine.instance) {
        return Mine.instance;
    }

    e = {
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup'
    };

    if (config.isMobile()) {
        e.click = 'touchstart';
        e.mousedown = 'touchstart';
        e.mousemove = 'touchmove';
        e.mouseup = 'touchend';
    }

    if (config.single) {
        Mine.instance = e;
    }

    return e;
};
