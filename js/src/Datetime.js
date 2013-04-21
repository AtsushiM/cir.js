C['Datetime'] = function(str) {
    if (str && !isNumber(str)) {
        str = str.split(/[T:\-\+\/\s]/);

        if (str.length == 3) {
            str.push(0, 0, 0);
        }

        return new Date(
            +str[0],
            str[1] - 1,
            +str[2],
            +str[3],
            +str[4],
            +str[5]
        );
    }

    return new Date(str);
};
