/* (function() { */
// var deviceshake_Shake,
//     deviceshake_convert;

/* if (C['mobile']['isMobile']()) { */
    if (DeviceOrientation['support']) {
        deviceshake_Shake = DeviceOrientation;
        deviceshake_convert = function(e) {
            return e;
        };
    }
    else if (DeviceMotion['support']) {
        deviceshake_Shake = DeviceMotion;
        deviceshake_convert = function(e) {
            return e['rotationRate'];
        };
    }
/* } */

C['DeviceShake'] = classExtendBase({
    convertName: {
        'x': 'gamma',
        'y': 'beta',
        'z': 'alpha'
    },
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._shaker = new deviceshake_Shake();
        // mine._limit = config['limit'];
        // mine._waittime = config['waittime'];
        // mine._direction = config['direction'];
        // mine._callback = config['callback'];
        mine._config = config;

        /* if (config['callback'] && config['direction']) { */
        mine['attach']();
        /* } */
    },
    'attach': function() {
        var mine = this,
            base_e,
            shaked = FALSE,
            config = mine._config,
            direction = mine.convertName[config['direction']];

        mine._shaker['attach'](wraphandle);

        function wraphandle(e) {
            e = deviceshake_convert(e);

            if (!base_e) {
                base_e = e;
            }

            if (Math.abs(e[direction] - base_e[direction]) > config['limit']) {
                shaked = TRUE;
                base_e = NULL;

                config['callback'](e);

                setTimeout(function() {
                    shaked = FALSE;
                }, config['waittime']);
            }
        }
    },
    'detach': function() {
        this._shaker['detach']();
    }
}, deviceshake_Shake ? TRUE : FALSE);

/* }()); */
