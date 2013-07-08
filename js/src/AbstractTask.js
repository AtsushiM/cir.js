AbstractTask = classExtendObserver({
    'init': function(config/* varless */, that, queue) {
        that = this;

        that['_super']();

        config = config || NULLOBJ;

        /* var queue = copyArray(config['queue']) || []; */
        queue = copyArray(config['queue']) || [];

        bindOnProp(that, config);

        that['resetQueue'](queue);
        that._done = proxy(that, that._done);
    },
    'start': function(/* varless */that) {
        that = this;

        fire_start(that);
        that._paused = FALSE;
        that._exeQueue();
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
    'resume': function(/* varles */that) {
        that = this;

        if (that._paused) {
            that['fire']('resume');
            that._paused = FALSE;
            that._exeQueue();
        }
    },
    'resetQueue': function(queue/* varless */, that, i) {
        that = this;

        if (queue) {
            that._orgqueue = copyArray(queue);
        }

        var _queue = that._queue = copyArray(that._orgqueue);

        for (i in _queue) {
            if (_queue[i]['resetQueue']) {
                _queue[i]['resetQueue']();
            }
        }

        that['fire']('reset');
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
    'addTask': function(task, priority/* varless */, that) {
        that = this;

        if (
            !isNumber(priority) ||
            priority > that._queue.length
        ) {
            priority = that._queue.length;
        }

        that._queue.splice(priority, 0, task);

        that._noticeChange();
    },
    'removeTask': function(task/* varless */, that, i, len) {
        that = this;

        // var i = 0,
        //     len = that._queue.length;
        i = 0,
        len = that._queue.length;

        for (; i < len; i++ ) {
            if (that._queue[i] === task) {
                deleteArrayKey(that._queue, i);
                that._noticeChange();

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
    _asyncAction: function(task /* varless */, that) {
        that = this;

        if (task['one'] && task['start']) {
            task['one']('complete', that._done);
            return proxy(task, task['start']);
        }

        if (hasDeclaredArgument(task)) {
            return proxy(that, task);
        }

        return function(done) {
            task.call(that);
            done();
        };
    } //,
    /* _done: abstraceFunction */
});
