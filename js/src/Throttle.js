/* Test: "../../spec/_src/src/Throttle/test.js" */
Global['Throttle'] = klass({
    'extend': Base,
    'init': function(config) {
        this.waittime = config['waittime'];
        this.callback = config['callback'];
        // this.locked = FALSE;
        // this.waitid = NULL;
        // this.waitarg = NULL;
    },
    'properties': {
        'dispose': function() {
            this['unlock']();
            this._orgdis();
        },
        'request': function(vars) {
            var mine = this;

            if (mine.locked) {
                mine.waitarg = vars;
                return FALSE;
            }

            mine.callback(vars);
            mine['lock']();
            mine.waitid = setTimeout(function() {
                if (mine.waitarg) {
                    mine.callback(mine.waitarg);
                    mine.waitarg = NULL;
                }

                mine['unlock']();
            }, mine.waittime, mine);
        },
        'lock': function() {
            this.locked = TRUE;
        },
        'unlock': function(mine) {
            mine = mine || this;

            mine.locked = FALSE;
            clearInterval(mine.waitid);
        }
    }
});
