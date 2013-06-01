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
    'init': function(config /* varless */, that) {
        that = this;

        that._shaker = new deviceshake_Shake();
        // that._limit = config['limit'];
        // that._waittime = config['waittime'];
        // that._direction = config['direction'];
        // that._callback = config['callback'];
        that._config = config;

        /* if (config['callback'] && config['direction']) { */
        that['attach']();
        /* } */
    },
    'attach': function(/* varless */that, base_e) {
        that = this;

        var shaked = FALSE,
            config = that._config,
            direction = that.convertName[config['direction']];

        that._shaker['attach'](wraphandle);

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
