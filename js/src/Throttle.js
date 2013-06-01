C['Throttle'] = classExtendBase({
    'init': function(config) {
        this._waittime = config['waittime'];
        this._callback = config['callback'];
        // this._locked = FALSE;
        // this._waitid = NULL;
        // this._args = NULL;
    },
    'dispose': function() {
        this['unlock']();
        this['_super']();
    },
    'request': function(vars /* varless */, that) {
        /* var that = this; */
        that = this;

        if (that._locked) {
            that._args = vars;
            return;
        }

        that._callback(vars);
        that['lock']();
        that._waitid = setTimeout(function() {
            if (that._args) {
                that._callback(that._args);
                that._args = NULL;
            }

            that['unlock']();
        }, that._waittime, that);
    },
    'lock': function() {
        this._locked = TRUE;
    },
    'unlock': function(that) {
        that = that || this;

        that._locked = FALSE;
        clearTimeout(that._waitid);
    }
});
