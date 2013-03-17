/* Test: "../../spec/_src/src/Base/test.js" */
C['Base'] = klassExtend(UNDEFINED, function() {
    this._disposestore = {};
}, {
    _disposecountid: 0,
    'dispose': function(/* varless */ mine) {
        mine = this;

        var internal = ancestors(mine, 'disposeInternal'),
            i = 0,
            temp = mine._disposestore;

        for (; i < internal.length; i++) {
            internal[i].call(mine);
        }

        for (i in temp) {
            off.apply(NULL, temp[i]);
        }

        for (i in mine) {
            temp = mine[i];

            if (temp && isFunction(temp['dispose'])) {
                temp['dispose']();
            }
        }

        mine.__proto__ = NULL;

        for (i in mine) {
            mine[i] = NULL;
            delete mine[i];
        }

        return NULL;
    },
    'contract': function(el, e, handler /* varless */, id) {
        /* var id = ++this._disposecountid; */
        id = ++this._disposecountid;

        on(el, e, handler);
        this._disposestore[id] = [el, e, handler];

        return id;
    },
    'uncontract': function(id) {
        if (id) {
            var temp = this._disposestore,
                arg = temp[id];

            delete temp[id];

            off(arg[0], arg[1], arg[2]);
        }
    }
});
