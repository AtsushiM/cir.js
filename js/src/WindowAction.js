/* Test: "../../spec/_src/src/DeviceAction/test.js" */
WindowAction = klassExtendBase(function(config) {
    // this._e = config['e'];
    // this._callback = config['callback'];
    this._config = config;

    /* if (config['callback']) { */
        this['attach']();
    /* } */
}, {
    'attach': function() {
        this['detach']();
        this._attachid = this['contract'](win, this._config['e'], this._config['callback']);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
