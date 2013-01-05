/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
Global.ExternalInterface.IOS = Global.klass({
    init: function(config) {
        this.ios = {};
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: new Global.Event(),
        _h: new Global.HashController(),
        call: function(conf) {
            this._h.setHash(conf);
        },
        addCallback: function(name, func) {
            var mine = this;
            mine.ios[name] = function(e) {
                var hash = mine._h.getHash();

                if (hash.mode === name) {
                    func(hash.vars);
                    return true;
                }
                return false;
            };
            this._el.on(
                this._u.win, this._ev.hashchange, this.ios[name]);
        },
        removeCallback: function(name) {
            this._el.off(
                this._u.win, this._ev.hashchange, this.ios[name]);
            delete this.ios[name];
        }
    }
});
