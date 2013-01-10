/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global.ExternalInterface.IOS = Global.klass({
    init: function(config) {
        this.ios = {};
    },
    extend: Global.HashController,
    properties: {
        call: function(conf) {
            this.setHash(conf);
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.ios[name] = function(e) {
                var hash = mine.getHash();

                if (hash.mode === name) {
                    func(hash.vars);
                    return true;
                }
                return false;
            };
            Global.element.on(
                Global.utility.win, Global.event.hashchange, this.ios[name]);
        },
        removeCallback: function(name) {
            Global.element.off(
                Global.utility.win, Global.event.hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
