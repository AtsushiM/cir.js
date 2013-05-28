C['Serial'] = C['Sync'] = classExtend(AbstractTask, {
    _fire_complete: this_fire_complete,
    _exe: function() {
        if (!this._queue || this._paused) {
            return;
        }

        if (this._queue[0]) {
            return this._asyncAction(this._queue.shift())((this._done));
        }

        /* this['fire']('complete'); */
        this._fire_complete();
    },
    _fire_progress: this_fire_progress,
    _done: function() {
        this._fire_progress();
        this._exe();
    }
});
