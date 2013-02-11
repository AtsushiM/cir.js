/* Test: "../../spec/_src/src/Event/test.js" */
ev = klassExtendBase(UNDEFINED, {
    'SWITCHCLICK': isTouch ? 'touchstart' : 'click',
    'SWITCHDOWN': isTouch ? 'touchstart' : 'mousedown',
    'SWITCHMOVE': isTouch ? 'touchmove' : 'mousemove',
    'SWITCHUP': isTouch ? 'touchend' : 'mouseup',
    'SWITCHOVER': isTouch ? 'touchstart' : 'mouseover',
    'SWITCHOUT': isTouch ? 'touchend' : 'mouseout',
    'LOAD': 'load',
    'CHANGE': 'change',
    'CLICK': 'click',
    'MOUSEDOWN': 'mousedown',
    'MOUSEMOVE': 'mousemove',
    'MOUSEUP': 'mouseup',
    'MOUSEOVER': 'mouseover',
    'MOUSEOUT': 'mouseout',
    'TOUCHSTART': 'touchstart',
    'TOUCHMOVE': 'touchmove',
    'TOUCHEND': 'touchend',
    'RESIZE': 'resize'
});
Global['Event'] = ev;
ev = Global['e'] = new ev();
