(function() {
var loaded = FALSE,
    winload = function() {
        loaded = TRUE;
        off(win, ev['LOAD'], winload);
    };

on(win, ev['LOAD'], winload);

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
    'start': function() {
        var that = this;

        that._fire_start();

        if (that.started) {
            return;
        }
        that.started = TRUE;

        if (loaded) {
            that._fire_complete();
        }
        else {
            var disposeid = that._contract(win, ev['LOAD'], function() {
                that._uncontract(disposeid);
                that._fire_complete();
            });
        }
    }
});
}());
