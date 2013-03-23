/* Test: "../../spec/_src/src/Route/test.js" */
C['Route'] = classExtendBase({
    'init': function(config) {
        // this._target = config['target'] || EMPTY;
        // this._noregex = config['noregex'];
        // this._action = config['action'];
        this._config = config;

        if (!config['manual']) {
            this['start']();
        }
    },
    'start': function() {
        this['fire'](this._config['target']);
    },
    'fire': function(action /* varless */, mine) {
        mine = this;

        var i,
            config = mine._config,
            config_action = config['action'];

        if (config['noregex'] && config_action[action]) {
            return config_action[action](action);
        }

        for (i in config_action) {
            if (action.match(i)) {
                config_action[i](i);
            }
        }
    }
});
