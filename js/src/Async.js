C['Parallel'] = C['Async'] = classExtend(AbstractTask, {
    _fire_complete: this_fire_complete,
    _exe: function() {
        if (!this._queue) {
            return;
        }

        if (!this._queue.length) {
            return this._fire_complete();
        }

        this._processcount = this._queue.length;

        while (!this._paused && this._queue && this._queue[0]) {
            this._asyncAction(this._queue.shift())((this._done));
        }
    },
    _fire_progress: this_fire_progress,
    _done: function() {
        this._fire_progress();
        this._processcount--;

        if (!this._processcount) {
            this._fire_complete();
        }
    }
});
