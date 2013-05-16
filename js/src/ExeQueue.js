// ExeQueue
var ExeQueue =classExtendBase({
    'init': function(config) {
        config = config || NULLOBJ;

        var queue = copyArray(config['queue']) || [],
            len = queue.length;

        this._onprogress = config['onprogress'] || nullFunction;
        this._oncomplete = config['oncomplete'] || nullFunction;

        this['resetQueue'](queue);
        this._done = proxy(this, this._done);
    },
    'start': function() {
        this['resetQueue']();
        this._exeQueue();
    },
    'resetQueue': function(queue) {
        if (queue) {
            this._orgqueue = copyArray(queue);
        }
        this._queue = copyArray(this._orgqueue);
    },
    'setQueue': function(queue) {
        this._queue = copyArray(queue);
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
    },
    'removeTask': function(task) {
        var i = this._queue.length;

        for (; i--; ) {
            if (this._queue[i] === task) {
                this._queue.splice(i, 1);
            }
        }
    },
    _exeQueue: abstraceFunction,
    _asyncAction: function(task) {
        var that = this,
            org_action;

        if (task._exeQueue) {
            org_action = proxy(task, task._oncomplete);

            task._oncomplete = function() {
                org_action();
                that._done();
            };
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
    },
    _done: abstraceFunction
});
