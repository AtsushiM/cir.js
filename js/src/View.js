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
    'dispose': function() {
        this['detach']();
        this._orgdis();
    },
    'attach': function() {
        var i,
            j,
            $el,
            events = this['events'];

        for (i in events) {
            if (i === 'mine') {
                $el = this['el'];
            }
            else {
                $el = this['el'].find(i);
            }

            for (j in events[i]) {
                $el['on'](j, this[events[i][j]]);
            }
        }
    },
    'detach': function() {
        var i,
            j,
            $el,
            events = this['events'];

        for (i in events) {
            if (i === 'mine') {
                $el = this['el'];
            }
            else {
                $el = this['el'].find(i);
            }

            for (j in events[i]) {
                $el['off'](j, this[events[i][j]]);
            }
        }
    }
});
