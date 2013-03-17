/* Test: "../../spec/_src/src/WindowLoad/test.js" */
C['WindowLoad'] = klassExtendBase(function(config) {
    if (config) {
        this._onload(config['onload']);
    }
}, {
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
    }
});
