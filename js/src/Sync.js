C['Serial'] = C['Sync'] = classExtend(AbstractTask, {
    _fire_complete: this_fire_complete,
    _exe: function(/* varless */that) {
        that = this;

        if (that._queue && !that._paused) {
            if (that._queue[0]) {
                return that._asyncAction(that._queue.shift())((that._done));
            }

            /* this['fire']('complete'); */
            that._fire_complete();
        }
    },
    _fire_progress: this_fire_progress,
    _done: function() {
        this._fire_progress();
        this._exe();
    }
});
