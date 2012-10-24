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
        // デフォルトイベント
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchend: 'touchend',

        // 切替イベント
        switchclick: 'touchstart',
        switchdown: 'touchstart',
        switchmove: 'touchmove',
        switchup: 'touchend'
    };

    if (config.isMobile()) {
        e.switchclick = 'click';
        e.switchdown = 'mousedown';
        e.switchmove = 'mousemove';
        e.switchup = 'mouseup';
    }

    if (config.single) {
        Mine.instance = e;
    }

    return e;
};
