C['Parallel'] = C['Async'] = classExtend(AbstractTask, {
    _fire_complete: this_fire_complete,
    _exe: function(/* varless */that) {
        that = this;

        if (!that._queue) {
            return;
        }

        if (!that._queue.length) {
            return that._fire_complete();
        }

        that._processcount = that._queue.length;

        while (!that._paused && that._queue && that._queue[0]) {
            that._asyncAction(that._queue.shift())((that._done));
        }
    },
    _fire_progress: this_fire_progress,
    _done: function(/* varless */that) {
        that = this;

        that._fire_progress();
        that._processcount--;

        if (!that._processcount) {
            that._fire_complete();
        }
    }
});
