/* Test: "../../spec/_src/src/Deferred/test.js" */
C['Deferred'] = klassExtendBase(function() {
    this._queue = [];
}, {
    'isResolve': function() {
        return !this._queue;
    },
    'resolve': function(data /* varless */, mine) {
        mine = this;

        if (mine['isResolve']()) {
            return mine;
        }

        var arr = mine._queue,
            len = arr.length,
            i = 0;

        mine._queue = NULL;
        mine._data = data;
        for (; i < len; ++i) {
            arr[i](data);
        }

        return mine;
    },
    'done': function(func /* varless */, mine) {
        mine = this;
        mine._queue ? mine._queue.push(func) : func(mine._data);

        return mine;
    }
});
