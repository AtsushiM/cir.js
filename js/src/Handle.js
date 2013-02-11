/* Test: "../../spec/_src/src/Handle/test.js" */
Global['Handle'] = klassExtendBase(function(config) {
    this.config = config;
    this['attach']();
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff) {
        var i;

        for (i in this.config['events']) {
            onoff(
                this.config['el'],
                i,
                this.config['events'][i]
            );
        }
    }
});
