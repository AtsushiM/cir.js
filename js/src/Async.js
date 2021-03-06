C['Parallel'] = C['Async'] = classExtend(AbstractTask, {
    _exe: function(/* varless */that) {
        that = this;

        if (that._queue) {
            if (!that._queue.length) {
                emit_complete(that);
                return emit_nexttask(that);
            }

            that._processcount = that._queue.length;

            while (!that._paused && that._queue && that._queue[0]) {
                that._asyncAction(that._queue.shift())((that._done));
            }
        }
    },
    _done: function(/* varless */that) {
        that = this;

        emit_progress(that);
        that._processcount--;

        if (!that._processcount) {
            emit_complete(that);
            emit_nexttask(that);
        }
    }
});
