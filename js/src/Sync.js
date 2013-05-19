C['Sync'] = classExtend(ExeQueue, {
    _exe: function() {
        if (!this._queue || this._paused) {
            return;
        }

        if (this._queue[0]) {
            return this._asyncAction(this._queue.shift())((this._done));
        }

        this._oncomplete();
    },
    _done: function() {
        this._onprogress();
        this._exe();
    }
});
