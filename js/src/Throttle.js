/* Test: "../../spec/_src/src/Throttle/test.js" */
C['Throttle'] = klassExtendBase(function(config) {
    this._waittime = config['waittime'];
    this._callback = config['callback'];
    // this._locked = FALSE;
    // this._waitid = NULL;
    // this._args = NULL;
}, {
    'disposeInternal': function() {
        this['unlock']();
    },
    'request': function(vars) {
        var mine = this;

        if (mine._locked) {
            mine._args = vars;
            return;
        }

        mine._callback(vars);
        mine['lock']();
        mine._waitid = setTimeout(function() {
            if (mine._args) {
                mine._callback(mine._args);
                mine._args = NULL;
            }

            mine['unlock']();
        }, mine._waittime, mine);
    },
    'lock': function() {
        this._locked = TRUE;
    },
    'unlock': function(mine) {
        mine = mine || this;

        mine._locked = FALSE;
        clearInterval(mine._waitid);
    }
});
