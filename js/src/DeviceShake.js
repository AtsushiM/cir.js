/* Test: "../../spec/_src/src/DeviceShake/test.js" */
(function() {
var Shake,
    convert;

/* if (Global['mobile']['isMobile']()) { */
    if (Global['DeviceOrientation']['support']) {
        Shake = Global['DeviceOrientation'];
        convert = function(e) {
            return e;
        };
    }
    else if (Global['DeviceMotion']['support']) {
        Shake = Global['DeviceMotion'];
        convert = function(e) {
            return e['rotationRate'];
        };
    }
/* } */

Global['DeviceShake'] = klassExtendBase(function(config) {
    this._shaker = new Shake();
    // this._limit = config['limit'];
    // this._waittime = config['waittime'];
    // this._direction = config['direction'];
    // this._callback = config['callback'];
    this.config = config;

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
            direction = mine.convertName[mine.config['direction']],
            wraphandle = function(e) {
                e = convert(e);

                if (!base_e) {
                    base_e = e;
                }

                if (Math.abs(e[direction] - base_e[direction]) > mine.config['limit']) {
                    shaked = TRUE;
                    base_e = NULL;

                    mine.config['callback'](e);

                    setTimeout(function() {
                        shaked = FALSE;
                    }, mine.config['waittime']);
                }
            };

        mine._shaker['attach'](wraphandle);
    },
    'detach': function() {
        this._shaker['detach']();
    }
});

Global['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
