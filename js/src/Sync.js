C['Serial'] = C['Sync'] = classExtend(AbstractTask, {
    _exe: function() {
        if (!this._queue || this._paused) {
            return;
        }

        if (this._queue[0]) {
            return this._asyncAction(this._queue.shift())((this._done));
        }

        this['fire']('complete');
    },
    _done: function() {
        this['fire']('progress');
        this._exe();
    }
});
