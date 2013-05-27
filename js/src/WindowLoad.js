(function() {
var loaded = FALSE,
    winload = function() {
        loaded = TRUE;
        off(win, ev['LOAD'], winload);
    };

on(win, ev['LOAD'], winload);

C['WindowLoad'] = classExtend(C['Observer'], {
    'init': function(config) {
        this['_super']();

        bindOnProp(this, config);

        if (!config['manual']) {
            this['start']();
        }
    },
    'start': function() {
        var that = this;

        that['fire']('start');

        if (that.started) {
            return;
        }
        that.started = TRUE;

        if (loaded) {
            that['fire']('complete');
        }
        else {
            var disposeid = that['contract'](win, ev['LOAD'], function() {
                that['uncontract'](disposeid);
                that['fire']('complete');
            });
        }
    }
});
}());
