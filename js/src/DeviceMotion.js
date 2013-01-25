/* Test: "%JASMINE_TEST_PATH%" */
Global['DeviceMotion'] = klass({
    'extend': Base,
    'init': function(config) {
        if (!Global['DeviceMotion']['support']) {
            return false;
        }
    },
    'propeties': {
        'bind': function(func) {
            this['unbind']();
            this._bindid = this['contract'](win, 'devicemotion', func);
        },
        'unbind': function() {
            if (this._bindid) {
                this['uncontract'](this._bindid);
            }
        }
    }
});
Global['DeviceMotion']['support'] = 'devicemotion' in win;
