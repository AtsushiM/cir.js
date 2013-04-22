C['Ollection'] = classExtend(C['Model'], {
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
    },
    'each': function(callback) {
        var i,
            collection = this.get();

        for (i in collection) {
            callback.apply(this, [collection[i], i, collection]);
        }
    },
    'map': function(callback) {
        var i,
            collection = this.get();

        for (i in collection) {
            this.set(i, callback.apply(this, [collection[i], i, collection]));
        }
    }
});
