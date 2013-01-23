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
    easebackrate = 1.70158,
    Base,
    Global = win['C'] = {};

