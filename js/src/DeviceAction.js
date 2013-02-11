/* Test: "../../spec/_src/src/DeviceAction/test.js" */
DeviceAction = klassExtendBase(function(config) {
    this._e = config['e'];

    if (config['callback']) {
        this['attach'](config['callback']);
    }
}, {
    'attach': function(func) {
        this['detach']();
        this._attachid = this['contract'](win, this._e, func);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
