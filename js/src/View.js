/* Test: "../../spec/_src/src/View/test.js" */
Global['View'] = klassExtendBase(function(config) {
    var i;

    if (!config) {
        config = {};

        for (i in this.__proto__) {
            if (
                this.__proto__.hasOwnProperty(i) &&
                i.indexOf('_') !== 0 &&
                isFunction(this.__proto__[i])
            ) {
                config[i] = this.__proto__[i];
            }
        }
    }

    for (i in config) {
        if (isFunction(config[i])) {
            config[i] = bind(this, config[i]);
        }
    }

    override(this, config);

    this['el'] = Global['$'](config['el'] || this['el'] || create('div'));

    this['attach']();
    if (config['init']) {
        this['init']();
    }
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    _e: function(methodname) {
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

            for (j in events[i]) {
                $el[methodname](j, this[events[i][j]]);
            }
        }
    },
    'attach': function() {
        this._e('on');
    },
    'detach': function() {
        this._e('off');
    }
});
