/* Test: "%JASMINE_TEST_PATH%" */
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

Global['DeviceShake'] = klass({
    'extend': Base,
    'init': function(config) {
        var bindprop;

        this['_super']();
        this._shaker = new Shake();
        this._limit = config['limit'];
        this._waittime = config['waittime'];
        /* this._callback = config['callback']; */

        if (config['callback'] && config['direction']) {
            switch (config['direction']) {
                case 'x':
                    bindprop = 'gamma';
                    break;
                case 'y':
                    bindprop = 'beta';
                    break;
                case 'z':
                    bindprop = 'alpha';
                    break;
            }

            this['bind'](bindprop, config['callback']);
        }
    },
    'properties': {
        'dispose': function() {
            this['unbind']();
            this._orgdis();
        },
        'bind': function(propname, callback) {
            var mine = this,
                base_e,
                shaked = FALSE,
                diffbeta,
                wraphandle = function(e) {
                    e = convert(e);

                    if (!base_e) {
                        base_e = e;
                    }

                    diffbeta = Math.abs(e[propname] - base_e[propname]);

                    if (diffbeta > mine._limit) {
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
    }
});

Global['DeviceShake']['support'] = Shake ? TRUE : FALSE;

}());
