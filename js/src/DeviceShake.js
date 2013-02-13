/* Test: "../../spec/_src/src/DeviceShake/test.js" */
(function() {
var Shake,
    convert;

/* if (C['mobile']['isMobile']()) { */
    if (C['DeviceOrientation']['support']) {
        Shake = C['DeviceOrientation'];
        convert = function(e) {
            return e;
        };
    }
    else if (C['DeviceMotion']['support']) {
        Shake = C['DeviceMotion'];
        convert = function(e) {
            return e['rotationRate'];
        };
    }
/* } */

C['DeviceShake'] = klassExtendBase(function(config) {
    this._shaker = new Shake();
    // this._limit = config['limit'];
    // this._waittime = config['waittime'];
    // this._direction = config['direction'];
    // this._callback = config['callback'];
    this._config = config;

    /* if (config['callback'] && config['direction']) { */
        this['attach']();
    /* } */
}, {
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'attach': function() {
        var mine = this,
            base_e,
            shaked = FALSE,
            direction = mine.convertName[mine._config['direction']],
            wraphandle = function(e) {
                e = convert(e);

                if (!base_e) {
                    base_e = e;
                }

                if (Math.abs(e[direction] - base_e[direction]) > mine._config['limit']) {
                    shaked = TRUE;
                    base_e = NULL;

                    mine._config['callback'](e);

                    setTimeout(function() {
                        shaked = FALSE;
                    }, mine._config['waittime']);
                }
            };

        mine._shaker['attach'](wraphandle);
    },
    'detach': function() {
        this._shaker['detach']();
    }
});

C['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
