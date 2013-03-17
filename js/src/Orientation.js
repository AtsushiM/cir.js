/* Test: "../../spec/_src/src/Orientation/test.js" */
C['Orientation'] = klassExtendBase(function(config /* varless */, mine) {
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
}, {
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
            mine['contract'](win, ev['LOAD'], proxyed),
            mine['contract'](win, ev_orientationchange, proxyed),
            mine['contract'](win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function(/* varless */ mine) {
        mine = this;

        var i = mine._contractid.length;

        for (; i--;) {
            mine['uncontract'](mine._contractid[i]);
        }

        mine._contractid = [];
    }
}, 'onorientationchange' in win);
