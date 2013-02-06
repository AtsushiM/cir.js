/* Test: "../../spec/_src/src/DeviceAction/test.js" */
Global.DeviceAction = klassExtendBase(function(config) {
    /* this['_super'](); */

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
        if (this._attachid) {
            this['uncontract'](this._attachid);
        }
    }
});
