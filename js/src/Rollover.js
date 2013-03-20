/* Test: "../../spec/_src/src/RollOver/test.js" */
C['Rollover'] = klassExtendBase(function(config /* varless */, mine) {
    mine = this;

    var cls = config['toggleClass'] || EMPTY,
        over = config['over'] || nullFunction,
        out = config['out'] || nullFunction;

    mine._els = config['els'];

    mine._switchover = function() {
        addClass(mine, cls);
        over();
    }
    mine._switchout = function() {
        removeClass(mine, cls);
        out();
    }
    if (!config['manual']) {
        mine['attach']();
    }
}, {
    'disposeInternal': this_detach,
    'attach': function() {
        this._e(on);
    },
    'detach': function() {
        this._e(off);
    },
    _e: function(onoff /* varless */, mine, i) {
        mine = this;

        /* var i = mine._els.length; */
        i = mine._els.length;

        for (; i--;) {
            onoff(mine._els[i], ev['SWITCHOVER'], mine._switchover);
            onoff(mine._els[i], ev['SWITCHOUT'], mine._switchout);
            onoff(mine._els[i], ev['MOUSEOUT'], mine._switchout);
        }
    }
});
