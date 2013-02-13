/* Test: "../../spec/_src/src/Route/test.js" */
C['Route'] = klassExtendBase(function(config) {
    // this._target = config['target'] || EMPTY;
    // this._noregex = config['noregex'];
    // this._action = config['action'];
    this._config = config;

    if (!config['manual']) {
        this['start']();
    }
}, {
    'start': function() {
        this['fire'](this._config['target']);
    },
    'fire': function(action) {
        var i;

        if (this._config['noregex'] && this._config['action'][action]) {
            return this._config['action'][action](action);
        }

        for (i in this._config['action']) {
            if (action.match(i)) {
                this._config['action'][i](i);
            }
        }
    }
});
