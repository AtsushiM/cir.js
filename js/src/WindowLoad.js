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
                    mine.offdispose(disposeid);
                    func();
                };

            disposeid = this.ondispose(win, ev['load'], loaded);
        }
    }
});
