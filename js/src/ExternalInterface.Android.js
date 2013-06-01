ExternalAndroid = classExtend(HashQuery, {
    'init': function(config) {
        // this._android = config['android'];
        // this._externalObj = config['externalObj'];
        this._config = config;
    },
    'call': function(conf) {
        this._config['android'][conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func /* varless */, that) {
        /* var that = this; */
        that = this;

        that._config['externalObj'][name] = function(vars) {
            func(that['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this._config['externalObj'][name];
    }
});
