/* Test: "../../spec/_src/src/Deferred/test.js" */
Global['Deferred'] = klass({
    'extend': Base,
    'init': function() {
        this.queue = [];
        /* this.data = NULL; */
    },
    'properties': {
        'isResolve': function() {
            return !this.queue;
        },
        'resolve': function(data) {
            if (this['isResolve']()) {
                return this;
            }

            var arr = this.queue,
                len = arr.length,
                i = 0;

            this.queue = NULL;
            this.data = data;
            for (; i < len; ++i) {
                arr[i](data);
            }

            return this;
        },
        'done': function(func) {
            this.queue ? this.queue.push(func) : func(this.data);

            return this;
        }
    }
});
