/* Test: "../../spec/_src/src/WindowLoad/test.js" */
Global['WindowLoad'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        if (config && config['onload']) {
            this.onload(config['onload']);
        }
    },
    'properties': {
        onload: function(func) {
            var mine = this,
                disposeid,
                loaded = function() {
                    mine['uncontract'](disposeid);
                    func();
                };

            disposeid = this['contract'](win, ev['load'], loaded);
        }
    }
});
