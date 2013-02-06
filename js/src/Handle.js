/* Test: "../../spec/_src/src/Handle/test.js" */
Global['Handle'] = klassExtendBase(function(config) {
    this.handler = config;
    this['attach']();
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    'attach': function() {
        this._e(TRUE);
    },
    'detach': function() {
        this._e(FALSE);
    },
    _e: function(isBind) {
        var onoff = isBind ? on : off,
            i;

        for (i in this.handler['events']) {
            onoff(
                this.handler['element'],
                i,
                this.handler['events'][i]
            );
        }
    }
});
