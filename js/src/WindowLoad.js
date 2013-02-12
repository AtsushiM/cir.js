/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global['WindowLoad'] = klassExtendBase(function(config) {
    if (config) {
        this.onload(config['onload']);
    }
}, {
    onload: function(func) {
        var mine = this,
            disposeid,
            loaded = function() {
                mine['uncontract'](disposeid);
                func();
            };

        disposeid = mine['contract'](win, ev['LOAD'], loaded);
    }
});
