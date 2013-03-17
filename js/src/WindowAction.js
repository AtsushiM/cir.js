/* Test: "../../spec/_src/src/DeviceAction/test.js" */
WindowAction = klassExtendBase(function(config) {
    // this._e = config['e'];
    // this._callback = config['callback'];
    this._config = config;

    /* if (config['callback']) { */
        this['attach']();
    /* } */
}, {
    'attach': function(/* varless */ mine) {
        mine = this;

        mine['detach']();
        mine._attachid = mine['contract'](win, mine._config['e'], mine._config['callback']);
    },
    'detach': function() {
        this['uncontract'](this._attachid);
    }
});
