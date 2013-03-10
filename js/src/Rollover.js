/* Test: "../../spec/_src/src/RollOver/test.js" */
C['Rollover'] = klassExtendBase(function(config) {
    var cls = config['toggleClass'] || EMPTY,
        over = config['over'] || nullFunction,
        out = config['out'] || nullFunction;

    this._els = config['els'];

    this._switchover = function() {
        addClass(this, cls);
        over();
    }
    this._switchout = function() {
        removeClass(this, cls);
        out();
    }
    if (!config['manual']) {
        this['attach']();
    }
}, {
    'disposeInternal': function() {
        this['detach']();
    },
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff) {
        var i = this._els.length;

        for (; i--;) {
            onoff(this._els[i], ev['SWITCHOVER'], this._switchover);
            onoff(this._els[i], ev['SWITCHOUT'], this._switchout);
            onoff(this._els[i], ev['MOUSEOUT'], this._switchout);
        }
    }
});
