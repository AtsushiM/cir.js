/* Test: "../../spec/_src/src/Orientation/test.js" */
C['Orientation'] = klassExtendBase(function(config) {
    this._config = config;

    this._contractid = [];

    this._portrait = {
        'portrait': TRUE,
        'landscape': FALSE
    };
    this._landscape = {
        'portrait': FALSE,
        'landscape': TRUE
    };

    this['attach']();
}, {
    'get': function() {
        if (isNumber(win.orientation)) {
            if (Math.abs(win.orientation) !== 90) {
                return this._portrait;
            }

            return this._landscape;
        }

        if (
            win.innerWidth < win.innerHeight
        ) {
            return this._portrait;
        }

        return this._landscape;
    },
    'fire': function() {
        if (
            this['get']()['portrait']
        ) {
            return this._config['portrait']();
        }
        this._config['landscape']();
    },
    'attach': function(vars) {
        var proxyed = proxy(this, this['fire']);
        this._contractid.push(
            this['contract'](win, ev['LOAD'], proxyed),
            this['contract'](win, ev_orientationchange, proxyed),
            this['contract'](win, ev['RESIZE'], proxyed)
        );
    },
    'detach': function() {
        var i = this._contractid.length;

        for (; i--;) {
            this['uncontract'](this._contractid[i]);
        }

        this._contractid = [];
    }
});
C['Orientation']['support'] = 'onorientationchange' in win;
