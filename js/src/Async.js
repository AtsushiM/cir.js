C['Async'] = classExtend(ExeQueue, {
    _exe: function() {
        if (!this._queue) {
            return;
        }

        this._processcount = this._queue.length;

        while (!this._paused && this._queue && this._queue[0]) {
            this._asyncAction(this._queue.shift())((this._done));
        }
    },
    _done: function() {
        this._onprogress();
        this._processcount--;

        if (this._processcount == 0) {
            this._oncomplete();
        }
    }
});
