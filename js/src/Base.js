/* Test: "../../spec/_src/src/Base/test.js" */
C['Base'] = klassExtend(UNDEFINED, function() {
    this._disposestore = {};
}, {
    _disposecountid: 0,
    'dispose': function() {
        var internal = ancestors(this, 'disposeInternal'),
            i = 0,
            len = internal.length;

        for (; i < len; i++) {
            internal[i].call(this);
        }

        for (i in this._disposestore) {
            off.apply(NULL, this._disposestore[i]);
        }

        for (i in this) {
            if (this[i] && isFunction(this[i]['dispose'])) {
                this[i]['dispose']();
            }
        }

        this.__proto__ = NULL;

        for (i in this) {
            this[i] = NULL;
            delete this[i];
        }

        return NULL;
    },
    'contract': function(el, e, handler) {
        on(el, e, handler);
        this._disposecountid++;
        this._disposestore[this._disposecountid] = [el, e, handler];

        return this._disposecountid;
    },
    'uncontract': function(id) {
        if (id) {
            var arg = this._disposestore[id];

            delete this._disposestore[id];

            off(arg[0], arg[1], arg[2]);
        }
    }
});
