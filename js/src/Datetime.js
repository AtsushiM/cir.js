/* Test: "../../spec/_src/src/Datetime/test.js" */
Global['Datetime'] = function(str) {
    if (!str || isNumber(str)) {
        return new Date(str);
    }

    str = str.split(/[T:\-\+\/\s]/);

    if (str.length === 3) {
        str = str.concat([0, 0, 0]);
    }

    return new Date(
        str[0] * 1,
        str[1] - 1,
        str[2] * 1,
        str[3] * 1,
        str[4] * 1,
        str[5] * 1
    );
};
