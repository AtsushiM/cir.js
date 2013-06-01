C['Orientation'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        that._config = config;

        that._contractid = [];

        that._portrait = {
            'portrait': TRUE,
            'landscape': FALSE
        };
        that._landscape = {
            'portrait': FALSE,
            'landscape': TRUE
        };

        that['attach']();
    },
    'get': function(/* varless */ that) {
        that = this;

        if (isNumber(win.orientation)) {
            if (Math.abs(win.orientation) != 90) {
                return that._portrait;
            }

            return that._landscape;
        }

        if (
            win.innerWidth < win.innerHeight
        ) {
            return that._portrait;
        }

        return that._landscape;
    },
    'fire': function(/* varless */ that) {
        that = this;

        if (
            that['get']()['portrait']
        ) {
            return that._config['portrait']();
        }
        that._config['landscape']();
    },
    'attach': function(vars /* varless */, that, proxyed) {
        that = this;

        /* var proxyed = proxy(that, that['fire']); */
        proxyed = proxy(that, that['fire']);
        that._contractid.push(
            that._contract(win, ev['LOAD'], proxyed),
            that._contract(win, ev_orientationchange, proxyed),
            that._contract(win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function(/* varless */ that, i) {
        that = this;

        /* var i = that._contractid.length; */
        i = that._contractid.length;

        for (; i--;) {
            that._uncontract(that._contractid[i]);
        }

        that._contractid = [];
    }
}, 'onorientationchange' in win);
