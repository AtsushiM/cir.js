/* Test: "../../spec/_src/src/Base/test.js" */
C['Base'] = classExtend(UNDEFINED, {
    _disposecountid: 0,
    'dispose': function(/* varless */ mine) {
        mine = this;

        var i = 0,
            temp = mine._disposestore;

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
    'contract': function(el, e, handler /* varless */, mine, id) {
        mine = this;

        if (!mine._disposestore) {
            mine._disposestore = {};
        }
        /* var id = ++this._disposecountid; */
        id = ++mine._disposecountid;

        on(el, e, handler);
        mine._disposestore[id] = [el, e, handler];

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
