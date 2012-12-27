/* Test: "../../spec/_src/src/Mobile/test.js" */
(function() {
'use strict';

var util = Global.utility,
    userAgent = navigator.userAgent;

Global.Mobile = Global.klass({
    properties: {
        utility: Global.utility,
        isAndroid: function(ua) {
            return checkUA(ua, /Android/i);
        },
        isIOS: function(ua) {
            return checkUA(ua, /iPhone|iPad|iPod/i);
        },
        isWindows: function(ua) {
            return checkUA(ua, /IEMobile/i);
        },
        isFBAPP: function(ua) {
            return checkUA(ua, /FBAN/);
        },
        isMobile: function() {
            return (
                this.isAndroid() ||
                this.isIOS() ||
                this.isWindows() ||
                this.isFBAPP()
            );
        },
        killScroll: function(isNoTop) {
            if (!isNoTop) {
                this.utility.pageTop();
            }
            this.utility.onEvent(this.utility.doc, 'touchmove', preventDefault);
        },
        revivalScroll: function(isNoTop) {
            if (!isNoTop) {
                this.utility.pageTop();
            }
            this.utility.offEvent(this.utility.doc, 'touchmove', preventDefault);
        },
        hideAddress: function() {
            this.utility.onEvent(this.utility.win, 'load', hideAddressHandler, false);
            this.utility.onEvent(this.utility.win, 'orientationchange', hideAddressHandler, false);
        },
        flickAmount: function(vars) {
            var startX,
                startY;

            util.onEvent(vars.element, 'touchstart', function(e) {
                var changed = e.changedTouches[0];
                startX = changed.pageX;
                startY = changed.pageY;
            });
            util.onEvent(vars.element, 'touchend', function(e) {
                var changed = e.changedTouches[0],
                    amount = {
                        x: changed.pageX - startX,
                        y: changed.pageY - startY
                    };

                vars.callback(amount);
            });
        },
        flickDirection: function(vars) {
            this.flickAmount({
                element: vars.element,
                callback: function(amount) {
                    var boundary = vars.boundary || 0,
                        isChange = false,
                        direction = {
                            top: false,
                            right: false,
                            bottom: false,
                            left: false,
                            amount: amount
                        };

                    if (Math.abs(amount.x) > boundary) {
                        if (amount.x > 0) {
                            direction.right = true;
                        }
                        else if (amount.x < 0) {
                            direction.left = true;
                        }

                        isChange = true;
                    }

                    if (Math.abs(amount.y) > boundary) {
                        if (amount.y > 0) {
                            direction.bottom = true;
                        }
                        else if (amount.y < 0) {
                            direction.top = true;
                        }

                        isChange = true;
                    }

                    if (isChange) {
                        vars.callback(direction);
                    }
                }
            });
        },
        orientationCheck: function() {
            if (
                Math.abs(this.utility.win.orientation) !== 90 &&
                this.utility.win.innerWidth < this.utility.win.innerHeight
            ) {
                return {
                    portrait: true,
                    landscape: false
                };
            }

            return {
                portrait: false,
                landscape: true
            };
        },
        orientationChange: function(vars) {
            var mine = this;

            if (vars.immediately) {
                change();
            }

            if (vars.one) {
                add(onechange);

                return function() {
                    remove(onechange);
                };
            }

            add(change);

            return function() {
                remove(change);
            };

            function add(func) {
                set(mine.utility.onEvent, func);
            }
            function remove(func) {
                set(mine.utility.offEvent, func);
            }
            function set(setfunc, handler) {
                setfunc(mine.utility.win, 'load', handler);
                setfunc(mine.utility.win, 'orientationchange', handler);
                setfunc(mine.utility.win, 'resize', handler);
            }
            function onechange() {
                change();
                remove(onechange);
            }
            function change() {
                if (
                    mine.orientationCheck().portrait
                ) {
                    vars.portrait();
                    return true;
                }
                vars.landscape();
            }
        }
    }
});

function preventDefault(e) {
    e.preventDefault();
    return false;
}
function checkUA(ua, pattern) {
    ua = ua ? ua : userAgent;

    return ua.match(pattern) ? true : false;
}
function doScroll() {
    if (win.pageYOffset === 0) {
        this.utility.pageTop();
    }
}
function hideAddressHandler() {
    setTimeout(doScroll, 100);
}
}());
