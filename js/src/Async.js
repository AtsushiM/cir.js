/* Test: "../../spec/_src/src/Async/test.js" */
Async = C['Async'] = klassExtendBase(function(config /* varless */, mine, waits) {
    // var mine = this,
    //     waits = config['waits'];
    mine = this;
    waits = config['waits'];

    if (isArray(waits)) {
        waits = waits.length;
    }

    mine._waits = waits;
    mine._callback = config['callback'];
    mine._onprogress = config['onprogress'] || nullFunction;

    mine._args = [];
}, {
    _success: 0,
    _miss: 0,
    _progress: 0,
    _check: function(vars /* varless */, mine, state) {
        // var mine = this,
        //     state = NULL;
        mine = this;
        /* state = NULL; */

        if (isDefined(vars)) {
            mine._args.push(vars);
        }

        mine._progress = mine._success / mine._waits;
        if (mine._progress > 1) {
            mine._progress = 1;
        }
        mine._onprogress(mine._progress);

        if (mine._miss) {
            state = new Error('miss');
        }

        if (mine._success == mine._waits || mine._miss) {
            mine._callback(state, mine._args);
            mine._callback =
            mine._onprogress = nullFunction;
        }
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
    'exit': function(vars /* varless */, mine) {
        mine = this;

        mine._success = mine._waits;

        mine._check(vars);
    }
});
