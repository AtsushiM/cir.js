C['Rollover'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        var cls = config['toggleClass'] || EMPTY,
            over = config['over'] || nullFunction,
            out = config['out'] || nullFunction;

        that._els = config['els'];

        that._switchover = function() {
            addClass(this, cls);
            over();
        }
        that._switchout = function() {
            removeClass(this, cls);
            out();
        }
        ifManualStart(that, config, 'attach');
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
    _e: function(onoff /* varless */, that, i) {
        that = this;

        /* var i = that._els.length; */
        i = that._els.length;

        for (; i--;) {
            onoff(that._els[i], ev['SWITCHOVER'], that._switchover);
            onoff(that._els[i], ev['SWITCHOUT'], that._switchout);
            onoff(that._els[i], ev['MOUSEOUT'], that._switchout);
        }
    }
});
