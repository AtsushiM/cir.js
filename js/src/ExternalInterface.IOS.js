/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global.ExternalInterface.IOS = Global.klass({
    init: function(config) {
        this.ios = {};
    },
    properties: {
        utility: Global.utility,
        _event: new Global.Event(),
        hashCtrl: new Global.HashController(),
        call: function(conf) {
            this.hashCtrl.setHash(conf);
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.ios[name] = function(e) {
                var hash = mine.hashCtrl.getHash();

                if (hash.mode === name) {
                    func(hash.vars);
                    return true;
                }
                return false;
            };
            this.utility.onEvent(
                this.utility.win, this._event.hashchange, this.ios[name]);
        },
        removeCallback: function(name) {
            this.utility.offEvent(
                this.utility.win, this._event.hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
