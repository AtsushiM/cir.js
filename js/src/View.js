C['View'] = classExtendBase({
    'init': function(config /* varless */, that, i) {
        that = this;

        /* var i; */

        config = config ? owner(that, config) : owner(that, that, {});

        that['el'] = C['$'](config['el'] || that['el'] || create('div'));

        that['attach']();
        if (config['init']) {
            that['init']();
        }
    },
    'dispose': function() {
        this['detach']();
        this['_super']();
    },
    _e: function(methodname /* varless */, that, i, j, $el, events) {
        that = this;

        // var i,
        //     j,
        //     $el,
            events = that['events'];

        for (i in events) {
            if (i == '&') {
                $el = that['el'];
            }
            else {
                $el = that['el'].find(i);
            }

            for (j in events[i]) {
                $el[methodname](j, that[events[i][j]]);
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
