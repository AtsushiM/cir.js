/* Test: "../../spec/_src/src/Base/test.js" */
Global['Base'] = klassExtend(UNDEFINED, function(config) {
    config = config || {};
    this._dispose = {};
}, {
    _disid: 0,
    'dispose': function() {
        var proto = this,
            internal = [],
            i = TRUE,
            len;

        while (i) {
            if (proto.__proto__) {
                proto = proto.__proto__;

                if (proto['disposeInternal'] && internal[internal.length - 1] !== proto['disposeInternal']) {
                    internal.push(proto['disposeInternal']);
                }
            }
            else {
                i = FALSE;
            }
        }

        for (i = 0, len = internal.length; i < len; i++) {
            internal[i].call(this);
        }

        for (i in this._dispose) {
            off.apply(NULL, this._dispose[i]);
        }

        for (i in this) {
            if (this[i] && isFunction(this[i]['dispose'])) {
                this[i]['dispose']();
            }
            delete this[i];
        }

        this.__proto__ = NULL;
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
