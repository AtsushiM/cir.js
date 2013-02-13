/* Test: "%JASMINE_TEST_PATH%" */
C['Collection'] = klassExtend(C['Model'], UNDEFINED, {
    'each': function(func) {
        var data = this.get(),
            i;

        for (i in data) {
            func.call(this, data[i], i, data);
        }
    },
    'filter': function(filterfunc, func) {
        var data = this.get(),
            i,
            ret = [];

        for (i in data) {
            if (filterfunc.call(this, data[i])) {
                func.call(this, data[i], i, data);
            }
        }
    }
});
