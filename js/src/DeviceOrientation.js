/* Test: "%JASMINE_TEST_PATH%" */
(function() {
var support = 'ondeviceorientation' in win;

if (support) {
    Global['DeviceOrientation'] = klass({
        'extend': Base,
        'init': function(config) {
            this['_super']();
        },
        'properties': {
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
}
else {
    Global['DeviceOrientation'] = {};
}

Global['DeviceOrientation']['support'] = support;
}());
