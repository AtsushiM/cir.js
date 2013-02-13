/* Test: "../../spec/_src/src/Route/test.js" */
Global['Route'] = klassExtendBase(function(config) {
    // this._target = config['target'] || EMPTY;
    // this._noregex = config['noregex'];
    // this._action = config['action'];
    this.config = config;

    if (!config['manual']) {
        this['start']();
    }
}, {
    'start': function() {
        this['fire'](this.config['target']);
    },
    'fire': function(action) {
        var i;

        if (this.config['noregex'] && this.config['action'][action]) {
            return this.config['action'][action](action);
        }

        for (i in this.config['action']) {
            if (action.match(i)) {
                this.config['action'][i](i);
            }
        }
    }
});
