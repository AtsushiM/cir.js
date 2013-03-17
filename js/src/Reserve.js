/* Test: "%JASMINE_TEST_PATH%" */
C['Reserve'] = klassExtendBase(function(waits, callback, tag) {
    this._missable = 0;
    this._waits = waits;
    this._state = 'progress';
    this._pass = 0;
    this._miss = 0;
    this._args = [];
    this._tag = tag || EMPTY;
    this._fn = callback;

    if (tag) {
        this._progress[tag] = this;
    }

    this._updateState();
}, {
    _progress: {},
    _updateState: function() {
        if (this._state === 'progress') {
            this._state =
                this._miss > this._missable ? 'fail'
                : this._pass + this._miss >= this._waits ? 'done'
                : this._state;
        }
        if (this._state === 'progress' || !this._fn) {
            return;
        }

        if (this._state === 'done') {
            this._fn.pass ? this._fn.pass()
                : this._fn(NULL, this._args);
        }
        else {
            this._fn.miss ? this._fn.miss()
                : this._fn(new Error(this._state), this._args);
        }

        this._fn = NULL;
        this._args = [];

        if (this._tag) {
            this._progress[this._tag] = NULL;
        }
    },
    _increment: function(pass, value, key) {
        pass ? this._pass++ : this._miss++;

        if (value !== UNDEFINED) {
            this._args.push(value);

            if (key) {
                this._args[key] = value;
            }
        }

        this._updateState();
    },
    'missable': function(count) {
        this._missable += 0;

        return this;
    },
    'pass': function(value, key) {
        this._increment(true, value, key);

        return this;
    },
    'miss': function(value, key) {
        this._increment(false, value, key);

        return this;
    },
    'exit': function() {
        if (this._state === 'progress') {
            this._state = 'exit';
        }

        this._updateState();
    }
});
