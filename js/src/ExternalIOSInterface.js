/* Test: "../../spec/_src/src/ExternalIOSInterface/test.js" */
(function() {
'use strict';

var util = Global.utility,
    win = util.win,
    instanse;

Global.ExternalIOSInterface = Global.klass({
    init: function(config) {
        config = config || {};

        if (config.single && instanse) {
            return instanse;
        }

        this.ios = {};
        this.hashCtrl = new Global.HashController();

        if (config.single) {
            instanse = this;
        }
    },
    properties: {
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
            win.addEventListener('hashchange', this.ios[name]);
        },
        removeCallback: function(name) {
            win.removeEventListener('hashchange', this.ios[name]);
            delete this.ios[name];
        }
    }
});
}());
