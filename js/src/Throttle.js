/* Test: "../../spec/_src/src/Throttle/test.js" */
(function() {
'use strict';

Global.Throttle = Global.klass({
    constructor: function(config) {
        this.waittime = config.waittime;
        this.callback = config.callback;
        this.locked = false;
        this.waitid = null;
    },
    method: {
        request: function(vars) {
            if (this.locked) {
                return false;
            }

            this.callback(vars);
            this.lock();
            this.waitid = setTimeout(this.unlock, this.waittime, this);
        },
        lock: function() {
            this.locked = true;
        },
        unlock: function(mine) {
            mine = mine || this;

            mine.locked = false;
            clearInterval(mine.waitid);
        }
    }
});
}());
