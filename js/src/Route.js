/* Test: "../../spec/_src/src/Route/test.js" */
Global.Route = Global.klass({
    init: function(config) {
        this.target = config.target || '';
        this.action = config.action;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        start: function() {
            this.fire(this.target);
        },
        fire: function(action) {
            var i;

            for (i in this.action) {
                if (action.match(i)) {
                    this.action[i]();
                }
            }
        }
    }
});
