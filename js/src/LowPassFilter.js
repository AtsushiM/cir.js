C['LowPassFilter'] = classExtend(C['Calc'], {
    'init': function(config) {
        config = config || NULLOBJ;

        this['_super'](config);

        this['setBefore'](config['before'] || 0);
        this['setRate'](config['rate']);
    },
    'setBefore': function(before) {
        this._before = before;
    },
    'getBefore': function() {
        return this._before;
    },
    'setRate': function(rate) {
        rate = rate || 0.1;

        if (rate >= 1) {
            throw new Error('rate < 1.');
        }

        this._rate_now = rate;
        this._rate_before = this['subtraction'](1, rate);
    },
    'getRate': function() {
        return this._rate_now;
    },
    'forecast': function(num/* varless */, that) {
        that = this;

        that._before = that._before * that._rate_before + num * that._rate_now;
        return that._before;
    }
});
