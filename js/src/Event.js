/* Test: "../../spec/_src/src/Event/test.js" */
var EventName = 'Event';
ev = klass({
    'extend': Base,
    'init': function(config) {
        this['_super'](config);

        // singleton
        return this.singleAct(EventName);
    },
    'properties': {
        'switchclick': isTouch ? 'touchstart' : 'click',
        'switchdown': isTouch ? 'touchstart' : 'mousedown',
        'switchmove': isTouch ? 'touchmove' : 'mousemove',
        'switchup': isTouch ? 'touchend' : 'mouseup',
        'load': 'load',
        'change': 'change',
        /* hashchange: 'hashchange', */
        'click': 'click',
        'mousedown': 'mousedown',
        'mousemove': 'mousemove',
        'mouseup': 'mouseup',
        'touchstart': 'touchstart',
        'touchmove': 'touchmove',
        'touchend': 'touchend',
        /* orientationchange: 'orientationchange', */
        'resize': 'resize'
    }
});
Global[EventName] = ev;
ev = Global['event'] = new ev();
