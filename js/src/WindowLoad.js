/* (function() { */
// var windowload_loaded = FALSE,
//     windowload_winload = function() {
//         windowload_loaded = TRUE;
//         off(win, ev['LOAD'], windowload_winload);
//     };

windowload_winload = function() {
    windowload_loaded = TRUE;
    off(win, 'load', windowload_winload);
};

on(win, 'load', windowload_winload);

C['WindowLoad'] = classExtendObserver({
    'init': function(config) {
        this['_super']();

        bindOnProp(this, config);

        ifManualStart(this, config);
    },
    'start': function(/* varless */that, disposeid) {
        // var that = this,
        //     disposeid;
        that = this;

        fire_start(that);

        if (!that._started) {
            that._started = TRUE;

            if (windowload_loaded) {
                fire_complete(that);
            }
            else {
                disposeid = that._contract(win, 'load', function() {
                    that._uncontract(disposeid);
                    fire_complete(that);
                });
            }
        }
    }
});
/* }()); */
