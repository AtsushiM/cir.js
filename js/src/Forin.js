// forin
C['Forin'] = classExtendBase({
    'init': function(anyary) {
        this.anyary = anyary;
    },
    'map': function(func) {
        var anyary = this.anyary,
            i,
            ret = isArray(anyary) ? [] : {};

        for (i in anyary) {
            ret[i] = func.call(this, anyary[i]);
        }

        return ret;
    },
    'filter': function(func) {
        var anyary = this.anyary,
            i,
            temp,
            isary = isArray(anyary),
            ret = isary ? [] : {};

        for (i in anyary) {
            temp = anyary[i];

            if (func(temp)) {
                if (isary) {
                    ret.push(temp);
                }
                else {
                    ret[i] = temp;
                }
            }
        }

        return ret;
    }
});
