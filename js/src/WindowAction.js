WindowAction = classExtendBase({
    'init': function(config) {
        // this._e = config['e'];
        // this._callback = config['callback'];
        this._config = config;

        /* if (config['callback']) { */
        this['attach']();
        /* } */
    },
    'attach': function(/* varless */ that) {
        that = this;

        that['detach']();
        that._attachid = that._contract(win, that._config['e'], that._config['callback']);
    },
    'detach': function() {
        this._uncontract(this._attachid);
    }
});
