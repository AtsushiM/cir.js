/* Test: "../../spec/_src/src/WindowLoad/test.js" */
C['WindowLoad'] = klassExtendBase(function(config) {
    if (config) {
        this._onload(config['onload']);
    }
}, {
    _onload: function(func) {
        var mine = this,
            disposeid,
            loaded = function() {
                mine['uncontract'](disposeid);
                func();
            };

        disposeid = mine['contract'](win, ev['LOAD'], loaded);
    }
});
