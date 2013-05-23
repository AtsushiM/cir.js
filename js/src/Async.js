C['Async'] = classExtend(ExeQueue, {
    _exe: function() {
        if (!this._queue) {
            return;
        }

        if (this._queue.length === 0) {
            return this['fire']('complete');
        }

        this._processcount = this._queue.length;

        while (!this._paused && this._queue && this._queue[0]) {
            this._asyncAction(this._queue.shift())((this._done));
        }
    },
    _done: function() {
        this['fire']('progress');
        /* this._onprogress(); */
        this._processcount--;

        if (this._processcount == 0) {
            this['fire']('complete');
        }
    }
});
