/* Test: "../../spec/_src/src/Surrogate/test.js" */
C['Surrogate'] = klassExtendBase(function(config) {
    this._delay = config['delay'];
    this._callback = config['callback'];
    // this._args = NULL;
    // this._waitid = NULL;
}, {
    'disposeInternal': function() {
        this['clear']();
    },
    'request': function(arg) {
        this._args = arg;
        this['clear']();
        this._waitid = setTimeout(this['flush'], this._delay, this);
    },
    'flush': function(mine) {
        mine = mine || this;

        mine._callback(mine._args);
    },
    'clear': function() {
        clearInterval(this._waitid);
    }
});
