/* Test: "../../spec/_src/src/View/test.js" */
Global['View'] = klassExtendBase(function(config) {
    var i;

    for (i in config) {
        if (isFunction(config[i])) {
            config[i] = bind(this, config[i]);
        }
    }

    override(this, config);

    this['el'] = Global['$'](config['el'] || create('div'));

    this['attach']();
    if (config['init']) {
        this['init']();
    }
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    _e: function(flg) {
        var i,
            j,
            $el,
            events = this['events'];

        for (i in events) {
            if (i === 'me') {
                $el = this['el'];
            }
            else {
                $el = this['el'].find(i);
            }

            if (flg) {
                for (j in events[i]) {
                    $el['on'](j, this[events[i][j]]);
                }
            }
            else {
                for (j in events[i]) {
                    $el['off'](j, this[events[i][j]]);
                }
            }
        }
    },
    'attach': function() {
        this._e(TRUE);
    },
    'detach': function() {
        this._e(FALSE);
    }
});
