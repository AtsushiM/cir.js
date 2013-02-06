/* Test: "../../spec/_src/src/Route/test.js" */
var RouteName = 'Route';
Global[RouteName] = klassExtendBase(function(config) {
    this._target = config['target'] || EMPTY;
    this._noregex = config['noregex'];
    this._action = config['action'];

    if (!config['manual']) {
        this['start']();
    }
}, {
    'start': function() {
        this['fire'](this._target);
    },
    'fire': function(action) {
        var i;

        if (this._noregex && this._action[action]) {
            return this._action[action](action);
        }

        for (i in this._action) {
            if (action.match(i)) {
                this._action[i](i);
            }
        }
    }
});
