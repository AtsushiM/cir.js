/* Test: "%JASMINE_TEST_PATH%" */
Global.DeviceAction = klassExtendBase(function(config) {
    this['_super']();

    this._e = config['e'];

    if (config['callback']) {
        this['bind'](config['callback']);
    }
}, {
    'bind': function(func) {
        this['unbind']();
        this._bindid = this['contract'](win, this._e, func);
    },
    'unbind': function() {
        if (this._bindid) {
            this['uncontract'](this._bindid);
        }
    }
});
