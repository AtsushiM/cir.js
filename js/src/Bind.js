/* Test: "../../spec/_src/src/Bind/test.js" */
Global['Bind'] = klass({
    'extend': Base,
    'init': function(config) {
        this.handler = config;
        this['add']();
    },
    'properties': {
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
    }
});
