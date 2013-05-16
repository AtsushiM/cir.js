C['Sync'] = classExtend(ExeQueue, {
    _exeQueue: function() {
        if (this._queue[0]) {
            return this._asyncAction(this._queue.shift())((this._done));
        }

        this._oncomplete();
    },
    _done: function() {
        this._onprogress();
        this._exeQueue();
    }
});
