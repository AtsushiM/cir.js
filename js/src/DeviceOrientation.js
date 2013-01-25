/* Test: "%JASMINE_TEST_PATH%" */
Global['DeviceOrientation'] = klass({
    'extend': Base,
    'init': function(config) {
        if (!Global['DeviceOrientation']['support']) {
            return false;
        }
    },
    'propeties': {
        'bind': function(func) {
            this['unbind']();
            this._bindid = this['contract'](win, 'deviceorientation', func);
        },
        'unbind': function() {
            if (this._bindid) {
                this['uncontract'](this._bindid);
            }
        }
    }
});
Global['DeviceOrientation']['support'] = 'deviceorientation' in win;
