C['Surrogate'] = classExtendBase({
    'init': function(config) {
        this._delay = config['delay'];
        this._callback = config['callback'];
        // this._args = NULL;
        // this._waitid = NULL;
    },
    'dispose': function() {
        this['clear']();
        this['_super']();
    },
    'request': function(arg /* varless */, that) {
        that = this;

        that._args = arg;
        that['clear']();
        that._waitid = setTimeout(that['flush'], that._delay, that);
    },
    'flush': function(that) {
        that = that || this;

        that._callback(that._args);
    },
    'clear': function() {
        clearTimeout(this._waitid);
    }
});
