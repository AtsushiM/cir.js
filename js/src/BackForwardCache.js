// BackForwardCache
C['BackForwardCache'] = classExtendBase({
    'kill': function(/* varless */ that) {
        that = this;

        if (!that._killid) {
            that._killid = that._contract(win, 'unload', preventDefault);
        }
    },
    'revival': function(/* varless */ that) {
        that = this;

        if (that._killid) {
            that._uncontract(that._killid);
            delete that._killid;
        }
    }
});
