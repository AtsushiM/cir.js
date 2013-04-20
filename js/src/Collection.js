C['Collection'] = classExtend(C['Model'], {
    _notice: function(eventname, key, val /* varless */, mine) {
        mine = this;

        mine._observer['fire'](eventname, val, key, mine._store['get']());
    },
    'init': function(config) {
        this['_super'](config);
        this._collectid = 0;
    },
    'add': function(val) {
        this._collectid++;
        this['set'](this._collectid, val);

        return this._collectid;
    }
});
