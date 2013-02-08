/* Test: "../../spec/_src/src/Base/test.js" */
Global['Base'] = klassExtend(UNDEFINED, function(config) {
    config = config || {};
    this._dispose = {};
}, {
    _disid: 0,
    'dispose': function() {
        var internal = ancestors(this, 'disposeInternal'),
            i = 0,
            len = internal.length;

        for (; i < len; i++) {
            internal[i].call(this);
        }

        for (i in this._dispose) {
            off.apply(NULL, this._dispose[i]);
        }

        for (i in this) {
            if (this[i] && isFunction(this[i]['dispose'])) {
                this[i]['dispose']();
            }
        }

        this.__proto__ = NULL;

        for (i in this) {
            delete this[i];
        }

        return NULL;
    },
    'contract': function(element, e, handler) {
        on(element, e, handler);
        this._disid++;
        this._dispose[this._disid] = [element, e, handler];

        return this._disid;
    },
    'uncontract': function(id) {
        var arg = this._dispose[id];

        delete this._dispose[id];

        off(arg[0], arg[1], arg[2]);
    }
});
