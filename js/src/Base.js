/* Test: "../../spec/_src/src/Base/test.js" */
Base = Global['Base'] = klass({
    'init': function() {
        this._dispose = {};
    },
    'properties': {
        _disid: 0,
        'dispose': function() {
            var i;

            if (this._dispose) {
                for (i in this._dispose) {
                    off.apply(NULL, this._dispose[i]);
                }
            }

            for (i in this) {
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
        },
        _orgdis: function() {
            this.__proto__.__proto__['dispose'].call(this);
        }
    }
});
