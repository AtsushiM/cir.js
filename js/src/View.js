/* Test: "../../spec/_src/src/View/test.js" */
C['View'] = klassExtendBase(function(config) {
    var i;

    if (!config) {
        config = owner(this, this, {});
    }
    else {
        config = owner(this, config);
    }

    this['el'] = C['$'](config['el'] || this['el'] || create('div'));

    this['attach']();
    if (config['init']) {
        this['init']();
    }
}, {
    'disposeInternal': function() {
        this._e('off');
    },
    _e: function(methodname) {
        var i,
            j,
            $el,
            events = this['events'];

        for (i in events) {
            if (i == 'me') {
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
