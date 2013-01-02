/* Test: "../../spec/_src/src/Event/test.js" */
(function() {
'use strict';

var isTouch = Global.utility.isTouchDevice();

Global.Event = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && Global.Event.instance) {
            return Global.Event.instance;
        }

        if (config.single) {
            Global.Event.instance = this;
        }
    },
    properties: {
        utility: Global.utility,
        switchclick: isTouch ? 'touchstart' : 'click',
        switchdown: isTouch ? 'touchstart' : 'mousedown',
        switchmove: isTouch ? 'touchmove' : 'mousemove',
        switchup: isTouch ? 'touchend' : 'mouseup',
        load: 'load',
        hashchange: 'hashchange',
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchend: 'touchend',
        orientationchange: 'orientationchange',
        resize: 'resize'
    }
});
Global.Event.instance = null;
}());
