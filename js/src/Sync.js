C['Serial'] = C['Sync'] = classExtend(AbstractTask, {
    _exe: function(/* varless */that) {
        that = this;

        if (that._queue && !that._paused) {
            if (that._queue[0]) {
                return that._asyncAction(that._queue.shift())((that._done));
            }

            /* this['fire']('complete'); */
            fire_complete(that);
        }
    },
    _done: function() {
        fire_progress(this);
        this._exe();
    }
});
