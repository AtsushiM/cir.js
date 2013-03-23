/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
ExternalAndroid = classExtend(C['HashQuery'], {
    'init': function(config) {
        // this._android = config['android'];
        // this._externalObj = config['externalObj'];
        this._config = config;
    },
    'call': function(conf) {
        this._config['android'][conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        mine._config['externalObj'][name] = function(vars) {
            func(mine['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this._config['externalObj'][name];
    }
});
