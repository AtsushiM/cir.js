C['Serial'] = C['Sync'] = classExtend(AbstractTask, {
    _exe: function(/* varless */that) {
        that = this;

        if (that._queue && !that._paused) {
            if (that._queue[0]) {
                return that._asyncAction(that._queue.shift())((that._done));
            }

            /* this['emit']('complete'); */
            emit_complete(that);
            emit_nexttask(that);
        }
    },
    _done: function() {
        emit_progress(this);
        this._exe();
    }
});
