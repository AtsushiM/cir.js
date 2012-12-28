/* Test: "../../spec/_src/src/Event/test.js" */
(function() {
'use strict';

var instance;

Global.Event = Global.klass({
    init: function(config) {
        config = config || {};

        // singleton
        if (config.single && instance) {
            return instance;
        }
        if (
            config.mobileMode === undefined &&
            this.utility.isTouchDevice()
        ) {
            config.mobileMode = true;
        }

        // switch event
        if (config.mobileMode) {
            this.switchclick = 'touchstart';
            this.switchdown = 'touchstart';
            this.switchmove = 'touchmove';
            this.switchup = 'touchend';
        }
        else {
            this.switchclick = 'click';
            this.switchdown = 'mousedown';
            this.switchmove = 'mousemove';
            this.switchup = 'mouseup';
        }

        if (config.single) {
            instance = this;
        }
    },
    properties: {
        utility: Global.utility,
        load: 'load',
        hashchange: 'hashchange',
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchend: 'touchend'
    }
});
}());
