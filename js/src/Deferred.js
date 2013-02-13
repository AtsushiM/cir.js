/* Test: "../../spec/_src/src/Deferred/test.js" */
C['Deferred'] = klassExtendBase(function() {
    this._queue = [];
}, {
    'isResolve': function() {
        return !this._queue;
    },
    'resolve': function(data) {
        if (this['isResolve']()) {
            return this;
        }

        var arr = this._queue,
            len = arr.length,
            i = 0;

        this._queue = NULL;
        this._data = data;
        for (; i < len; ++i) {
            arr[i](data);
        }

        return this;
    },
    'done': function(func) {
        this._queue ? this._queue.push(func) : func(this._data);

        return this;
    }
});
