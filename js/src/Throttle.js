/* Test: "../../spec/_src/src/Throttle/test.js" */
Global.Throttle = klass({
    extend: Base,
    init: function(config) {
        this.waittime = config.waittime;
        this.callback = config.callback;
        // this.locked = false;
        // this.waitid = null;
        // this.waitarg = null;
    },
    properties: {
        dispose: function() {
            this.unlock();
            this._orgdis();
        },
        request: function(vars) {
            var mine = this;

            if (mine.locked) {
                mine.waitarg = vars;
                return false;
            }

            mine.callback(vars);
            mine.lock();
            mine.waitid = setTimeout(function() {
                if (mine.waitarg) {
                    mine.callback(mine.waitarg);
                    mine.waitarg = null;
                }

                mine.unlock();
            }, mine.waittime, mine);
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
