/* Test: "../../spec/_src/src/Base/test.js" */
var Base = Global.Base = klass({
    properties: {
        dispose: function() {
            var i;

            if (this._dispose) {
                i = this._dispose.lenght;

                for (; i--;) {
                    off.call(null, this._dispose[i]);
                }
            }

            for (i in this) {
                delete this[i];
            }

            this.__proto__ = null;
        }
    }
});
