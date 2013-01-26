/* Test: "%JASMINE_TEST_PATH%" */
(function() {
var Shake,
    support = false,
    convert,
    mobile = new C['Mobile']();

if (mobile['isMobile']()) {
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

    if (Shake) {
        support = true;
    }
}
mobile = mobile['dispose']();

Global['DeviceShake'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();
        this._shaker = new Shake();
        this._limit = config['limit'];
        this._waittime = config['waittime'];
        this._callback = config['callback'];

        this['bind']();
    },
    'properties': {
        'dispose': function() {
            this['unbind']();
            this._orgdis();
        },
        'bind': function() {
            var mine = this,
                base_e,
                shaked = FALSE,
                diffbeta,
                wraphandle = function(e) {
                    e = convert(e);

                    if (!base_e) {
                        base_e = e;
                    }

                    diffbeta = Math.abs(e['beta'] - base_e['beta']);

                    if (diffbeta > mine._limit) {
                        shaked = TRUE;
                        base_e = NULL;

                        mine._callback(e);

                        setTimeout(function() {
                            shaked = FALSE;
                        }, mine._waittime);
                    }
                };

            mine._shaker['bind'](wraphandle);
        },
        'unbind': function() {
            this._shaker['unbind']();
        }
    }
});

Global['DeviceShake']['support'] = support ? TRUE : FALSE;

}());
