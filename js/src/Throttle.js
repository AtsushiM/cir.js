/* Test: "../../spec/_src/src/Throttle/test.js" */
Global.Throttle = Global.klass({
    init: function(config) {
        this.waittime = config.waittime;
        this.callback = config.callback;
        this.locked = false;
        this.waitid = null;
    },
    properties: {
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
