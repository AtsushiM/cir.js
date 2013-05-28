C['Orientation'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._config = config;

        mine._contractid = [];

        mine._portrait = {
            'portrait': TRUE,
            'landscape': FALSE
        };
        mine._landscape = {
            'portrait': FALSE,
            'landscape': TRUE
        };

        mine['attach']();
    },
    'get': function(/* varless */ mine) {
        mine = this;

        if (isNumber(win.orientation)) {
            if (Math.abs(win.orientation) != 90) {
                return mine._portrait;
            }

            return mine._landscape;
        }

        if (
            win.innerWidth < win.innerHeight
        ) {
            return mine._portrait;
        }

        return mine._landscape;
    },
    'fire': function(/* varless */ mine) {
        mine = this;

        if (
            mine['get']()['portrait']
        ) {
            return mine._config['portrait']();
        }
        mine._config['landscape']();
    },
    'attach': function(vars /* varless */, mine) {
        mine = this;

        var proxyed = proxy(mine, mine['fire']);
        mine._contractid.push(
            mine._contract(win, ev['LOAD'], proxyed),
            mine._contract(win, ev_orientationchange, proxyed),
            mine._contract(win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function(/* varless */ mine) {
        mine = this;

        var i = mine._contractid.length;

        for (; i--;) {
            mine._uncontract(mine._contractid[i]);
        }

        mine._contractid = [];
    }
}, 'onorientationchange' in win);
