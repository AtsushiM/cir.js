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
            on(win, ev.hashchange, this.ios[name]);
        },
        removeCallback: function(name) {
            off(win, ev.hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
