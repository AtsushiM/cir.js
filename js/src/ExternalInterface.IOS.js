ExternalIOS = classExtend(C['HashQuery'], {
    'init': function() {
        this._ios = {};
    },
    'dispose': function(/* varless */ i) {
        /* var i; */

        for (i in this._ios) {
            this['removeCallback'](i);
        }

        this['_super']();
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        mine._ios[name] = function(/* varless */ hash) {
            /* var hash = mine['getHash'](); */
            hash = mine['getHash']();

            if (hash['mode'] == name) {
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
