/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global.Surrogate = Global.klass({
    init: function(config) {
        this.delay = config.delay;
        this.callback = config.callback;
        this.args = null;
        this.waitid = null;
    },
    properties: {
        request: function(arg) {
            this.args = arg;
            this.clear();
            this.waitid = setTimeout(this.flush, this.delay, this);
        },
        flush: function(mine) {
            mine = mine || this;

            mine.callback(mine.args);
        },
        clear: function() {
            clearInterval(this.waitid);
        }
    }
});
