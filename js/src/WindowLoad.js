C['WindowLoad'] = classExtendBase({
    _onload: function(func /* varless */, mine, disposeid, loaded) {
        // var mine = this,
        //     disposeid,
        //     loaded = function() {
        //         mine['uncontract'](disposeid);
        //         func();
        //     };
        mine = this;

        disposeid = mine['contract'](win, ev['LOAD'], function() {
            mine['uncontract'](disposeid);
            func();
        });
    },
    'init': function(config) {
        if (config) {
            this._onload(config['onload']);
        }
    }
});
