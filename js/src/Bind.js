/* Test: "../../spec/_src/src/Bind/test.js" */
Global['Bind'] = klassExtendBase(function(config) {
    this.handler = config;
    this['add']();
}, {
    'dispose': function() {
        this['remove']();
        this._orgdis();
    },
    'getHandler': function() {
        return this.handler;
    },
    'add': function() {
        this._e(TRUE);
    },
    'remove': function() {
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
