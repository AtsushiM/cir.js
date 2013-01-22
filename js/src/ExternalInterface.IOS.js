/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global.ExternalInterface.IOS = klass({
    extend: Global.HashController,
    init: function(config) {
        this.ios = {};
    },
    properties: {
        dispose: function() {
            var i;

            for (i in this.ios) {
                this.removeCallback(i);
            }
            this._orgdis();
        },
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
            on(win, ev_hashchange, mine.ios[name]);
        },
        removeCallback: function(name) {
            off(win, ev_hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
