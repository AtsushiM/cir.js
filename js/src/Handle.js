C['Handle'] = classExtendBase({
    'init': function(config) {
        this._config = config;
        this['attach']();
    },
    'dispose': function() {
        this['detach']();
        this['_super']();
    },
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff) {
        var i,
            config = this._config,
            events = config['events'];

        for (i in events) {
            onoff(
                config['el'],
                i,
                events[i]
            );
        }
    }
});
