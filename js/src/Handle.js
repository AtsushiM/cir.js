/* Test: "../../spec/_src/src/Handle/test.js" */
Global['Handle'] = klassExtendBase(function(config) {
    this.handler = config;
    this['attach']();
}, {
    'dispose': function() {
        this['detach']();
        this._orgdis();
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
