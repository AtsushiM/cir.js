Progress = C['Progress'] = classExtendBase({
    _success: 0,
    _miss: 0,
    _progress: 0,
    _check: function(vars /* varless */, that, state) {
        // var that = this,
        //     state = NULL;
        that = this;
        /* state = NULL; */

        if (isDefined(vars)) {
            that._args.push(vars);
        }

        that._progress = that._success / that._waits;
        if (that._progress > 1) {
            that._progress = 1;
        }
        that._onprogress(that._progress);

        if (that._miss) {
            state = new Error('miss');
        }

        if (that._success == that._waits || that._miss) {
            that._oncomplete(state, that._args);
            that._oncomplete =
            that._onprogress = nullFunction;
        }
    },
    'init': function(config /* varless */, that, waits) {
        // var that = this,
        //     waits = config['waits'];
        that = this;
        waits = config['waits'];

        if (isArray(waits)) {
            waits = waits.length;
        }

        that._waits = waits;
        that._oncomplete = config['oncomplete'];
        that._onprogress = config['onprogress'] || nullFunction;

        that._args = [];
    },
    'getProgress': function() {
        return this._progress;
    },
    'pass': function(vars) {
        this._success++;

        this._check(vars);
    },
    'miss': function(vars) {
        this._miss++;

        this._check(vars);
    },
    'exit': function(vars /* varless */, that) {
        that = this;

        that._success = that._waits;

        that._check(vars);
    }
});
