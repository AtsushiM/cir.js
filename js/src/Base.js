/* Test: "%JASMINE_TEST_PATH%" */
var Base = Global.Base = klass({
    properties: {
        dispose: function() {
            var i;

            if (this._added) {
                i = this._added.lenght;

                for (; i--;) {
                    off.call(null, this._added[i]);
                }
            }

            for (i in this) {
                delete this[i];
            }

            this.__proto__ = null;
        }
    }
});
