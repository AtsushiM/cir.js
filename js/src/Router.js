C['Router'] = classExtendBase({
    'init': function(config/* varless */, that, temp) {
        // var that = this,
        //     temp;
        that = this;

        that._config = config;

        if (config['hashchange']) {
            on(win, ev_hashchange, function() {
                that['fire'](location.hash);
            });

            if (!config['target']) {
                config['target'] = location.hash;
            }
        }

        ifManualStart(that, config);
    },
    'start': function() {
        this['fire'](this._config['target']);
    },
    'fire': function(action /* varless */, that) {
        that = this;

        var i,
            config = that._config,
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
