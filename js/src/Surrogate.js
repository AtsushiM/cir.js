/* Test: "../../spec/_src/src/Surrogate/test.js" */
C['Surrogate'] = classExtendBase({
    'init': function(config) {
        this._delay = config['delay'];
        this._callback = config['callback'];
        // this._args = NULL;
        // this._waitid = NULL;
    },
    'dispose': function() {
        this['clear']();
        this['_super']();
    },
    'request': function(arg /* varless */, mine) {
        mine = this;

        mine._args = arg;
        mine['clear']();
        mine._waitid = setTimeout(mine['flush'], mine._delay, mine);
    },
    'flush': function(mine) {
        mine = mine || this;

        mine._callback(mine._args);
    },
    'clear': function() {
        clearInterval(this._waitid);
    }
});
