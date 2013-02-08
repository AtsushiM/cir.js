/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global['WindowLoad'] = klassExtendBase(function(config) {
    if (config) {
        this.onload(config['onload']);
    }
}, {
    onload: function(func) {
        var disposeid,
            loaded = bind(this, function() {
                this['uncontract'](disposeid);
                func();
            });

        disposeid = this['contract'](win, ev['LOAD'], loaded);
    }
});
