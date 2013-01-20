/* Test: "%JASMINE_TEST_PATH%" */
var Base = Global.Base = klass({
    properties: {
        dispose: function() {
            var i;

            for (i in this) {
                delete this[i];
            }

            this.__proto__ = null;
        }
    }
});
