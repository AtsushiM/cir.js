/* Test: "../../spec/_src/src/Route/test.js" */
var RouteName = 'Route';
Global[RouteName] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super'](config);

        this._target = config['target'] || '';
        this._noregex = config['noregex'];
        this._action = config['action'];

        if (!config['manual']) {
            this['start']();
        }

        return this.singleAct(RouteName);
    },
    'properties': {
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
    }
});
