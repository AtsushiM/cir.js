WindowAction = classExtendBase({
    'init': function(config) {
        // this._e = config['e'];
        // this._callback = config['callback'];
        this._config = config;

        /* if (config['callback']) { */
        this['attach']();
        /* } */
    },
    'attach': function(/* varless */ mine) {
        mine = this;

        mine['detach']();
        mine._attachid = mine._contract(win, mine._config['e'], mine._config['callback']);
    },
    'detach': function() {
        this._uncontract(this._attachid);
    }
});
