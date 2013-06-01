ExternalIOS = classExtend(HashQuery, {
    'init': function() {
        this._ios = {};
    },
    'dispose': function(/* varless */ that, i) {
        that = this;
        /* var i; */

        for (i in that._ios) {
            that['removeCallback'](i);
        }

        that['_super']();
    },
    'call': function(conf) {
        this['setHash'](conf);
    },
    'addCallback': function(name, func /* varless */, that) {
        /* var that = this; */
        that = this;

        that._ios[name] = function(/* varless */ hash) {
            /* var hash = that['getHash'](); */
            hash = that['getHash']();

            if (hash['mode'] == name) {
                func(hash['vars']);
            }
        };
        on(win, ev_hashchange, that._ios[name]);
    },
    'removeCallback': function(name) {
        off(win, ev_hashchange, this._ios[name]);
        delete this._ios[name];
    }
});
