// Cool is Right.
(function() {
'use strict';
var win = window,
    doc = document,
    TRUE = true,
    FALSE = false,
    NULL = null,
    UNDEFINED = undefined,
    isTouch = isTouchDevice(),
    klass,
    ev,
    ev_hashchange = 'hashchange',
    ev_orientationchange = 'orientationchange',
    ev_canplay = 'canplay',
    ev_ended = 'ended',
    easebackrate = 1.70158,
    Base,
    /* Global = win['C'] = {}; */
    Global = C = {};

function klassExtend(kls, init, properties) {
    return klass({
        'extend': kls,
        'init': init,
        'properties': properties
    });
}
function klassExtendBase(init, properties) {
    return klassExtend(Base, init, properties);
}
