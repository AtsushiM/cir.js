C['Task'] = classExtendBase({
    'init': function(config) {
        config = config || NULLOBJ;

        var queue = config['queue'] || [],
            len = queue.length;

        this._onprogress = config['onprogress'] || nullFunction;
        this._oncomplete = config['oncomplete'] || nullFunction;
        this._queueno = 0;

        for (len = queue.length; len--; ) {
            queue[len] = this._asyncAction(queue[len]);
        }

        this._queue = queue;
        this._done = C.util.proxy(this, this._done);
    },
    'start': function() {
        this._exeQueue(0);
    },
    _exeQueue: function(no) {
        if (this._queue[no]) {
            return this._queue[no](this._done);
        }

        this._oncomplete();
    },
    _asyncAction: function(task) {
        var that = this,
            org_action;

        if (task._exeQueue) {
            org_action = C.util.proxy(task, task._oncomplete);

            task._oncomplete = function() {
                org_action();
                that._done();
            };
            task = C.util.proxy(task, task['start']);
        }
        else if (!hasDeclaredArgument(task)) {
            org_action = task;

            task = function(done) {
                org_action();
                done();
            };
        }

        return task;
    },
    _done: function() {
        this._onprogress();

        this._queueno++;

        this._exeQueue(this._queueno);
    }
});
