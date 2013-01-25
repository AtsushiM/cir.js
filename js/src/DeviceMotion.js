/* Test: "%JASMINE_TEST_PATH%" */
(function() {
var support = 'ondevicemotion' in win;

if (support) {
    Global['DeviceMotion'] = klass({
        'extend': Base,
        'init': function(config) {
            this['_super']();
        },
        'properties': {
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
}
else {
    Global['DeviceMotion'] = {};
}

Global['DeviceMotion']['support'] = support;
}());
