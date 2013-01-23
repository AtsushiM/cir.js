/* Test: "../../spec/_src/src/Surrogate/test.js" */
Global['Surrogate'] = klass({
    'extend': Base,
    'init': function(config) {
        this.delay = config['delay'];
        this.callback = config['callback'];
        // this.args = NULL;
        // this.waitid = NULL;
    },
    'properties': {
        'dispose': function() {
            this['clear']();
            this._orgdis();
        },
        'request': function(arg) {
            this.args = arg;
            this['clear']();
            this.waitid = setTimeout(this['flush'], this.delay, this);
        },
        'flush': function(mine) {
            mine = mine || this;

            mine.callback(mine.args);
        },
        'clear': function() {
            clearInterval(this.waitid);
        }
    }
});
