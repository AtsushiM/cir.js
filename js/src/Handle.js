/* Test: "../../spec/_src/src/Handle/test.js" */
C['Handle'] = klassExtendBase(function(config) {
    this._config = config;
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
        var i,
            config = this._config,
            events = config['events'];

        for (i in events) {
            onoff(
                config['el'],
                i,
                events[i]
            );
        }
    }
});
