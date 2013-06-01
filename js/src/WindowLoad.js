/* (function() { */
// var windowload_loaded = FALSE,
//     windowload_winload = function() {
//         windowload_loaded = TRUE;
//         off(win, ev['LOAD'], windowload_winload);
//     };

windowload_winload = function() {
    windowload_loaded = TRUE;
    off(win, ev['LOAD'], windowload_winload);
};

on(win, ev['LOAD'], windowload_winload);

C['WindowLoad'] = classExtendObserver({
    'init': function(config) {
        this['_super']();

        bindOnProp(this, config);

        if (!config['manual']) {
            this['start']();
        }
    },
    _fire_complete: this_fire_complete,
    _fire_start: this_fire_start,
    'start': function(/* varless */that, disposeid) {
        // var that = this,
        //     disposeid;
        that = this;

        that._fire_start();

        if (that._started) {
            return;
        }
        that._started = TRUE;

        if (windowload_loaded) {
            that._fire_complete();
        }
        else {
            disposeid = that._contract(win, ev['LOAD'], function() {
                that._uncontract(disposeid);
                that._fire_complete();
            });
        }
    }
});
/* }()); */
