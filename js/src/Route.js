/* Test: "../../spec/_src/src/Route/test.js" */
Global.Route = klass({
    init: function(config) {
        // singleton
        if (config.single && Global.Route.instance) {
            return Global.Route.instance;
        }

        this.target = config.target || '';
        this.noregex = config.noregex;
        this.action = config.action;

        if (!config.manual) {
            this.start();
        }

        if (config.single) {
            Global.Route.instance = this;
        }
    },
    properties: {
        start: function() {
            this.fire(this.target);
        },
        fire: function(action) {
            var i;

            if (this.noregex && this.action[action]) {
                return this.action[action]();
            }

            for (i in this.action) {
                if (action.match(i)) {
                    this.action[i]();
                }
            }
        }
    }
});
