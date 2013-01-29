/* Test: "../../spec/_src/src/Event/test.js" */
var EventName = 'Event';
ev = klassExtendBase(function(config) {
    this['_super'](config);

    // singleton
    return this.singleAct(EventName);
}, {
    'switchclick': isTouch ? 'touchstart' : 'click',
    'switchdown': isTouch ? 'touchstart' : 'mousedown',
    'switchmove': isTouch ? 'touchmove' : 'mousemove',
    'switchup': isTouch ? 'touchend' : 'mouseup',
    'switchover': isTouch ? 'touchstart' : 'mouseover',
    'switchout': isTouch ? 'touchend' : 'mouseout',
    'load': 'load',
    'change': 'change',
    'click': 'click',
    'mousedown': 'mousedown',
    'mousemove': 'mousemove',
    'mouseup': 'mouseup',
    'mouseover': 'mouseover',
    'mouseout': 'mouseout',
    'touchstart': 'touchstart',
    'touchmove': 'touchmove',
    'touchend': 'touchend',
    'resize': 'resize'
});
Global[EventName] = ev;
ev = Global['event'] = new ev();
