AbstractTask = classExtendObserver({
    'init': function(config) {
        this['_super']();

        config = config || NULLOBJ;

        var queue = copyArray(config['queue']) || [],
            len = queue.length,
            i, temp;

        bindOnProp(this, config);

        this['resetQueue'](queue);
        this._done = proxy(this, this._done);
    },
    _fire_start: this_fire_start,
    'start': function() {
        this._fire_start();
        this._paused = FALSE;
        this._exeQueue();
    },
    'restart': function(queue) {
        this['resetQueue'](queue);
        this['start']();
    },
    'stop': function() {
        this._queue = NULL;
        this['fire']('stop');
    },
    'pause': function() {
        this._paused = TRUE;
        this['fire']('pause');
    },
    'resume': function() {
        if (this._paused) {
            this['fire']('resume');
            this._paused = FALSE;
            this._exeQueue();
        }
    },
    'resetQueue': function(queue) {
        if (queue) {
            this._orgqueue = copyArray(queue);
        }

        var _queue = this._queue = copyArray(this._orgqueue),
            i;

        for (i in _queue) {
            if (_queue[i]['resetQueue']) {
                _queue[i]['resetQueue']();
            }
        }

        this['fire']('reset');
    },
    _noticeChange: function() {
        this['fire']('change', this['getQueue']());
    },
    'setQueue': function(queue) {
        this._queue = copyArray(queue);
        this._noticeChange();
    },
    'getQueue': function() {
        return copyArray(this._queue);
    },
    'addTask': function(task, priority) {
        if (
            !isNumber(priority) ||
            priority > this._queue.length
        ) {
            priority = this._queue.length;
        }

        this._queue.splice(priority, 0, task);

        this._noticeChange();
    },
    'removeTask': function(task) {
        var i = 0,
            len = this._queue.length;

        for (; i < len; i++ ) {
            if (this._queue[i] === task) {
                this._queue.splice(i, 1);
                this._noticeChange();

                break;
            }
        }
    },
    /* _exe: abstraceFunction, */
    _exeQueue: function() {
        if (!this._paused) {
            this._exe();
        }
    },
    _asyncAction: function(task) {
        var that = this,
            org_action;

        if (task['one'] && task['start']) {
            task['one']('complete', proxy(that, that._done));
            return proxy(task, task['start']);
        }

        if (hasDeclaredArgument(task)) {
            return proxy(that, task);
        }

        org_action = task;

        return function(done) {
            org_action.call(that);
            done();
        };
    } //,
    /* _done: abstraceFunction */
});
