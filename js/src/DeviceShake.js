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
    var bindprop;

    this['_super']();
    this._shaker = new Shake();
    this._limit = config['limit'];
    this._waittime = config['waittime'];
    /* this._callback = config['callback']; */

    if (config['callback'] && config['direction']) {
        this['bind'](config['direction'], config['callback']);
    }
}, {
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'dispose': function() {
        this._shaker['dispose']();
        this._orgdis();
    },
    'bind': function(direction, callback) {
        direction = this.convertName[direction];

        var mine = this,
            base_e,
            shaked = FALSE,
            wraphandle = function(e) {
                e = convert(e);

                if (!base_e) {
                    base_e = e;
                }

                if (Math.abs(e[direction] - base_e[direction]) > mine._limit) {
                    shaked = TRUE;
                    base_e = NULL;

                    callback(e);

                    setTimeout(function() {
                        shaked = FALSE;
                    }, mine._waittime);
                }
            };

        return mine._shaker['bind'](wraphandle);
    },
    'unbind': function() {
        this._shaker['unbind']();
    }
});

Global['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
