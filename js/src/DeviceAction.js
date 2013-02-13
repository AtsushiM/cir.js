/* Test: "../../spec/_src/src/DeviceAction/test.js" */
DeviceAction = klassExtendBase(function(config) {
    // this._e = config['e'];
    // this._callback = config['callback'];
    this.config = config;

    /* if (config['callback']) { */
        this['attach']();
    /* } */
}, {
    'attach': function() {
        this['detach']();
        this._attachid = this['contract'](win, this.config['e'], this.config['callback']);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
