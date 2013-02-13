/* Test: "../../spec/_src/src/ExternalInterface.IOS/test.js" */
ExternalIOS = klassExtend(C['HashQuery'], function() {
    this._ios = {};
}, {
    'disposeInternal': function() {
        var i;

        for (i in this._ios) {
            this['removeCallback'](i);
        }
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func) {
        var mine = this;
        mine._ios[name] = function(e) {
            var hash = mine['getHash']();

            if (hash['mode'] === name) {
                func(hash['vars']);
            }
        };
        on(win, ev_hashchange, mine._ios[name]);
    },
    'removeCallback': function(name) {
        off(win, ev_hashchange, this._ios[name]);
        delete this._ios[name];
    }
});
